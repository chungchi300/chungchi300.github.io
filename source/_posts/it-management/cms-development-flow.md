---
title: >-
  CMS development flow
date: 2018-05-20 10:28:21
category: 管理和协作
---

{% plantuml %}

:首付;

repeat
:开发系统;
:输入测试数据;
:向客户展示系统操作方式;
repeat while(客户不同意系统操作？)

:提供真实的数据;
repeat
:提供和开发新的设计(例如索引页):输入实际数据;
repeat while(客户不同意设计)
:交付;
:30 日后，满足并支付剩余款项;
{% endplantuml %}
