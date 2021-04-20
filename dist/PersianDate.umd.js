(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["PersianDate"] = factory();
	else
		root["PersianDate"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/PersianDate.js":
/*!****************************!*\
  !*** ./src/PersianDate.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/base/index.js");
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create */ "./src/create/index.js");
/* harmony import */ var _set_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set-get */ "./src/set-get/index.js");
/* harmony import */ var _add_sub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-sub */ "./src/add-sub/index.js");
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./conversion */ "./src/conversion/index.js");
/* harmony import */ var _comparison__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comparison */ "./src/comparison/index.js");
/* harmony import */ var _diff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./diff */ "./src/diff/index.js");
////////////////////---------- Are You Ready? ----------////////////////////
////////////////////------------- Let's Go -------------////////////////////
////////////////////---- Read Comments And Enjoy It ----////////////////////

////////////////////------------- ATTENTION -------------////////////////////
//          In the first, I'm must say, in the all of the project,         //
//          g means Gregorian and j means Jalali                           //
/////////////////////////////////////////////////////////////////////////////














/**
 * A Date library for working with persian date
 * @class
 * @param {Date|Array|Null|Object|String} date - the date that convert to persian date
 * @param {String} [calendar='jalali'] - the calendar
 */
const PersianDate = function (dateVal, calendarVal) {
	"use strict";

	/**
	 * keeps the date and time
	 * @type {Object}
	 * @property {Number} year - the year of date
	 * @property {Number} month - the month of date
	 * @property {Number} date - the day of month of date
	 * @property {Number} hour - the hour of time
	 * @property {Number} minute - the minute of time
	 * @property {Number} second - the second of time
	 * @property {Number} millisecond - the millisecond of time
	 * @property {Number} gregorian - the gregorian date
	 */
	this.d = {};

	/**
	 * the calendar type
	 * @type {String}
	 * @default "jalali"
	 * @example jalali | gregorian
	 */
	this.c = "jalali";

	////////////////////--------- create & parse ---------/////////////////////

	/**
	 * make current date in persian calendar
	 * @returns {PersianDate} make current date and return class
	 */
	PersianDate.prototype.now = function () {
		if (this.error) {
			delete this.error;
			this.d = {};
		}
		return _create__WEBPACK_IMPORTED_MODULE_1__.now.call(this);
	};

	/**
	 * set persian date from Gregorian date
	 * @deprecated
	 * @param {...Number|Date|Array|Null} date - the date that convert to persian date
	 * @returns {PersianDate} return class with persian date
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.setDate = function () {
		(0,_base__WEBPACK_IMPORTED_MODULE_0__.warn)(
			'"setDate" function is deprecated! use "fromGregorian" function instead.\n' +
				"https://alireza-ab.ir/persian-date/create-and-parse#from-gregorian-date"
		);
		return this.fromGregorian(...arguments);
	};

	/**
	 * convert a jalali or gregorian date to PersianDate instance
	 * @param {String|Array|Object|Number} year - this param must be string of date or array of date or Object from date or year
	 * @param {String|Number} year.y - year of date
	 * @param {Null|String|Number} year.year - year of date
	 * @param {Null|String|Number} year.years - year of date
	 * @param {Null|String|Number} year.M - month of date
	 * @param {Null|String|Number} year.month - month of date
	 * @param {Null|String|Number} year.months - month of date
	 * @param {Null|String|Number} year.d - day of date
	 * @param {Null|String|Number} year.day - day of date
	 * @param {Null|String|Number} year.days - day of date
	 * @param {Null|String|Number} year.date - day of date
	 * @param {Null|String|Number} year.h - hour of date
	 * @param {Null|String|Number} year.hour - hour of date
	 * @param {Null|String|Number} year.hours - hour of date
	 * @param {Null|String|Number} year.m - minute of date
	 * @param {Null|String|Number} year.minute - minute of date
	 * @param {Null|String|Number} year.minutes - minute of date
	 * @param {Null|String|Number} year.s - second of date
	 * @param {Null|String|Number} year.second - second of date
	 * @param {Null|String|Number} year.seconds - second of date
	 * @param {Null|String|Number} year.ms - millisecond of date
	 * @param {Null|String|Number} year.millisecond - millisecond of date
	 * @param {Null|String|Number} year.milliseconds - millisecond of date
	 * @param {Null|Number|String} month month of date
	 * @param {Null|Number|String} day day of date
	 * @param {Null|Number|String} hour hour of date
	 * @param {Null|Number|String} minute minute of date
	 * @param {Null|Number|String} second second of date
	 * @param {Null|Number|String} millisecond millisecond of date
	 * @returns {PersianDate} return class with persian date
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.parse = function () {
		return _create__WEBPACK_IMPORTED_MODULE_1__.parse.call(this, ...arguments);
	};

	/**
	 * get clone of this date
	 * @since 1.1.0
	 * @returns {PersianDate} returns the clone of this date
	 */
	PersianDate.prototype.clone = function () {
		return _create__WEBPACK_IMPORTED_MODULE_1__.clone.call(this);
	};

	/**
	 * convert a jalali date to PersianDate instance
	 * @since 2.0.0
	 * @param {PersianDate|Date|String|Array|Object|Number} year - this param must be string of date or array of date or Object from date or year
	 * @param {String|Number} year.y - year of date
	 * @param {Null|String|Number} year.year - year of date
	 * @param {Null|String|Number} year.years - year of date
	 * @param {Null|String|Number} year.M - month of date
	 * @param {Null|String|Number} year.month - month of date
	 * @param {Null|String|Number} year.months - month of date
	 * @param {Null|String|Number} year.d - day of date
	 * @param {Null|String|Number} year.day - day of date
	 * @param {Null|String|Number} year.days - day of date
	 * @param {Null|String|Number} year.date - day of date
	 * @param {Null|String|Number} year.h - hour of date
	 * @param {Null|String|Number} year.hour - hour of date
	 * @param {Null|String|Number} year.hours - hour of date
	 * @param {Null|String|Number} year.m - minute of date
	 * @param {Null|String|Number} year.minute - minute of date
	 * @param {Null|String|Number} year.minutes - minute of date
	 * @param {Null|String|Number} year.s - second of date
	 * @param {Null|String|Number} year.second - second of date
	 * @param {Null|String|Number} year.seconds - second of date
	 * @param {Null|String|Number} year.ms - millisecond of date
	 * @param {Null|String|Number} year.millisecond - millisecond of date
	 * @param {Null|String|Number} year.milliseconds - millisecond of date
	 * @param {Null|Number|String} month month of date
	 * @param {Null|Number|String} day day of date
	 * @param {Null|Number|String} hour hour of date
	 * @param {Null|Number|String} minute minute of date
	 * @param {Null|Number|String} second second of date
	 * @param {Null|Number|String} millisecond millisecond of date
	 * @returns {PersianDate} return class with persian date
	 * @throws {PersianDate} if date invalid return class with error
	 */
	PersianDate.prototype.fromJalali = function () {
		if (this.error) {
			delete this.error;
			this.d = {};
		}
		return _create__WEBPACK_IMPORTED_MODULE_1__.fromJalali.call(this, ...arguments);
	};

	/**
	 * convert a gregorian date to PersianDate instance
	 * @since 2.0.0
	 * @param {PersianDate|Date|String|Array|Object|Number} year - this param must be string of date or array of date or Object from date or year
	 * @param {String|Number} year.y - year of date
	 * @param {Null|String|Number} year.year - year of date
	 * @param {Null|String|Number} year.years - year of date
	 * @param {Null|String|Number} year.M - month of date
	 * @param {Null|String|Number} year.month - month of date
	 * @param {Null|String|Number} year.months - month of date
	 * @param {Null|String|Number} year.d - day of date
	 * @param {Null|String|Number} year.day - day of date
	 * @param {Null|String|Number} year.days - day of date
	 * @param {Null|String|Number} year.date - day of date
	 * @param {Null|String|Number} year.h - hour of date
	 * @param {Null|String|Number} year.hour - hour of date
	 * @param {Null|String|Number} year.hours - hour of date
	 * @param {Null|String|Number} year.m - minute of date
	 * @param {Null|String|Number} year.minute - minute of date
	 * @param {Null|String|Number} year.minutes - minute of date
	 * @param {Null|String|Number} year.s - second of date
	 * @param {Null|String|Number} year.second - second of date
	 * @param {Null|String|Number} year.seconds - second of date
	 * @param {Null|String|Number} year.ms - millisecond of date
	 * @param {Null|String|Number} year.millisecond - millisecond of date
	 * @param {Null|String|Number} year.milliseconds - millisecond of date
	 * @param {Null|Number|String} month month of date
	 * @param {Null|Number|String} day day of date
	 * @param {Null|Number|String} hour hour of date
	 * @param {Null|Number|String} minute minute of date
	 * @param {Null|Number|String} second second of date
	 * @param {Null|Number|String} millisecond millisecond of date
	 * @returns {PersianDate} return class with persian date
	 * @throws {PersianDate} if date invalid return class with error
	 */
	PersianDate.prototype.fromGregorian = function () {
		if (this.error) {
			delete this.error;
			this.d = {};
		}
		return _create__WEBPACK_IMPORTED_MODULE_1__.fromGregorian.call(this, ...arguments);
	};

	/**
	 * convert a gregorian date to PersianDate instance
	 * @since 2.0.0
	 * @param {"j"|"jalali"|"g"|"gregorian"} calendar - the calendar
	 * @returns {PersianDate} return class with persian date
	 */
	PersianDate.prototype.calendar = function (calendar) {
		return _create__WEBPACK_IMPORTED_MODULE_1__.calendar.call(this, calendar);
	};

	////////////////////--------- set & get ---------/////////////////////

	/**
	 * get or set year
	 * @param {Null|Number|String} [format=jYYYY] - a number for set the year or a format for formatting
	 * @returns {PersianDate|String|Number} if set the year, returns class,
	 * else returns a number or string from year
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.year = function (format = "") {
		if (this.error) return this.error;
		return _set_get__WEBPACK_IMPORTED_MODULE_2__.year.call(this, format);
	};

	/**
	 * get or set month
	 * @param {Null|Number|String} [format=jM] - a number for set the month or a format for formatting
	 * @returns {PersianDate|String|Number} if set the month, returns class,
	 * else returns a number or string from month
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.month = function (format = "") {
		if (this.error) return this.error;
		return _set_get__WEBPACK_IMPORTED_MODULE_2__.month.call(this, format);
	};

	/**
	 * get or set day in month
	 * @param {Null|Number|String} [format=jD] - a number for set the day in month or a format for formatting
	 * @returns {PersianDate|String|Number} if set the day, returns class,
	 * else returns a number or string from day
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.date = function (format = "") {
		if (this.error) return this.error;
		return _set_get__WEBPACK_IMPORTED_MODULE_2__.date.call(this, format);
	};

	/**
	 * get or set quarter
	 * @param {Null|Number|String} [format=jQ] - a number for set the quarter or a format for formatting
	 * @returns {PersianDate|String|Number} if set the quarter, returns class,
	 * else returns a number or string from quarter
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.quarter = function (format = "") {
		if (this.error) return this.error;
		return _set_get__WEBPACK_IMPORTED_MODULE_2__.quarter.call(this, format);
	};

	/**
	 * get or set week
	 * @param {Null|Number|String} [format=jw] - a number for set the week or a format for formatting
	 * @returns {PersianDate|String|Number} if set the week, returns class,
	 * else returns a number or string from week
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.week = function (format = "") {
		if (this.error) return this.error;
		return _set_get__WEBPACK_IMPORTED_MODULE_2__.week.call(this, format);
	};

	/**
	 * get or set hour
	 * @param {Null|Number|String} [format=H] - a number for set the hour or a format for formatting
	 * @returns {PersianDate|String|Number} if set the hour, returns class,
	 * else returns a number or string from hour
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.hour = function (format = "H") {
		if (this.error) return this.error;
		return _set_get__WEBPACK_IMPORTED_MODULE_2__.hour.call(this, format);
	};

	/**
	 * get or set minute
	 * @param {Null|Number|String} [format=m] - a number for set the minute or a format for formatting
	 * @returns {PersianDate|String|Number} if set the minute, returns class,
	 * else returns a number or string from minute
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.minute = function (format = "m") {
		if (this.error) return this.error;
		return _set_get__WEBPACK_IMPORTED_MODULE_2__.minute.call(this, format);
	};

	/**
	 * get or set second
	 * @param {Null|Number|String} [format=s] - a number for set the second or a format for formatting
	 * @returns {PersianDate|String|Number} if set the second, returns class,
	 * else returns a number or string from second
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.second = function (format = "s") {
		if (this.error) return this.error;
		return _set_get__WEBPACK_IMPORTED_MODULE_2__.second.call(this, format);
	};

	/**
	 * get or set millisecond
	 * @param {Null|Number|String} [format=c] - a number for set the millisecond or a format for formatting
	 * @returns {PersianDate|String|Number} if set the millisecond, returns class,
	 * else returns a number or string from millisecond
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.millisecond = function (format = "c") {
		if (this.error) return this.error;
		return _set_get__WEBPACK_IMPORTED_MODULE_2__.millisecond.call(this, format);
	};

	/**
	 * get timestamp or set date from timestamp
	 * @param {Null|Number|String} value - a number for set the millisecond
	 * @returns {PersianDate|Number} if set the timestamp, returns class,
	 * else returns timestamp (number)
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.timestamp = function (value) {
		if (this.error) return this.error;
		return _set_get__WEBPACK_IMPORTED_MODULE_2__.timestamp.call(this, value);
	};

	PersianDate.prototype.valueOf = function () {
		return this.timestamp();
	};

	/**
	 * returns number of days in month
	 * @param {?Number} year - year of date that returns number of days in month
	 * @param {?Number} month - month of date that returns number of days in month
	 * @returns {Number} number of days in month
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.getDaysInMonth = function (
		year = this.d.year,
		month = this.d.month
	) {
		if (this.error) return this.error;
		return (0,_set_get__WEBPACK_IMPORTED_MODULE_2__.getDaysInMonth)(this.c, year, month);
	};

	/**
	 * return number of weeks in year
	 * @since 2.0.0
	 * @param {Number|String} year - the year
	 * @returns {Number} number of weeks in year
	 */
	PersianDate.prototype.getWeeksInYear = function (year = this.d.year) {
		if (this.error) return this.error;
		return _set_get__WEBPACK_IMPORTED_MODULE_2__.getWeeksInYear.call(this, year);
	};

	/**
	 * change the date to start of the year or month or ...
	 * @since 2.0.0
	 * @param {String} unit - the unit of time
	 * @returns {PersianDate} return the class with new date or time
	 */
	PersianDate.prototype.startOf = function (unit = "year") {
		return _set_get__WEBPACK_IMPORTED_MODULE_2__.startOf.call(this, unit);
	};

	/**
	 * change the date to end of the year or month or ...
	 * @since 2.0.0
	 * @param {String} unit - the unit of time
	 * @returns {PersianDate} return the class with new date or time
	 */
	PersianDate.prototype.endOf = function (unit = "year") {
		return _set_get__WEBPACK_IMPORTED_MODULE_2__.endOf.call(this, unit);
	};

	/**
	 * change the time
	 * @since 2.3.0
	 * @param {PersianDate|Date|String|Array|Object|Number} time - the new time
	 * @param {Null|String|Number} time.h - hour of date
	 * @param {Null|String|Number} time.hour - hour of date
	 * @param {Null|String|Number} time.hours - hour of date
	 * @param {Null|String|Number} time.m - minute of date
	 * @param {Null|String|Number} time.minute - minute of date
	 * @param {Null|String|Number} time.minutes - minute of date
	 * @param {Null|String|Number} time.s - second of date
	 * @param {Null|String|Number} time.second - second of date
	 * @param {Null|String|Number} time.seconds - second of date
	 * @param {Null|String|Number} time.ms - millisecond of date
	 * @param {Null|String|Number} time.millisecond - millisecond of date
	 * @param {Null|String|Number} time.milliseconds - millisecond of date
	 * @returns {PersianDate|Array} if set the time, returns class,
	 * else returns an array of time
	 * @throws {String} if time invalid return error text
	 */
	PersianDate.prototype.time = function () {
		if (this.error) return this.error;
		return _set_get__WEBPACK_IMPORTED_MODULE_2__.time.call(this, ...arguments);
	};

	////////////////////--------- add & sub ---------/////////////////////

	/**
	 * add to year
	 * @param {?Number|String} [year=1] - a number for add with year
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.addYear = function (year = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!year) return this;
		return _add_sub__WEBPACK_IMPORTED_MODULE_3__.addYear.call(this, year, checkDate);
	};

	/**
	 * add to month
	 * @param {?Number|String} [month=1] - a number for add with month
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.addMonth = function (month = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!month) return this;
		return _add_sub__WEBPACK_IMPORTED_MODULE_3__.addMonth.call(this, month, checkDate);
	};

	/**
	 * add to day
	 * @param {?Number|String} [day=1] - a number for add with day
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.addDay = function (day = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!day) return this;
		return _add_sub__WEBPACK_IMPORTED_MODULE_3__.addDay.call(this, day, checkDate);
	};

	/**
	 * add to quarter
	 * @param {?Number|String} [quarter=1] - a number for add with quarter
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.addQuarter = function (quarter = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!quarter) return this;
		return _add_sub__WEBPACK_IMPORTED_MODULE_3__.addQuarter.call(this, quarter, checkDate);
	};

	/**
	 * add to week
	 * @param {?Number|String} [week=1] - a number for add with week
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.addWeek = function (week = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!week) return this;
		return _add_sub__WEBPACK_IMPORTED_MODULE_3__.addWeek.call(this, week, checkDate);
	};

	/**
	 * add to hour
	 * @param {?Number|String} [hour=1] - a number for add with hour
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.addHour = function (hour = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!hour) return this;
		return _add_sub__WEBPACK_IMPORTED_MODULE_3__.addHour.call(this, hour, checkDate);
	};

	/**
	 * add to minute
	 * @param {?Number|String} [minute=1] - a number for add with minute
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.addMinute = function (minute = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!minute) return this;
		return _add_sub__WEBPACK_IMPORTED_MODULE_3__.addMinute.call(this, minute, checkDate);
	};

	/**
	 * add to second
	 * @param {?Number|String} [second=1] - a number for add with second
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.addSecond = function (second = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!second) return this;
		return _add_sub__WEBPACK_IMPORTED_MODULE_3__.addSecond.call(this, second, checkDate);
	};

	/**
	 * add to millisecond
	 * @param {?Number|String} [millisecond=1] - a number for add with millisecond
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.addMillisecond = function (
		millisecond = 1,
		checkDate = true
	) {
		if (this.error) return this.error;
		if (!millisecond) return this;
		return _add_sub__WEBPACK_IMPORTED_MODULE_3__.addMillisecond.call(this, millisecond, checkDate);
	};

	/**
	 * subtract from year
	 * @param {?Number|String} [year=1] - a number for subtract from year
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.subYear = function (year = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!year) return this;
		return _add_sub__WEBPACK_IMPORTED_MODULE_3__.subYear.call(this, year, checkDate);
	};

	/**
	 * subtract from month
	 * @param {?Number|String} [month=1] - a number for subtract from month
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.subMonth = function (month = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!month) return this;
		return _add_sub__WEBPACK_IMPORTED_MODULE_3__.subMonth.call(this, month, checkDate);
	};

	/**
	 * subtract from day
	 * @param {?Number|String} [day=1] - a number for subtract from day
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.subDay = function (day = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!day) return this;
		return _add_sub__WEBPACK_IMPORTED_MODULE_3__.subDay.call(this, day, checkDate);
	};

	/**
	 * subtract from quarter
	 * @param {?Number|String} [quarter=1] - a number for subtract from quarter
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.subQuarter = function (quarter = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!quarter) return this;
		return _add_sub__WEBPACK_IMPORTED_MODULE_3__.subQuarter.call(this, quarter, checkDate);
	};

	/**
	 * subtract from week
	 * @param {?Number|String} [week=1] - a number for subtract from week
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.subWeek = function (week = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!week) return this;
		return _add_sub__WEBPACK_IMPORTED_MODULE_3__.subWeek.call(this, week, checkDate);
	};

	/**
	 * subtract from hour
	 * @param {?Number|String} [hour=1] - a number for subtract from hour
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.subHour = function (hour = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!hour) return this;
		return _add_sub__WEBPACK_IMPORTED_MODULE_3__.subHour.call(this, hour, checkDate);
	};

	/**
	 * subtract from minute
	 * @param {?Number|String} [minute=1] - a number for subtract from minute
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.subMinute = function (minute = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!minute) return this;
		return _add_sub__WEBPACK_IMPORTED_MODULE_3__.subMinute.call(this, minute, checkDate);
	};

	/**
	 * subtract from second
	 * @param {?Number|String} [second=1] - a number for subtract from second
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.subSecond = function (second = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!second) return this;
		return _add_sub__WEBPACK_IMPORTED_MODULE_3__.subSecond.call(this, second, checkDate);
	};

	/**
	 * subtract from millisecond
	 * @param {?Number|String} [millisecond=1] - a number for subtract from millisecond
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.subMillisecond = function (
		millisecond = 1,
		checkDate = true
	) {
		if (this.error) return this.error;
		if (!millisecond) return this;
		return _add_sub__WEBPACK_IMPORTED_MODULE_3__.subMillisecond.call(this, millisecond, checkDate);
	};

	////////////////////--------- conversion ---------/////////////////////

	/**
	 * returns date as string with specify format
	 * @param {?String} [format=date] - formatting date to string
	 * @returns {String} date string
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.toString = function (format = "date") {
		if (this.error) return this.error;
		return _conversion__WEBPACK_IMPORTED_MODULE_4__.toString.call(this, format);
	};

	/**
	 * return the array of PersianDate
	 * @since 1.3.0
	 * @param {String|Array|Object|Number} yearForamt - this param must be string or array or Object from date or year
	 * @param {String|Number} yearForamt.y - year format
	 * @param {Null|String|Number} yearForamt.year - year format
	 * @param {Null|String|Number} yearForamt.years - year format
	 * @param {Null|String|Number} yearForamt.M - month format
	 * @param {Null|String|Number} yearForamt.month - month format
	 * @param {Null|String|Number} yearForamt.months - month format
	 * @param {Null|String|Number} yearForamt.d - day format
	 * @param {Null|String|Number} yearForamt.day - day format
	 * @param {Null|String|Number} yearForamt.days - day format
	 * @param {Null|String|Number} yearForamt.date - day format
	 * @param {Null|String|Number} yearForamt.h - hour format
	 * @param {Null|String|Number} yearForamt.hour - hour format
	 * @param {Null|String|Number} yearForamt.hours - hour format
	 * @param {Null|String|Number} yearForamt.m - minute format
	 * @param {Null|String|Number} yearForamt.minute - minute format
	 * @param {Null|String|Number} yearForamt.minutes - minute format
	 * @param {Null|String|Number} yearForamt.s - second format
	 * @param {Null|String|Number} yearForamt.second - second format
	 * @param {Null|String|Number} yearForamt.seconds - second format
	 * @param {Null|String|Number} yearForamt.ms - millisecond format
	 * @param {Null|String|Number} yearForamt.millisecond - millisecond format
	 * @param {Null|String|Number} yearForamt.milliseconds - millisecond format
	 * @param {Null|Number|String} monthFormat month format
	 * @param {Null|Number|String} dayFormat day format
	 * @param {Null|Number|String} hourFormat hour format
	 * @param {Null|Number|String} minuteFormat minute format
	 * @param {Null|Number|String} secondFormat second format
	 * @param {Null|Number|String} millisecondFormat millisecond format
	 * @returns {Object} if date valid, return array of date
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.toArray = function () {
		if (this.error) return this.error;
		return _conversion__WEBPACK_IMPORTED_MODULE_4__.toArray.call(this, ...arguments);
	};

	/**
	 * return the object of PersianDate
	 * @since 1.3.0
	 * @param {String|Array|Object|Number} yearForamt - this param must be string or array or Object from date or year
	 * @param {String|Number} yearForamt.y - year format
	 * @param {Null|String|Number} yearForamt.year - year format
	 * @param {Null|String|Number} yearForamt.years - year format
	 * @param {Null|String|Number} yearForamt.M - month format
	 * @param {Null|String|Number} yearForamt.month - month format
	 * @param {Null|String|Number} yearForamt.months - month format
	 * @param {Null|String|Number} yearForamt.d - day format
	 * @param {Null|String|Number} yearForamt.day - day format
	 * @param {Null|String|Number} yearForamt.days - day format
	 * @param {Null|String|Number} yearForamt.date - day format
	 * @param {Null|String|Number} yearForamt.h - hour format
	 * @param {Null|String|Number} yearForamt.hour - hour format
	 * @param {Null|String|Number} yearForamt.hours - hour format
	 * @param {Null|String|Number} yearForamt.m - minute format
	 * @param {Null|String|Number} yearForamt.minute - minute format
	 * @param {Null|String|Number} yearForamt.minutes - minute format
	 * @param {Null|String|Number} yearForamt.s - second format
	 * @param {Null|String|Number} yearForamt.second - second format
	 * @param {Null|String|Number} yearForamt.seconds - second format
	 * @param {Null|String|Number} yearForamt.ms - millisecond format
	 * @param {Null|String|Number} yearForamt.millisecond - millisecond format
	 * @param {Null|String|Number} yearForamt.milliseconds - millisecond format
	 * @param {Null|Number|String} monthFormat month format
	 * @param {Null|Number|String} dayFormat day format
	 * @param {Null|Number|String} hourFormat hour format
	 * @param {Null|Number|String} minuteFormat minute format
	 * @param {Null|Number|String} secondFormat second format
	 * @param {Null|Number|String} millisecondFormat millisecond format
	 * @returns {Object} if date valid, return Object of date
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.toObject = function () {
		if (this.error) return this.error;
		return _conversion__WEBPACK_IMPORTED_MODULE_4__.toObject.call(this, ...arguments);
	};

	/**
	 * return the Date instance of PersianDate
	 * @since 2.0.0
	 * @returns {Date} if date valid, return Date instance of date
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.toDate = function () {
		if (this.error) return this.error;
		return _conversion__WEBPACK_IMPORTED_MODULE_4__.toDate.call(this);
	};

	////////////////////--------- diff ---------/////////////////////

	/**
	 * get the diffrence between two date
	 * @since 1.4.0
	 * @param {PersianDate|Date|String|Array|Object} date - this param must be PersianDate or string or array or Object from date
	 * @param {String|Number} date.y - year of date
	 * @param {Null|String|Number} date.year - year of date
	 * @param {Null|String|Number} date.years - year of date
	 * @param {Null|String|Number} date.M - month of date
	 * @param {Null|String|Number} date.month - month of date
	 * @param {Null|String|Number} date.months - month of date
	 * @param {Null|String|Number} date.d - day of date
	 * @param {Null|String|Number} date.day - day of date
	 * @param {Null|String|Number} date.days - day of date
	 * @param {Null|String|Number} date.date - day of date
	 * @param {Null|String|Number} date.h - hour of date
	 * @param {Null|String|Number} date.hour - hour of date
	 * @param {Null|String|Number} date.hours - hour of date
	 * @param {Null|String|Number} date.m - minute of date
	 * @param {Null|String|Number} date.minute - minute of date
	 * @param {Null|String|Number} date.minutes - minute of date
	 * @param {Null|String|Number} date.s - second of date
	 * @param {Null|String|Number} date.second - second of date
	 * @param {Null|String|Number} date.seconds - second of date
	 * @param {Null|String|Number} date.ms - millisecond of date
	 * @param {Null|String|Number} date.millisecond - millisecond of date
	 * @param {Null|String|Number} date.milliseconds - millisecond of date
	 * @param {String} unit - the unit of the measurment
	 * @param {Boolean} addOne - add one day to result
	 * @returns {Number} diffrence
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.diff = function (date, unit, addOne = false) {
		if (this.error) return this.error;
		return _diff__WEBPACK_IMPORTED_MODULE_6__.diff.call(this, date, unit, addOne);
	};

	/**
	 * get the diffrence between two date in a human-readable format
	 * @since 2.0.0
	 * @param {PersianDate|Date|String|Array|Object} date - this param must be PersianDate or string or array or Object from date
	 * @param {String|Number} date.y - year of date
	 * @param {Null|String|Number} date.year - year of date
	 * @param {Null|String|Number} date.years - year of date
	 * @param {Null|String|Number} date.M - month of date
	 * @param {Null|String|Number} date.month - month of date
	 * @param {Null|String|Number} date.months - month of date
	 * @param {Null|String|Number} date.d - day of date
	 * @param {Null|String|Number} date.day - day of date
	 * @param {Null|String|Number} date.days - day of date
	 * @param {Null|String|Number} date.date - day of date
	 * @param {Null|String|Number} date.h - hour of date
	 * @param {Null|String|Number} date.hour - hour of date
	 * @param {Null|String|Number} date.hours - hour of date
	 * @param {Null|String|Number} date.m - minute of date
	 * @param {Null|String|Number} date.minute - minute of date
	 * @param {Null|String|Number} date.minutes - minute of date
	 * @param {Null|String|Number} date.s - second of date
	 * @param {Null|String|Number} date.second - second of date
	 * @param {Null|String|Number} date.seconds - second of date
	 * @param {Null|String|Number} date.ms - millisecond of date
	 * @param {Null|String|Number} date.millisecond - millisecond of date
	 * @param {Null|String|Number} date.milliseconds - millisecond of date
	 * @param {Boolean} suffix - add suffix or not
	 * @returns {String} if date valid, return diff human-readable format
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.diffForHumans = function (date, suffix = true) {
		if (this.error) return this.error;
		return _diff__WEBPACK_IMPORTED_MODULE_6__.diffForHumans.call(this, date, suffix);
	};

	////////////////////--------- comparison ---------/////////////////////

	/**
	 * returns minimum date in arguments that passed
	 * @since 1.4.0
	 * @param {...String|PersianDate|Date|Array|Object} date - this parameters must be string or array or Object from date;
	 * @param {String} date.y - year of date
	 * @param {Null|String} date.year - year of date
	 * @param {Null|String} date.years - year of date
	 * @param {Null|String} date.M - month of date
	 * @param {Null|String} date.month - month of date
	 * @param {Null|String} date.months - month of date
	 * @param {Null|String} date.d - day of date
	 * @param {Null|String} date.day - day of date
	 * @param {Null|String} date.days - day of date
	 * @param {Null|String} date.date - day of date
	 * @param {Null|String} date.h - hour of date
	 * @param {Null|String} date.hour - hour of date
	 * @param {Null|String} date.hours - hour of date
	 * @param {Null|String} date.m - minute of date
	 * @param {Null|String} date.minute - minute of date
	 * @param {Null|String} date.minutes - minute of date
	 * @param {Null|String} date.s - second of date
	 * @param {Null|String} date.second - second of date
	 * @param {Null|String} date.seconds - second of date
	 * @param {Null|String} date.ms - millisecond of date
	 * @param {Null|String} date.millisecond - millisecond of date
	 * @param {Null|String} date.milliseconds - millisecond of date
	 * @returns {*} return minimum date
	 * @throws {false} if parameters not send or parameters is invalid, return false
	 */
	PersianDate.prototype.min = function () {
		return _base__WEBPACK_IMPORTED_MODULE_0__.mathOperation.call(this, arguments, "min");
	};

	/**
	 * returns maximum date in arguments that passed
	 * @since 1.4.0
	 * @param {...String|PersianDate|Date|Array|Object} date - this parameters must be string or array or Object from date;
	 * @param {String} date.y - year of date
	 * @param {Null|String} date.year - year of date
	 * @param {Null|String} date.years - year of date
	 * @param {Null|String} date.M - month of date
	 * @param {Null|String} date.month - month of date
	 * @param {Null|String} date.months - month of date
	 * @param {Null|String} date.d - day of date
	 * @param {Null|String} date.day - day of date
	 * @param {Null|String} date.days - day of date
	 * @param {Null|String} date.date - day of date
	 * @param {Null|String} date.h - hour of date
	 * @param {Null|String} date.hour - hour of date
	 * @param {Null|String} date.hours - hour of date
	 * @param {Null|String} date.m - minute of date
	 * @param {Null|String} date.minute - minute of date
	 * @param {Null|String} date.minutes - minute of date
	 * @param {Null|String} date.s - second of date
	 * @param {Null|String} date.second - second of date
	 * @param {Null|String} date.seconds - second of date
	 * @param {Null|String} date.ms - millisecond of date
	 * @param {Null|String} date.millisecond - millisecond of date
	 * @param {Null|String} date.milliseconds - millisecond of date
	 * @returns {*} return maximum date
	 * @throws {false} if parameters not send or parameters is invalid, return false
	 */
	PersianDate.prototype.max = function () {
		return _base__WEBPACK_IMPORTED_MODULE_0__.mathOperation.call(this, arguments, "max");
	};

	/**
	 * receives year and determined that is leap year or not
	 * @param {?Number} year - the year to be determined is a leap or not
	 * @returns {Boolean} if is leap year, returns true
	 */
	PersianDate.prototype.isLeapYear = function (year = this.d.year) {
		if (this.error) return false;
		return (0,_comparison__WEBPACK_IMPORTED_MODULE_5__.isLeapYear)(this.c, year);
	};

	/**
	 * checks the persian date and time
	 * @param {?Number} year - year of date that will be checked
	 * @param {?Number} month - month of date that will be checked
	 * @param {?Number} day - day of date that will be checked
	 * @param {?Number} hour - hour of date that will be checked
	 * @param {?Number} minute - minute of date that will be checked
	 * @param {?Number} second - second of date that will be checked
	 * @param {?Number} millisecond - millisecond of date that will be checked
	 * @returns {Boolean} if is valid, returns true
	 */
	PersianDate.prototype.isValid = function (
		year,
		month,
		day,
		hour,
		minute,
		second,
		millisecond
	) {
		if (this.error) return false;
		return (
			this.isValidDate(year, month, day) &&
			this.isValidTime(hour, minute, second, millisecond)
		);
	};

	/**
	 * checks the persian date
	 * @param {?Number} year - year of date that will be checked
	 * @param {?Number} month - month of date that will be checked
	 * @param {?Number} day - day of date that will be checked
	 * @returns {Boolean} if is valid date, returns true
	 */
	PersianDate.prototype.isValidDate = function (
		year = this.d.year,
		month = this.d.month,
		day = this.d.date
	) {
		if (this.error) return false;
		return (0,_comparison__WEBPACK_IMPORTED_MODULE_5__.isValidDate)(this.c, year, month, day);
	};

	/**
	 * checks the time
	 * @param {?Number} hour - hour of date that will be checked
	 * @param {?Number} minute - minute of date that will be checked
	 * @param {?Number} second - second of date that will be checked
	 * @param {?Number} millisecond - millisecond of date that will be checked
	 * @returns {Boolean} if is valid time, returns true
	 */
	PersianDate.prototype.isValidTime = function (
		hour = this.d.hour,
		minute = this.d.minute,
		second = this.d.second,
		millisecond = this.d.millisecond
	) {
		if (this.error) return false;
		return (0,_comparison__WEBPACK_IMPORTED_MODULE_5__.isValidTime)(hour, minute, second, millisecond);
	};

	/**
	 * checks this date is the same to another date
	 * @since 1.1.0
	 * @param {PersianDate|Date|String|Array|Object|Number} year - this param must be PersianDate or string or array or Object from date or year
	 * @param {String|Number} year.y - year of date
	 * @param {Null|String|Number} year.year - year of date
	 * @param {Null|String|Number} year.years - year of date
	 * @param {Null|String|Number} year.M - month of date
	 * @param {Null|String|Number} year.month - month of date
	 * @param {Null|String|Number} year.months - month of date
	 * @param {Null|String|Number} year.d - day of date
	 * @param {Null|String|Number} year.day - day of date
	 * @param {Null|String|Number} year.days - day of date
	 * @param {Null|String|Number} year.date - day of date
	 * @param {Null|String|Number} year.h - hour of date
	 * @param {Null|String|Number} year.hour - hour of date
	 * @param {Null|String|Number} year.hours - hour of date
	 * @param {Null|String|Number} year.m - minute of date
	 * @param {Null|String|Number} year.minute - minute of date
	 * @param {Null|String|Number} year.minutes - minute of date
	 * @param {Null|String|Number} year.s - second of date
	 * @param {Null|String|Number} year.second - second of date
	 * @param {Null|String|Number} year.seconds - second of date
	 * @param {Null|String|Number} year.ms - millisecond of date
	 * @param {Null|String|Number} year.millisecond - millisecond of date
	 * @param {Null|String|Number} year.milliseconds - millisecond of date
	 * @param {Null|Number|String} month month of date
	 * @param {Null|Number|String} day day of date
	 * @param {Null|Number|String} hour hour of date
	 * @param {Null|Number|String} minute minute of date
	 * @param {Null|Number|String} second second of date
	 * @param {Null|Number|String} millisecond millisecond of date
	 * @returns {‌Boolean} if date valid, return true of false
	 */
	PersianDate.prototype.isSame = function () {
		if (this.error) return false;
		return _comparison__WEBPACK_IMPORTED_MODULE_5__.isSame.call(this, ...arguments);
	};

	/**
	 * checks this date is before the another date
	 * @since 1.2.0
	 * @param {PersianDate|Date|String|Array|Object|Number} year - this param must be PersianDate or string or array or Object from date or year
	 * @param {String|Number} year.y - year of date
	 * @param {Null|String|Number} year.year - year of date
	 * @param {Null|String|Number} year.years - year of date
	 * @param {Null|String|Number} year.M - month of date
	 * @param {Null|String|Number} year.month - month of date
	 * @param {Null|String|Number} year.months - month of date
	 * @param {Null|String|Number} year.d - day of date
	 * @param {Null|String|Number} year.day - day of date
	 * @param {Null|String|Number} year.days - day of date
	 * @param {Null|String|Number} year.date - day of date
	 * @param {Null|String|Number} year.h - hour of date
	 * @param {Null|String|Number} year.hour - hour of date
	 * @param {Null|String|Number} year.hours - hour of date
	 * @param {Null|String|Number} year.m - minute of date
	 * @param {Null|String|Number} year.minute - minute of date
	 * @param {Null|String|Number} year.minutes - minute of date
	 * @param {Null|String|Number} year.s - second of date
	 * @param {Null|String|Number} year.second - second of date
	 * @param {Null|String|Number} year.seconds - second of date
	 * @param {Null|String|Number} year.ms - millisecond of date
	 * @param {Null|String|Number} year.millisecond - millisecond of date
	 * @param {Null|String|Number} year.milliseconds - millisecond of date
	 * @param {Null|Number|String} month month of date
	 * @param {Null|Number|String} day day of date
	 * @param {Null|Number|String} hour hour of date
	 * @param {Null|Number|String} minute minute of date
	 * @param {Null|Number|String} second second of date
	 * @param {Null|Number|String} millisecond millisecond of date
	 * @returns {‌Boolean} if date valid, return true of false
	 */
	PersianDate.prototype.isBefore = function () {
		if (this.error) return false;
		return _base__WEBPACK_IMPORTED_MODULE_0__.compare.call(this, arguments, "<");
	};

	/**
	 * checks this date is after the another date
	 * @since 1.2.0
	 * @param {PersianDate|Date|String|Array|Object|Number} year - this param must be PersianDate or string or array or Object from date or year
	 * @param {String|Number} year.y - year of date
	 * @param {Null|String|Number} year.year - year of date
	 * @param {Null|String|Number} year.years - year of date
	 * @param {Null|String|Number} year.M - month of date
	 * @param {Null|String|Number} year.month - month of date
	 * @param {Null|String|Number} year.months - month of date
	 * @param {Null|String|Number} year.d - day of date
	 * @param {Null|String|Number} year.day - day of date
	 * @param {Null|String|Number} year.days - day of date
	 * @param {Null|String|Number} year.date - day of date
	 * @param {Null|String|Number} year.h - hour of date
	 * @param {Null|String|Number} year.hour - hour of date
	 * @param {Null|String|Number} year.hours - hour of date
	 * @param {Null|String|Number} year.m - minute of date
	 * @param {Null|String|Number} year.minute - minute of date
	 * @param {Null|String|Number} year.minutes - minute of date
	 * @param {Null|String|Number} year.s - second of date
	 * @param {Null|String|Number} year.second - second of date
	 * @param {Null|String|Number} year.seconds - second of date
	 * @param {Null|String|Number} year.ms - millisecond of date
	 * @param {Null|String|Number} year.millisecond - millisecond of date
	 * @param {Null|String|Number} year.milliseconds - millisecond of date
	 * @param {Null|Number|String} month month of date
	 * @param {Null|Number|String} day day of date
	 * @param {Null|Number|String} hour hour of date
	 * @param {Null|Number|String} minute minute of date
	 * @param {Null|Number|String} second second of date
	 * @param {Null|Number|String} millisecond millisecond of date
	 * @returns {‌Boolean} if date valid, return true of false
	 */
	PersianDate.prototype.isAfter = function () {
		if (this.error) return false;
		return _base__WEBPACK_IMPORTED_MODULE_0__.compare.call(this, arguments, ">");
	};

	/**
	 * checks this date is same or before the another date
	 * @since 1.2.0
	 * @param {PersianDate|Date|String|Array|Object|Number} year - this param must be PersianDate or string or array or Object from date or year
	 * @param {String|Number} year.y - year of date
	 * @param {Null|String|Number} year.year - year of date
	 * @param {Null|String|Number} year.years - year of date
	 * @param {Null|String|Number} year.M - month of date
	 * @param {Null|String|Number} year.month - month of date
	 * @param {Null|String|Number} year.months - month of date
	 * @param {Null|String|Number} year.d - day of date
	 * @param {Null|String|Number} year.day - day of date
	 * @param {Null|String|Number} year.days - day of date
	 * @param {Null|String|Number} year.date - day of date
	 * @param {Null|String|Number} year.h - hour of date
	 * @param {Null|String|Number} year.hour - hour of date
	 * @param {Null|String|Number} year.hours - hour of date
	 * @param {Null|String|Number} year.m - minute of date
	 * @param {Null|String|Number} year.minute - minute of date
	 * @param {Null|String|Number} year.minutes - minute of date
	 * @param {Null|String|Number} year.s - second of date
	 * @param {Null|String|Number} year.second - second of date
	 * @param {Null|String|Number} year.seconds - second of date
	 * @param {Null|String|Number} year.ms - millisecond of date
	 * @param {Null|String|Number} year.millisecond - millisecond of date
	 * @param {Null|String|Number} year.milliseconds - millisecond of date
	 * @param {Null|Number|String} month month of date
	 * @param {Null|Number|String} day day of date
	 * @param {Null|Number|String} hour hour of date
	 * @param {Null|Number|String} minute minute of date
	 * @param {Null|Number|String} second second of date
	 * @param {Null|Number|String} millisecond millisecond of date
	 * @returns {‌Boolean} if date valid, return true of false
	 */
	PersianDate.prototype.isSameOrBefore = function () {
		if (this.error) return false;
		return _base__WEBPACK_IMPORTED_MODULE_0__.compare.call(this, arguments, "<=");
	};

	/**
	 * checks this date is same or after the another date
	 * @since 1.2.0
	 * @param {PersianDate|Date|String|Array|Object|Number} year - this param must be PersianDate or string or array or Object from date or year
	 * @param {String|Number} year.y - year of date
	 * @param {Null|String|Number} year.year - year of date
	 * @param {Null|String|Number} year.years - year of date
	 * @param {Null|String|Number} year.M - month of date
	 * @param {Null|String|Number} year.month - month of date
	 * @param {Null|String|Number} year.months - month of date
	 * @param {Null|String|Number} year.d - day of date
	 * @param {Null|String|Number} year.day - day of date
	 * @param {Null|String|Number} year.days - day of date
	 * @param {Null|String|Number} year.date - day of date
	 * @param {Null|String|Number} year.h - hour of date
	 * @param {Null|String|Number} year.hour - hour of date
	 * @param {Null|String|Number} year.hours - hour of date
	 * @param {Null|String|Number} year.m - minute of date
	 * @param {Null|String|Number} year.minute - minute of date
	 * @param {Null|String|Number} year.minutes - minute of date
	 * @param {Null|String|Number} year.s - second of date
	 * @param {Null|String|Number} year.second - second of date
	 * @param {Null|String|Number} year.seconds - second of date
	 * @param {Null|String|Number} year.ms - millisecond of date
	 * @param {Null|String|Number} year.millisecond - millisecond of date
	 * @param {Null|String|Number} year.milliseconds - millisecond of date
	 * @param {Null|Number|String} month month of date
	 * @param {Null|Number|String} day day of date
	 * @param {Null|Number|String} hour hour of date
	 * @param {Null|Number|String} minute minute of date
	 * @param {Null|Number|String} second second of date
	 * @param {Null|Number|String} millisecond millisecond of date
	 * @returns {‌Boolean} if date valid, return true of false
	 */
	PersianDate.prototype.isSameOrAfter = function () {
		if (this.error) return false;
		return _base__WEBPACK_IMPORTED_MODULE_0__.compare.call(this, arguments, ">=");
	};

	/**
	 * checks this date is between the another dates
	 * @since 1.3.0
	 * @param {PersianDate|Date|String|Array|Object} from - this param must be PersianDate or string or array or Object from date
	 * @param {String|Number} from.y - year of date
	 * @param {Null|String|Number} from.year - year of date
	 * @param {Null|String|Number} from.years - year of date
	 * @param {Null|String|Number} from.M - month of date
	 * @param {Null|String|Number} from.month - month of date
	 * @param {Null|String|Number} from.months - month of date
	 * @param {Null|String|Number} from.d - day of date
	 * @param {Null|String|Number} from.day - day of date
	 * @param {Null|String|Number} from.days - day of date
	 * @param {Null|String|Number} from.date - day of date
	 * @param {Null|String|Number} from.h - hour of date
	 * @param {Null|String|Number} from.hour - hour of date
	 * @param {Null|String|Number} from.hours - hour of date
	 * @param {Null|String|Number} from.m - minute of date
	 * @param {Null|String|Number} from.minute - minute of date
	 * @param {Null|String|Number} from.minutes - minute of date
	 * @param {Null|String|Number} from.s - second of date
	 * @param {Null|String|Number} from.second - second of date
	 * @param {Null|String|Number} from.seconds - second of date
	 * @param {Null|String|Number} from.ms - millisecond of date
	 * @param {Null|String|Number} from.millisecond - millisecond of date
	 * @param {Null|String|Number} from.milliseconds - millisecond of date
	 * @param {PersianDate|Date|String|Array|Object} to - this param must be PersianDate or string or array or Object from date
	 * @param {String|Number} to.y - year of date
	 * @param {Null|String|Number} to.year - year of date
	 * @param {Null|String|Number} to.years - year of date
	 * @param {Null|String|Number} to.M - month of date
	 * @param {Null|String|Number} to.month - month of date
	 * @param {Null|String|Number} to.months - month of date
	 * @param {Null|String|Number} to.d - day of date
	 * @param {Null|String|Number} to.day - day of date
	 * @param {Null|String|Number} to.days - day of date
	 * @param {Null|String|Number} to.date - day of date
	 * @param {Null|String|Number} to.h - hour of date
	 * @param {Null|String|Number} to.hour - hour of date
	 * @param {Null|String|Number} to.hours - hour of date
	 * @param {Null|String|Number} to.m - minute of date
	 * @param {Null|String|Number} to.minute - minute of date
	 * @param {Null|String|Number} to.minutes - minute of date
	 * @param {Null|String|Number} to.s - second of date
	 * @param {Null|String|Number} to.second - second of date
	 * @param {Null|String|Number} to.seconds - second of date
	 * @param {Null|String|Number} to.ms - millisecond of date
	 * @param {Null|String|Number} to.millisecond - millisecond of date
	 * @param {Null|String|Number} to.milliseconds - millisecond of date
	 * @param {String} method - determines that consider the dates themselves
	 * @returns {‌Boolean} if date valid, return true or false
	 */
	PersianDate.prototype.isBetween = function (from, to, method = "()") {
		if (this.error) return false;
		return _comparison__WEBPACK_IMPORTED_MODULE_5__.isBetween.call(this, from, to, method);
	};

	/**
	 * checks date is a native js Date object
	 * @since 1.3.0
	 * @param {*} date date that must be checked
	 * @returns {Boolean} if date is a native js Date, return true
	 */
	PersianDate.prototype.isDate = _comparison__WEBPACK_IMPORTED_MODULE_5__.isDate;

	/**
	 * checks date is a PersianDate object
	 * @since 1.3.0
	 * @param {*} date date that must be checked
	 * @returns {Boolean} if date is a PersianDate, return true
	 */
	PersianDate.prototype.isPersianDate = _comparison__WEBPACK_IMPORTED_MODULE_5__.isPersianDate;

	if (calendarVal) this.calendar(calendarVal);
	if (dateVal) {
		if (calendarVal && calendarVal[0] == "j") this.fromJalali(dateVal);
		else this.fromGregorian(dateVal);
	} else this.now();
};

