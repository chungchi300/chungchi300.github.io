---
layout: post
title: Backup&Restore centos or other linux
category: management and cooperation
keywords: null
date: 2018-04-28 16:09:02
---

# Bootable Usb that contains clonezilla

1.  Download Clonezilla iso https://clonezilla.org/downloads.php
2.  Use [ISO2USB](http://iso2usb.sourceforge.net/) - linux, or [win32diskimager](http://sourceforge.net/projects/win32diskimager/) - windows to create the bootable usb.

# Storage Medium

1024GB

# Backup

Clonezilla Back up the Disk Image, Select Disk Back up(Mount)
clonezilla live boot usb + storage medium(1000GB)

# Restore

clonezilla live boot usb + storage medium(1000GB)(with image)
select local disk as target device,start cloning

# Reference

http://storysky.blog.51cto.com/628458/291587/
