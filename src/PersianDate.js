////////////////////---------- Are You Ready? ----------////////////////////
////////////////////------------- Let's Go -------------////////////////////
////////////////////---- Read Comments And Enjoy It ----////////////////////

////////////////////------------- ATTENTION -------------////////////////////
//          In the first, I'm must say, in the all of the project,         //
//          g means Gregorian and j means Jalali                           //
/////////////////////////////////////////////////////////////////////////////
import { warn, compare, mathOperation } from "./base";

import {
	now,
	parse,
	clone,
	fromJalali,
	fromGregorian,
	calendar as calendarMethod,
} from "./create";

import {
	year as yearMethod,
	quarter as quarterMethod,
	month as monthMethod,
	week as weekMethod,
	date as dateMethod,
	hour as hourMethod,
	minute as minuteMethod,
	second as secondMethod,
	millisecond as millisecondMethod,
	timestamp,
	getDaysInMonth,
	getWeeksInYear,
	startOf,
	endOf,
	time,
} from "./set-get";

import {
	addYear,
	addQuarter,
	addMonth,
	addWeek,
	addDay,
	addHour,
	addMinute,
	addSecond,
	addMillisecond,
	subYear,
	subQuarter,
	subMonth,
	subWeek,
	subDay,
	subHour,
	subMinute,
	subSecond,
	subMillisecond,
} from "./add-sub";

import { toString, toArray, toObject, toDate } from "./conversion";

import {
	isLeapYear,
	isDate,
	isPersianDate,
	isValidDate,
	isValidTime,
	isValid,
	isSame,
	isBetween,
} from "./comparison";