////////////////////--------- statics  ---------/////////////////////

/**
 * receives year and determined that is leap year or not
 * @static
 * @since 2.3.0
 * @param {"jalali"|"gregorian"} calendar - the calendar
 * @param {Number} year - the year to be determined is a leap or not
 * @returns {Boolean} if is leap year, returns true
 */
PersianDate.isLeapYear = _comparison__WEBPACK_IMPORTED_MODULE_5__.isLeapYear;

/**
 * checks date is a native js Date object
 * @static
 * @since 2.3.0
 * @param {*} date date that must be checked
 * @returns {Boolean} if date is a native js Date, return true
 */
PersianDate.isDate = _comparison__WEBPACK_IMPORTED_MODULE_5__.isDate;

/**
 * checks date is a PersianDate object
 * @static
 * @since 2.3.0
 * @param {*} date date that must be checked
 * @returns {Boolean} if date is a PersianDate, return true
 */
PersianDate.isPersianDate = _comparison__WEBPACK_IMPORTED_MODULE_5__.isPersianDate;

/**
 * checks the date and time
 * @static
 * @since 2.4.0
 * @param {"jalali"|"gregorian"} calendar - the calendar
 * @param {?Number} year - year of date that will be checked
 * @param {?Number} month - month of date that will be checked
 * @param {?Number} day - day of date that will be checked
 * @param {?Number} hour - hour of date that will be checked
 * @param {?Number} minute - minute of date that will be checked
 * @param {?Number} second - second of date that will be checked
 * @param {?Number} millisecond - millisecond of date that will be checked
 * @returns {Boolean} if is valid, returns true
 */
