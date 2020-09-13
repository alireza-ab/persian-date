# Persian Date

A lightweight but professional javascript library for working with Persian dates.

[![npm version](https://img.shields.io/npm/v/@alireza-ab/persian-date)](https://img.shields.io/npm/v/@alireza-ab/persian-date)

## Install

```shell
npm install @alireza-ab/persian-date
```

## Get Started

### import

```javascript
import PersianDate from "@alireza-ab/persian-date";
```

<!--
### require

```javascript
const PersianDate = require("@alireza-ab/persian-date");
```
--- -->

## Usage

```javascript
let persianDate = new PersianDate(); // without parameter returns now
let persianDate = new PersianDate(new Date(2021, 0, 1, 0, 0, 0, 0));
let persianDate = new PersianDate(2021, 0, 1, 0, 0, 0, 0);
let persianDate = new PersianDate([2021, 0, 1, 0, 0, 0, 0]); //[year,month,date,hour,minute,second,millisecond]
let persianDate = new PersianDate(1609446600000); //with timestamp
let persianDate = new PersianDate("2021-1-1");
```

### setDate()

set date from gregorian date

> parameters are the same as the previous example

```javascript
persianDate.setDate(new Date());
```

### parse()

parse a persian date

```javascript
persianDate.parse(1400, 1, 1, 0, 0, 0, 0);
persianDate.parse([1400, 1, 1, 0, 0, 0, 0]);
persianDate.parse("1400-1-1 00:00:00.00");
persianDate.parse({
	year: 1400, // or [y, years]
	month: 1, // or [M, months]
	date: 1, // or [d, day, days]
	hour: 1, // or [h, hours]
	minute: 1, // or [m, minutes]
	second: 1, // or [s, second]
	millisecond: 1, // or [ms,milliseconds]
});
```

### now()

get current date and time

```javascript
persianDate.now();
```

---

## Set - Get

you can call these methods with number parameter as setter, and call without the parameter or with a format string as getter

```javascript
persianDate.year(1400);
persianDate.month("1");
persianDate.date("1");
persianDate.hour(5);
persianDate.minute("1");
persianDate.second(54);
persianDate.millisecond(456);

persianDate.year(); // 1400
persianDate.month(); // 1
persianDate.date(); // 1
persianDate.hour(); // 5
persianDate.minute(); // 1
persianDate.second(); // 54
persianDate.millisecond(); // 456

// and
persianDate.timestamp(1609446600000); // 1400/1/1 00:00:00.0
persianDate.timestamp(); // 1609446600000
```

> you can use it as chaining method

```javascript
persianDate.year(1400).month("1").date("1");
```

### getDaysInMonth()

get number of days in Month

```javascript
persianDate.parse("1400/1").getDaysInMonth(); // 31
persianDate.getDaysInMonth("1400", 10); // 30
persianDate.getDaysInMonth("1399", 12); // 30
persianDate.getDaysInMonth("1400", 12); // 29
```

---

## Manipulate

you can change the date or time with add or subtract

```javascript
persianDate.parse("1400/1/1");
/*
by default adds 1 value and checks it's valid
*/
persianDate.addYear(); // 1401/1/1 00:00:00.0
persianDate.addMonth(2); // 1401/3/1 00:00:00.0
persianDate.addDay(56); // 1401/4/26 00:00:00.0
persianDate.addHour("5"); // 1401/4/26 05:00:00.0
persianDate.addMinute(); // 1401/4/26 05:01:00.0
persianDate.addSecond(54); // 1401/4/26 05:01:54.0
persianDate.addMillisecond("456"); // 1401/4/26 05:01:54.456
/*
by default subtracts 1 value and checks it's valid
*/
persianDate.subtractYear(); // 1400/4/26 05:01:54.456
persianDate.subtractMonth(2); // 1400/2/26 05:01:54.456
persianDate.subtractDay(56); // 1400/1/1 05:01:54.456
persianDate.subtractHour("5"); // 1400/1/1 00:01:54.456
persianDate.subtractMinute(); // 1400/1/1 00:00:54.456
persianDate.subtractSecond(54); // 1400/1/1 00:00:00.456
persianDate.subtractMillisecond("456"); // 1400/1/1 00:00:00.0
```

> you can use it as chaining method

```javascript
persianDate.addYear().addMonth(2).addDay(56);
persianDate.subtractYear().subtractMonth(2).subtractDay(56);
```

---

## Display

### toString()

```javascript
persianDate.parse("1400/1/1");
persianDate.toString("jYYYY/jMM/jDD"); // 1400/01/01
persianDate.toString("YYYY-MM-DD"); // 2021/03/21
```

### Formats

inspired by [moment](https://momentjs.com/)

#### Persian formats

|     Type     |      Token      |                          Output                          |
| :----------: | :-------------: | :------------------------------------------------------: |
|     Year     |  [ jYYYY, jy ]  |                 1350 1351 ... 1399 1400                  |
|              |       jYY       |                     50 51 ... 99 00                      |
|    Month     | [ jMMMM, jMMM ] |             فروردین اردیبهشت ... بهمن اسفند              |
|              |       jMM       |                     01 02 ... 11 12                      |
|              |       jMO       |            اولین دومین ... یازدهمین دوازدهمین            |
|              |       jMo       |                اول دوم ... یازدهم دوازدهم                |
|              |       jM        |                      1 2 ... 11 12                       |
| Day of Month |       jDD       |                     01 02 ... 30 31                      |
|              |       jDO       |            اولین دومین ... سی‌امین سی و یکمین            |
|              |       jDo       |                اول دوم ... سی‌ام سی و یکم                |
|              |       jD        |                      1 2 ... 30 31                       |
| Day of Week  | [ jdddd, jddd ] |              شنبه یکشنبه ... پنج شنبه جمعه               |
|              |       jdd       |                       ش ی ... پ ج                        |
|              |       jdO       |               اولین دومین ... ششمین هفتمین               |
|              |       jdo       |                   اول دوم ... ششم هفتم                   |
|              |       jde       |                       1 2 ... 6 7                        |
|              |       jd        |                       0 1 ... 5 6                        |
| Day of Year  |      jDDDD      |                   001 002 ... 364 365                    |
|              |      jDDDO      | اولین دومین ... سیصد‌و‌شصت‌و‌چهارمین سیصد‌و‌شصت‌و‌پنجمین |
|              |      jDDDo      |     اول دوم ... سیصد‌و‌شصت‌و‌چهار سیصد‌و‌شصت‌و‌پنجم      |
|              |      jDDD       |                     1 2 ... 364 365                      |
|   Quarter    |       jQO       |                اولین دومین سومین چهارمین                 |
|              |       jQo       |                    اول دوم سوم چهارم                     |
|              |       jQ        |                         1 2 3 4                          |
|     Week     |  [ jWW, jww ]   |                     01 02 ... 52 53                      |
|              |  [ jWO, jwO ]   |       اولین دومین ... پنجاه و دومین پنجاه و سومین        |
|              |  [ jWo, jwo ]   |           اول دوم ... پنجاه و دوم پنجاه و سوم            |
|              |   [ jW, jw ]    |                      1 2 ... 52 53                       |
|     Hour     |       HH        |                     00 01 ... 22 23                      |
|              |        H        |                      0 1 ... 22 23                       |
|              |       hh        |                     01 02 ... 11 12                      |
|              |        h        |                      1 2 ... 11 12                       |
|              |       kk        |                     01 02 ... 23 24                      |
|              |        k        |                      1 2 ... 23 24                       |
|    Minute    |       mm        |                     00 01 ... 58 59                      |
|              |        m        |                      0 1 ... 58 59                       |
|    Second    |       ss        |                     00 01 ... 58 59                      |
|              |        s        |                      0 1 ... 58 59                       |
| Millisecond  |      CCCC       |                   000 001 ... 998 999                    |
|              |   [ CCC, c ]    |                     0 1 ... 998 999                      |
|  Timestamp   |        t        |                      1609446600000                       |
|    Am/PM     |       jA        |                  قبل‌از‌ظهر بعد‌از‌ظهر                   |
|              |       jaa       |                         ق.ظ ب.‌ظ                         |
|              |       ja        |                         ق ظ ب ‌ظ                         |

#### Aliases

|  Alias   |       Format        |      Output      |
| :------: | :-----------------: | :--------------: |
| datetime | jYYYY/jMM/jDD HH:mm | 1400/01/01 12:25 |
|   date   |    jYYYY/jMM/jDD    |    1400/01/01    |
|   time   |        HH:mm        |      12:25       |

#### Gregorian formats

|     Type     |       Token        |                 Output                 |
| :----------: | :----------------: | :------------------------------------: |
|     Year     |    [ YYYY, y ]     |        1970 1971 ... 2029 2030         |
|              |         YY         |            70 71 ... 29 30             |
|    Month     |        MMMM        | January February ... November December |
|              |        MMM         |          Jan Feb ... Nov Dec           |
|              |         MM         |            01 02 ... 11 12             |
|              |     [ MO, Mo ]     |         1st 2nd ... 11th 12th          |
|              |         M          |             1 2 ... 11 12              |
| Day of Month |         DD         |            01 02 ... 30 31             |
|              |     [ DO, Do ]     |         1st 2nd ... 30th 31st          |
|              |         D          |             1 2 ... 30 31              |
| Day of Week  |        dddd        |   Sunday Monday ... Friday Saturday    |
| Day of Week  |        ddd         |          Sun Mon ... Fri Sat           |
|              |         dd         |            Su Mo ... Fr Sa             |
|              |     [ dO, do ]     |          1st 2nd ... 6th 7th           |
|              |         de         |              1 2 ... 6 7               |
|              |         d          |              0 1 ... 5 6               |
| Day of Year  |        DDDD        |          001 002 ... 364 365           |
|              |   [ DDDO, DDDo ]   |        1st 2nd ... 364th 365th         |
|              |        DDD         |            1 2 ... 364 365             |
|   Quarter    |     [ QO, Qo ]     |            1st 2nd 3rd 4th             |
|              |         Q          |                1 2 3 4                 |
|     Week     |     [ WW, ww ]     |            01 02 ... 52 53             |
|              | [ WO, wO, Wo, wo ] |         1st 2nd ... 52nd 53rd          |
|              |      [ W, w ]      |             1 2 ... 52 53              |
|     Hour     |         HH         |            00 01 ... 22 23             |
|              |         H          |             0 1 ... 22 23              |
|              |         hh         |            01 02 ... 11 12             |
|              |         h          |             1 2 ... 11 12              |
|              |         kk         |            01 02 ... 23 24             |
|              |         k          |             1 2 ... 23 24              |
|    Minute    |         mm         |            00 01 ... 58 59             |
|              |         m          |             0 1 ... 58 59              |
|    Second    |         ss         |            00 01 ... 58 59             |
|              |         s          |             0 1 ... 58 59              |
| Millisecond  |        CCCC        |          000 001 ... 998 999           |
|              |     [ CCC, c ]     |            0 1 ... 998 999             |
|  Timestamp   |         t          |             1609446600000              |
|    Am/PM     |         A          |                 AM PM                  |
|              |         aa         |               A.M. P.M.                |
|              |         a          |                 am pm                  |

---

## Query

### isLeapYear()

determines whether the year is a leap year or not

```javascript
persianDate.parse("1400").isLeapYear(); // false
persianDate.isLeapYear(1399); // true
```

### isValid()

check the date or time or both

```javascript
// check both date and time
persianDate.parse("1400/1/1 00:00:00.0").isValid(); // true
persianDate.isValid(1400, 13, 1, 0, 0, 0, 0); // false
// check date
persianDate.parse("1400/1/1 25:00:00").isValidDate(); // true
persianDate.isValidDate(1399, 7, 31); // false
// check time
persianDate.parse("1400/1/1 25:00:00").isValidTime(); // false
persianDate.isValidTime(12, 5, 0, 0); // true
```

## license

PersianDate is available under the [MIT](https://opensource.org/licenses/MIT) license.