import { diff, diffForHumans } from "./diff";

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
		return now.call(this);
	};

	/**
	 * set persian date from Gregorian date
	 * @deprecated
	 * @param {...Number|Date|Array|Null} date - the date that convert to persian date
	 * @returns {PersianDate} return class with persian date
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.setDate = function () {
		warn(
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
		return parse.call(this, ...arguments);
	};

	/**
	 * get clone of this date
	 * @since 1.1.0
	 * @returns {PersianDate} returns the clone of this date
	 */
	PersianDate.prototype.clone = function () {
		return clone.call(this);
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
		return fromJalali.call(this, ...arguments);
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
		return fromGregorian.call(this, ...arguments);
	};

	/**
	 * convert a gregorian date to PersianDate instance
	 * @since 2.0.0
	 * @param {"j"|"jalali"|"g"|"gregorian"} calendar - the calendar
	 * @returns {PersianDate} return class with persian date
	 */
	PersianDate.prototype.calendar = function (calendar) {
		return calendarMethod.call(this, calendar);
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
		return yearMethod.call(this, format);
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
		return monthMethod.call(this, format);
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
		return dateMethod.call(this, format);
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
		return quarterMethod.call(this, format);
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
		return weekMethod.call(this, format);
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
		return hourMethod.call(this, format);
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
		return minuteMethod.call(this, format);
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
		return secondMethod.call(this, format);
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
		return millisecondMethod.call(this, format);
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
		return timestamp.call(this, value);
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
		return getDaysInMonth(this.c, year, month);
	};

	/**
	 * return number of weeks in year
	 * @since 2.0.0
	 * @param {Number|String} year - the year
	 * @returns {Number} number of weeks in year
	 */
	PersianDate.prototype.getWeeksInYear = function (year = this.d.year) {
		if (this.error) return this.error;
		return getWeeksInYear.call(this, year);
	};

	/**
	 * change the date to start of the year or month or ...
	 * @since 2.0.0
	 * @param {String} unit - the unit of time
	 * @returns {PersianDate} return the class with new date or time
	 */
	PersianDate.prototype.startOf = function (unit = "year") {
		return startOf.call(this, unit);
	};

	/**
	 * change the date to end of the year or month or ...
	 * @since 2.0.0
	 * @param {String} unit - the unit of time
	 * @returns {PersianDate} return the class with new date or time
	 */
	PersianDate.prototype.endOf = function (unit = "year") {
		return endOf.call(this, unit);
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
		return time.call(this, ...arguments);
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
		return addYear.call(this, year, checkDate);
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
		return addMonth.call(this, month, checkDate);
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
		return addDay.call(this, day, checkDate);
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
		return addQuarter.call(this, quarter, checkDate);
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
		return addWeek.call(this, week, checkDate);
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
		return addHour.call(this, hour, checkDate);
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
		return addMinute.call(this, minute, checkDate);
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
		return addSecond.call(this, second, checkDate);
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
		return addMillisecond.call(this, millisecond, checkDate);
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
		return subYear.call(this, year, checkDate);
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
		return subMonth.call(this, month, checkDate);
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
		return subDay.call(this, day, checkDate);
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
		return subQuarter.call(this, quarter, checkDate);
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
		return subWeek.call(this, week, checkDate);
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
		return subHour.call(this, hour, checkDate);
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
		return subMinute.call(this, minute, checkDate);
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
		return subSecond.call(this, second, checkDate);
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
		return subMillisecond.call(this, millisecond, checkDate);
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
		return toString.call(this, format);
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
		return toArray.call(this, ...arguments);
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
		return toObject.call(this, ...arguments);
	};

	/**
	 * return the Date instance of PersianDate
	 * @since 2.0.0
	 * @returns {Date} if date valid, return Date instance of date
	 * @throws {String} if date invalid return error message
	 */
	PersianDate.prototype.toDate = function () {
		if (this.error) return this.error;
		return toDate.call(this);
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
		return diff.call(this, date, unit, addOne);
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
		return diffForHumans.call(this, date, suffix);
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
		return mathOperation.call(this, arguments, "min");
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
		return mathOperation.call(this, arguments, "max");
	};

	/**
	 * receives year and determined that is leap year or not
	 * @param {?Number} year - the year to be determined is a leap or not
	 * @returns {Boolean} if is leap year, returns true
	 */
	PersianDate.prototype.isLeapYear = function (year = this.d.year) {
		if (this.error) return false;
		return isLeapYear(this.c, year);
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
		return isValidDate(this.c, year, month, day);
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
		return isValidTime(hour, minute, second, millisecond);
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
		return isSame.call(this, ...arguments);
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
		return compare.call(this, arguments, "<");
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
		return compare.call(this, arguments, ">");
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
		return compare.call(this, arguments, "<=");
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
		return compare.call(this, arguments, ">=");
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
		return isBetween.call(this, from, to, method);
	};

	/**
	 * checks date is a native js Date object
	 * @since 1.3.0
	 * @param {*} date date that must be checked
	 * @returns {Boolean} if date is a native js Date, return true
	 */
	PersianDate.prototype.isDate = isDate;

	/**
	 * checks date is a PersianDate object
	 * @since 1.3.0
	 * @param {*} date date that must be checked
	 * @returns {Boolean} if date is a PersianDate, return true
	 */
	PersianDate.prototype.isPersianDate = isPersianDate;

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
PersianDate.isLeapYear = isLeapYear;

/**
 * checks date is a native js Date object
 * @static
 * @since 2.3.0
 * @param {*} date date that must be checked
 * @returns {Boolean} if date is a native js Date, return true
 */
PersianDate.isDate = isDate;

/**
 * checks date is a PersianDate object
 * @static
 * @since 2.3.0
 * @param {*} date date that must be checked
 * @returns {Boolean} if date is a PersianDate, return true
 */
PersianDate.isPersianDate = isPersianDate;

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
PersianDate.isValid = isValid;

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
PersianDate.isValidDate = isValidDate;

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
PersianDate.isValidTime = isValidTime;

/**
 * returns number of days in month
 * @param {"jalali"|"gregorian"} calendar - the calendar
 * @param {?Number} year - year of date that returns number of days in month
 * @param {?Number} month - month of date that returns number of days in month
 * @returns {Number} number of days in month
 * @throws {String} if date invalid return error message
 */
PersianDate.getDaysInMonth = getDaysInMonth;

//TODO: add localization

export default PersianDate;

////////////////////- Email: Alibeikialireza@gmail.com -////////////////////
////////////////////--------- Have A Good Day ---------/////////////////////