PersianDate.isValid = _comparison__WEBPACK_IMPORTED_MODULE_5__.isValid;

/**
 * checks the date
 * @static
 * @since 2.4.0
 * @param {"jalali"|"gregorian"} calendar - the calendar
 * @param {?Number} year - year of date that will be checked
 * @param {?Number} month - month of date that will be checked
 * @param {?Number} day - day of date that will be checked
 * @returns {Boolean} if is valid date, returns true
 */
PersianDate.isValidDate = _comparison__WEBPACK_IMPORTED_MODULE_5__.isValidDate;

/**
 * checks the time
 * @static
 * @since 2.4.0
 * @param {?Number} hour - hour of date that will be checked
 * @param {?Number} minute - minute of date that will be checked
 * @param {?Number} second - second of date that will be checked
 * @param {?Number} millisecond - millisecond of date that will be checked
 * @returns {Boolean} if is valid time, returns true
 */
PersianDate.isValidTime = _comparison__WEBPACK_IMPORTED_MODULE_5__.isValidTime;

/**
 * returns number of days in month
 * @param {"jalali"|"gregorian"} calendar - the calendar
 * @param {?Number} year - year of date that returns number of days in month
 * @param {?Number} month - month of date that returns number of days in month
 * @returns {Number} number of days in month
 * @throws {String} if date invalid return error message
 */
PersianDate.getDaysInMonth = _set_get__WEBPACK_IMPORTED_MODULE_2__.getDaysInMonth;

//TODO: add localization

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersianDate);

////////////////////- Email: Alibeikialireza@gmail.com -////////////////////
////////////////////--------- Have A Good Day ---------/////////////////////


/***/ }),

/***/ "./src/add-sub/addDay.js":
/*!*******************************!*\
  !*** ./src/add-sub/addDay.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDay": () => (/* binding */ addDay)
/* harmony export */ });
function addDay(day) {
	if (day < 0)
		// if the number was negative, send to subDay method
		return this.subDay(Math.abs(day));
	day = +day; //plus sign before a variable, convert variable to int

	const dayToStartNextMonth = this.getDaysInMonth() - this.d.date + 1; // dayToStartNextMonth -> Number of day to start of next month
	if (dayToStartNextMonth > day) {
		this.d.date += day;
	} else {
		this.addMonth(1, false);
		this.d.date = 1;
		day -= dayToStartNextMonth;
		let daysInMonth = this.getDaysInMonth();
		while (day >= daysInMonth) {
			day -= daysInMonth;
			this.addMonth(1, false);
			daysInMonth = this.getDaysInMonth();
		}
		if (day != 0) {
			this.d.date += day;
		}
	}

	return this;
}


/***/ }),

/***/ "./src/add-sub/addHour.js":
/*!********************************!*\
  !*** ./src/add-sub/addHour.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addHour": () => (/* binding */ addHour)
/* harmony export */ });
function addHour(hour) {
	if (hour < 0)
		// if the number was negative, send to subHour method
		return this.subHour(Math.abs(hour));
	hour = +hour; //plus sign before a variable, convert variable to int
	while (hour >= 24) {
		hour -= 24;
		this.addDay(1, false);
	}
	const hourToNextDay = 24 - this.d.hour; // hourToNextDay -> Number of hour to start of next day
	if (hour >= hourToNextDay) {
		this.addDay(1, false);
		hour -= hourToNextDay;
		this.d.hour = hour;
	} else this.d.hour += hour;

	return this;
}


/***/ }),

/***/ "./src/add-sub/addMillisecond.js":
/*!***************************************!*\
  !*** ./src/add-sub/addMillisecond.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addMillisecond": () => (/* binding */ addMillisecond)
