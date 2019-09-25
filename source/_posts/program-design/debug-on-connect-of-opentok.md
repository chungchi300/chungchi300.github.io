---
title: Debug on connect of opentok - a classic example of understanding the event loop can help you become better programmer
date: 2019-08-12 10:28:21
category: Program design
---
```javascript 
     const socket = socketIOClient("", {
      transportOptions: {
        polling: {
          extraHeaders: {
       
            token: Cookies.get("X_TOKEN"),
         
          }
        }
      }
    });
  
   

      await window.Network.rqj("start");

     socket.on("connect", () => {
      this.setState({ socket: socket });
    });
    socket.on("disconnect", () => {
      this.setState({ socket: socket });
    });
```
Somebody said the connect not fired. I explain with following grapth and code

```javascript
     const socket = socketIOClient("", {
      transportOptions: {
        polling: {
          extraHeaders: {
       
            token: Cookies.get("X_TOKEN"),
         
          }
        }
      }
    });
  
   
    socket.on("connect", () => {
      this.setState({ socket: socket });
    });
    socket.on("disconnect", () => {
      this.setState({ socket: socket });
    });
    await window.Network.rqj("start");



```

{% asset_img WechatIMG1.jpeg %}
{% asset_img WechatIMG2.jpeg %}
