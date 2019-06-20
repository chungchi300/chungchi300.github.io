
---
title: Integration with stripe by nodejs
date: 2019-06-20 10:28:21
category: Program design
---

# Background knowledge

## Why stripe 
1. Variety payment method(all famous credit card,ali pay,wechat pay)
2. Developer friendly(so far easier doc)
3. Cheaper charge(3.4% + HK$2.35 for credit card,2.2% + HK$2 for ali pay)
4. Accept different currency(e.g usd,hkd)

[Potential negotiation plan](https://ordermetrics.com/profit-guide/reduce-payment-processing-fees/how-to-negotiate-payment-processing-fees-with-stripe/)
At around $1m per year - 2.5% + $0.30
At around $2m per year - 1.9% + $0.30
At around $3m per year - 1.8% + $0.30


## General Flow for adding and charging a credit card 


{% asset_img addCreditCard.jpeg %}

{% asset_img chargeCreditCard.jpeg %}

## Entity

{% asset_img entity.jpeg %}

We create customer ,source and charge in a general flow for adding and charging a credit card

## Why not direct store the credit card info?why use the General Flow for adding and charging a credit card

You **should not** store credit card detail(**card numbers and cvc code**) on your own database as integrator, you should only use the token to **retrieve and store** the **card id and user id of stripe** for charging the credit card in future. It is avoid credit card data leakage and meeting the industry standard[Payment Card Industry Data Security Standards](https://www.pcisecuritystandards.org/pci_security/)

## Entity Relationship

# Backend development knowledge

Use [Stripe Node](https://github.com/stripe/stripe-node) which support **promise** and **types(of typescript)**

# Frontend

1. For Web,Use [react-stripe-elements](https://github.com/stripe/react-stripe-elements)
2. For App,Use [https://github.com/tipsi/tipsi-stripe](https://github.com/tipsi/tipsi-stripe) 

They must be used with **https** to pass the **pci standard**