/* harmony export */ });
function addMillisecond(millisecond) {
	if (millisecond < 0)
		// if the number was negative, send to subMillisecond method
		return this.subMillisecond(Math.abs(millisecond));
	millisecond = +millisecond; //plus sign before a variable, convert variable to int
	while (millisecond >= 1000) {
		this.addSecond(1, false);
		millisecond -= 1000;
	}
	const millisecondToNextSecond = 1000 - this.d.millisecond; // millisecondToNextSecond -> Number of milllisecond to start of next second
	if (millisecond >= millisecondToNextSecond) {
		this.addSecond(1, false);
		millisecond -= millisecondToNextSecond;
		this.d.millisecond = millisecond;
	} else this.d.millisecond += millisecond;

	return this;
}


/***/ }),

/***/ "./src/add-sub/addMinute.js":
/*!**********************************!*\
  !*** ./src/add-sub/addMinute.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addMinute": () => (/* binding */ addMinute)
/* harmony export */ });
function addMinute(minute) {
	if (minute < 0)
		// if the number was negative, send to subMinute method
		return this.subMinute(Math.abs(minute));
	minute = +minute; //plus sign before a variable, convert variable to int
	while (minute >= 60) {
		this.addHour(1, false);
		minute -= 60;
	}
	const minuteToNextHour = 60 - this.d.minute; // minuteToNextHour -> Number of minute to start of next hour
	if (minute >= minuteToNextHour) {
		this.addHour(1, false);
		minute -= minuteToNextHour;
		this.d.minute = minute;
	} else this.d.minute += minute;

	return this;
}


/***/ }),

/***/ "./src/add-sub/addMonth.js":
/*!*********************************!*\
  !*** ./src/add-sub/addMonth.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addMonth": () => (/* binding */ addMonth)
/* harmony export */ });
function addMonth(month, checkDate) {
	if (month < 0)
		// if the number was negative, send to subMonth method
		return this.subMonth(Math.abs(month));
	month = +month; // plus sign before a variable, convert variable to int

	const monthToStartNewYear = 12 - this.d.month + 1; // monthToStartNewYear -> Number of month to start of new year
	if (monthToStartNewYear > month) {
		this.d.month += month;
	} else {
		this.addYear(1, false);
		this.d.month = 1;
		month -= monthToStartNewYear;
		while (month >= 12) {
			month -= 12;
			this.addYear(1, false);
		}
		if (month != 0) {
			this.d.month += month;
		}
	}

	while (checkDate && !this.isValidDate()) this.subDay(1, false);
	return this;
}


/***/ }),

/***/ "./src/add-sub/addQuarter.js":
/*!***********************************!*\
  !*** ./src/add-sub/addQuarter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addQuarter": () => (/* binding */ addQuarter)
/* harmony export */ });
function addQuarter(quarter, checkDate) {
	// if the number was negative, send to subQuarter method
	if (quarter < 0) return this.subQuarter(Math.abs(quarter));
	return this.addMonth(+quarter * 3, checkDate);
}


/***/ }),

/***/ "./src/add-sub/addSecond.js":
/*!**********************************!*\
  !*** ./src/add-sub/addSecond.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addSecond": () => (/* binding */ addSecond)
/* harmony export */ });
function addSecond(second) {
	if (second < 0)
		// if the number was negative, send to subSecond method
		return this.subSecond(Math.abs(second));
	second = +second; //plus sign before a variable, convert variable to int
	while (second >= 60) {
		this.addMinute(1, false);
		second -= 60;
	}
	const secondToNextMinute = 60 - this.d.second; // secondToNextMinute -> Number of second to start of next Minute
	if (second >= secondToNextMinute) {
		this.addMinute(1, false);
		second -= secondToNextMinute;
		this.d.second = second;
	} else this.d.second += second;

	return this;
}


/***/ }),

/***/ "./src/add-sub/addWeek.js":
/*!********************************!*\
  !*** ./src/add-sub/addWeek.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addWeek": () => (/* binding */ addWeek)
/* harmony export */ });
function addWeek(week, checkDate) {
	// if the number was negative, send to subWeek method
	if (week < 0) return this.subWeek(Math.abs(week));
	return this.addDay(+week * 7, checkDate);
}


/***/ }),

/***/ "./src/add-sub/addYear.js":
/*!********************************!*\
  !*** ./src/add-sub/addYear.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addYear": () => (/* binding */ addYear)
/* harmony export */ });
function addYear(year, checkDate) {
	// if the number was negative, send to subYear method
	if (year < 0) return this.subYear(Math.abs(year));
	this.d.year += +year; //plus sign before a variable, convert variable to int
	while (checkDate && !this.isValidDate()) this.subDay(1, false);
	return this;
}


/***/ }),

/***/ "./src/add-sub/index.js":
/*!******************************!*\
  !*** ./src/add-sub/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addYear": () => (/* reexport safe */ _addYear__WEBPACK_IMPORTED_MODULE_0__.addYear),
/* harmony export */   "addQuarter": () => (/* reexport safe */ _addQuarter__WEBPACK_IMPORTED_MODULE_1__.addQuarter),
/* harmony export */   "addMonth": () => (/* reexport safe */ _addMonth__WEBPACK_IMPORTED_MODULE_2__.addMonth),
/* harmony export */   "addWeek": () => (/* reexport safe */ _addWeek__WEBPACK_IMPORTED_MODULE_3__.addWeek),
/* harmony export */   "addDay": () => (/* reexport safe */ _addDay__WEBPACK_IMPORTED_MODULE_4__.addDay),
/* harmony export */   "addHour": () => (/* reexport safe */ _addHour__WEBPACK_IMPORTED_MODULE_5__.addHour),
/* harmony export */   "addMinute": () => (/* reexport safe */ _addMinute__WEBPACK_IMPORTED_MODULE_6__.addMinute),
/* harmony export */   "addSecond": () => (/* reexport safe */ _addSecond__WEBPACK_IMPORTED_MODULE_7__.addSecond),
/* harmony export */   "addMillisecond": () => (/* reexport safe */ _addMillisecond__WEBPACK_IMPORTED_MODULE_8__.addMillisecond),
/* harmony export */   "subYear": () => (/* reexport safe */ _subYear__WEBPACK_IMPORTED_MODULE_9__.subYear),
/* harmony export */   "subQuarter": () => (/* reexport safe */ _subQuarter__WEBPACK_IMPORTED_MODULE_10__.subQuarter),
/* harmony export */   "subMonth": () => (/* reexport safe */ _subMonth__WEBPACK_IMPORTED_MODULE_11__.subMonth),
/* harmony export */   "subWeek": () => (/* reexport safe */ _subWeek__WEBPACK_IMPORTED_MODULE_12__.subWeek),
/* harmony export */   "subDay": () => (/* reexport safe */ _subDay__WEBPACK_IMPORTED_MODULE_13__.subDay),
/* harmony export */   "subHour": () => (/* reexport safe */ _subHour__WEBPACK_IMPORTED_MODULE_14__.subHour),
/* harmony export */   "subMinute": () => (/* reexport safe */ _subMinute__WEBPACK_IMPORTED_MODULE_15__.subMinute),
/* harmony export */   "subSecond": () => (/* reexport safe */ _subSecond__WEBPACK_IMPORTED_MODULE_16__.subSecond),
/* harmony export */   "subMillisecond": () => (/* reexport safe */ _subMillisecond__WEBPACK_IMPORTED_MODULE_17__.subMillisecond)
/* harmony export */ });
/* harmony import */ var _addYear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addYear */ "./src/add-sub/addYear.js");
/* harmony import */ var _addQuarter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addQuarter */ "./src/add-sub/addQuarter.js");
/* harmony import */ var _addMonth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addMonth */ "./src/add-sub/addMonth.js");
/* harmony import */ var _addWeek__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addWeek */ "./src/add-sub/addWeek.js");
/* harmony import */ var _addDay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addDay */ "./src/add-sub/addDay.js");
/* harmony import */ var _addHour__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addHour */ "./src/add-sub/addHour.js");
/* harmony import */ var _addMinute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addMinute */ "./src/add-sub/addMinute.js");
/* harmony import */ var _addSecond__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addSecond */ "./src/add-sub/addSecond.js");
/* harmony import */ var _addMillisecond__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addMillisecond */ "./src/add-sub/addMillisecond.js");
/* harmony import */ var _subYear__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./subYear */ "./src/add-sub/subYear.js");
/* harmony import */ var _subQuarter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./subQuarter */ "./src/add-sub/subQuarter.js");
/* harmony import */ var _subMonth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./subMonth */ "./src/add-sub/subMonth.js");
/* harmony import */ var _subWeek__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./subWeek */ "./src/add-sub/subWeek.js");
/* harmony import */ var _subDay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./subDay */ "./src/add-sub/subDay.js");
/* harmony import */ var _subHour__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./subHour */ "./src/add-sub/subHour.js");
/* harmony import */ var _subMinute__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./subMinute */ "./src/add-sub/subMinute.js");
/* harmony import */ var _subSecond__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./subSecond */ "./src/add-sub/subSecond.js");
/* harmony import */ var _subMillisecond__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./subMillisecond */ "./src/add-sub/subMillisecond.js");





















/***/ }),

/***/ "./src/add-sub/subDay.js":
/*!*******************************!*\
  !*** ./src/add-sub/subDay.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "subDay": () => (/* binding */ subDay)
/* harmony export */ });
function subDay(day) {
	day = Math.abs(day);
	let pastDays = this.d.date; // pastDays -> Number of days that is past
	if (pastDays > day) {
		this.d.date -= day;
	} else {
		this.subMonth(1, false);
		let daysInMonth = this.getDaysInMonth();
		this.d.date = daysInMonth;
		day -= pastDays;
		while (day >= daysInMonth) {
			day -= daysInMonth;
			this.subMonth(1, false);
			daysInMonth = this.getDaysInMonth();
		}
		this.d.date = daysInMonth - day;
	}

	return this;
}


/***/ }),

/***/ "./src/add-sub/subHour.js":
/*!********************************!*\
  !*** ./src/add-sub/subHour.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "subHour": () => (/* binding */ subHour)
/* harmony export */ });
function subHour(hour) {
	hour = Math.abs(hour);
	while (hour >= 24) {
		hour -= 24;
		this.subDay(1, false);
	}
	const pastHours = this.d.hour; // pastHours -> Number of hours that is past
	if (hour > pastHours) {
		this.subDay(1, false);
		hour -= pastHours;
		this.d.hour = 24 - hour;
	} else this.d.hour -= hour;

	return this;
}


/***/ }),

/***/ "./src/add-sub/subMillisecond.js":
/*!***************************************!*\
  !*** ./src/add-sub/subMillisecond.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "subMillisecond": () => (/* binding */ subMillisecond)
/* harmony export */ });
function subMillisecond(millisecond) {
	millisecond = Math.abs(millisecond);
	while (millisecond >= 1000) {
		millisecond -= 1000;
		this.subSecond(1, false);
	}
	const pastMilliseconds = this.d.millisecond; // pastMilliseconds -> Number of milliseconds that is past
	if (millisecond > pastMilliseconds) {
		this.subSecond(1, false);
		millisecond -= pastMilliseconds;
		this.d.millisecond = 1000 - millisecond;
	} else this.d.millisecond -= millisecond;

	return this;
}


/***/ }),

/***/ "./src/add-sub/subMinute.js":
/*!**********************************!*\
  !*** ./src/add-sub/subMinute.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "subMinute": () => (/* binding */ subMinute)
/* harmony export */ });
function subMinute(minute) {
	minute = Math.abs(minute);
	while (minute >= 60) {
		minute -= 60;
		this.subHour(1, false);
	}
	const pastMinute = this.d.minute; // pastMinutes -> Number of minutes that is past
	if (minute > pastMinute) {
		this.subHour(1, false);
		minute -= pastMinute;
		this.d.minute = 60 - minute;
	} else this.d.minute -= minute;

	return this;
}


/***/ }),

/***/ "./src/add-sub/subMonth.js":
/*!*********************************!*\
  !*** ./src/add-sub/subMonth.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "subMonth": () => (/* binding */ subMonth)
/* harmony export */ });
function subMonth(month, checkDate) {
	month = Math.abs(month); //plus sign before a variable, convert variable to int
	const pastMonth = this.d.month; //pastMonth -> Number of month that is past
	if (pastMonth > month) {
		this.d.month -= month;
	} else {
		this.subYear(1, false);
		this.d.month = 12;
		month -= pastMonth;
		while (month >= 12) {
			this.subYear(1, false);
			month -= 12;
		}
		if (month != 0) {
			this.d.month -= month;
		}
	}

	while (checkDate && !this.isValidDate()) this.subDay(1, false);
	return this;
}


/***/ }),

/***/ "./src/add-sub/subQuarter.js":
/*!***********************************!*\
  !*** ./src/add-sub/subQuarter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "subQuarter": () => (/* binding */ subQuarter)
/* harmony export */ });
function subQuarter(quarter, checkDate) {
	quarter = Math.abs(quarter);
	return this.subMonth(quarter * 3, checkDate);
}


/***/ }),

/***/ "./src/add-sub/subSecond.js":
/*!**********************************!*\
  !*** ./src/add-sub/subSecond.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "subSecond": () => (/* binding */ subSecond)
/* harmony export */ });
function subSecond(second) {
	second = Math.abs(second);
	while (second >= 60) {
		second -= 60;
		this.subMinute(1, false);
	}
	const pastSeconds = this.d.second; // pastSeconds -> Number of seconds that is past
	if (second > pastSeconds) {
		this.subMinute(1, false);
		second -= pastSeconds;
		this.d.second = 60 - second;
	} else this.d.second -= second;

	return this;
}


/***/ }),

/***/ "./src/add-sub/subWeek.js":
/*!********************************!*\
  !*** ./src/add-sub/subWeek.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "subWeek": () => (/* binding */ subWeek)
/* harmony export */ });
function subWeek(week, checkDate) {
	week = Math.abs(week);
	return this.subDay(week * 7, checkDate);
}


/***/ }),

/***/ "./src/add-sub/subYear.js":
/*!********************************!*\
  !*** ./src/add-sub/subYear.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "subYear": () => (/* binding */ subYear)
/* harmony export */ });
function subYear(year, checkDate) {
	this.d.year -= Math.abs(year);
	while (checkDate && !this.isValidDate()) this.subDay(1, false);
	return this;
}


/***/ }),

/***/ "./src/base/addPrefix.js":
/*!*******************************!*\
  !*** ./src/base/addPrefix.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPrefix": () => (/* binding */ addPrefix)
/* harmony export */ });
/**
 * add a prefix to the text in the number of characters that the text has less
 * @param {String|Number} text a text need prefix
 * @param {Number} length length of text
 * @param {String} [prefix=0] - string for add before of text
 * @returns {String} text with or wihtout prefix
 */
const addPrefix = (text, length, prefix = "0") => {
	return prefix.repeat(length - String(text).length) + text;
};


/***/ }),

/***/ "./src/base/compare.js":
/*!*****************************!*\
  !*** ./src/base/compare.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compare": () => (/* binding */ compare)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/base/index.js");


/**
 * compare the dates
 * @since 2.0.0
 * @param {PersianDate|Date|String|Array|Object} date - the date
 * @param {'>'|'>='|'<'|'<='|'=='} operator - the operator for compare
 * @returns {‌Boolean} if date valid, return true of false
 */
const compare = function (date, operator) {
	date = (0,_base__WEBPACK_IMPORTED_MODULE_0__.typesToArray)(this.c, ...date);

	if (this.isValid(...date))
		return eval(
			"this.timestamp()" + operator + "this.clone().parse(...date).timestamp()"
		);
	return false;
};


/***/ }),

/***/ "./src/base/error.js":
/*!***************************!*\
  !*** ./src/base/error.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "error": () => (/* binding */ error)
/* harmony export */ });
/**
 * show error
 * @since 3.0.0
 * @param {String} msg - the message for error
 */
const error = (msg) => {
	console.error(msg);
};


/***/ }),

/***/ "./src/base/getDayLabel.js":
/*!*********************************!*\
  !*** ./src/base/getDayLabel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDayLabel": () => (/* binding */ getDayLabel)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "./src/base/error.js");
/* harmony import */ var _comparison_isDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comparison/isDate */ "./src/comparison/isDate.js");




/**
 * get label of day
 * @param {Date} date - the date that received day
 * @param {'jalali'|'gregorian'} calendar - the calendar
 * @returns {String} returns day label
 * @example Saturday | شنبه
 */
const getDayLabel = function (date = new Date(), calendar = "jalali") {
	if ((0,_comparison_isDate__WEBPACK_IMPORTED_MODULE_2__.isDate)(date)) return _utils__WEBPACK_IMPORTED_MODULE_0__.CALENDAR[calendar]["days"]["label"][date.getDay()];
	return (0,_error__WEBPACK_IMPORTED_MODULE_1__.error)("the first param must be instance of Date.");
};


/***/ }),

/***/ "./src/base/getDayOfWeek.js":
/*!**********************************!*\
  !*** ./src/base/getDayOfWeek.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDayOfWeek": () => (/* binding */ getDayOfWeek)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "./src/base/error.js");
/* harmony import */ var _comparison_isDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comparison/isDate */ "./src/comparison/isDate.js");




/**
 * get the day of the week
 * @param {Date} date - the date that received day of week
 * @param {'jalali', 'gregorian'} calendar - the calendar
 * @param {'standard','array'} mode - standard mode start from 1 and array mode start from 0
 * @returns {Number|String} the number of the day of week
 */
const getDayOfWeek = (
	date = new Date(),
	calendar = "jalali",
	mode = "standard"
) => {
	if ((0,_comparison_isDate__WEBPACK_IMPORTED_MODULE_2__.isDate)(date)) {
		// if the year was an instance of Date
		return (
			_utils__WEBPACK_IMPORTED_MODULE_0__.CALENDAR[calendar]["days"]["weekNumber"][date.getDay()] +
			(mode != "standard" ? 0 : 1)
		);
	}
	return (0,_error__WEBPACK_IMPORTED_MODULE_1__.error)("the first param must be instance of Date.");
};


/***/ }),

/***/ "./src/base/getDayOfYear.js":
/*!**********************************!*\
  !*** ./src/base/getDayOfYear.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDayOfYear": () => (/* binding */ getDayOfYear)
