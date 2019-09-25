---
title: >-
  Everything your need to send your email via Amazon SES by Nestjs(nodejs)
date: 2019-09-25 10:28:21
category: Implementation
---

# Before Reading

## What can you learn?

1. Program for sending SES email
2. Procedure to get the license to send email as production environment from sandbox


# Main

## Program
### Npm install related sdk
```
npm install aws-sdk --save
```

### Api key
Get your api `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` from Amazon. And set your personal email for testing because **by default**, every new email domain is **in sandbox mode**

### Usage
```js
const AWS = require('aws-sdk');
   AWS.config.update({
      region: this.config.get('SES_REGION'),
      accessKeyId: this.config.get('AWS_ACCESS_KEY_ID'),
      secretAccessKey: this.config.get('AWS_SECRET_ACCESS_KEY'),
    });
    var ses = new AWS.SES({ apiVersion: '2010-12-01' });

 var params = {
      Destination: {
        /* required */
        CcAddresses: [
          /* more items */
        
        ],
        ToAddresses: [
          // 'EMAIL_ADDRESS',
         'chungchi300@hotmail.com'
        ],
      },
      Message: {
        /* required */
        Body: {
          /* required */
          Html: {
            Charset: 'UTF-8',
            Data: `<html>Hello world!</html>`,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: `Your new email`,
        },
      },
      Source: 'chungchi2008@hotmail.com' /* required */,
      ReplyToAddresses: [
        'chungchi2008@hotmail.com',
        /* more items */
      ],
    };


      var sendPromise = ses.sendEmail(params).promise();


      let res = await sendPromise;
    
```

## Move to production environment from sandbox environment

### Things you can do by yourself
1. Domain ownership verification
2. DKIM 

Both of them can be done by properly config DNS resolving record with proper CNAME or TXT value requested by AWS.

### Things require AWS approval
1. You need to go to support panel to request move the ses domain from the sandbox environment, mostly you  need to describe is your use case. It will at most costs AWS to reply  you at 1 day.