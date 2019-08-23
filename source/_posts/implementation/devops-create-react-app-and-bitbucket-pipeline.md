---
title: >-
  CICD for an Create React App using static server(e.g Apache )  
date: 2019-08-23 10:28:21
category: Implementation
---
```bitbucket-pipelines.yml```
```yml
options:
  max-time: 5
pipelines:
  default:
    - step:
        name: Build and test an CRA app
        image: node:10.0.0
        caches:
          - node
        script:
          - npm install
          - npm run test
          - npm run build
        artifacts: # defining the artifacts to be passed to each future step.
          - build/**
    - step:
        name: Deploy to production
        deployment: production
        # trigger: manual  # Uncomment to make this a manual deployment.
        script:
          - pipe: atlassian/slack-notify:0.3.2
            variables:
              WEBHOOK_URL: "https://hooks.slack.com/services/THQDW1RRV/BLWFER4/0gVW1b2uCyIBYeONX0bX0asdasdasd"
              MESSAGE: "Deploying to gui portal to staging server"
          - pipe: atlassian/scp-deploy:0.3.4
            variables:
              USER: "webadmin"
              SERVER: "123.123.123.123"
              REMOTE_PATH: "/home/webadmin/mfwauction-cn/public"
              LOCAL_PATH: "build/*"
          - pipe: atlassian/slack-notify:0.3.2
            variables:
              WEBHOOK_URL: "https://hooks.slack.com/services/THQDW1RRV/BLWFER4/0gVYtBWuCyIBYeONX0bX0asdasdasd"
              MESSAGE: "Complete Deployment to gui portal to staging server"
```
# Requirement
1. Enable SSH connection (public on server(e.g if centos, it is at /home/webadmin/mfwauction-cn/authorized_keys ), private cert on bitbucket)
2. Slack web hook configure properly

# Adv
1. Notification of slack

# Result
![ ](https://www.awesomescreenshot.com/image/4193709/5ca22bfe1fa94116a7d9294d85568907)

# Addon
If you don't want to  check the linting rule on bitbucket, in your `package.json`

```json
    "build": "CI=false react-scripts     build",

```