/* harmony export */ });
/* harmony import */ var _set_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../set-get */ "./src/set-get/index.js");


/**
 * get the day of the year
 * @param {Null|String|Number} year - the year of date
 * @param {Null|Number|String} month - the month of date that gives the day of the year
 * @param {Null|Number|String} day - the day of date that gives the day of the year
 * @param {Null|Number|String} calendar - the calendar
 * @returns {Number} the day of the year
 */
const getDayOfYear = (year, month, day, calendar) => {
	//plus sign before a variable, convert variable to int
	month = +month;
	day = +day;
	while (--month != 0) {
		day += (0,_set_get__WEBPACK_IMPORTED_MODULE_0__.getDaysInMonth)(calendar, year, month);
	}
	return day;
};


/***/ }),

/***/ "./src/base/getWeekOfYear.js":
/*!***********************************!*\
  !*** ./src/base/getWeekOfYear.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeekOfYear": () => (/* binding */ getWeekOfYear)
/* harmony export */ });
const dayOfYearFormat = (calendar) => {
	switch (calendar[0]) {
		case "j":
			return "jd";
		default:
			return "d";
	}
};

/**
 * get the week of the year
 * @param {Null|Number|String} year - the year of date that gives the week of the year
 * @param {Null|Number|String} month - the month of date that gives the week of the year
 * @param {Null|Number|String} day - the day of date that gives the week of the year
 * @param {String} calendar - the calendar
 * @returns {Number} the week of the year
 */
const getWeekOfYear = function (year, month, day, calendar) {
	const firstOfYear = this.clone().calendar(calendar).parse(year);
	const firstOfYearDay = firstOfYear.date(dayOfYearFormat(calendar));
	const date = firstOfYear.clone().parse(year, month, day);
	if (firstOfYearDay > 3) firstOfYear.addDay(7 - firstOfYearDay);

	const weekNumber = Math.ceil(date.diff(firstOfYear, "date", true) / 7);

	const weeksInYear = date.clone().getWeeksInYear();
	return weekNumber > weeksInYear ? weeksInYear : weekNumber;
};


/***/ }),

/***/ "./src/base/gtj.js":
/*!*************************!*\
  !*** ./src/base/gtj.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gtj": () => (/* binding */ gtj)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _comparison__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comparison */ "./src/comparison/index.js");



/**
 * Gregorian to Jalali
 * @param {Null|Date|Number|String} [year=new Date()] - Gregorian year
 * @param {Null|Number|String} [month=1] - Gregorian month
 * @param {Null|Number|String} [day=1] - Gregorian day
 * @param {Null|Number|String} [hour=0] - Gregorian hour
 * @param {Null|Number|String} [minute=0] - Gregorian minute
 * @param {Null|Number|String} [second=0] - Gregorian second
 * @param {Null|Number|String} [millisecond=0] - Gregorian millisecond
 * @returns {Array} Jalali date
 */
const gtj = (year, month, day, hour, minute, second, millisecond) => {
	let date;
	if (!year) date = new Date();
	else if ((0,_comparison__WEBPACK_IMPORTED_MODULE_1__.isDate)(year))
		// if the year was an instance of Date
		date = year;
	else
		date = new Date(
			_utils__WEBPACK_IMPORTED_MODULE_0__.REGEX.isNumeric.test(year) ? year : 0,
			_utils__WEBPACK_IMPORTED_MODULE_0__.REGEX.isNumeric.test(month) ? month : 0,
			_utils__WEBPACK_IMPORTED_MODULE_0__.REGEX.isNumeric.test(day) ? day : 1,
			_utils__WEBPACK_IMPORTED_MODULE_0__.REGEX.isNumeric.test(hour) ? hour : 0,
			_utils__WEBPACK_IMPORTED_MODULE_0__.REGEX.isNumeric.test(minute) ? minute : 0,
			_utils__WEBPACK_IMPORTED_MODULE_0__.REGEX.isNumeric.test(second) ? second : 0,
			_utils__WEBPACK_IMPORTED_MODULE_0__.REGEX.isNumeric.test(millisecond) ? millisecond : 0
		);
	day = date.getDate();
	month = date.getMonth() + 1; // Because the output of getMonth() start from zero, add one
	year = date.getFullYear();
	hour = date.getHours();
	minute = date.getMinutes();
	second = date.getSeconds();
	millisecond = date.getMilliseconds();
	let jYear, jMonth, jDay;
	const pastDaysInMonth = [
		0,
		31,
		59,
		90,
		120,
		151,
		181,
		212,
		243,
		273,
		304,
		334,
	]; // Past days from the start of the year in each month
	if (year > 1600) {
		jYear = 979;
		year -= 1600;
	} else {
		jYear = 0;
		year -= 621;
	}
	const newYear = month > 2 ? year + 1 : year;
	let days =
		365 * year +
		parseInt((newYear + 3) / 4) -
		parseInt((newYear + 99) / 100) +
		parseInt((newYear + 399) / 400) -
		80 +
		day +
		pastDaysInMonth[month - 1];
	jYear += 33 * parseInt(days / 12053);
	days %= 12053;
	jYear += 4 * parseInt(days / 1461);
	days %= 1461;
	if (days > 365) {
		jYear += parseInt((days - 1) / 365);
		days = (days - 1) % 365;
	}
	jMonth =
		days < 186 ? 1 + parseInt(days / 31) : 7 + parseInt((days - 186) / 30);
	jDay = 1 + (days < 186 ? days % 31 : (days - 186) % 30);
	return [jYear, jMonth, jDay, hour, minute, second, millisecond];
};


/***/ }),

/***/ "./src/base/index.js":
/*!***************************!*\
  !*** ./src/base/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gtj": () => (/* reexport safe */ _gtj__WEBPACK_IMPORTED_MODULE_0__.gtj),
/* harmony export */   "jtg": () => (/* reexport safe */ _jtg__WEBPACK_IMPORTED_MODULE_1__.jtg),
/* harmony export */   "warn": () => (/* reexport safe */ _warn__WEBPACK_IMPORTED_MODULE_2__.warn),
/* harmony export */   "error": () => (/* reexport safe */ _error__WEBPACK_IMPORTED_MODULE_3__.error),
/* harmony export */   "invalid": () => (/* reexport safe */ _invalid__WEBPACK_IMPORTED_MODULE_4__.invalid),
/* harmony export */   "typesToArray": () => (/* reexport safe */ _typesToArray__WEBPACK_IMPORTED_MODULE_5__.typesToArray),
/* harmony export */   "ordinalNumber": () => (/* reexport safe */ _ordinalNumber__WEBPACK_IMPORTED_MODULE_6__.ordinalNumber),
/* harmony export */   "addPrefix": () => (/* reexport safe */ _addPrefix__WEBPACK_IMPORTED_MODULE_7__.addPrefix),
/* harmony export */   "setJalaliDate": () => (/* reexport safe */ _setJalaliDate__WEBPACK_IMPORTED_MODULE_8__.setJalaliDate),
/* harmony export */   "setGregorianDate": () => (/* reexport safe */ _setGregorianDate__WEBPACK_IMPORTED_MODULE_9__.setGregorianDate),
/* harmony export */   "getDayLabel": () => (/* reexport safe */ _getDayLabel__WEBPACK_IMPORTED_MODULE_10__.getDayLabel),
/* harmony export */   "getDayOfWeek": () => (/* reexport safe */ _getDayOfWeek__WEBPACK_IMPORTED_MODULE_11__.getDayOfWeek),
/* harmony export */   "getDayOfYear": () => (/* reexport safe */ _getDayOfYear__WEBPACK_IMPORTED_MODULE_12__.getDayOfYear),
/* harmony export */   "getWeekOfYear": () => (/* reexport safe */ _getWeekOfYear__WEBPACK_IMPORTED_MODULE_13__.getWeekOfYear),
/* harmony export */   "compare": () => (/* reexport safe */ _compare__WEBPACK_IMPORTED_MODULE_14__.compare),
/* harmony export */   "mathOperation": () => (/* reexport safe */ _mathOperation__WEBPACK_IMPORTED_MODULE_15__.mathOperation),
/* harmony export */   "isTimestamp": () => (/* reexport safe */ _isTimestamp__WEBPACK_IMPORTED_MODULE_16__.isTimestamp)
/* harmony export */ });
/* harmony import */ var _gtj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gtj */ "./src/base/gtj.js");
/* harmony import */ var _jtg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jtg */ "./src/base/jtg.js");
/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warn */ "./src/base/warn.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error */ "./src/base/error.js");
/* harmony import */ var _invalid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invalid */ "./src/base/invalid.js");
/* harmony import */ var _typesToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./typesToArray */ "./src/base/typesToArray.js");
/* harmony import */ var _ordinalNumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ordinalNumber */ "./src/base/ordinalNumber.js");
/* harmony import */ var _addPrefix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addPrefix */ "./src/base/addPrefix.js");
/* harmony import */ var _setJalaliDate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./setJalaliDate */ "./src/base/setJalaliDate.js");
/* harmony import */ var _setGregorianDate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./setGregorianDate */ "./src/base/setGregorianDate.js");
/* harmony import */ var _getDayLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getDayLabel */ "./src/base/getDayLabel.js");
/* harmony import */ var _getDayOfWeek__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./getDayOfWeek */ "./src/base/getDayOfWeek.js");
/* harmony import */ var _getDayOfYear__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getDayOfYear */ "./src/base/getDayOfYear.js");
/* harmony import */ var _getWeekOfYear__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./getWeekOfYear */ "./src/base/getWeekOfYear.js");
/* harmony import */ var _compare__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./compare */ "./src/base/compare.js");
/* harmony import */ var _mathOperation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mathOperation */ "./src/base/mathOperation.js");
/* harmony import */ var _isTimestamp__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./isTimestamp */ "./src/base/isTimestamp.js");



















/***/ }),

/***/ "./src/base/invalid.js":
/*!*****************************!*\
  !*** ./src/base/invalid.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "invalid": () => (/* binding */ invalid)
/* harmony export */ });
/**
 * make error and delete this.d
 * @param {String} errorText - Error Text
 * @returns {PersianDate} make error and return class
 */
const invalid = function (errorText) {
	delete this.d;
	this.error = errorText;
	return this;
};


/***/ }),

/***/ "./src/base/isTimestamp.js":
/*!*********************************!*\
  !*** ./src/base/isTimestamp.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isTimestamp": () => (/* binding */ isTimestamp)
/* harmony export */ });
/**
 * check the input is timestamp
 * @since 2.0.0
 * @param {Number|String} timestamp - input that must be checked
 * @returns {Boolean} if input was timestamp, return true
 */
const isTimestamp = (timestamp) => {
	return !isNaN(timestamp) && Math.floor(timestamp / 10000) > 0;
};


/***/ }),

/***/ "./src/base/jtg.js":
/*!*************************!*\
  !*** ./src/base/jtg.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jtg": () => (/* binding */ jtg)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _comparison__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comparison */ "./src/comparison/index.js");



/**
 * Jalali to Gregorian
 * @param {Null|Number|String} year - Jalali year
 * @param {Null|Number|String} [month=1] -  Jalali month
 * @param {Null|Number|String} [day=1] -  Jalali day
 * @param {Null|Number|String} [hour=0] -  Jalali hour
 * @param {Null|Number|String} [minute=0] -  Jalali minute
 * @param {Null|Number|String} [second=0] -  Jalali second
 * @param {Null|Number|String} [millisecond=0] -  Jalali millisecond
 * @returns {Date} Gregorian date
 */
const jtg = (year, month, day, hour, minute, second, millisecond) => {
	//plus sign before a variable, convert variable to int
	year = _utils__WEBPACK_IMPORTED_MODULE_0__.REGEX.isNumeric.test(year) ? +year : 1;
	month = _utils__WEBPACK_IMPORTED_MODULE_0__.REGEX.isNumeric.test(month) ? +month : 1;
	day = _utils__WEBPACK_IMPORTED_MODULE_0__.REGEX.isNumeric.test(day) ? +day : 1;
	hour = _utils__WEBPACK_IMPORTED_MODULE_0__.REGEX.isNumeric.test(hour) ? +hour : 0;
	minute = _utils__WEBPACK_IMPORTED_MODULE_0__.REGEX.isNumeric.test(minute) ? +minute : 0;
	second = _utils__WEBPACK_IMPORTED_MODULE_0__.REGEX.isNumeric.test(second) ? +second : 0;
	millisecond = _utils__WEBPACK_IMPORTED_MODULE_0__.REGEX.isNumeric.test(millisecond) ? +millisecond : 0;
	let gYear, gMonth, gDay;
	if (year > 979) {
		gYear = 1600;
		year -= 979;
	} else {
		gYear = 621;
	}
	let days =
		365 * year +
		parseInt(year / 33) * 8 +
		parseInt(((year % 33) + 3) / 4) +
		78 +
		day +
		(month < 7 ? (month - 1) * 31 : (month - 7) * 30 + 186);
	gYear += 400 * parseInt(days / 146097);
	days %= 146097;
	if (days > 36524) {
		gYear += 100 * parseInt(--days / 36524);
		days %= 36524;
		if (days >= 365) days++;
	}
	gYear += 4 * parseInt(days / 1461);
	days %= 1461;
	if (days > 365) {
		gYear += parseInt((days - 1) / 365);
		days = (days - 1) % 365;
	}
	gDay = days + 1;
	const daysOfMonths = [
		0,
		31,
		(0,_comparison__WEBPACK_IMPORTED_MODULE_1__.isLeapYear)("gregorian", gYear) ? 29 : 28,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31,
	];
	for (gMonth = 0; gMonth < 13; gMonth++) {
		const v = daysOfMonths[gMonth];
		if (gDay <= v) break;
		gDay -= v;
	}

	return new Date(gYear, gMonth - 1, gDay, hour, minute, second, millisecond);
};


/***/ }),

/***/ "./src/base/mathOperation.js":
/*!***********************************!*\
  !*** ./src/base/mathOperation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mathOperation": () => (/* binding */ mathOperation)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/base/index.js");


/**
 * do the math operation on dates
 * @since 1.4.0
 * @param {...String|PersianDate|Date|Array|Object} values - the dates
 * @param {'min'|'max'} operation - the operation
 * @returns {*} return maximum date
 * @throws {false} if parameters not send or parameters is invalid, return false
 */
const mathOperation = function (values, operation) {
	if (!values.length) {
		return false;
	}
	const args = [...values];
	const argsNumber = args.map((date) => {
		date = (0,_base__WEBPACK_IMPORTED_MODULE_0__.typesToArray)(this.c, date);
		if (this.isValid(...date))
			return this.clone()
				.parse(...date)
				.timestamp();
		return false;
	});
	if (argsNumber.includes(false)) return false;
	return args[argsNumber.indexOf(Math[operation](...argsNumber))];
};


/***/ }),

/***/ "./src/base/ordinalNumber.js":
/*!***********************************!*\
  !*** ./src/base/ordinalNumber.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ordinalNumber": () => (/* binding */ ordinalNumber)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");

/**
 * returns the ordinal number of that number sent to it
 * @param {Number} number - the number that gives ordinal number --> from 1 to 366
 * @param {'jalali','gregorian'} calendar - the calendar
 * @param {?Number} mode  - 'jalali' calendar have two mode of ordinal number
 * @returns {String} ordinal number
 * @example 1st | اول | اولین
 */
const ordinalNumber = (number, calendar = "jalali", mode = 1) => {
	return _utils__WEBPACK_IMPORTED_MODULE_0__.CALENDAR[calendar].ordinalNumbers(number, mode);
};


/***/ }),

/***/ "./src/base/setGregorianDate.js":
/*!**************************************!*\
  !*** ./src/base/setGregorianDate.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setGregorianDate": () => (/* binding */ setGregorianDate)
/* harmony export */ });
/**
 * set the date with Date instance
 * @since 2.0.0
 * @param {Date} date - the Date instance
 */
const setGregorianDate = function (date) {
	this.d = {
		year: date.getFullYear(),
		month: date.getMonth() + 1,
		date: date.getDate(),
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds(),
		millisecond: date.getMilliseconds(),
	};
};


/***/ }),

/***/ "./src/base/setJalaliDate.js":
/*!***********************************!*\
  !*** ./src/base/setJalaliDate.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setJalaliDate": () => (/* binding */ setJalaliDate)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/base/index.js");

/**
 * set the date with Date instance
 * @since 2.0.0
 * @param {Date} date - the Date
 */
const setJalaliDate = function (date) {
	[
		this.d.year,
		this.d.month,
		this.d.date,
		this.d.hour,
		this.d.minute,
		this.d.second,
		this.d.millisecond,
	] = (0,___WEBPACK_IMPORTED_MODULE_0__.gtj)(date);
};


/***/ }),

/***/ "./src/base/typesToArray.js":
/*!**********************************!*\
  !*** ./src/base/typesToArray.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "typesToArray": () => (/* binding */ typesToArray)
/* harmony export */ });
/* harmony import */ var _PersianDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PersianDate */ "./src/PersianDate.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/base/index.js");




/**
 * convert String or Array or Object or PersianDate to Array
 * @since 1.2.0
 * @param {String|Array|Object|Number} year - this param must be string or array or Object from date or year
 * @param {String|Number} year.y - year of date
 * @param {Null|String|Number} year.year - year of date
 * @param {Null|String|Number} year.years - year of date
 * @param {Null|String|Number} year.M - month of date
 * @param {Null|String|Number} year.month - month of date
 * @param {Null|String|Number} year.months - month of date
 * @param {Null|String|Number} year.d - day of date
 * @param {Null|String|Number} year.day - day of date
 * @param {Null|String|Number} year.days - day of date
 * @param {Null|String|Number} year.date - day of date
 * @param {Null|String|Number} year.h - hour of date
 * @param {Null|String|Number} year.hour - hour of date
 * @param {Null|String|Number} year.hours - hour of date
 * @param {Null|String|Number} year.m - minute of date
 * @param {Null|String|Number} year.minute - minute of date
 * @param {Null|String|Number} year.minutes - minute of date
 * @param {Null|String|Number} year.s - second of date
 * @param {Null|String|Number} year.second - second of date
 * @param {Null|String|Number} year.seconds - second of date
 * @param {Null|String|Number} year.ms - millisecond of date
 * @param {Null|String|Number} year.millisecond - millisecond of date
 * @param {Null|String|Number} year.milliseconds - millisecond of date
 * @param {Null|Number|String} month month of date
 * @param {Null|Number|String} day day of date
 * @param {Null|Number|String} hour hour of date
 * @param {Null|Number|String} minute minute of date
 * @param {Null|Number|String} second second of date
 * @param {Null|Number|String} millisecond millisecond of date
 * @returns {Array} array includes year, month, date, hour, minute, second, millinsecond
 */
