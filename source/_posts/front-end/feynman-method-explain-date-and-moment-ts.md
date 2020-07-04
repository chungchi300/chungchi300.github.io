---
title: Moment
date: 2018-08-09 10:20:15
? tags
category: Web Development
---

UTC is a timezone(+0:00)

date & unix timestamp are represent specific time after 1970 1 1 according to UTC time. 
When you create a date object by `new Date`, you create a date at unix timestamp which is `display in a presentation` at `your machine` in its `current time` but it's internally timezone is still +0:00.


# Bidflows time handling
## Redis
Redis timezone is `Asia/Hong_Kong`

## Server
Server timezone is `Asia/Hong_Kong`

## Database(Mysql)
### Create Date and update time
All `create date` and `update date` record in our system are `has an implicit` timezone `Asia/Hong_Kong` . They are stored at datetime format `'YYYY-MM-DD hh:mm:ss[.fraction]'`. The `fraction` is a smaller unit then ss

### Usage in auction end date time

what our system do is allow you pick a `end date time with specific timezone which is fundamentally different timestamp when timezone is different`.For example,`2030-09-30 02:18:53	with Asia/Hong_Kong` and `2030-09-30 02:18:53 with US/Mountain`.

## How we calculate staggered end time & how it set to redis
## Rule
Only logical when manipulation of times with `same timezone`

## Implementation
We calculate `lot calculated end date time` from `staggeredEndTimeSecondForTimeAuction` +  `auction end date time` when it is `time auction` when lot is `created`.

 Then we delay time in seconds = `lot calculated end date time in Asia/Hong_Kong`(from `lot calculated end date time` & `auction timezone`) - `server current time in Asia/Hong_Kong` 

 When user bid at `server Asia/Hong_Kong` within the `staggeredEndTimeSecondForTimeAuction` from `lot calculated end date time in Asia/Hong_Kong`. We `re-adjust` the `lot calculated end date time` = `server in auction timezone` + `staggeredEndTimeSecondForTimeAuction`.

 # Moment tz
 ## Time 1 from timezone A to system timezone
export function getTimeAsSystemTime(date1, timeZoneA) {
  return moment.tz(
    //get back the original to proper format
    moment(date1).format('YYYY-MM-DD HH:mm:ss'),
    timeZoneA,
  );
}

## System time to timezone A