# Persian Date

A **lightweight** but **professional** library for working with **Persian dates**.
This supports **Persian (Jalali)** and **gregorian** calendar and from v2.0 supports **Nodejs**.
Also, you can use it in **nuxtjs** without any problems.

[![npm version](https://img.shields.io/npm/v/@alireza-ab/persian-date)](https://www.npmjs.com/package/@alireza-ab/persian-date)

## Documentation

For full documentation, visit [https://alireza-ab.ir/persian-date](https://alireza-ab.ir/persian-date)

[![The peace of PersianDate code](https://alireza-ab.ir/images/persian-date-code.png)](https://alireza-ab.ir/persian-date)

### Install

```shell
npm i @alireza-ab/persian-date
```

### Usage

```js
let date = new PersianDate([1400, 1, 1], "jalali");

date.diff("1399/9", "date") + " days"; // 120 days

date.isAfter("1399/12/30"); // true

date.addDay(5).toString(); // 1400/01/06
```

## License

PersianDate is available under the [MIT](https://opensource.org/licenses/MIT) license.