const typesToArray = (
	calendar,
	year,
	month,
	date,
	hour,
	minute,
	second,
	millisecond
) => {
	if (!year)
		// if year not defined
		year = new Date(); // return now
	if (typeof year == "string" && year.search(_utils__WEBPACK_IMPORTED_MODULE_1__.REGEX.separators) != -1) {
		return year.split(/[/ -.,:\\]/);
	} else if (Array.isArray(year)) {
		return year;
	} else if (_PersianDate__WEBPACK_IMPORTED_MODULE_0__.default.isPersianDate(year)) {
		return year.clone().calendar(calendar).toArray();
	} else if (_PersianDate__WEBPACK_IMPORTED_MODULE_0__.default.isDate(year)) {
		return new _PersianDate__WEBPACK_IMPORTED_MODULE_0__.default(year).calendar(calendar).toArray();
	} else if (Object.prototype.toString.call(year) === "[object Object]") {
		return [
			year.y || year.year || year.years,
			year.M || year.month || year.months || 1,
			year.d || year.day || year.days || year.date || 1,
			year.h || year.hour || year.hours || 0,
			year.m || year.minute || year.minutes || 0,
			year.s || year.second || year.seconds || 0,
			year.ms || year.millisecond || year.milliseconds || 0,
		];
	}
	return [year, month, date, hour, minute, second, millisecond];
};


/***/ }),

/***/ "./src/base/warn.js":
/*!**************************!*\
  !*** ./src/base/warn.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "warn": () => (/* binding */ warn)
/* harmony export */ });
/**
 * show warning
 * @since 2.0.0
 * @param {String} msg - the message for warning
 */
const warn = (msg) => {
	console.warn(msg);
};


/***/ }),

/***/ "./src/comparison/index.js":
/*!*********************************!*\
  !*** ./src/comparison/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDate": () => (/* reexport safe */ _isDate__WEBPACK_IMPORTED_MODULE_0__.isDate),
/* harmony export */   "isLeapYear": () => (/* reexport safe */ _isLeapYear__WEBPACK_IMPORTED_MODULE_1__.isLeapYear),
/* harmony export */   "isPersianDate": () => (/* reexport safe */ _isPersianDate__WEBPACK_IMPORTED_MODULE_2__.isPersianDate),
/* harmony export */   "isValid": () => (/* reexport safe */ _isValid__WEBPACK_IMPORTED_MODULE_3__.isValid),
/* harmony export */   "isValidDate": () => (/* reexport safe */ _isValidDate__WEBPACK_IMPORTED_MODULE_4__.isValidDate),
/* harmony export */   "isValidTime": () => (/* reexport safe */ _isValidTime__WEBPACK_IMPORTED_MODULE_5__.isValidTime),
/* harmony export */   "isSame": () => (/* reexport safe */ _isSame__WEBPACK_IMPORTED_MODULE_6__.isSame),
/* harmony export */   "isBetween": () => (/* reexport safe */ _isBetween__WEBPACK_IMPORTED_MODULE_7__.isBetween)
/* harmony export */ });
/* harmony import */ var _isDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDate */ "./src/comparison/isDate.js");
/* harmony import */ var _isLeapYear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isLeapYear */ "./src/comparison/isLeapYear.js");
/* harmony import */ var _isPersianDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isPersianDate */ "./src/comparison/isPersianDate.js");
/* harmony import */ var _isValid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isValid */ "./src/comparison/isValid.js");
/* harmony import */ var _isValidDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isValidDate */ "./src/comparison/isValidDate.js");
/* harmony import */ var _isValidTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isValidTime */ "./src/comparison/isValidTime.js");
/* harmony import */ var _isSame__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isSame */ "./src/comparison/isSame.js");
/* harmony import */ var _isBetween__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isBetween */ "./src/comparison/isBetween.js");










/***/ }),

/***/ "./src/comparison/isBetween.js":
/*!*************************************!*\
  !*** ./src/comparison/isBetween.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isBetween": () => (/* binding */ isBetween)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base */ "./src/base/index.js");



function isBetween(from, to, method) {
	const date = this.toArray();

	from = (0,_base__WEBPACK_IMPORTED_MODULE_1__.typesToArray)(this.c, from);
	if (!from[2]) date[2] = 1;
	from = date.map((value, i) =>
		_utils__WEBPACK_IMPORTED_MODULE_0__.REGEX.isNumeric.test(from[i]) ? from[i] : value
	);

	to = (0,_base__WEBPACK_IMPORTED_MODULE_1__.typesToArray)(this.c, to);
	to = date.map((value, i) => (_utils__WEBPACK_IMPORTED_MODULE_0__.REGEX.isNumeric.test(to[i]) ? to[i] : value));

	if (!(this.isValid(...from) && this.isValid(...to))) return false;

	return (
		_base__WEBPACK_IMPORTED_MODULE_1__.compare.call(this, from, method[0] === "[" ? ">=" : ">") &&
		_base__WEBPACK_IMPORTED_MODULE_1__.compare.call(this, to, method[1] === "]" ? "<=" : "<")
	);
}


/***/ }),

/***/ "./src/comparison/isDate.js":
/*!**********************************!*\
  !*** ./src/comparison/isDate.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDate": () => (/* binding */ isDate)
/* harmony export */ });
const isDate = function (date) {
	return date instanceof Date;
};


/***/ }),

/***/ "./src/comparison/isLeapYear.js":
/*!**************************************!*\
  !*** ./src/comparison/isLeapYear.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isLeapYear": () => (/* binding */ isLeapYear)
/* harmony export */ });
const jalali = (year) => {
	const array =
		year > 1342 ? [1, 5, 9, 13, 17, 22, 26, 30] : [1, 5, 9, 13, 17, 21, 26, 30];
	const remainder = year % 33;
	return array.includes(remainder);
};

const gregorian = (year) => {
	return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
};

const isLeapYear = function (calendar, year) {
	// calendar[0] ==> first letter of calendar ('j' | 'g' | ...)
	switch (calendar[0]) {
		case "j":
			return jalali(year);
		default:
			return gregorian(year);
	}
};


/***/ }),

/***/ "./src/comparison/isPersianDate.js":
/*!*****************************************!*\
  !*** ./src/comparison/isPersianDate.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPersianDate": () => (/* binding */ isPersianDate)
/* harmony export */ });
/* harmony import */ var _PersianDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PersianDate */ "./src/PersianDate.js");

const isPersianDate = function (date) {
	return date instanceof _PersianDate__WEBPACK_IMPORTED_MODULE_0__.default;
};


/***/ }),

/***/ "./src/comparison/isSame.js":
/*!**********************************!*\
  !*** ./src/comparison/isSame.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSame": () => (/* binding */ isSame)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base */ "./src/base/index.js");



function isSame() {
	let date = (0,_base__WEBPACK_IMPORTED_MODULE_1__.typesToArray)(this.c, ...arguments);
	date = this.toArray().map((value, i) =>
		_utils__WEBPACK_IMPORTED_MODULE_0__.REGEX.isNumeric.test(date[i]) ? date[i] : value
	);

	return _base__WEBPACK_IMPORTED_MODULE_1__.compare.call(this, date, "==");
}


/***/ }),

/***/ "./src/comparison/isValid.js":
/*!***********************************!*\
  !*** ./src/comparison/isValid.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isValid": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/comparison/index.js");


const isValid = function (
	calendar,
	year,
	month,
	day,
	hour,
	minute,
	second,
	millisecond
) {
	return (
		(0,___WEBPACK_IMPORTED_MODULE_0__.isValidDate)(calendar, year, month, day) &&
		(0,___WEBPACK_IMPORTED_MODULE_0__.isValidTime)(hour, minute, second, millisecond)
	);
};


/***/ }),

/***/ "./src/comparison/isValidDate.js":
/*!***************************************!*\
  !*** ./src/comparison/isValidDate.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isValidDate": () => (/* binding */ isValidDate)
/* harmony export */ });
/* harmony import */ var _isLeapYear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isLeapYear */ "./src/comparison/isLeapYear.js");


const jalali = (year, month, day) => {
	if (month >= 7 && month <= 11 && day == 31) return false;
	if (month == 12 && day == 31) return false;
	if (month == 12 && day == 30 && !(0,_isLeapYear__WEBPACK_IMPORTED_MODULE_0__.isLeapYear)("j", year)) return false;
	return true;
};

const gregorian = (year, month, day) => {
	if ([2, 4, 6, 9, 11].includes(month) && day == 31) return false;
	if (month == 2 && (day == 30 || (day == 29 && !(0,_isLeapYear__WEBPACK_IMPORTED_MODULE_0__.isLeapYear)("g", year))))
		return false;
	return true;
};

const isValidDate = function (calendar, year, month, day) {
	if ([year, month, day].some((e) => String(e).search(/null|NaN/) != -1))
		return false;
	if (year < 0 || month > 12 || month < 1 || day > 31 || day < 1) return false;
	switch (calendar[0]) {
		case "j":
			return jalali(year, month, day);
		default:
			return gregorian(year, month, day);
	}
};


/***/ }),

/***/ "./src/comparison/isValidTime.js":
/*!***************************************!*\
  !*** ./src/comparison/isValidTime.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isValidTime": () => (/* binding */ isValidTime)
/* harmony export */ });
const isValidTime = function (hour, minute, second, millisecond) {
	if (
		[hour, minute, second, millisecond].some(
			(e) => String(e).search(/null|NaN/) != -1
		)
	)
		return false;
	if (hour < 0 || hour > 23) return false;
	if (minute < 0 || minute > 59) return false;
	if (second < 0 || second > 59) return false;
	if (millisecond < 0 || millisecond > 999) return false;
	return true;
};


/***/ }),

/***/ "./src/conversion/index.js":
/*!*********************************!*\
  !*** ./src/conversion/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toString": () => (/* reexport safe */ _toString__WEBPACK_IMPORTED_MODULE_0__.toString),
/* harmony export */   "toArray": () => (/* reexport safe */ _toArray__WEBPACK_IMPORTED_MODULE_1__.toArray),
/* harmony export */   "toObject": () => (/* reexport safe */ _toObject__WEBPACK_IMPORTED_MODULE_2__.toObject),
/* harmony export */   "toDate": () => (/* reexport safe */ _toDate__WEBPACK_IMPORTED_MODULE_3__.toDate)
/* harmony export */ });
/* harmony import */ var _toString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toString */ "./src/conversion/toString.js");
/* harmony import */ var _toArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toArray */ "./src/conversion/toArray.js");
/* harmony import */ var _toObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toObject */ "./src/conversion/toObject.js");
/* harmony import */ var _toDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDate */ "./src/conversion/toDate.js");






/***/ }),

/***/ "./src/conversion/toArray.js":
/*!***********************************!*\
  !*** ./src/conversion/toArray.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toArray": () => (/* binding */ toArray)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/base/index.js");


function toArray() {
	if (!arguments.length) {
		return Object.values(this.d);
	}
	const formats = (0,_base__WEBPACK_IMPORTED_MODULE_0__.typesToArray)(this.c, ...arguments);
	return [
		this.year(formats[0]),
		this.month(formats[1]),
		this.date(formats[2]),
		this.hour(formats[3]),
		this.minute(formats[4]),
		this.second(formats[5]),
		this.millisecond(formats[6]),
	];
}


/***/ }),

/***/ "./src/conversion/toDate.js":
/*!**********************************!*\
  !*** ./src/conversion/toDate.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDate": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/base/index.js");


const jalali = (date) => {
	return (0,_base__WEBPACK_IMPORTED_MODULE_0__.jtg)(...date);
};

const gregorian = (date) => {
	--date[1];
	return new Date(...date);
};

function toDate() {
	switch (this.c[0]) {
		case "j":
			return jalali(this.toArray());
		default:
			return gregorian(this.toArray());
	}
}


/***/ }),

/***/ "./src/conversion/toObject.js":
/*!************************************!*\
  !*** ./src/conversion/toObject.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toObject": () => (/* binding */ toObject)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/base/index.js");


function toObject() {
	if (!arguments.length) {
		return this.d;
	}
	const formats = (0,_base__WEBPACK_IMPORTED_MODULE_0__.typesToArray)(this.c, ...arguments);
	return {
		year: this.year(formats[0]),
		month: this.month(formats[1]),
		date: this.date(formats[2]),
		hour: this.hour(formats[3]),
		minute: this.minute(formats[4]),
		second: this.second(formats[5]),
		millisecond: this.millisecond(formats[6]),
	};
}


/***/ }),

/***/ "./src/conversion/toString.js":
/*!************************************!*\
  !*** ./src/conversion/toString.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toString": () => (/* binding */ toString)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


const jalali = (format) => {
	return format
		.replace(/\?/g, "j")
		.replace(/datetime/gi, "jYYYY/jMM/jDD HH:mm")
		.replace(/date/gi, "jYYYY/jMM/jDD")
		.replace(/time/gi, "HH:mm");
};

const gregorian = (format) => {
	return format
		.replace(/\?/g, "")
		.replace(/datetime/gi, "YYYY-MM-DD HH:mm")
		.replace(/date/gi, "YYYY-MM-DD")
		.replace(/time/gi, "HH:mm");
};

function toString(format) {
	const rawTexts = [];
	format = format.replace(_utils__WEBPACK_IMPORTED_MODULE_0__.REGEX.betweenBacktick, (_matched, text) => {
		rawTexts.push(text);
		return "###";
	});
	switch (this.c[0]) {
		case "j":
			format = jalali(format);
			break;
		default:
			format = gregorian(format);
	}
	const matchedFormats = format.match(_utils__WEBPACK_IMPORTED_MODULE_0__.REGEX.format);
	let dateString = "";
	for (const i of matchedFormats) {
		dateString += format.substring(0, format.indexOf(i));

		if (i.search(/Y|y/) != -1) dateString += this.year(i);
		else if (i.search(/M/) != -1) dateString += this.month(i);
		else if (i.search(/Q/) != -1) dateString += this.quarter(i);
		else if (i.search(/D|d/) != -1) dateString += this.date(i);
		else if (i.search(/W|w/) != -1) dateString += this.week(i);
		else if (i.search(/H|h|k/) != -1) dateString += this.hour(i);
		else if (i.search(/m/) != -1) dateString += this.minute(i);
		else if (i.search(/s/) != -1) dateString += this.second(i);
		else if (i.search(/c|C/) != -1) dateString += this.millisecond(i);
		else if (i.search(/t/) != -1) dateString += this.timestamp();
		else if (i.search(/a|A/) != -1) dateString += (0,_utils__WEBPACK_IMPORTED_MODULE_0__.TIMETYPE)(this.d.hour, i);

		format = format.substr(format.indexOf(i) + i.length);
	}
	dateString += format;
	for (let i = 0; i < rawTexts.length; i++)
		dateString = dateString.replace("###", rawTexts[i]);
	return String(dateString);
}


/***/ }),

/***/ "./src/create/calendar.js":
/*!********************************!*\
  !*** ./src/create/calendar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calendar": () => (/* binding */ calendar)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/base/index.js");


function calendar(c) {
	if (!c) return this.c;

	if (c[0] == "j" && this.c[0] != "j") {
		if (!this.error) _base__WEBPACK_IMPORTED_MODULE_0__.setJalaliDate.call(this, this.toDate());
		this.c = "jalali";
	} else if (c[0] == "g" && this.c[0] != "g") {
		if (!this.error) _base__WEBPACK_IMPORTED_MODULE_0__.setGregorianDate.call(this, this.toDate());
		this.c = "gregorian";
	}

	return this;
}


/***/ }),

/***/ "./src/create/clone.js":
/*!*****************************!*\
  !*** ./src/create/clone.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clone": () => (/* binding */ clone)
/* harmony export */ });
function clone() {
	return Object.assign(
		Object.create(Object.getPrototypeOf(this)),
		JSON.parse(JSON.stringify(this))
	);
}


/***/ }),

/***/ "./src/create/fromGregorian.js":
/*!*************************************!*\
  !*** ./src/create/fromGregorian.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromGregorian": () => (/* binding */ fromGregorian)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/base/index.js");
/* harmony import */ var _comparison__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comparison */ "./src/comparison/index.js");



function fromGregorian(...date) {
	if (!date.length) date[0] = new Date().getTime();
	else if (this.isPersianDate(date[0])) {
		date = date[0].clone().calendar("g").toArray();
	} else if (!(0,_base__WEBPACK_IMPORTED_MODULE_0__.isTimestamp)(date[0])) {
		date = (0,_base__WEBPACK_IMPORTED_MODULE_0__.typesToArray)("gregorian", ...date);
		date[6] = +date[6] || 0;
		date[5] = +date[5] || 0;
		date[4] = +date[4] || 0;
		date[3] = +date[3] || 0;
		date[2] = +date[2] || 1;
		date[1] = +date[1] || 1;
		date[0] = +date[0];
	}

	if (date.length > 1) {
		if (!(0,_comparison__WEBPACK_IMPORTED_MODULE_1__.isValid)("gregorian", ...date))
			return _base__WEBPACK_IMPORTED_MODULE_0__.invalid.call(this, "تاریخ نامعتبر");
		--date[1]; // this is month; becuse the Date get month from 0, subtract one
	}

	date = new Date(...date);
	if (date == "Invalid Date") return _base__WEBPACK_IMPORTED_MODULE_0__.invalid.call(this, "تاریخ نامعتبر");
	if (this.c == "jalali") {
		_base__WEBPACK_IMPORTED_MODULE_0__.setJalaliDate.call(this, date);
	} else {
		_base__WEBPACK_IMPORTED_MODULE_0__.setGregorianDate.call(this, date);
	}
	return this;
}


/***/ }),

