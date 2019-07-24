---
title: Real Time Communication Of Live Auction
date: 2019-07-24 10:28:44
category: Program design
---

{% plantuml %}

participant "Auctioneer Web Portal" as auctioneer
participant "Backend that support websocket and http request" as backend
participant "Customer Web Portal" as customer
auctioneer -> backend: connect with auction id,authorization token
auctioneer <-- backend: WS connection
customer -> backend: connect with auction id,authorization token
customer <-- backend: WS connection

auctioneer -> backend: bid(with price 4000 and registration 1(paddle 8)) via https

backend  -> auctioneer: bid&newLotStatus($4000)  via websocket
backend  -> customer: bid&newLotStatus($4000)  via websocket

{% endplantuml %}