---
title: >-
  Use Nginx reverse proxy at Centos 7 to serve multi nodejs application in same server with https to save cost
date: 2019-11-19 10:28:21
category: Implementation
---

# Material needs
1. Ecs from Alibaba cloud(or ecs from AWS)
2. SSL at good discount at Godaddy
3. I currently has two nodejs application(https://jeff-chung.com and https://o2o-auction.com) which are both nodejs application.

## Nodejs applications

### o2o-auction
```javascript
const fs = require("fs");
const https = require("https");
const http = require("http");
const express = require("express");
const app = express();
app.use(function(req, res, next) {
  //   console.log("host", req.headers.host);
  if (req.headers.host.includes("localhost")) {
    next();
  } else {
    if (req.secure) {
      // request was via https, so do no special handling
      console.log("secure");
      next();
    } else {
      console.log("not secure");
      next();
      // request was via http, so redirect to https
      // res.redirect("https://" + req.headers.host + req.url);
    }
  }
});
app.use(express.static("public"));
var httpServer = http.createServer(app);
console.log("running on 3080 ");
httpServer.listen(3080);
console.log("3080 watched");
```

### jeff-chung.com
```javascript
const fs = require("fs");
const http = require("http");
const express = require("express");
const app = express();
app.use(function(req, res, next) {
  //   console.log("host", req.headers.host);
  if (req.headers.host.includes("localhost")) {
    next();
  } else {
    if (req.secure) {
      // request was via https, so do no special handling
      console.log("secure");
      next();
    } else {
      console.log("not secure");
      next();
      // request was via http, so redirect to https
      // res.redirect("https://" + req.headers.host + req.url);
    }
  }
});
app.use(express.static("public"));
var httpServer = http.createServer(app);
httpServer.listen(3081);
console.log("3081 watched");
```

Both of them are ran by `pm2` which are visible at http://jeff-chung.com:3081/ and http://o2o-auction.com:3080/


# Reverse Proxy of nginx 
## Preparation of ssl cert
I download the `private key(careful this one only download for once)` and combined the `public.crt&bundle.crt` to `chain.crt` on godaddy and upload them to `/etc/nginx/ssl/public.crt` and `/etc/nginx/ssl/private.key` on the remote `server`

P.S
You should double  `private key` and `chain.crt` by following command to ensure they have same hash before upload.

`openssl x509 -noout -modulus -in ssl/chain.crt | openssl md5`

`openssl rsa -noout -modulus -in ssl/private.key | openssl md5`


## Configuration of nginx
I use centos 7 so I edit the config file at `/etc/nginx/conf.d/default.conf`

```

server {
	listen 80 default_server;
	listen [::]:80 default_server;
	server_name _;
	return 301 https://$host$request_uri;
}
server {
    listen 443 ssl;
    server_name jeff-chung.com;
    ssl_certificate /etc/nginx/ssl/public.crt;
    ssl_certificate_key /etc/nginx/ssl/private.key;
    location / {
        proxy_pass http://localhost:3081;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
       # root   /usr/share/nginx/html;
       # index  index.html index.htm;
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
server {
    listen 443 ssl;
    server_name o2o-auction.com;
    ssl_certificate /etc/nginx/ssl/public.crt;
    ssl_certificate_key /etc/nginx/ssl/private.key;
    location / {
        proxy_pass http://localhost:3081;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
       # root   /usr/share/nginx/html;
       # index  index.html index.htm;
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```

Restart after every configuration change 
`systemctl restart nginx`

P.S
You can use `nginx -t ` to check whether the configuration working.


# Reference
https://knowledge.digicert.com/solution/SO17751.html

https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-centos-7#step-4-%E2%80%94-setting-up-an-nginx-reverse-proxy-server

https://stackoverflow.com/questions/13240840/nginx-reverse-proxy-multiple-backends