/***/ "./src/create/fromJalali.js":
/*!**********************************!*\
  !*** ./src/create/fromJalali.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromJalali": () => (/* binding */ fromJalali)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/base/index.js");


function fromJalali(...date) {
	if (!date.length) date = (0,_base__WEBPACK_IMPORTED_MODULE_0__.gtj)();
	else date = (0,_base__WEBPACK_IMPORTED_MODULE_0__.typesToArray)("jalali", ...date);

	if (this.c == "jalali") {
		this.d.year = +date[0];
		this.d.month = +date[1] || 1;
		this.d.date = +date[2] || 1;
		this.d.hour = +date[3] || 0;
		this.d.minute = +date[4] || 0;
		this.d.second = +date[5] || 0;
		this.d.millisecond = +date[6] || 0;
	} else {
		_base__WEBPACK_IMPORTED_MODULE_0__.setGregorianDate.call(this, (0,_base__WEBPACK_IMPORTED_MODULE_0__.jtg)(...date));
	}

	if (!this.isValid()) return _base__WEBPACK_IMPORTED_MODULE_0__.invalid.call(this, "تاریخ نامعتبر");
	return this;
}


/***/ }),

/***/ "./src/create/index.js":
/*!*****************************!*\
  !*** ./src/create/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "now": () => (/* reexport safe */ _now__WEBPACK_IMPORTED_MODULE_0__.now),
/* harmony export */   "parse": () => (/* reexport safe */ _parse__WEBPACK_IMPORTED_MODULE_1__.parse),
/* harmony export */   "clone": () => (/* reexport safe */ _clone__WEBPACK_IMPORTED_MODULE_2__.clone),
/* harmony export */   "fromJalali": () => (/* reexport safe */ _fromJalali__WEBPACK_IMPORTED_MODULE_3__.fromJalali),
/* harmony export */   "fromGregorian": () => (/* reexport safe */ _fromGregorian__WEBPACK_IMPORTED_MODULE_4__.fromGregorian),
/* harmony export */   "calendar": () => (/* reexport safe */ _calendar__WEBPACK_IMPORTED_MODULE_5__.calendar)
/* harmony export */ });
/* harmony import */ var _now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./now */ "./src/create/now.js");
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse */ "./src/create/parse.js");
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clone */ "./src/create/clone.js");
/* harmony import */ var _fromJalali__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fromJalali */ "./src/create/fromJalali.js");
/* harmony import */ var _fromGregorian__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fromGregorian */ "./src/create/fromGregorian.js");
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar */ "./src/create/calendar.js");








/***/ }),

/***/ "./src/create/now.js":
/*!***************************!*\
  !*** ./src/create/now.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "now": () => (/* binding */ now)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/base/index.js");


function now() {
	const date = new Date();

	if (this.c == "jalali") {
		_base__WEBPACK_IMPORTED_MODULE_0__.setJalaliDate.call(this, date);
	} else {
		_base__WEBPACK_IMPORTED_MODULE_0__.setGregorianDate.call(this, date);
	}

	return this;
}


/***/ }),

/***/ "./src/create/parse.js":
/*!*****************************!*\
  !*** ./src/create/parse.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parse": () => (/* binding */ parse)
/* harmony export */ });
function parse(...date) {
	if (this.c == "jalali") {
		return this.fromJalali(...date);
	} else {
		return this.fromGregorian(...date);
	}
}


/***/ }),

/***/ "./src/diff/diff.js":
/*!**************************!*\
  !*** ./src/diff/diff.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "diff": () => (/* binding */ diff)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/base/index.js");


function diff(date, unit, addOne) {
	date = (0,_base__WEBPACK_IMPORTED_MODULE_0__.typesToArray)(this.c, date);
	if (!this.isValid(...date)) return "تاریخ نامعتبر";
	let result =
		this.timestamp() -
		this.clone()
			.parse(...date)
			.timestamp();
	switch (unit) {
		case "y":
		case "year":
		case "years":
			result = this.d.year - date[0];
			break;
		case "M":
		case "month":
		case "months":
			result = this.d.year * 12 + this.d.month - (+date[0] * 12 + +date[1]);
			break;
		case "d":
		case "date":
		case "day":
		case "days":
			result = Math.ceil(result / 1000 / 60 / 60 / 24);
			break;
		case "h":
		case "hour":
		case "hours":
			result = Math.ceil(result / 1000 / 60 / 60);
			break;
		case "m":
		case "minute":
		case "minutes":
			result = Math.ceil(result / 1000 / 60);
			break;
		case "s":
		case "second":
		case "seconds":
			result = Math.ceil(result / 1000);
			break;
		case "ms":
		case "millisecond":
		case "milliseconds":
	}
	return addOne ? result + (result >= 0 ? 1 : -1) : result;
}


/***/ }),

/***/ "./src/diff/diffForHumans.js":
/*!***********************************!*\
  !*** ./src/diff/diffForHumans.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "diffForHumans": () => (/* binding */ diffForHumans)
/* harmony export */ });
function diffForHumans(date, suffix) {
	let result = this.diff(date, "s");
	if (typeof result == "string") return "تاریخ نامعتبر";

	const prefix = suffix && (result > 0 ? "آینده" : "پیش");
	result = Math.abs(result);

	if (result == 0) return "هم اکنون";
	else if (result < 45) result = "لحظات";
	else if ((result /= 60) < 45)
		// divide by 60, for getting minute
		result = Math.round(result) + " " + "دقیقه";
	else if ((result /= 60) < 23.5)
		// divide by 60, for getting hour
		result = Math.round(result) + " " + "ساعت";
	else if ((result /= 24) < 26)
		// divide by 24, for getting day
		result = Math.round(result) + " " + "روز";
	else if (result < 320) result = Math.round(result / 30) + " " + "ماه";
	else result = Math.round(result / 365) + " " + "سال";
	return result + (suffix ? " " + prefix : "");
}


/***/ }),

/***/ "./src/diff/index.js":
/*!***************************!*\
  !*** ./src/diff/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "diff": () => (/* reexport safe */ _diff__WEBPACK_IMPORTED_MODULE_0__.diff),
/* harmony export */   "diffForHumans": () => (/* reexport safe */ _diffForHumans__WEBPACK_IMPORTED_MODULE_1__.diffForHumans)
/* harmony export */ });
/* harmony import */ var _diff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diff */ "./src/diff/diff.js");
/* harmony import */ var _diffForHumans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diffForHumans */ "./src/diff/diffForHumans.js");




/***/ }),

/***/ "./src/set-get/date.js":
/*!*****************************!*\
  !*** ./src/set-get/date.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "date": () => (/* binding */ date)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base */ "./src/base/index.js");



const getDefaultFormat = (calendar) => {
	switch (calendar[0]) {
		case "j":
			return "jD";
		default:
			return "D";
	}
};

function date(format) {
	format = String(format).trim();

	if (_utils__WEBPACK_IMPORTED_MODULE_0__.REGEX.isNumeric.test(format)) {
		const daysInMonth = this.getDaysInMonth();

		if (format < 1) {
			this.d.date = 1;
			this.subDay(format - 1);
		} else if (format > daysInMonth) {
			this.d.date = daysInMonth;
			this.addDay(format - daysInMonth);
		} else {
			this.d.date = +format;
		}

		return this;
	} else {
		if (!format) format = getDefaultFormat(this.c);

		const jDate = this.c == "jalali" ? this.d.date : (0,_base__WEBPACK_IMPORTED_MODULE_1__.gtj)(this.toDate())[2];
		//---------- Day of Month ----------//
		if (format == "jDD") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.addPrefix)(jDate, 2);
		if (format == "jD") return jDate;
		if (format == "jDo") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.ordinalNumber)(jDate);
		if (format == "jDO") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.ordinalNumber)(jDate, "jalali", 2);
		//---------- Day of Week ----------//
		const gDate = this.toDate();
		if (format == "jdddd" || format == "jddd") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.getDayLabel)(gDate);
		if (format == "jdd") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.getDayLabel)(gDate).slice(0, 1);
		let dayOfWeek = (0,_base__WEBPACK_IMPORTED_MODULE_1__.getDayOfWeek)(gDate);
		if (format == "jdo") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.ordinalNumber)(dayOfWeek);
		if (format == "jdO") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.ordinalNumber)(dayOfWeek, "jalali", 2);
		if (format == "jd") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.getDayOfWeek)(gDate, "jalali", "array");
		if (format == "jde") return dayOfWeek;
		//---------- Day of Year ----------//
		let dayOfYear = (0,_base__WEBPACK_IMPORTED_MODULE_1__.getDayOfYear)(this.year("jy"), this.month("jM"), jDate, "j");
		if (format == "jDDDD") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.addPrefix)(dayOfYear, 3);
		if (format == "jDDD") return dayOfYear;
		if (format == "jDDDo") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.ordinalNumber)(dayOfYear);
		if (format == "jDDDO") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.ordinalNumber)(dayOfYear, "jalali", 2);
		//---------- Day of Month ----------//
		if (format == "DD") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.addPrefix)(gDate.getDate(), 2);
		if (format == "D") return gDate.getDate();
		if (format == "Do" || format == "DO")
			return (0,_base__WEBPACK_IMPORTED_MODULE_1__.ordinalNumber)(gDate.getDate(), "gregorian");
		//---------- Day of Week ----------//
		if (format == "dddd") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.getDayLabel)(gDate, "gregorian");
		if (format == "ddd") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.getDayLabel)(gDate, "gregorian").slice(0, 3);
		if (format == "dd") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.getDayLabel)(gDate, "gregorian").slice(0, 2);
		dayOfWeek = (0,_base__WEBPACK_IMPORTED_MODULE_1__.getDayOfWeek)(gDate, "gregorian");
		if (format == "do" || format == "dO")
			return (0,_base__WEBPACK_IMPORTED_MODULE_1__.ordinalNumber)(dayOfWeek, "gregorian");
		if (format == "d") return dayOfWeek - 1;
		if (format == "de") return dayOfWeek;
		//---------- Day of Year ----------//
		dayOfYear = (0,_base__WEBPACK_IMPORTED_MODULE_1__.getDayOfYear)(
			gDate.getFullYear(),
			gDate.getMonth() + 1,
			gDate.getDate(),
			"g"
		);
		if (format == "DDDD") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.addPrefix)(dayOfYear, 3);
		if (format == "DDD") return dayOfYear;
		if (format == "DDDo" || format == "DDDO")
			return (0,_base__WEBPACK_IMPORTED_MODULE_1__.ordinalNumber)(dayOfYear, "gregorian");
		return jDate;
	}
}


/***/ }),

/***/ "./src/set-get/endOf.js":
/*!******************************!*\
  !*** ./src/set-get/endOf.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "endOf": () => (/* binding */ endOf)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/base/index.js");


function endOf(unit) {
	this.d.millisecond = 999;
	if (unit[0] == "s") return this;
	this.d.second = 59;
	if (unit == "m" || unit == "minute") return this;
	this.d.minute = 59;
	if (unit[0] == "h") return this;
	this.d.hour = 23;
	if (unit[0] == "d") return this;
	if (unit[0] == "w")
		return this.addDay(7 - (0,_base__WEBPACK_IMPORTED_MODULE_0__.getDayOfWeek)(this.toDate(), this.c));
	if (unit[0] == "q") {
		this.quarter(this.quarter()).addMonth(2);
		this.d.date = this.getDaysInMonth();
		return this;
	}
	this.d.date = this.getDaysInMonth();
	if (unit == "M" || unit == "month") return this;
	this.d.month = 12;
	this.d.date = this.getDaysInMonth();
	if (unit[0] == "y") return this;
}


/***/ }),

/***/ "./src/set-get/getDaysInMonth.js":
/*!***************************************!*\
  !*** ./src/set-get/getDaysInMonth.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDaysInMonth": () => (/* binding */ getDaysInMonth)
/* harmony export */ });
/* harmony import */ var _comparison_isLeapYear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../comparison/isLeapYear */ "./src/comparison/isLeapYear.js");


const jalali = (calendar, year, month) => {
	if (month >= 1 && month <= 6) return 31;
	else if ((month > 6 && month <= 11) || (0,_comparison_isLeapYear__WEBPACK_IMPORTED_MODULE_0__.isLeapYear)(calendar, year)) {
		return 30;
	}
	return 29;
};

const gregorian = (calendar, year, month) => {
	if ([1, 3, 5, 7, 8, 10, 12].includes(month)) return 31;
	else if (month != 2) return 30;
	else if ((0,_comparison_isLeapYear__WEBPACK_IMPORTED_MODULE_0__.isLeapYear)(calendar, year)) return 29;
	return 28;
};

const getDaysInMonth = function (calendar, year, month) {
	switch (calendar[0]) {
		case "j":
			return jalali(calendar, year, month);
		default:
			return gregorian(calendar, year, month);
	}
};


/***/ }),

/***/ "./src/set-get/getWeeksInYear.js":
/*!***************************************!*\
  !*** ./src/set-get/getWeeksInYear.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeeksInYear": () => (/* binding */ getWeeksInYear)
/* harmony export */ });
const getDayOfYearFormat = (calendar) => {
	switch (calendar[0]) {
		case "j":
			return "jd";
		default:
			return "d";
	}
};

function getWeeksInYear(year) {
	const dayOfYearFormat = getDayOfYearFormat(this.c);

	const firstOfYear = this.clone().parse(year);
	const firstOfYearDay = firstOfYear.date(dayOfYearFormat);
	const lastOfYear = firstOfYear.clone().endOf("year").startOf("day");
	const lastOfYearDay = lastOfYear.date(dayOfYearFormat);

	if (firstOfYearDay > 3) firstOfYear.addDay(7 - firstOfYearDay);
	else firstOfYear.subDay(firstOfYearDay);

	if (lastOfYearDay > 3) lastOfYear.addDay(7 - lastOfYearDay);
	else lastOfYear.subDay(lastOfYearDay);

	return Math.ceil(lastOfYear.diff(firstOfYear, "date") / 7);
}


/***/ }),

/***/ "./src/set-get/hour.js":
/*!*****************************!*\
  !*** ./src/set-get/hour.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hour": () => (/* binding */ hour)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base */ "./src/base/index.js");



function hour(format) {
	format = String(format).trim();

	if (_utils__WEBPACK_IMPORTED_MODULE_0__.REGEX.isNumeric.test(format)) {
		if (format < 0) {
			this.d.hour = 0;
			this.subHour(format);
		} else if (format > 23) {
			this.d.hour = 23;
			this.addHour(format - 23);
		} else {
			this.d.hour = +format;
		}

		return this;
	} else {
		let h = this.d.hour;
		if (format == "H") return h;
		if (format == "HH") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.addPrefix)(h, 2);
		if (format == "k") return h || 24;
		if (format == "kk") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.addPrefix)(h || 24, 2);
		h = h > 12 ? h - 12 : h;
		if (format == "h") return h;
		if (format == "hh") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.addPrefix)(h, 2);
		return h;
	}
}


/***/ }),

/***/ "./src/set-get/index.js":
/*!******************************!*\
  !*** ./src/set-get/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "year": () => (/* reexport safe */ _year__WEBPACK_IMPORTED_MODULE_0__.year),
/* harmony export */   "quarter": () => (/* reexport safe */ _quarter__WEBPACK_IMPORTED_MODULE_1__.quarter),
/* harmony export */   "month": () => (/* reexport safe */ _month__WEBPACK_IMPORTED_MODULE_2__.month),
/* harmony export */   "week": () => (/* reexport safe */ _week__WEBPACK_IMPORTED_MODULE_3__.week),
/* harmony export */   "date": () => (/* reexport safe */ _date__WEBPACK_IMPORTED_MODULE_4__.date),
/* harmony export */   "hour": () => (/* reexport safe */ _hour__WEBPACK_IMPORTED_MODULE_5__.hour),
/* harmony export */   "minute": () => (/* reexport safe */ _minute__WEBPACK_IMPORTED_MODULE_6__.minute),
/* harmony export */   "second": () => (/* reexport safe */ _second__WEBPACK_IMPORTED_MODULE_7__.second),
/* harmony export */   "millisecond": () => (/* reexport safe */ _millisecond__WEBPACK_IMPORTED_MODULE_8__.millisecond),
/* harmony export */   "timestamp": () => (/* reexport safe */ _timestamp__WEBPACK_IMPORTED_MODULE_9__.timestamp),
/* harmony export */   "getDaysInMonth": () => (/* reexport safe */ _getDaysInMonth__WEBPACK_IMPORTED_MODULE_10__.getDaysInMonth),
/* harmony export */   "getWeeksInYear": () => (/* reexport safe */ _getWeeksInYear__WEBPACK_IMPORTED_MODULE_11__.getWeeksInYear),
/* harmony export */   "startOf": () => (/* reexport safe */ _startOf__WEBPACK_IMPORTED_MODULE_12__.startOf),
/* harmony export */   "endOf": () => (/* reexport safe */ _endOf__WEBPACK_IMPORTED_MODULE_13__.endOf),
/* harmony export */   "time": () => (/* reexport safe */ _time__WEBPACK_IMPORTED_MODULE_14__.time)
/* harmony export */ });
/* harmony import */ var _year__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./year */ "./src/set-get/year.js");
/* harmony import */ var _quarter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quarter */ "./src/set-get/quarter.js");
/* harmony import */ var _month__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./month */ "./src/set-get/month.js");
/* harmony import */ var _week__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./week */ "./src/set-get/week.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date */ "./src/set-get/date.js");
/* harmony import */ var _hour__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hour */ "./src/set-get/hour.js");
/* harmony import */ var _minute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./minute */ "./src/set-get/minute.js");
/* harmony import */ var _second__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./second */ "./src/set-get/second.js");
/* harmony import */ var _millisecond__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./millisecond */ "./src/set-get/millisecond.js");
/* harmony import */ var _timestamp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./timestamp */ "./src/set-get/timestamp.js");
/* harmony import */ var _getDaysInMonth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getDaysInMonth */ "./src/set-get/getDaysInMonth.js");
/* harmony import */ var _getWeeksInYear__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./getWeeksInYear */ "./src/set-get/getWeeksInYear.js");
/* harmony import */ var _startOf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./startOf */ "./src/set-get/startOf.js");
/* harmony import */ var _endOf__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./endOf */ "./src/set-get/endOf.js");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./time */ "./src/set-get/time.js");

















