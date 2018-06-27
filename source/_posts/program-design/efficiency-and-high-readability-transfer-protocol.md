---
title: efficiency-and-high-readability-transfer-protocol
date: 2018-06-27 10:28:44
category: Program design
---

{% asset_img analogy.jpg %}

# Basic knowledge and problem

> Selecting format is selecting proper container for your lunch,it just contains all your food properly without taking unnecessary size and it looks good
>
> -- <cite>Jeff Chung</cite>

## Basic

All data eventually sent in binary format.  
Binary don't necessary means program memory,it can be **transfer protocol**

## Problem

Consider you need to transfer

```
[255,0,128]
```

# Implementation

## Json

255,0,128 is uint8.It take **2 bytes** to describe **one number in array**

[Reference](http://ubjson.org/type-reference/value-types/#numeric)

**Serialization** : Array(e.g 255) => Json([i][4][int8][i][16]) =[**browser json conversion**] > binary
**De-serialization** : binary =[**server json conversion**]> json => array

Http Implementation:
Normally specific content-type is json will make the browser automatically serialize in json format

## Byte Array Transfer

we use 1 byte ,8 digit to describe 255,0,128.It take **1 bytes** to describe **one number in array**

**Serialization** : Array(e.g 255) => Blob(1111 1111) = [**browser direct send**] > binary
**De-serialization** : binary = [**server direct get**] > Blob(1111 1111) => array(e.g 255)

Http Implementation:
Data is already binary(as serialized byte array),don't need conversion by browser

```
Content-Type:multipart/form-data; boundary=----WebKitFormBoundaryJQc4u8OmWvQ1hqcB

------WebKitFormBoundaryJQc4u8OmWvQ1hqcB
Content-Disposition: form-data; name="wadouri:http://localhost:3000/demo/IM**00005.dcm"; filename="blob"
Content-Type: application/octet-stream


------WebKitFormBoundaryJQc4u8OmWvQ1hqcB-
```

## Form data

we use 1 byte ,8 digit to describe 255,0,128.It take **1 bytes** to describe **one character array**

**Serialization** : Array(e.g 255) => utf8 (1 x 3 bit = 3 bit) => binary
**De-serialization** : binary => utf8(1x 3 = 3 bit) => array(e.g 255)

# Conclusion

ByteArray always has **higher performance** but json has higher readability.
