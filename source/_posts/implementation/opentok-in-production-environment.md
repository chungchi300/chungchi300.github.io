---
title: >-
  OpenTok(Video Streaming) in nestjs(nodejs)
date: 2019-09-25 10:28:21
category: Implementation
---

# Before Reading

## What can you learn?

1. What can you do with opentok
2. Program for using opentok



# Main
## What can you do with opentok
Video Streaming with Maximum 3000 users.

## Program

### Api key
Get your api key from production environment

### Usage
#### Frontend
If you use  `react`, you can use  `opentok-react`
```javascript
    <OTSession
        width={"100%"}
        apiKey={openTokPublicApiKey}
        sessionId={openTokSessionId}
        token={openToKTokenId}
        resolution="640x480"
      >
        <OTStreams>
          <OTSubscriber
            properties={{
              preferredFrameRate: 15,
              showControls: false,
              fitMode: "contain",
              preferredResolution: {
                width: 233,
                height: 198
              }
            }}
          />
        </OTStreams>
  </OTSession>
);

```


#### Backend
creating session and token for front end usage
```javascript
var OpenTok = require('opentok');

let opentok = new OpenTok(apiKey, privateSecretId);

function createSession(){
  return new Promise((resolve, reject) => {
      opentok.createSession(
        { mediaMode: 'routed', archiveMode: 'always', ...options },
        function(err, session) {
          if (err) {
            reject(err);
          } else {
            resolve(session);
          }

          // save the sessionId
        },
      );
  });
}
function createTokenForSession(sessionId, options){

    options = {
      expiredTime: new Date().getTime() / 1000 + 7 * 24 * 60 * 60,
      ...options,
    };
    return opentok.generateToken(sessionId, options);
  
}

```