/***/ }),

/***/ "./src/set-get/millisecond.js":
/*!************************************!*\
  !*** ./src/set-get/millisecond.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "millisecond": () => (/* binding */ millisecond)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base */ "./src/base/index.js");



function millisecond(format) {
	format = String(format).trim();

	if (_utils__WEBPACK_IMPORTED_MODULE_0__.REGEX.isNumeric.test(format)) {
		if (format < 0) {
			this.d.millisecond = 0;
			this.subMillisecond(format);
		} else if (format > 23) {
			this.d.millisecond = 23;
			this.addMillisecond(format - 23);
		} else {
			this.d.millisecond = +format;
		}

		return this;
	} else {
		if (format == "CCC" || format == "c") return this.d.millisecond;
		if (format == "CCCC") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.addPrefix)(this.d.millisecond, 3);
		return this.d.millisecond;
	}
}


/***/ }),

/***/ "./src/set-get/minute.js":
/*!*******************************!*\
  !*** ./src/set-get/minute.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "minute": () => (/* binding */ minute)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base */ "./src/base/index.js");



function minute(format) {
	format = String(format).trim();

	if (_utils__WEBPACK_IMPORTED_MODULE_0__.REGEX.isNumeric.test(format)) {
		if (format < 0) {
			this.d.minute = 0;
			this.subMinute(format);
		} else if (format > 23) {
			this.d.minute = 23;
			this.addMinute(format - 23);
		} else {
			this.d.minute = +format;
		}

		return this;
	} else {
		if (format == "m") return this.d.minute;
		if (format == "mm") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.addPrefix)(this.d.minute, 2);
		return this.d.minute;
	}
}


/***/ }),

/***/ "./src/set-get/month.js":
/*!******************************!*\
  !*** ./src/set-get/month.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "month": () => (/* binding */ month)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base */ "./src/base/index.js");



const getDefaultFormat = (calendar) => {
	switch (calendar[0]) {
		case "j":
			return "jM";
		default:
			return "M";
	}
};

function month(format) {
	format = String(format).trim();

	if (_utils__WEBPACK_IMPORTED_MODULE_0__.REGEX.isNumeric.test(format)) {
		if (format < 1) {
			this.d.month = 1;
			this.subMonth(format - 1, false);
		} else if (format > 12) {
			this.d.month = 12;
			this.addMonth(format - 12, false);
		} else {
			this.d.month = +format;
		}

		while (!this.isValidDate()) {
			this.subDay(1, false);
		}
		return this;
	} else {
		if (!format) format = getDefaultFormat(this.c);

		const jMonth = this.c == "jalali" ? this.d.month : (0,_base__WEBPACK_IMPORTED_MODULE_1__.gtj)(this.toDate())[1];
		if (format == "jMM") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.addPrefix)(jMonth, 2);
		if (format == "jM") return jMonth;
		if (format == "jMMMM" || format == "jMMM")
			return _utils__WEBPACK_IMPORTED_MODULE_0__.CALENDAR.jalali.months[jMonth];
		if (format == "jMo") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.ordinalNumber)(jMonth);
		if (format == "jMO") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.ordinalNumber)(jMonth, "jalali", 2);

		const gMonth =
			this.c == "gregorian" ? this.d.month : this.toDate().getMonth() + 1;
		if (format == "M") return gMonth;
		if (format == "MM") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.addPrefix)(gMonth, 2);
		if (format == "MMMM") return _utils__WEBPACK_IMPORTED_MODULE_0__.CALENDAR.gregorian.months[gMonth];
		if (format == "Mo" || format == "MO")
			return (0,_base__WEBPACK_IMPORTED_MODULE_1__.ordinalNumber)(gMonth, "gregorian");
		if (format == "MMM")
			return _utils__WEBPACK_IMPORTED_MODULE_0__.CALENDAR.gregorian.months[gMonth].slice(0, 3);

		return jMonth;
	}
}


/***/ }),

/***/ "./src/set-get/quarter.js":
/*!********************************!*\
  !*** ./src/set-get/quarter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quarter": () => (/* binding */ quarter)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base */ "./src/base/index.js");



const getDefaultFormat = (calendar) => {
	switch (calendar[0]) {
		case "j":
			return "jQ";
		default:
			return "Q";
	}
};

function quarter(format) {
	format = String(format).trim();

	if (_utils__WEBPACK_IMPORTED_MODULE_0__.REGEX.isNumeric.test(format)) {
		if (format < 1) {
			this.d.month = 1;
			this.subQuarter(format - 1, false);
		} else if (format > 4) {
			this.d.month = 12;
			this.addQuarter(format - 4, false);
		} else {
			this.d.month = +format * 3 - 2;
		}
		while (!this.isValidDate()) {
			this.subDay(1, false);
		}
		return this;
	} else {
		if (!format) format = getDefaultFormat(this.c);

		let jQuarter = Math.ceil(
			(this.c == "jalali" ? this.d.month : (0,_base__WEBPACK_IMPORTED_MODULE_1__.gtj)(this.toDate())[1]) / 3
		);
		if (format == "jQ") return jQuarter;
		if (format == "jQo") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.ordinalNumber)(jQuarter);
		if (format == "jQO") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.ordinalNumber)(jQuarter, "jalali", 2);

		const gQuarter = Math.ceil(
			(this.c == "gregorian" ? this.d.month : this.toDate().getMonth() + 1) / 3
		);
		if (format == "Q") return gQuarter;
		if (format == "Qo" || format == "QO")
			return (0,_base__WEBPACK_IMPORTED_MODULE_1__.ordinalNumber)(gQuarter, "gregorian");

		return jQuarter;
	}
}


/***/ }),

/***/ "./src/set-get/second.js":
/*!*******************************!*\
  !*** ./src/set-get/second.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "second": () => (/* binding */ second)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base */ "./src/base/index.js");



function second(format) {
	format = String(format).trim();

	if (_utils__WEBPACK_IMPORTED_MODULE_0__.REGEX.isNumeric.test(format)) {
		if (format < 0) {
			this.d.second = 0;
			this.subSecond(format);
		} else if (format > 23) {
			this.d.second = 23;
			this.addSecond(format - 23);
		} else {
			this.d.second = +format;
		}

		return this;
	} else {
		if (format == "s") return this.d.second;
		if (format == "ss") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.addPrefix)(this.d.second, 2);
		return this.d.second;
	}
}


/***/ }),

/***/ "./src/set-get/startOf.js":
/*!********************************!*\
  !*** ./src/set-get/startOf.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startOf": () => (/* binding */ startOf)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/base/index.js");


function startOf(unit) {
	this.d.millisecond = 0;
	if (unit[0] == "s") return this;
	this.d.second = 0;
	if (unit == "m" || unit == "minute") return this;
	this.d.minute = 0;
	if (unit[0] == "h") return this;
	this.d.hour = 0;
	if (unit[0] == "d") return this;
	if (unit[0] == "w")
		return this.subDay((0,_base__WEBPACK_IMPORTED_MODULE_0__.getDayOfWeek)(this.toDate(), this.c, "array"));
	this.d.date = 1;
	if (unit[0] == "q") return this.quarter(this.quarter());
	if (unit == "M" || unit == "month") return this;
	this.d.month = 1;
	if (unit[0] == "y") return this;
}


/***/ }),

/***/ "./src/set-get/time.js":
/*!*****************************!*\
  !*** ./src/set-get/time.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "time": () => (/* binding */ time)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/base/index.js");
/* harmony import */ var _comparison__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comparison */ "./src/comparison/index.js");



function time(...t) {
	if (!t.length) return this.toArray().slice(3);
	let times = [];
	if ((0,_comparison__WEBPACK_IMPORTED_MODULE_1__.isPersianDate)(t[0])) times = t[0].time();
	else if ((0,_comparison__WEBPACK_IMPORTED_MODULE_1__.isDate)(t[0]))
		times = [
			t[0].getHours(),
			t[0].getMinutes(),
			t[0].getSeconds(),
			t[0].getMilliseconds(),
		];
	else if (Object.prototype.toString.call(t[0]) === "[object Object]")
		times = [
			t[0].h || t[0].hour || t[0].hours || 0,
			t[0].m || t[0].minute || t[0].minutes || 0,
			t[0].s || t[0].second || t[0].seconds || 0,
			t[0].ms || t[0].millisecond || t[0].milliseconds || 0,
		];
	else times = (0,_base__WEBPACK_IMPORTED_MODULE_0__.typesToArray)(this.c, ...t);
	if (this.isValidTime(...times)) {
		return this.hour(times[0] || 0)
			.minute(times[1] || 0)
			.second(times[2] || 0)
			.millisecond(times[3] || 0);
	} else return "زمان نامعتبر";
}


/***/ }),

/***/ "./src/set-get/timestamp.js":
/*!**********************************!*\
  !*** ./src/set-get/timestamp.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timestamp": () => (/* binding */ timestamp)
/* harmony export */ });
function timestamp(value) {
	if (value) {
		return this.fromGregorian(+String(value).trim());
	} else {
		return this.toDate().getTime();
	}
}


/***/ }),

/***/ "./src/set-get/week.js":
/*!*****************************!*\
  !*** ./src/set-get/week.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "week": () => (/* binding */ week)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base */ "./src/base/index.js");



const getDefaultFormat = (calendar) => {
	switch (calendar[0]) {
		case "j":
			return "jw";
		default:
			return "w";
	}
};

function week(format) {
	format = String(format).trim();

	if (_utils__WEBPACK_IMPORTED_MODULE_0__.REGEX.isNumeric.test(format)) {
		const weeksInYear = this.getWeeksInYear();
		if (format < 1) {
			this.week(1);
			this.subWeek(format - 1, false);
		} else if (format > weeksInYear) {
			this.week(weeksInYear);
			this.addWeek(format - weeksInYear, false);
		} else {
			const weekOfYear = _base__WEBPACK_IMPORTED_MODULE_1__.getWeekOfYear.call(
				this,
				this.d.year,
				this.d.month,
				this.d.date,
				this.c
			);
			this.addWeek(+format - weekOfYear);
		}

		while (!this.isValidDate()) {
			this.subDay(1, false);
		}
		return this;
	} else {
		if (!format) format = getDefaultFormat(this.c);

		const jWeekOfYear = _base__WEBPACK_IMPORTED_MODULE_1__.getWeekOfYear.call(
			this,
			this.year("jy"),
			this.month("jM"),
			this.date("jD"),
			this.c
		);
		if (format == "jw" || format == "jW") return jWeekOfYear;
		if (format == "jww" || format == "jWW") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.addPrefix)(jWeekOfYear, 2);
		if (format == "jwo" || format == "jWo") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.ordinalNumber)(jWeekOfYear);
		if (format == "jwO" || format == "jWO")
			return (0,_base__WEBPACK_IMPORTED_MODULE_1__.ordinalNumber)(jWeekOfYear, "jalali", 2);

		const gWeekOfYear = _base__WEBPACK_IMPORTED_MODULE_1__.getWeekOfYear.call(
			this,
			this.year("y"),
			this.month("M"),
			this.date("D"),
			"gregorian"
		);
		if (format == "w" || format == "W") return gWeekOfYear;
		if (format == "ww" || format == "WW") return (0,_base__WEBPACK_IMPORTED_MODULE_1__.addPrefix)(gWeekOfYear, 2);
		if (format == "wo" || format == "Wo" || format == "wO" || format == "WO")
			return (0,_base__WEBPACK_IMPORTED_MODULE_1__.ordinalNumber)(gWeekOfYear, "gregorian");
		return jWeekOfYear;
	}
}


/***/ }),

/***/ "./src/set-get/year.js":
/*!*****************************!*\
  !*** ./src/set-get/year.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "year": () => (/* binding */ year)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base */ "./src/base/index.js");



const getDefaultFormat = (calendar) => {
	switch (calendar[0]) {
		case "j":
			return "jy";
		default:
			return "y";
	}
};

function year(format) {
	format = String(format).trim();

	if (_utils__WEBPACK_IMPORTED_MODULE_0__.REGEX.isNumeric.test(format)) {
		this.d.year = +format;
		if (!this.isValidDate()) {
			return this.subDay(1, false);
		}

		return this;
	} else {
		if (!format) format = getDefaultFormat(this.c);
		const jYear = this.c == "jalali" ? this.d.year : (0,_base__WEBPACK_IMPORTED_MODULE_1__.gtj)(this.toDate())[0];
		if (format == "jy" || format == "jYYYY") return jYear;
		if (format == "jYY") return String(jYear).slice(-2);
		const gYear =
			this.c == "gregorian" ? this.d.year : this.toDate().getFullYear();
		if (format == "y" || format == "YYYY") return gYear;
		if (format == "YY") return String(gYear).slice(-2);
		return jYear;
	}
}


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CALENDAR": () => (/* binding */ CALENDAR),
/* harmony export */   "TIMETYPE": () => (/* binding */ TIMETYPE),
/* harmony export */   "REGEX": () => (/* binding */ REGEX)
/* harmony export */ });
const CALENDAR = {
	jalali: {
		months: {
			1: "فروردین",
			2: "اردیبهشت",
			3: "خرداد",
			4: "تیر",
			5: "مرداد",
			6: "شهریور",
			7: "مهر",
			8: "آبان",
			9: "آذر",
			10: "دی",
			11: "بهمن",
			12: "اسفند",
		},
		days: {
			label: {
				6: "شنبه",
				0: "یکشنبه",
				1: "دوشنبه",
				2: "سه‌شنبه",
				3: "چهارشنبه",
				4: "پنجشنبه",
				5: "جمعه",
			},
			weekNumber: {
				// days in jalali calendar start from saturday or 6
				6: 0, //شنبه
				0: 1, //یکشنبه
				1: 2, //دوشنبه
				2: 3, //سه‌شنبه
				3: 4, //چهارشنبه
				4: 5, //پنجشنبه
				5: 6, //جمعه
			},
		},
		ordinalNumbers: function (number, mode) {
			const numbers = {
				1: "یک",
				2: "دو",
				3: "سو",
				4: "چهار",
				5: "پنج",
				6: "شش",
				7: "هفت",
				8: "هشت",
				9: "نه",
				10: "ده",
				11: "یازده",
				12: "دوازده",
				13: "سیزده",
				14: "چهارده",
				15: "پانزده",
				16: "شانزده",
				17: "هفده",
				18: "هجده",
				19: "نوزده",
				20: "بیست",
				30: "سی‌",
				40: "چهل",
				50: "پنجاه",
				60: "شصت",
				70: "هفتاد",
				80: "هشتاد",
				90: "نود",
				100: "صد",
				200: "دویست",
				300: "سیصد",
			};
			let ordinalNumber = "";
			if (number == 1) ordinalNumber = "اول";
			else if (numbers[number])
				ordinalNumber = numbers[number] + (number == 30 ? "ام" : "م");
			else {
				let remainder = number % 100;
				if (numbers[remainder]) ordinalNumber = numbers[remainder] + "م";
				else {
					remainder = number % 10;
					if (remainder) ordinalNumber = numbers[remainder] + "م";
				}
				remainder = (number - remainder) % 100;
				if (remainder)
					ordinalNumber =
						numbers[remainder] +
						(ordinalNumber
							? " و " + ordinalNumber
							: remainder == 30
							? "ام "
							: "م");
				remainder = Math.floor(number / 100) * 100;
				if (remainder)
					ordinalNumber =
						numbers[remainder] + (ordinalNumber ? " و " + ordinalNumber : "م");
			}
			if (mode == 2) ordinalNumber += "ین";
			return ordinalNumber;
		},
	},
	gregorian: {
		months: {
			1: "January",
			2: "February",
			3: "March",
			4: "April",
			5: "May",
			6: "June",
			7: "July",
			8: "August",
			9: "September",
			10: "October",
			11: "November",
			12: "December",
		},
		days: {
			label: {
				0: "Sunday",
				1: "Monday",
				2: "Tuesday",
				3: "Wednesday",
				4: "Thursday",
				5: "Friday",
				6: "Saturday",
			},
			weekNumber: {
				// days in gregorian calendar start from sunday or 0
				0: 0, // Sunday
				1: 1, // Monday
				2: 2, // Tuesday
				3: 3, // Wednesday
				4: 4, // Thursday
				5: 5, // Friday
				6: 6, // Saturday
			},
		},
		ordinalNumbers: function (number) {
			if (number == 1 || (number % 10 == 1 && number != 11))
				return number + "st";
			else if (number == 2 || (number % 10 == 2 && number != 12))
				return number + "nd";
			else if (number == 3 || (number % 10 == 3 && number != 13))
				return number + "rd";
			else return number + "th";
		},
	},
};

const REGEX = {
	format: /j*(YYYY|YY|y|Qo|QO|Q|MMMM|MMM|MM|Mo|MO|M|DDDD|DDDo|DDDO|DDD|DD|Do|DO|D|dddd|ddd|dd|do|dO|de|d|ww|WW|wo|Wo|wO|WO|w|W|HH|hh|H|h|kk|k|mm|m|ss|s|CCCC|CCC|c|t|aa|a|A)/g,
	isNumeric: /^\d+$/, // this regex, checks input to see is a number or not
	separators: "\\/| |-|\\.|,|:", // find ['/',' ','-','.',',',':'] and split string to array by this symbols
	betweenBacktick: /`(.*?)`/g, // find the texts between the backticks ==> `Alireza`
};

const TIMETYPE = function (hour, format) {
	if (hour >= 0 && hour < 12) {
		if (format == "a") return "am";
		else if (format == "aa") return "A.M.";
		else if (format == "A") return "AM";
		else if (format == "ja") return "ق ظ";
		else if (format == "jaa") return "ق.ظ";
		else if (format == "jA") return "قبل از ظهر";
		return "ق.ظ";
	} else if (hour >= 12 && hour < 24) {
		if (format == "a") return "pm";
		else if (format == "aa") return "P.M.";
		else if (format == "A") return "PM";
		else if (format == "ja") return "ب ظ";
		else if (format == "jaa") return "ب.ظ";
		else if (format == "jA") return "بعد از ظهر";
		return "ب.ظ";
	}
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/PersianDate.js");
/******/ 	__webpack_exports__ = __webpack_exports__.default;
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=PersianDate.umd.js.map