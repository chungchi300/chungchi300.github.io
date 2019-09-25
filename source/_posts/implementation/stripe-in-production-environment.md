---
title: >-
  Collect credit card payment in Stripe v3 in nestjs(nodejs)
date: 2019-09-25 10:28:21
category: Implementation
---

# Before Reading

## What can you learn?

1. Program for collect credit card payment using stripe
2. Procedure to get the production license key and things that you need to watch out.


# Main

## Program
### Npm install related sdk
```
npm install stripe --save
```

### Api key
Get your api key from stripe developer=>you will have **test** and **production key**

### Usage
#### Frontend
You need to use **stripe widget** to allow user to create credit card token with Stripe. The implementation will depends on your front end framework choice.If you use  `react`, you can use  `react-stripe-elements`

#### Backend
After Receive the token, you can create customer,payment source and charge like this
```javascript
import Stripe from 'stripe';
const StripeDefaultConstructor = require('stripe');
let stripe = new StripeDefaultConstructor(stripeKey);
const customer = await stripe.customers.create({email:'chungchi300@hotmail.com'});

let source = await stripe.customers.createSource(customer.id, {
  source: token,
});
await stripe.charges.create({
    //100 hkd 
    amount: 10000,
    description: 'first payment',
    currency: 'hkd',
    customer: customer.id,
    card: source.id,
});

```
