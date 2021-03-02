////////////////////---------- Are You Ready? ----------////////////////////
////////////////////------------- Let's Go -------------////////////////////
////////////////////---- Read Comments And Enjoy It ----////////////////////

////////////////////------------- ATTENTION -------------////////////////////
//          In the first, I'm must say, in the all of the project,         //
//          g means Gregorian and j means Jalali                           //
/////////////////////////////////////////////////////////////////////////////
import { CALENDAR, TIMETYPE, REGEX } from "./utils.js";

/**
 * A Date library for working with persian date
 * @class
 * @param {Date|Array|Null|Object|String} dateVal - the date that convert to persian date
 * @param {String} [calendarVal='jalali'] - the calendar
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
		else if (Object.prototype.toString.call(year) === "[object Date]")
			// if the year was an instance of Date
			date = year;
		else
			date = new Date(
				REGEX["isNumeric"].test(year) ? year : 0,
				REGEX["isNumeric"].test(month) ? month : 0,
				REGEX["isNumeric"].test(day) ? day : 1,
				REGEX["isNumeric"].test(hour) ? hour : 0,
				REGEX["isNumeric"].test(minute) ? minute : 0,
				REGEX["isNumeric"].test(second) ? second : 0,
				REGEX["isNumeric"].test(millisecond) ? millisecond : 0
			);
		day = date.getDate();
		month = date.getMonth() + 1; // Because the output of getMonth() start from zero, add one
		year = date.getFullYear();
		hour = date.getHours();
		minute = date.getMinutes();
		second = date.getSeconds();
		millisecond = date.getMilliseconds();
		let jYear, jMonth, jDay;
		let pastDaysInMonth = [
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
		]; //Past days from the start of the year in each month
		if (year > 1600) {
			jYear = 979;
			year -= 1600;
		} else {
			jYear = 0;
			year -= 621;
		}
		let newYear = month > 2 ? year + 1 : year;
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
		year = REGEX["isNumeric"].test(year) ? +year : 1;
		month = REGEX["isNumeric"].test(month) ? +month : 1;
		day = REGEX["isNumeric"].test(day) ? +day : 1;
		hour = REGEX["isNumeric"].test(hour) ? +hour : 0;
		minute = REGEX["isNumeric"].test(minute) ? +minute : 0;
		second = REGEX["isNumeric"].test(second) ? +second : 0;
		millisecond = REGEX["isNumeric"].test(millisecond) ? +millisecond : 0;
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
		let daysOfMonths = [
			0,
			31,
			(gYear % 4 == 0 && gYear % 100 != 0) || gYear % 400 == 0 ? 29 : 28,
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
			let v = daysOfMonths[gMonth];
			if (gDay <= v) break;
			gDay -= v;
		}

		return new Date(gYear, gMonth - 1, gDay, hour, minute, second, millisecond);
	};

	/**
	 * get label of day
	 * @param {Date} date - the date that received day
	 * @param {'jalali'|'gregorian'} calendar - the calendar
	 * @returns {String} returns day label
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 * @example Saturday | شنبه
	 */
	const getDayLabel = (date = new Date(), calendar = "jalali") => {
		if (Object.prototype.toString.call(date) === "[object Date]")
			// if the year was an instance of Date
			return CALENDAR[calendar]["days"]["label"][date.getDay()];
		return showError("تاریخ نامعتبر", this);
	};

	/**
	 * get the day of the week
	 * @param {Date} date - the date that received day of week
	 * @param {'jalali', 'gregorian'} calendar - the calendar
	 * @param {'standard','array'} mode - standard mode start from 1 and array mode start from 0
	 * @returns {Number} the number of the day of week
	 * @throws {PersianDate} if date invalid return class with error property
	 */
	const getDayOfWeek = (
		date = new Date(),
		calendar = "jalali",
		mode = "standard"
	) => {
		if (Object.prototype.toString.call(date) === "[object Date]") {
			// if the year was an instance of Date
			return (
				CALENDAR[calendar]["days"]["weekNumber"][date.getDay()] +
				(mode != "standard" ? 0 : 1)
			);
		}
		return showError("تاریخ نامعتبر", this);
	};

	/**
	 * get the day of the year
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
			day += new PersianDate([year, month], calendar).getDaysInMonth();
		}
		return day;
	};

	/**
	 * get the week of the year
	 * @param {Null|Number|String} year - the year of date that gives the week of the year
	 * @param {Null|Number|String} month - the month of date that gives the week of the year
	 * @param {Null|Number|String} day - the day of date that gives the week of the year
	 * @param {String} calendar - the calendar
	 * @returns {Number} the week of the year
	 */
	const getWeekOfYear = (year, month, day, calendar) => {
		let dayOfYearFormat = calendar == "jalali" ? "jd" : "d";
		let firstOfYear = new PersianDate().calendar(calendar).parse(year);
		let firstOfYearDay = firstOfYear.date(dayOfYearFormat);
		let date = firstOfYear.clone().parse(year, month, day);
		if (firstOfYearDay > 3) firstOfYear.addDay(7 - firstOfYearDay);

		let weekNumber = Math.ceil(date.diff(firstOfYear, "date", true) / 7);

		let weeksInYear = date.clone().getWeeksInYear();
		return weekNumber > weeksInYear ? weeksInYear : weekNumber;
	};

	/**
	 * returns the ordinal number of that number sent to it
	 * @param {Number} number - the number that gives ordinal number --> from 1 to 366
	 * @param {'jalali','gregorian'} calendar - the calendar
	 * @param {?Number} mode  - 'jalali' calendar have two mode of ordinal number
	 * @returns {String} ordinal number
	 * @example 1st | اول | اولین
	 */
	const ordinalNumber = (number, calendar = "jalali", mode = 1) => {
		return CALENDAR[calendar].ordinalNumbers(number, mode);
	};

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

	/**
	 * make error and delete this.d
	 * @param {String} errorText - Error Text
	 * @returns {PersianDate} make error and return class
	 */
	const showError = (errorText, instance) => {
		delete instance.d;
		instance.error = errorText;
		return errorText;
	};

	/**
	 * make current date in persian calendar
	 * @returns {PersianDate} make current date and return class
	 */
	PersianDate.prototype.now = function () {
		if (this.error) {
			delete this.error;
			this.d = {};
		}
		let date = new Date();
		if (this.c == "jalali") setJalaliDate(gtj(date), this);
		else setGregorianDate(date, this);
		return this;
	};

	/**
	 * set persian date from Gregorian date
	 * @param {...Number|Date|Array|Null} date - the date that convert to persian date
	 * @returns {PersianDate} return class with persian date
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.setDate = function (...date) {
		deprecate(
			'"setDate" function is deprecated! use "fromGregorian" function instead.\n' +
			"https://alireza-ab.ir/persian-date/create-and-parse#from-gregorian-date"
		);
		return this.fromGregorian(...date);
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
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.parse = function (...date) {
		if (this.c == "jalali") return this.fromJalali(...date);
		else return this.fromGregorian(...date);
	};

	/**
	 * receives year and determined that is leap year or not
	 * @param {?Number} year - the year to be determined is a leap or not
	 * @returns {Boolean} if is leap year, returns true
	 */
	PersianDate.prototype.isLeapYear = function (year) {
		if (this.error) return false;
		if (!year) year = this.year();
		if (this.c == "jalali") {
			let array =
				year > 1342
					? [1, 5, 9, 13, 17, 22, 26, 30]
					: [1, 5, 9, 13, 17, 21, 26, 30];
			let remainder = year % 33;
			return array.includes(remainder);
		} else {
			return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
		}
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
	PersianDate.prototype.isValidDate = function (year, month, day) {
		if (this.error) return false;
		if (!year) {
			year = this.d.year;
			month = this.d.month;
			day = this.d.date;
		}
		if ([year, month, day].some((e) => String(e).search(/null|NaN/) != -1))
			return false;
		if (year < 0 || month > 12 || month < 1 || day > 31 || day < 1)
			return false;
		if (this.c == "jalali") {
			if (month >= 7 && month <= 11 && day == 31) return false;
			if (month == 12 && day == 31) return false;
			if (month == 12 && day == 30 && !this.isLeapYear(year)) return false;
		} else {
			if ([2, 4, 6, 9, 11].includes(month) && day == 31) return false;
			if (month == 2 && (day == 30 || (day == 29 && !this.isLeapYear(year))))
				return false;
		}
		return true;
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
		hour,
		minute,
		second,
		millisecond
	) {
		if (this.error) return false;
		if (hour == undefined) {
			hour = this.d.hour;
			minute = this.d.minute;
			second = this.d.second;
			millisecond = this.d.millisecond;
		}

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

	/**
	 * returns number of days in month
	 * @param {?Number} year - year of date that returns number of days in month
	 * @param {?Number} month - month of date that returns number of days in month
	 * @returns {Number} number of days in month
	 */
	PersianDate.prototype.getDaysInMonth = function (
		year = this.d.year,
		month = this.d.month
	) {
		if (this.error) return this.error;
		if (this.c == "jalali") {
			if (month >= 1 && month <= 6) return 31;
			if ((month > 6 && month <= 11) || this.isLeapYear(year)) {
				return 30;
			}
			return 29;
		} else {
			if ([1, 3, 5, 7, 8, 10, 12].includes(month)) return 31;
			if (month == 2) {
				if (this.isLeapYear(year)) return 29;
				return 28;
			}
			return 30;
		}
	};

	/**
	 * add to year
	 * @param {?Number|String} [year=1] - a number for add with year
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.addYear = function (year = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!year) return this;
		if (year < 0)
			// if the number was negative, send to subYear method
			return this.subYear(Math.abs(year));
		this.d.year += +year; //plus sign before a variable, convert variable to int
		while (checkDate && !this.isValidDate()) this.subDay(1, false);
		return this;
	};

	/**
	 * add to month
	 * @param {?Number|String} [month=1] - a number for add with month
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.addMonth = function (month = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!month) return this;
		if (month < 0)
			// if the number was negative, send to subMonth method
			return this.subMonth(Math.abs(month));
		month = +month; // plus sign before a variable, convert variable to int

		let monthToStartNewYear = 12 - this.d.month + 1; // monthToStartNewYear -> Number of month to start of new year
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
	};

	/**
	 * add to day
	 * @param {?Number|String} [day=1] - a number for add with day
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.addDay = function (day = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!day) return this;
		if (day < 0)
			// if the number was negative, send to subDay method
			return this.subDay(Math.abs(day));
		day = +day; //plus sign before a variable, convert variable to int

		let dayToStartNextMonth = this.getDaysInMonth() - this.d.date + 1; // dayToStartNextMonth -> Number of day to start of next month
		if (dayToStartNextMonth > day) {
			this.d.date += day;
		} else {
			this.addMonth(1, false);
			this.d.date = 1;
			day -= dayToStartNextMonth;
			while (day >= this.getDaysInMonth()) {
				day -= this.getDaysInMonth();
				this.addMonth(1, false);
			}
			if (day != 0) {
				this.d.date += day;
			}
		}

		while (checkDate && !this.isValidDate()) this.subDay(1, false);
		return this;
	};

	/**
	 * add to quarter
	 * @param {?Number|String} [quarter=1] - a number for add with quarter
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.addQuarter = function (quarter = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!quarter) return this;
		if (quarter < 0)
			// if the number was negative, send to subQuarter method
			return this.subQuarter(Math.abs(quarter));
		quarter = +quarter; //plus sign before a variable, convert variable to int
		return this.addMonth(quarter * 3, checkDate);
	};

	/**
	 * add to week
	 * @param {?Number|String} [week=1] - a number for add with week
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.addWeek = function (week = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!week) return this;
		if (week < 0)
			// if the number was negative, send to subWeek method
			return this.subWeek(Math.abs(week));
		week = +week; //plus sign before a variable, convert variable to int
		return this.addDay(week * 7, checkDate);
	};

	/**
	 * add to hour
	 * @param {?Number|String} [hour=1] - a number for add with hour
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.addHour = function (hour = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!hour) return this;
		if (hour < 0)
			// if the number was negative, send to subHour method
			return this.subHour(Math.abs(hour));
		hour = +hour; //plus sign before a variable, convert variable to int
		while (hour >= 24) {
			hour -= 24;
			this.addDay(1, false);
		}
		let hourToNextDay = 24 - this.d.hour; // hourToNextDay -> Number of hour to start of next day
		if (hour >= hourToNextDay) {
			this.addDay(1, false);
			hour -= hourToNextDay;
			this.d.hour = hour;
		} else this.d.hour += hour;

		while (checkDate && !this.isValidTime()) this.subMillisecond(1, false);
		return this;
	};

	/**
	 * add to minute
	 * @param {?Number|String} [minute=1] - a number for add with minute
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.addMinute = function (minute = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!minute) return this;
		if (minute < 0)
			// if the number was negative, send to subMinute method
			return this.subMinute(Math.abs(minute));
		minute = +minute; //plus sign before a variable, convert variable to int
		while (minute >= 60) {
			this.addHour(1, false);
			minute -= 60;
		}
		let minuteToNextHour = 60 - this.d.minute; // minuteToNextHour -> Number of minute to start of next hour
		if (minute >= minuteToNextHour) {
			this.addHour(1, false);
			minute -= minuteToNextHour;
			this.d.minute = minute;
		} else this.d.minute += minute;

		while (checkDate && !this.isValidTime()) this.subMillisecond(1, false);
		return this;
	};

	/**
	 * add to second
	 * @param {?Number|String} [second=1] - a number for add with second
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.addSecond = function (second = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!second) return this;
		if (second < 0)
			// if the number was negative, send to subSecond method
			return this.subSecond(Math.abs(second));
		second = +second; //plus sign before a variable, convert variable to int
		while (second >= 60) {
			this.addMinute(1, false);
			second -= 60;
		}
		let secondToNextMinute = 60 - this.d.second; // secondToNextMinute -> Number of second to start of next Minute
		if (second >= secondToNextMinute) {
			this.addMinute(1, false);
			second -= secondToNextMinute;
			this.d.second = second;
		} else this.d.second += second;

		while (checkDate && !this.isValidTime()) this.subMillisecond(1, false);
		return this;
	};

	/**
	 * add to millisecond
	 * @param {?Number|String} [millisecond=1] - a number for add with millisecond
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.addMillisecond = function (
		millisecond = 1,
		checkDate = true
	) {
		if (this.error) return this.error;
		if (!millisecond) return this;
		if (millisecond < 0)
			// if the number was negative, send to subMillisecond method
			return this.subMillisecond(Math.abs(millisecond));
		millisecond = +millisecond; //plus sign before a variable, convert variable to int
		while (millisecond >= 1000) {
			this.addSecond(1, false);
			millisecond -= 1000;
		}
		let millisecondToNextSecond = 1000 - this.d.millisecond; // millisecondToNextSecond -> Number of milllisecond to start of next second
		if (millisecond >= millisecondToNextSecond) {
			this.addSecond(1, false);
			millisecond -= millisecondToNextSecond;
			this.d.millisecond = millisecond;
		} else this.d.millisecond += millisecond;

		while (checkDate && !this.isValidTime()) this.subMillisecond(1, false);
		return this;
	};

	/**
	 * subtract from year
	 * @param {?Number|String} [year=1] - a number for subtract from year
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.subYear = function (year = 1, checkDate = true) {
		if (!year) return this;
		this.d.year -= Math.abs(year);
		while (checkDate && !this.isValidDate()) this.subDay(1, false);
		return this;
	};

	/**
	 * subtract from month
	 * @param {?Number|String} [month=1] - a number for subtract from month
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.subMonth = function (month = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!month) return this;
		month = Math.abs(month); //plus sign before a variable, convert variable to int
		let pastMonth = this.d.month; //pastMonth -> Number of month that is past
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
	};

	/**
	 * subtract from day
	 * @param {?Number|String} [day=1] - a number for subtract from day
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.subDay = function (day = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!day) return this;
		day = Math.abs(day);
		let pastDays = this.d.date; // pastDays -> Number of days that is past
		if (pastDays > day) {
			this.d.date -= day;
		} else {
			this.subMonth(1, false);
			this.d.date = this.getDaysInMonth();
			day -= pastDays;
			while (day >= this.getDaysInMonth()) {
				day -= this.getDaysInMonth();
				this.subMonth(1, false);
			}
			this.d.date = this.getDaysInMonth() - day;
		}

		while (checkDate && !this.isValidDate()) this.subDay(1, false);
		return this;
	};

	/**
	 * subtract from quarter
	 * @param {?Number|String} [quarter=1] - a number for subtract from quarter
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.subQuarter = function (quarter = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!quarter) return this;
		quarter = Math.abs(quarter);
		return this.subMonth(quarter * 3, checkDate);
	};

	/**
	 * subtract from week
	 * @param {?Number|String} [week=1] - a number for subtract from week
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.subWeek = function (week = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!week) return this;
		week = Math.abs(week);
		return this.subDay(week * 7, checkDate);
	};

	/**
	 * subtract from hour
	 * @param {?Number|String} [hour=1] - a number for subtract from hour
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.subHour = function (hour = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!hour) return this;
		hour = Math.abs(hour);
		while (hour >= 24) {
			hour -= 24;
			this.subDay(1, false);
		}
		let pastHours = this.d.hour; // pastHours -> Number of hours that is past
		if (hour > pastHours) {
			this.subDay(1, false);
			hour -= pastHours;
			this.d.hour = 24 - hour;
		} else this.d.hour -= hour;

		while (checkDate && !this.isValidTime()) this.subMillisecond(1, false);
		return this;
	};

	/**
	 * subtract from minute
	 * @param {?Number|String} [minute=1] - a number for subtract from minute
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.subMinute = function (minute = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!minute) return this;
		minute = Math.abs(minute);
		while (minute >= 60) {
			minute -= 60;
			this.subHour(1, false);
		}
		let pastMinute = this.d.minute; // pastMinutes -> Number of minutes that is past
		if (minute > pastMinute) {
			this.subHour(1, false);
			minute -= pastMinute;
			this.d.minute = 60 - minute;
		} else this.d.minute -= minute;

		while (checkDate && !this.isValidTime()) this.subMillisecond(1, false);
		return this;
	};

	/**
	 * subtract from second
	 * @param {?Number|String} [second=1] - a number for subtract from second
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.subSecond = function (second = 1, checkDate = true) {
		if (this.error) return this.error;
		if (!second) return this;
		second = Math.abs(second);
		while (second >= 60) {
			second -= 60;
			this.subMinute(1, false);
		}
		let pastSeconds = this.d.second; // pastSeconds -> Number of seconds that is past
		if (second > pastSeconds) {
			this.subMinute(1, false);
			second -= pastSeconds;
			this.d.second = 60 - second;
		} else this.d.second -= second;

		while (checkDate && !this.isValidTime()) this.subMillisecond(1, false);
		return this;
	};

	/**
	 * subtract from millisecond
	 * @param {?Number|String} [millisecond=1] - a number for subtract from millisecond
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.subMillisecond = function (
		millisecond = 1,
		checkDate = true
	) {
		if (this.error) return this.error;
		if (!millisecond) return this;
		millisecond = Math.abs(millisecond);
		while (millisecond >= 1000) {
			millisecond -= 1000;
			this.subSecond(1, false);
		}
		let pastMilliseconds = this.d.millisecond; // pastMilliseconds -> Number of milliseconds that is past
		if (millisecond > pastMilliseconds) {
			this.subSecond(1, false);
			millisecond -= pastMilliseconds;
			this.d.millisecond = 1000 - millisecond;
		} else this.d.millisecond -= millisecond;

		while (checkDate && !this.isValidTime()) this.subMillisecond(1, false);
		return this;
	};

	/**
	 * returns date as string with specify format
	 * @param {?String} [format=date] - formatting date to string
	 * @returns {String} date string
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.toString = function (format = "date") {
		if (this.error) return this.error;
		let texts = [];
		format = format.replace(REGEX["betweenBacktick"], (matched, text) => {
			texts.push(text);
			return "###";
		});
		format = format.replace(/\?/g, this.c == "jalali" ? "j" : "");
		if (this.c == "jalali")
			format = format
				.replace(/datetime/gi, "jYYYY/jMM/jDD HH:mm")
				.replace(/date/gi, "jYYYY/jMM/jDD")
				.replace(/time/gi, "HH:mm");
		else
			format = format
				.replace(/datetime/gi, "YYYY-MM-DD HH:mm")
				.replace(/date/gi, "YYYY-MM-DD")
				.replace(/time/gi, "HH:mm");
		let matchedFormat = format.match(REGEX["format"]);
		let dateString = "";
		for (const i of matchedFormat) {
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
			else if (i.search(/a|A/) != -1) dateString += TIMETYPE(this.d.hour, i);

			format = format.substr(format.indexOf(i) + i.length);
		}
		dateString += format;
		for (let i = 0; i < texts.length; i++)
			dateString = dateString.replace("###", texts[i]);
		return String(dateString);
	};

	/**
	 * get or set year
	 * @param {Null|Number|String} [format=jYYYY] - a number for set the year or a format for formatting
	 * @returns {PersianDate|String|Number} if set the year, returns class,
	 * else returns a number or string from year
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.year = function (format = "") {
		if (this.error) return this.error;
		format = String(format).trim();
		if (REGEX["isNumeric"].test(format)) {
			this.d.year = +format;
			if (!this.isValidDate()) {
				return this.addYear(format);
			}
			return this;
		} else {
			if (!format) format = this.c == "jalali" ? "jYYYY" : "YYYY";
			let year = this.c == "jalali" ? this.d.year : gtj(this.toDate())[0];
			if (format == "jYYYY" || format == "jy") return year;
			if (format == "jYY") return String(year).slice(-2);
			let gYear =
				this.c == "jalali" ? this.toDate().getFullYear() : this.d.year;
			if (format == "YYYY" || format == "y") return gYear;
			if (format == "YY") return String(gYear).slice(-2);
			return year;
		}
	};

	/**
	 * get or set month
	 * @param {Null|Number|String} [format=jM] - a number for set the month or a format for formatting
	 * @returns {PersianDate|String|Number} if set the month, returns class,
	 * else returns a number or string from month
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.month = function (format = "") {
		if (this.error) return this.error;
		format = String(format).trim();
		if (REGEX["isNumeric"].test(format)) {
			if (format < 1) {
				this.d.month = 1;
				return this.subMonth(format - 1);
			} else if (format > 12) {
				this.d.month = 12;
				return this.addMonth(format - 12);
			}
			this.d.month = +format;
			while (!this.isValidDate()) {
				this.subDay(1, false);
			}
			return this;
		} else {
			if (!format) format = this.c == "jalali" ? "jM" : "M";
			let month = this.c == "jalali" ? this.d.month : gtj(this.toDate())[1];
			if (format == "jMM") return addPrefix(month, 2);
			if (format == "jM") return month;
			if (format == "jMMMM" || format == "jMMM")
				return CALENDAR["jalali"]["months"][month];
			if (format == "jMo") return ordinalNumber(month);
			if (format == "jMO") return ordinalNumber(month, "jalali", 2);
			let gMonth =
				this.c == "jalali" ? this.toDate().getMonth() + 1 : this.d.month;
			if (format == "M") return gMonth;
			if (format == "MM") return addPrefix(gMonth, 2);
			if (format == "MMMM") return CALENDAR["gregorian"]["months"][gMonth];
			if (format == "Mo" || format == "MO")
				return ordinalNumber(gMonth, "gregorian");
			if (format == "MMM")
				return CALENDAR["gregorian"]["months"][gMonth].slice(0, 3);
			return month;
		}
	};

	/**
	 * get or set day in month
	 * @param {Null|Number|String} [format=jD] - a number for set the day in month or a format for formatting
	 * @returns {PersianDate|String|Number} if set the day, returns class,
	 * else returns a number or string from day
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.date = function (format = "") {
		if (this.error) return this.error;
		format = String(format).trim();
		if (REGEX["isNumeric"].test(format)) {
			let daysInMonth = this.getDaysInMonth();
			if (format < 1) {
				this.d.date = 1;
				return this.subDay(format - 1);
			} else if (format > daysInMonth) {
				this.d.date = daysInMonth;
				return this.addDay(format - daysInMonth);
			}
			this.d.date = +format;
			while (!this.isValidDate()) {
				this.subDay(1, false);
			}
			return this;
		} else {
			if (!format) format = this.c == "jalali" ? "jD" : "D";
			let date = this.c == "jalali" ? this.d.date : gtj(this.toDate())[2];
			//---------- Day of Month ----------//
			if (format == "jDD") return addPrefix(date, 2);
			if (format == "jD") return date;
			if (format == "jDo") return ordinalNumber(date);
			if (format == "jDO") return ordinalNumber(date, "jalali", 2);
			//---------- Day of Week ----------//
			let gDate = this.toDate();
			if (format == "jdddd" || format == "jddd") return getDayLabel(gDate);
			if (format == "jdd") return getDayLabel(gDate).slice(0, 1);
			let dayOfWeek = getDayOfWeek(gDate);
			if (format == "jdo") return ordinalNumber(dayOfWeek);
			if (format == "jdO") return ordinalNumber(dayOfWeek, "jalali", 2);
			if (format == "jd") return getDayOfWeek(gDate, "jalali", "array");
			if (format == "jde") return dayOfWeek;
			//---------- Day of Year ----------//
			let dayOfYear = getDayOfYear(
				this.year("jy"),
				this.month("jM"),
				date,
				"j"
			);
			if (format == "jDDDD") return addPrefix(dayOfYear, 3);
			if (format == "jDDD") return dayOfYear;
			if (format == "jDDDo") return ordinalNumber(dayOfYear);
			if (format == "jDDDO") return ordinalNumber(dayOfYear, "jalali", 2);
			//---------- Day of Month ----------//
			if (format == "DD") return addPrefix(gDate.getDate(), 2);
			if (format == "D") return gDate.getDate();
			if (format == "Do" || format == "DO")
				return ordinalNumber(gDate.getDate(), "gregorian");
			//---------- Day of Week ----------//
			if (format == "dddd") return getDayLabel(gDate, "gregorian");
			if (format == "ddd") return getDayLabel(gDate, "gregorian").slice(0, 3);
			if (format == "dd") return getDayLabel(gDate, "gregorian").slice(0, 2);
			dayOfWeek = getDayOfWeek(gDate, "gregorian");
			if (format == "do" || format == "dO")
				return ordinalNumber(dayOfWeek, "gregorian");
			if (format == "d") return getDayOfWeek(gDate, "gregorian", "array");
			if (format == "de") return dayOfWeek;
			dayOfYear = getDayOfYear(
				gDate.getFullYear(),
				gDate.getMonth() + 1,
				gDate.getDate(),
				"g"
			);
			//---------- Day of Year ----------//
			if (format == "DDDD") return addPrefix(dayOfYear, 3);
			if (format == "DDD") return dayOfYear;
			if (format == "DDDo" || format == "DDDO")
				return ordinalNumber(dayOfYear, "gregorian");
			return date;
		}
	};

	/**
	 * get or set quarter
	 * @param {Null|Number|String} [format=jQ] - a number for set the quarter or a format for formatting
	 * @returns {PersianDate|String|Number} if set the quarter, returns class,
	 * else returns a number or string from quarter
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.quarter = function (format = "") {
		if (this.error) return this.error;
		format = String(format).trim();
		if (REGEX["isNumeric"].test(format)) {
			if (format < 1) {
				this.d.month = 1;
				return this.subQuarter(format - 1);
			} else if (format > 4) {
				this.d.month = 12;
				return this.addQuarter(format - 4);
			}
			this.d.month = +format * 3 - 2;
			while (!this.isValidDate()) {
				this.subDay(1, false);
			}
			return this;
		} else {
			if (!format) format = this.c == "jalali" ? "jQ" : "Q";
			let quarter = Math.ceil(
				(this.c == "jalali" ? this.d.month : gtj(this.toDate())[1]) / 3
			);
			if (format == "jQ") return quarter;
			if (format == "jQo") return ordinalNumber(quarter);
			if (format == "jQO") return ordinalNumber(quarter, "jalali", 2);
			quarter = Math.ceil(
				(this.c == "jalali" ? this.toDate().getMonth() + 1 : this.d.month) / 3
			);
			if (format == "Q") return quarter;
			if (format == "Qo" || format == "QO")
				return ordinalNumber(quarter, "gregorian");
			return quarter;
		}
	};

	/**
	 * get or set week
	 * @param {Null|Number|String} [format=jw] - a number for set the week or a format for formatting
	 * @returns {PersianDate|String|Number} if set the week, returns class,
	 * else returns a number or string from week
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.week = function (format = "") {
		if (this.error) return this.error;
		format = String(format).trim();
		if (REGEX["isNumeric"].test(format)) {
			let weeksInYear = this.getWeeksInYear();
			if (format < 1) {
				this.week(1);
				return this.subWeek(format - 1);
			} else if (format > weeksInYear) {
				this.week(weeksInYear);
				return this.addWeek(format - weeksInYear);
			}
			let weekOfYear = getWeekOfYear(
				this.d.year,
				this.d.month,
				this.d.date,
				this.c
			);
			this.addWeek(+format - weekOfYear);
			while (!this.isValidDate()) {
				this.subDay(1, false);
			}
			return this;
		} else {
			if (!format) format = this.c == "jalali" ? "jw" : "w";
			let date =
				this.c == "jalali"
					? [this.d.year, this.d.month, this.d.date]
					: gtj(this.toDate());
			let weekOfYear = getWeekOfYear(date[0], date[1], date[2], this.c);
			if (format == "jw" || format == "jW") return weekOfYear;
			if (format == "jww" || format == "jWW") return addPrefix(weekOfYear, 2);
			if (format == "jwo" || format == "jWo") return ordinalNumber(weekOfYear);
			if (format == "jwO" || format == "jWO")
				return ordinalNumber(weekOfYear, "jalali", 2);
			weekOfYear = getWeekOfYear(
				this.year("y"),
				this.month("M"),
				this.date("D"),
				"gregorian"
			);
			if (format == "w" || format == "W") return weekOfYear;
			if (format == "ww" || format == "WW") return addPrefix(weekOfYear, 2);
			if (format == "wo" || format == "Wo" || format == "wO" || format == "WO")
				return ordinalNumber(weekOfYear, "gregorian");
			return weekOfYear;
		}
	};

	/**
	 * get or set hour
	 * @param {Null|Number|String} [format=H] - a number for set the hour or a format for formatting
	 * @returns {PersianDate|String|Number} if set the hour, returns class,
	 * else returns a number or string from hour
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.hour = function (format = "H") {
		if (this.error) return this.error;
		format = String(format).trim();
		if (REGEX["isNumeric"].test(format)) {
			if (format < 0) {
				this.d.hour = 0;
				return this.subHour(format - 1);
			} else if (format > 23) {
				this.d.hour = 23;
				return this.addHour(format - 23);
			}
			this.d.hour = +format;
			while (!this.isValidTime()) this.subMillisecond(1, false);
			return this;
		} else {
			let hour = this.d.hour;
			if (format == "H") return hour;
			if (format == "HH") return addPrefix(hour, 2);
			if (format == "k") return hour || 24;
			if (format == "kk") return addPrefix(hour || 24, 2);
			hour = hour > 12 ? hour - 12 : hour;
			if (format == "h") return hour;
			if (format == "hh") return addPrefix(hour, 2);
			return hour;
		}
	};

	/**
	 * get or set minute
	 * @param {Null|Number|String} [format=m] - a number for set the minute or a format for formatting
	 * @returns {PersianDate|String|Number} if set the minute, returns class,
	 * else returns a number or string from minute
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.minute = function (format = "m") {
		if (this.error) return this.error;
		format = String(format).trim();
		if (REGEX["isNumeric"].test(format)) {
			if (format < 0 || format > 59) return this.addMinute(format);
			this.d.minute = +format;
			while (!this.isValidTime()) this.subMillisecond(1, false);
			return this;
		} else {
			if (format == "m") return this.d.minute;
			if (format == "mm") return addPrefix(this.d.minute, 2);
			return this.d.minute;
		}
	};

	/**
	 * get or set second
	 * @param {Null|Number|String} [format=s] - a number for set the second or a format for formatting
	 * @returns {PersianDate|String|Number} if set the second, returns class,
	 * else returns a number or string from second
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.second = function (format = "s") {
		if (this.error) return this.error;
		format = String(format).trim();
		if (REGEX["isNumeric"].test(format)) {
			if (format < 0 || format > 59) return this.addSecond(format);
			this.d.second = +format;
			while (!this.isValidTime()) this.subMillisecond(1, false);
			return this;
		} else {
			if (format == "s") return this.d.second;
			if (format == "ss") return addPrefix(this.d.second, 2);
			return this.d.second;
		}
	};

	/**
	 * get or set millisecond
	 * @param {Null|Number|String} [format=c] - a number for set the millisecond or a format for formatting
	 * @returns {PersianDate|String|Number} if set the millisecond, returns class,
	 * else returns a number or string from millisecond
	 * @throws {PersianDate|String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.millisecond = function (format = "c") {
		if (this.error) return this.error;
		format = String(format).trim();
		if (REGEX["isNumeric"].test(format)) {
			if (format < 0 || format > 999) return this.addMillisecond(format);
			this.d.millisecond = +format;
			while (!this.isValidTime()) this.subMillisecond(1, false);
			return this;
		} else {
			if (format == "CCC" || format == "c") return this.d.millisecond;
			if (format == "CCCC") return addPrefix(this.d.millisecond, 3);
			return this.d.millisecond;
		}
	};

	/**
	 * get timestamp or set date from timestamp
	 * @param {Null|Number|String} value - a number for set the millisecond
	 * @returns {PersianDate|Number} if set the timestamp, returns class,
	 * else returns timestamp (number)
	 * @throws {String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.timestamp = function (value) {
		if (this.error) return this.error;
		if (value) {
			return this.fromGregorian(+String(value).trim());
		} else {
			return this.toDate().getTime();
		}
	};

	////////////////////--- Version 1.1.0 ---////////////////////

	/**
	 * get clone of this date
	 * @since 1.1.0
	 * @returns {PersianDate} returns the clone of this date
	 */
	PersianDate.prototype.clone = function () {
		return Object.assign(
			Object.create(Object.getPrototypeOf(this)),
			JSON.parse(JSON.stringify(this))
		);
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
	 * @throws {PersianDate} return the class
	 */
	PersianDate.prototype.isSame = function (...date) {
		if (this.error) return false;
		date = typesToArray(this.c, ...date);
		date = this.toArray().map((value, i) =>
			REGEX["isNumeric"].test(date[i]) ? date[i] : value
		);

		if (this.isValid(...date))
			return (
				this.clone()
					.parse(...date)
					.timestamp() == this.timestamp()
			);
		return false;
	};

	////////////////////--- Version 1.2.0 ---////////////////////

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
	const typesToArray = function (
		calendar,
		year,
		month,
		date,
		hour,
		minute,
		second,
		millisecond
	) {
		if (!year)
			// if year not defined
			year = calendar == "jalali" ? gtj() : new Date(); // return now
		if (typeof year == "string" && year.search(REGEX["separators"]) != -1) {
			// if type of year is String
			year = year.split(/[/ -.,:\\]/);
		}
		if (year instanceof PersianDate)
			// if type of year is PersianDate
			return year.calendar(calendar).toArray();
		else if (year instanceof Date)
			// if type of year is PersianDate
			return new PersianDate(year).calendar(calendar).toArray();
		else if (Object.prototype.toString.call(year) === "[object Array]")
			// if type of year is Array
			return year;
		else if (Object.prototype.toString.call(year) === "[object Object]")
			// if type of year is Object
			return [
				year.y || year.year || year.years,
				year.M || year.month || year.months || 1,
				year.d || year.day || year.days || year.date || 1,
				year.h || year.hour || year.hours || 0,
				year.m || year.minute || year.minutes || 0,
				year.s || year.second || year.seconds || 0,
				year.ms || year.millisecond || year.milliseconds || 0,
			];
		return [year, month, date, hour, minute, second, millisecond];
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
	 * @throws {PersianDate} return the class
	 */
	PersianDate.prototype.isBefore = function (...date) {
		if (this.error) return false;
		return compareDate(this, "<", date);
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
	 * @throws {PersianDate} return the class
	 */
	PersianDate.prototype.isAfter = function (...date) {
		if (this.error) return false;
		return compareDate(this, ">", date);
	};

	////////////////////--- Version 1.3.0 ---////////////////////

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
	 * @throws {String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.toObject = function () {
		if (this.error) return this.error;
		if (!arguments.length) {
			return this.d;
		}
		let formats = typesToArray(this.c, ...arguments);
		return {
			year: this.year(formats[0]),
			month: this.month(formats[1]),
			date: this.date(formats[2]),
			hour: this.hour(formats[3]),
			minute: this.minute(formats[4]),
			second: this.second(formats[5]),
			millisecond: this.millisecond(formats[6]),
		};
	};

	/**
	 * checks date is a native js Date object
	 * @since 1.3.0
	 * @param {*} date date that must be checked
	 * @returns {Boolean} if date is a native js Date, return true
	 */
	PersianDate.prototype.isDate = function (date) {
		return date instanceof Date;
	};

	/**
	 * checks date is a PersianDate object
	 * @since 1.3.0
	 * @param {*} date date that must be checked
	 * @returns {Boolean} if date is a PersianDate, return true
	 */
	PersianDate.prototype.isPersianDate = function (date) {
		return date instanceof PersianDate;
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
	 * @throws {PersianDate} return the class
	 */
	PersianDate.prototype.isSameOrBefore = function (...date) {
		if (this.error) return false;
		return compareDate(this, "<=", date);
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
	 * @throws {PersianDate} return the class
	 */
	PersianDate.prototype.isSameOrAfter = function (...date) {
		if (this.error) return false;
		return compareDate(this, ">=", date);
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
	 * @throws {PersianDate} return the class
	 */
	PersianDate.prototype.isBetween = function (from, to, method = "()") {
		if (this.error) return false;
		// let $this = this.clone();
		from = typesToArray(this.c, from);
		let date = this.toArray();
		if (!from[2]) date[2] = 1;
		// $this.date(1);
		from = date.map((value, i) =>
			REGEX["isNumeric"].test(from[i]) ? from[i] : value
		);

		// from = [
		// 	from[0] || this.d.year,
		// 	from[1] || this.d.month,
		// 	from[2] || 1,
		// 	from[3] || this.d.hour,
		// 	from[4] || this.d.minute,
		// 	from[5] || this.d.second,
		// 	from[6] || this.d.millisecond,
		// ];
		to = typesToArray(this.c, to);
		// to = [
		// 	to[0] || this.d.year,
		// 	to[1] || this.d.month,
		// 	to[2] || 1,
		// 	to[3] || this.d.hour,
		// 	to[4] || this.d.minute,
		// 	to[5] || this.d.second,
		// 	to[6] || this.d.millisecond,
		// ];
		to = date.map((value, i) =>
			REGEX["isNumeric"].test(to[i]) ? to[i] : value
		);

		if (!(this.isValid(...from) && this.isValid(...to))) return false;

		return (
			compareDate(this, method[0] === "[" ? ">=" : ">", from) &&
			compareDate(this, method[1] === "]" ? "<=" : "<", to)
		);
		// return (
		// 	(method[0] === "["
		// 		? $this.isSameOrAfter(from)
		// 		: $this.isAfter(from)) &&
		// 	(method[1] === "]"
		// 		? $this.isSameOrBefore(to)
		// 		: $this.isBefore(to))
		// );
	};

	////////////////////--- Version 1.4.0 ---////////////////////

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
		return mathOperation(arguments, this, "min");
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
		return mathOperation(arguments, this, "max");
	};

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
	 * @returns {Number} diffrence
	 * @throws {Boolean} if dates invalid, returns false
	 */
	PersianDate.prototype.diff = function (date, unit, addOne = false) {
		if (this.error) return this.error;
		date = typesToArray(this.c, date);
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
	};

	////////////////////--- Version 1.5.0 ---////////////////////

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
	 * @throws {String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.toArray = function () {
		if (this.error) return this.error;
		if (!arguments.length) {
			return Object.values(this.d);
		}
		let formats = typesToArray(this.c, ...arguments);
		return [
			this.year(formats[0]),
			this.month(formats[1]),
			this.date(formats[2]),
			this.hour(formats[3]),
			this.minute(formats[4]),
			this.second(formats[5]),
			this.millisecond(formats[6]),
		];
	};

	////////////////////--- Version 2.0.0 ---////////////////////

	/**
	 * get the diffrence between two date in a human-readable format
	 * @since 2.0.0
	 * @param {String|Array|Object|Number} yearForamt - this param must be string or array or Object from date or year
	 * @returns {String} if date valid, return diff human-readable format
	 * @throws {String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.diffForHumans = function (date, suffix = true) {
		if (this.error) return this.error;
		let result = this.diff(date, "s");
		if (typeof result == "string") return "تاریخ نامعتبر";
		let prefix = result > 0 ? "آینده" : "پیش";
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
	 * @throws {String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.fromJalali = function (...date) {
		if (this.error) {
			delete this.error;
			this.d = {};
		}

		if (!date.length) date = gtj();
		else if (this.isPersianDate(date[0])) date = date[0].toArray();
		else date = typesToArray(this.c, ...date);
		if (this.c == "jalali") {
			//plus sign before a variable, convert variable to int
			this.d.year = +date[0];
			this.d.month = +date[1] || 1;
			this.d.date = +date[2] || 1;
			this.d.hour = +date[3] || 0;
			this.d.minute = +date[4] || 0;
			this.d.second = +date[5] || 0;
			this.d.millisecond = +date[6] || 0;
		} else setGregorianDate(jtg(...date), this);

		if (!this.isValid()) return showError("تاریخ نامعتبر", this);
		return this;
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
	 * @throws {String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.fromGregorian = function (...date) {
		if (this.error) {
			delete this.error;
			this.d = {};
		}

		if (!date.length) date[0] = new Date().getTime();
		if (this.isPersianDate(date[0])) {
			date = date[0].toArray();
		} else if (!isTimestamp(date[0])) {
			date = typesToArray(this.c, ...date);
			date[6] = +date[6] || 0;
			date[5] = +date[5] || 0;
			date[4] = +date[4] || 0;
			date[3] = +date[3] || 0;
			date[2] = +date[2] || 1;
			date[1] = +date[1] || 1;
		}
		date[0] = +date[0];

		if (date.length > 1) {
			if (!this.isValid(...date)) return showError("تاریخ نامعتبر", this);
			--date[1]; // this is month; becuse the Date get month from 0, subtract one
		}

		date = new Date(...date);
		if (date == "Invalid Date") return showError("تاریخ نامعتبر", this);
		if (this.c == "jalali") setJalaliDate(gtj(date), this);
		else setGregorianDate(date, this);
		return this;
	};

	/**
	 * convert a gregorian date to PersianDate instance
	 * @since 2.0.0
	 * @param {"j"|"jalali"|"g"|"gregorian"} calendar - the calendar
	 * @returns {PersianDate} return class with persian date
	 */
	PersianDate.prototype.calendar = function (calendar) {
		if (!calendar) return this.c;
		if (calendar[0] == "j" && this.c[0] == "g") {
			if (!this.error) setJalaliDate(gtj(this.toDate()), this);
			this.c = "jalali";
		} else if (calendar[0] == "g" && this.c[0] == "j") {
			if (!this.error) setGregorianDate(this.toDate(), this);
			this.c = "gregorian";
		}
		return this;
	};

	/**
	 * return number of weeks in year
	 * @since 2.0.0
	 * @param {Number|String} year - the year
	 * @returns {Number} number of weeks in year
	 */
	PersianDate.prototype.getWeeksInYear = function (year) {
		if (this.error) return this.error;
		if (!year) year = this.year();

		let dayOfYearFormat = this.c == "jalali" ? "jd" : "d";
		let firstOfYear = this.clone().parse(year);
		let firstOfYearDay = firstOfYear.date(dayOfYearFormat);
		let lastOfYear = firstOfYear.clone().addYear().subDay();
		let lastOfYearDay = lastOfYear.date(dayOfYearFormat);
		if (firstOfYearDay > 3) firstOfYear.addDay(7 - firstOfYearDay);
		else firstOfYear.subDay(firstOfYearDay);

		if (lastOfYearDay > 3) lastOfYear.addDay(7 - lastOfYearDay);
		else lastOfYear.subDay(lastOfYearDay);
		return Math.ceil(lastOfYear.diff(firstOfYear, "date") / 7);
	};

	/**
	 * return the Date instance of PersianDate
	 * @since 2.0.0
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
	 * @returns {Date} if date valid, return Date instance of date
	 * @throws {String} if date invalid return class with error property with error property
	 */
	PersianDate.prototype.toDate = function () {
		if (this.error) return this.error;
		if (this.c == "jalali") return jtg(...this.toArray());
		let date = this.toArray();
		--date[1];
		return new Date(...date);
	};

	/**
	 * change the date to start of the year or month or ...
	 * @since 2.0.0
	 * @param {String} unit - the unit of time
	 * @returns {PersianDate} return the class with new date or time
	 */
	PersianDate.prototype.startOf = function (unit = "year") {
		this.d.millisecond = 0;
		if (unit[0] == "s") return this;
		this.d.second = 0;
		if (unit == "m" || unit == "minute") return this;
		this.d.minute = 0;
		if (unit[0] == "h") return this;
		this.d.hour = 0;
		if (unit[0] == "d") return this;
		this.d.date = 1;
		if (unit == "M" || unit == "month") return this;
		this.d.month = 1;
		if (unit[0] == "y") return this;
	};

	/**
	 * change the date to end of the year or month or ...
	 * @since 2.0.0
	 * @param {String} unit - the unit of time
	 * @returns {PersianDate} return the class with new date or time
	 */
	PersianDate.prototype.endOf = function (unit = "year") {
		this.d.millisecond = 999;
		if (unit[0] == "s") return this;
		this.d.second = 59;
		if (unit == "m" || unit == "minute") return this;
		this.d.minute = 59;
		if (unit[0] == "h") return this;
		this.d.hour = 23;
		if (unit[0] == "d") return this;
		this.d.date = this.getDaysInMonth();
		if (unit == "M" || unit == "month") return this;
		this.d.month = 12;
		this.d.date = this.getDaysInMonth();
		if (unit[0] == "y") return this;
	};

	PersianDate.prototype.valueOf = function () {
		return this.timestamp();
	};

	/**
	 * show warning for deprecated functions
	 * @since 2.0.0
	 * @param {String} msg - the message for warning
	 */
	const deprecate = (msg) => {
		console.warn(msg);
	};

	/**
	 * check the input is timestamp
	 * @since 2.0.0
	 * @param {Number|String} timestamp - input that must be checked
	 * @returns {Boolean} if input was timestamp, return true
	 */
	const isTimestamp = (timestamp) => {
		return !isNaN(timestamp) && Math.floor(timestamp / 10000) > 0;
	};

	/**
	 * set the date with Date instance
	 * @since 2.0.0
	 * @param {Date} date - the Date instance
	 * @param {PersianDate} instance - the PersianDate instance
	 */
	const setGregorianDate = (date, instance) => {
		instance.d = {
			year: date.getFullYear(),
			month: date.getMonth() + 1,
			date: date.getDate(),
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds(),
			millisecond: date.getMilliseconds(),
		};
	};

	/**
	 * set the date with array of persian date
	 * @since 2.0.0
	 * @param {Array} date - the array of persian date
	 * @param {PersianDate} instance - the PersianDate instance
	 */
	const setJalaliDate = (date, instance) => {
		[
			instance.d.year,
			instance.d.month,
			instance.d.date,
			instance.d.hour,
			instance.d.minute,
			instance.d.second,
			instance.d.millisecond,
		] = date;
	};

	/**
	 * compare the dates
	 * @since 2.0.0
	 * @param {PersianDate|Date|String|Array|Object} date - the date
	 * @param {PersianDate} instance - the instance of PersianDate
	 * @param {'>'|'>='|'<'|'<='} operator - the operator for compare
	 * @returns {‌Boolean} if date valid, return true of false
	 * @throws {PersianDate} return the class
	 */
	const compareDate = (instance, operator, date) => {
		date = typesToArray(instance.c, ...date);

		if (instance.isValid(...date))
			return eval(
				"instance.timestamp()" +
				operator +
				"instance.clone().parse(...date).timestamp()"
			);
		return false;
	};

	/**
	 * do the math operation on dates
	 * @since 1.4.0
	 * @param {...String|PersianDate|Date|Array|Object} values - the dates
	 * @param {PersianDate} instance - the instance of PersianDate
	 * @param {'min'|'max'} operation - the operation
	 * @returns {*} return maximum date
	 * @throws {false} if parameters not send or parameters is invalid, return false
	 */
	const mathOperation = (values, instance, operation) => {
		if (!values.length) {
			return false;
		}
		let args = Object.values(values).concat();
		let argsNumber = args.map((date) => {
			date = typesToArray(instance.c, date);
			if (instance.isValid(...date))
				return instance
					.clone()
					.parse(...date)
					.timestamp();
			return false;
		});
		if (argsNumber.indexOf(false) != -1) return false;
		return eval(
			"args[argsNumber.indexOf(Math." + operation + "(...argsNumber))]"
		);
	};

	if (calendarVal) this.calendar(calendarVal);
	if (dateVal) {
		if (calendarVal && calendarVal[0] == "j") this.fromJalali(dateVal);
		else this.fromGregorian(dateVal);
	} else this.now();
};

//for next version
//TODO: add quarter and week and day to startOf and endOf function
//TODO: combine the add functions with sub functions
//TODO: add time fuction just for change time
//TODO: add the special character for get in all calendars
//TODO: do better isSame - isBetween - clone --> if is possible
//TODO: add doc for "`" and "?" character in toString function
//TODO: refactor

export default PersianDate;

////////////////////- Email: Alibeikialireza@gmail.com -////////////////////
////////////////////--------- Have A Good Day  ---------////////////////////
