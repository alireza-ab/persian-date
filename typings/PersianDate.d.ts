declare type CalendarName = "jalali" | "gregorian";
declare type DateInput = number | string;
declare type Unit =
	| "y"
	| "year"
	| "years"
	| "M"
	| "month"
	| "months"
	| "d"
	| "day"
	| "days"
	| "date"
	| "h"
	| "hour"
	| "hours"
	| "m"
	| "minute"
	| "minutes"
	| "s"
	| "second"
	| "seconds"
	| "ms"
	| "millisecond"
	| "milliseconds";
declare type DateArray = [
	year?: DateInput,
	month?: DateInput,
	date?: DateInput,
	hour?: DateInput,
	minute?: DateInput,
	second?: DateInput,
	millisecond?: DateInput
];
declare type DateObject = {
	[unit in Unit]?: DateInput;
};
declare type AllDateInput =
	| DateInput
	| DateArray
	| DateObject
	| Date
	| PersianDate;
/**
 * A Date library for working with persian date
 * @class
 * @param {Date|Array|Null|Object|String} date - the date that convert to persian date
 * @param {String} [calendar='jalali'] - the calendar
 */
declare class PersianDate {
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
	private d;
	/**
	 * the calendar type
	 * @type {String}
	 * @default "jalali"
	 * @example jalali | gregorian
	 */
	private c;
	private error?;
	constructor(date?: AllDateInput, calendar?: CalendarName);
	/**
	 * Gregorian to Jalali
	 * @param {Null|Date|Number|String} [year=new Date()] - Gregorian year
	 * @param {Null|String|Number} [month=1] - Gregorian month
	 * @param {Null|String|Number} [day=1] - Gregorian day
	 * @param {Null|String|Number} [hour=0] - Gregorian hour
	 * @param {Null|String|Number} [minute=0] - Gregorian minute
	 * @param {Null|String|Number} [second=0] - Gregorian second
	 * @param {Null|String|Number} [millisecond=0] - Gregorian millisecond
	 * @returns {Array} Jalali date
	 */
	private gtj;
	/**
	 * Jalali to Gregorian
	 * @param {Null|String|Number} year - Jalali year
	 * @param {Null|String|Number} [month=1] -  Jalali month
	 * @param {Null|String|Number} [day=1] -  Jalali day
	 * @param {Null|String|Number} [hour=0] -  Jalali hour
	 * @param {Null|String|Number} [minute=0] -  Jalali minute
	 * @param {Null|String|Number} [second=0] -  Jalali second
	 * @param {Null|String|Number} [millisecond=0] -  Jalali millisecond
	 * @returns {Date} Gregorian date
	 */
	private jtg;
	/**
	 * get label of day
	 * @param {Date} date - the date that received day
	 * @param {'jalali'|'gregorian'} calendar - the calendar
	 * @returns {String} returns day label
	 * @example Saturday | شنبه
	 */
	private getDayLabel;
	/**
	 * get the day of the week
	 * @param {Date} date - the date that received day of week
	 * @param {'jalali', 'gregorian'} calendar - the calendar
	 * @param {'standard','array'} mode - standard mode start from 1 and array mode start from 0
	 * @returns {Number|String} the number of the day of week
	 */
	private getDayOfWeek;
	/**
	 * get the day of the year
	 * @param {Null|String|Number} year - the year of date
	 * @param {Null|String|Number} month - the month of date
	 * @param {Null|String|Number} day - the day of date
	 * @param {'jalali'|'gregorian'} calendar - the calendar
	 * @returns {Number} the day of the year
	 */
	private getDayOfYear;
	/**
	 * get the week of the year
	 * @param {Null|String|Number} year - the year of date
	 * @param {Null|String|Number} month - the month of date
	 * @param {Null|String|Number} day - the day of date
	 * @param {String} calendar - the calendar
	 * @returns {Number} the week of the year
	 */
	private getWeekOfYear;
	/**
	 * returns the ordinal number of that number sent to it
	 * @param {Number|String} number - the number that gives ordinal number --> from 1 to 366
	 * @param {'jalali','gregorian'} calendar - the calendar
	 * @param {?Number} mode  - 'jalali' calendar have two mode of ordinal number
	 * @returns {String} ordinal number
	 * @example 1st | اول | اولین
	 */
	private ordinalNumber;
	/**
	 * add a prefix to the text in the number of characters that the text has less
	 * @param {String|Number} text - a text need prefix
	 * @param {Number} length - length of text
	 * @param {String} [prefix=0] - string for add before of text
	 * @returns {String} text with or wihtout prefix
	 */
	private addPrefix;
	/**
	 * make error and delete this.d
	 * @param {String} errorText - Error Text
	 * @param {PersianDate} instance - the PersianDate instance
	 * @returns {PersianDate} make error and return class
	 */
	private showError;
	/**
	 * make current date in persian calendar
	 * @returns {PersianDate} make current date and return class
	 */
	now(): PersianDate;
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
	 * @param {Null|String|Number} month month of date
	 * @param {Null|String|Number} day day of date
	 * @param {Null|String|Number} hour hour of date
	 * @param {Null|String|Number} minute minute of date
	 * @param {Null|String|Number} second second of date
	 * @param {Null|String|Number} millisecond millisecond of date
	 * @returns {PersianDate} return class with persian date
	 * @throws {String} if date invalid return class with error property with error property
	 */
	parse(
		year?: AllDateInput,
		month?: DateInput,
		day?: DateInput,
		hour?: DateInput,
		minute?: DateInput,
		second?: DateInput,
		millisecond?: DateInput
	): PersianDate | string;
	/**
	 * receives year and determined that is leap year or not
	 * @param {?Number} year - the year to be determined is a leap or not
	 * @returns {Boolean} if is leap year, returns true
	 */
	isLeapYear(year: number): boolean;
	/**
	 * receives year and determined that is leap year or not
	 * @static
	 * @param {Number} year - the year to be determined is a leap or not
	 * @param {"jalali"|"gregorian"} calendar - the calendar
	 * @returns {Boolean} if is leap year, returns true
	 */
	static isLeapYear(year: number, calendar: CalendarName): boolean;
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
	isValid(
		year?: number,
		month?: number,
		day?: number,
		hour?: number,
		minute?: number,
		second?: number,
		millisecond?: number
	): boolean;
	/**
	 * checks the persian date
	 * @param {?Number} year - year of date that will be checked
	 * @param {?Number} month - month of date that will be checked
	 * @param {?Number} day - day of date that will be checked
	 * @returns {Boolean} if is valid date, returns true
	 */
	isValidDate(year?: number, month?: number, day?: number): boolean;
	/**
	 * checks the time
	 * @param {?Number} hour - hour of date that will be checked
	 * @param {?Number} minute - minute of date that will be checked
	 * @param {?Number} second - second of date that will be checked
	 * @param {?Number} millisecond - millisecond of date that will be checked
	 * @returns {Boolean} if is valid time, returns true
	 */
	isValidTime(
		hour?: number,
		minute?: number,
		second?: number,
		millisecond?: number
	): boolean;
	/**
	 * returns number of days in month
	 * @param {?Number} year - year of date that returns number of days in month
	 * @param {?Number} month - month of date that returns number of days in month
	 * @returns {Number} number of days in month
	 * @throws {String} if date invalid return error message
	 */
	getDaysInMonth(year?: number, month?: number): number | string;
	/**
	 * add to year
	 * @param {?Number|String} [year=1] - a number for add with year
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	addYear(year?: DateInput, checkDate?: boolean): PersianDate | string;
	/**
	 * add to month
	 * @param {?Number|String} [month=1] - a number for add with month
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	addMonth(month?: DateInput, checkDate?: boolean): PersianDate | string;
	/**
	 * add to day
	 * @param {?Number|String} [day=1] - a number for add with day
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	addDay(day?: DateInput, checkDate?: boolean): PersianDate | string;
	/**
	 * add to quarter
	 * @param {?Number|String} [quarter=1] - a number for add with quarter
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	addQuarter(quarter?: DateInput, checkDate?: boolean): PersianDate | string;
	/**
	 * add to week
	 * @param {?Number|String} [week=1] - a number for add with week
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	addWeek(week?: DateInput, checkDate?: boolean): PersianDate | string;
	/**
	 * add to hour
	 * @param {?Number|String} [hour=1] - a number for add with hour
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	addHour(hour?: DateInput, checkDate?: boolean): PersianDate | string;
	/**
	 * add to minute
	 * @param {?Number|String} [minute=1] - a number for add with minute
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	addMinute(minute?: DateInput, checkDate?: boolean): PersianDate | string;
	/**
	 * add to second
	 * @param {?Number|String} [second=1] - a number for add with second
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	addSecond(second?: DateInput, checkDate?: boolean): PersianDate | string;
	/**
	 * add to millisecond
	 * @param {?Number|String} [millisecond=1] - a number for add with millisecond
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	addMillisecond(
		millisecond?: DateInput,
		checkDate?: boolean
	): PersianDate | string;
	/**
	 * subtract from year
	 * @param {?Number|String} [year=1] - a number for subtract from year
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	subYear(year?: DateInput, checkDate?: boolean): PersianDate | string;
	/**
	 * subtract from month
	 * @param {?Number|String} [month=1] - a number for subtract from month
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	subMonth(month?: DateInput, checkDate?: boolean): PersianDate | string;
	/**
	 * subtract from day
	 * @param {?Number|String} [day=1] - a number for subtract from day
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	subDay(day?: DateInput, checkDate?: boolean): PersianDate | string;
	/**
	 * subtract from quarter
	 * @param {?Number|String} [quarter=1] - a number for subtract from quarter
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	subQuarter(quarter?: DateInput, checkDate?: boolean): PersianDate | string;
	/**
	 * subtract from week
	 * @param {?Number|String} [week=1] - a number for subtract from week
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	subWeek(week?: DateInput, checkDate?: boolean): PersianDate | string;
	/**
	 * subtract from hour
	 * @param {?Number|String} [hour=1] - a number for subtract from hour
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	subHour(hour?: DateInput, checkDate?: boolean): PersianDate | string;
	/**
	 * subtract from minute
	 * @param {?Number|String} [minute=1] - a number for subtract from minute
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	subMinute(minute?: DateInput, checkDate?: boolean): PersianDate | string;
	/**
	 * subtract from second
	 * @param {?Number|String} [second=1] - a number for subtract from second
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	subSecond(second?: DateInput, checkDate?: boolean): PersianDate | string;
	/**
	 * subtract from millisecond
	 * @param {?Number|String} [millisecond=1] - a number for subtract from millisecond
	 * @param {?Boolean} checkDate checks the result that the date is valid,
	 * If not valid, it will be deducted from the day to be valid
	 * @returns {PersianDate} return class with new date
	 * @throws {String} if date invalid return error message
	 */
	subMillisecond(
		millisecond?: DateInput,
		checkDate?: boolean
	): PersianDate | string;
	/**
	 * returns date as string with specify format
	 * @param {?String} [format=date] - formatting date to string
	 * @returns {String} date string
	 * @throws {String} if date invalid return error message
	 */
	toString(format?: string): string;
	/**
	 * get or set year
	 * @param {Null|String|Number} [format=jYYYY] - a number for set the year or a format for formatting
	 * @returns {PersianDate|String|Number} if set the year, returns class,
	 * else returns a number or string from year
	 * @throws {String} if date invalid return error message
	 */
	year(format?: DateInput): PersianDate | string | number;
	/**
	 * get or set month
	 * @param {Null|String|Number} [format=jM] - a number for set the month or a format for formatting
	 * @returns {PersianDate|String|Number} if set the month, returns class,
	 * else returns a number or string from month
	 * @throws {String} if date invalid return error message
	 */
	month(format?: DateInput): PersianDate | string | number;
	/**
	 * get or set day in month
	 * @param {Null|String|Number} [format=jD] - a number for set the day in month or a format for formatting
	 * @returns {PersianDate|String|Number} if set the day, returns class,
	 * else returns a number or string from day
	 * @throws {String} if date invalid return error message
	 */
	date(format?: DateInput): PersianDate | string | number;
	/**
	 * get or set quarter
	 * @param {Null|String|Number} [format=jQ] - a number for set the quarter or a format for formatting
	 * @returns {PersianDate|String|Number} if set the quarter, returns class,
	 * else returns a number or string from quarter
	 * @throws {String} if date invalid return error message
	 */
	quarter(format?: DateInput): PersianDate | string | number;
	/**
	 * get or set week
	 * @param {Null|String|Number} [format=jw] - a number for set the week or a format for formatting
	 * @returns {PersianDate|String|Number} if set the week, returns class,
	 * else returns a number or string from week
	 * @throws {String} if date invalid return error message
	 */
	week(format?: DateInput): PersianDate | string | number;
	/**
	 * get or set hour
	 * @param {Null|String|Number} [format=H] - a number for set the hour or a format for formatting
	 * @returns {PersianDate|String|Number} if set the hour, returns class,
	 * else returns a number or string from hour
	 * @throws {String} if date invalid return error message
	 */
	hour(format?: DateInput): PersianDate | string | number;
	/**
	 * get or set minute
	 * @param {Null|String|Number} [format=m] - a number for set the minute or a format for formatting
	 * @returns {PersianDate|String|Number} if set the minute, returns class,
	 * else returns a number or string from minute
	 * @throws {String} if date invalid return error message
	 */
	minute(format?: DateInput): PersianDate | string | number;
	/**
	 * get or set second
	 * @param {Null|String|Number} [format=s] - a number for set the second or a format for formatting
	 * @returns {PersianDate|String|Number} if set the second, returns class,
	 * else returns a number or string from second
	 * @throws {String} if date invalid return error message
	 */
	second(format?: DateInput): PersianDate | string | number;
	/**
	 * get or set millisecond
	 * @param {Null|String|Number} [format=c] - a number for set the millisecond or a format for formatting
	 * @returns {PersianDate|String|Number} if set the millisecond, returns class,
	 * else returns a number or string from millisecond
	 * @throws {String} if date invalid return error message
	 */
	millisecond(format?: DateInput): PersianDate | string | number;
	/**
	 * get timestamp or set date from timestamp
	 * @param {Null|String|Number} value - a number for set the millisecond
	 * @returns {PersianDate|Number} if set the timestamp, returns class,
	 * else returns timestamp (number)
	 * @throws {String} if date invalid return error message
	 */
	timestamp(value?: DateInput): PersianDate | number | string;
	/**
	 * get clone of this date
	 * @since 1.1.0
	 * @returns {PersianDate} returns the clone of this date
	 */
	clone(): PersianDate;
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
	 * @param {Null|String|Number} month month of date
	 * @param {Null|String|Number} day day of date
	 * @param {Null|String|Number} hour hour of date
	 * @param {Null|String|Number} minute minute of date
	 * @param {Null|String|Number} second second of date
	 * @param {Null|String|Number} millisecond millisecond of date
	 * @returns {‌Boolean} if date valid, return true of false
	 */
	isSame(
		year?: AllDateInput,
		month?: DateInput,
		day?: DateInput,
		hour?: DateInput,
		minute?: DateInput,
		second?: DateInput,
		millisecond?: DateInput
	): boolean;
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
	 * @param {Null|String|Number} month month of date
	 * @param {Null|String|Number} day day of date
	 * @param {Null|String|Number} hour hour of date
	 * @param {Null|String|Number} minute minute of date
	 * @param {Null|String|Number} second second of date
	 * @param {Null|String|Number} millisecond millisecond of date
	 * @returns {Array} array includes year, month, date, hour, minute, second, millinsecond
	 */
	private typesToArray;
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
	 * @param {Null|String|Number} month month of date
	 * @param {Null|String|Number} day day of date
	 * @param {Null|String|Number} hour hour of date
	 * @param {Null|String|Number} minute minute of date
	 * @param {Null|String|Number} second second of date
	 * @param {Null|String|Number} millisecond millisecond of date
	 * @returns {‌Boolean} if date valid, return true of false
	 */
	isBefore(
		year?: AllDateInput,
		month?: DateInput,
		date?: DateInput,
		hour?: DateInput,
		minute?: DateInput,
		second?: DateInput,
		millisecond?: DateInput
	): boolean;
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
	 * @param {Null|String|Number} month month of date
	 * @param {Null|String|Number} day day of date
	 * @param {Null|String|Number} hour hour of date
	 * @param {Null|String|Number} minute minute of date
	 * @param {Null|String|Number} second second of date
	 * @param {Null|String|Number} millisecond millisecond of date
	 * @returns {‌Boolean} if date valid, return true of false
	 */
	isAfter(
		year?: AllDateInput,
		month?: DateInput,
		date?: DateInput,
		hour?: DateInput,
		minute?: DateInput,
		second?: DateInput,
		millisecond?: DateInput
	): boolean;
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
	 * @param {Null|String|Number} monthFormat month format
	 * @param {Null|String|Number} dayFormat day format
	 * @param {Null|String|Number} hourFormat hour format
	 * @param {Null|String|Number} minuteFormat minute format
	 * @param {Null|String|Number} secondFormat second format
	 * @param {Null|String|Number} millisecondFormat millisecond format
	 * @returns {Object} if date valid, return Object of date
	 * @throws {String} if date invalid return error message
	 */
	toObject(
		yearFormat?: AllDateInput,
		monthFormat?: DateInput,
		dayFormat?: DateInput,
		hourFormat?: DateInput,
		minuteFormat?: DateInput,
		secondFormat?: DateInput,
		millisecondFormat?: DateInput
	):
		| {
				year?: DateInput;
				month?: DateInput;
				date?: DateInput;
				hour?: DateInput;
				minute?: DateInput;
				second?: DateInput;
				millisecond?: DateInput;
		  }
		| string;
	/**
	 * checks date is a native js Date object
	 * @since 1.3.0
	 * @param {*} date date that must be checked
	 * @returns {Boolean} if date is a native js Date, return true
	 */
	isDate(date: any): boolean;
	/**
	 * checks date is a native js Date object
	 * @static
	 * @since 1.3.0
	 * @param {*} date date that must be checked
	 * @returns {Boolean} if date is a native js Date, return true
	 */
	static isDate(date: any): boolean;
	/**
	 * checks date is a PersianDate object
	 * @since 1.3.0
	 * @param {*} date date that must be checked
	 * @returns {Boolean} if date is a PersianDate, return true
	 */
	isPersianDate(date: any): boolean;
	/**
	 * checks date is a PersianDate object
	 * @static
	 * @since 1.3.0
	 * @param {*} date date that must be checked
	 * @returns {Boolean} if date is a PersianDate, return true
	 */
	static isPersianDate(date: any): boolean;
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
	 * @param {Null|String|Number} month month of date
	 * @param {Null|String|Number} day day of date
	 * @param {Null|String|Number} hour hour of date
	 * @param {Null|String|Number} minute minute of date
	 * @param {Null|String|Number} second second of date
	 * @param {Null|String|Number} millisecond millisecond of date
	 * @returns {‌Boolean} if date valid, return true of false
	 */
	isSameOrBefore(
		year?: AllDateInput,
		month?: DateInput,
		date?: DateInput,
		hour?: DateInput,
		minute?: DateInput,
		second?: DateInput,
		millisecond?: DateInput
	): boolean;
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
	 * @param {Null|String|Number} month month of date
	 * @param {Null|String|Number} day day of date
	 * @param {Null|String|Number} hour hour of date
	 * @param {Null|String|Number} minute minute of date
	 * @param {Null|String|Number} second second of date
	 * @param {Null|String|Number} millisecond millisecond of date
	 * @returns {‌Boolean} if date valid, return true of false
	 */
	isSameOrAfter(
		year?: AllDateInput,
		month?: DateInput,
		date?: DateInput,
		hour?: DateInput,
		minute?: DateInput,
		second?: DateInput,
		millisecond?: DateInput
	): boolean;
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
	 * @param {String} [method='()'] - determines that consider the dates themselves
	 * @returns {‌Boolean} if date valid, return true or false
	 */
	isBetween(
		from: AllDateInput,
		to: AllDateInput,
		method?: "()" | "[]" | "[)" | "(]"
	): boolean;
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
	min(...dates: AllDateInput[]): AllDateInput;
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
	max(...dates: AllDateInput[]): AllDateInput;
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
	diff(date: AllDateInput, unit: Unit, addOne?: boolean): number | string;
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
	 * @param {Null|String|Number} monthFormat month format
	 * @param {Null|String|Number} dayFormat day format
	 * @param {Null|String|Number} hourFormat hour format
	 * @param {Null|String|Number} minuteFormat minute format
	 * @param {Null|String|Number} secondFormat second format
	 * @param {Null|String|Number} millisecondFormat millisecond format
	 * @returns {Object} if date valid, return array of date
	 * @throws {String} if date invalid return error message
	 */
	toArray(
		yearFormat?: AllDateInput,
		monthFormat?: DateInput,
		dayFormat?: DateInput,
		hourFormat?: DateInput,
		minuteFormat?: DateInput,
		secondFormat?: DateInput,
		millisecondFormat?: DateInput
	): DateArray | string;
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
	diffForHumans(date: AllDateInput, suffix?: boolean): string;
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
	 * @param {Null|String|Number} month month of date
	 * @param {Null|String|Number} day day of date
	 * @param {Null|String|Number} hour hour of date
	 * @param {Null|String|Number} minute minute of date
	 * @param {Null|String|Number} second second of date
	 * @param {Null|String|Number} millisecond millisecond of date
	 * @returns {PersianDate} return class with persian date
	 * @throws {String} if date invalid return error message
	 */
	fromJalali(
		year?: AllDateInput,
		month?: DateInput,
		day?: DateInput,
		hour?: DateInput,
		minute?: DateInput,
		second?: DateInput,
		millisecond?: DateInput
	): PersianDate | string;
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
	 * @param {Null|String|Number} month month of date
	 * @param {Null|String|Number} day day of date
	 * @param {Null|String|Number} hour hour of date
	 * @param {Null|String|Number} minute minute of date
	 * @param {Null|String|Number} second second of date
	 * @param {Null|String|Number} millisecond millisecond of date
	 * @returns {PersianDate} return class with persian date
	 * @throws {String} if date invalid return error message
	 */
	fromGregorian(
		year?: AllDateInput,
		month?: DateInput,
		day?: DateInput,
		hour?: DateInput,
		minute?: DateInput,
		second?: DateInput,
		millisecond?: DateInput
	): PersianDate | string;
	/**
	 * convert a gregorian date to PersianDate instance
	 * @since 2.0.0
	 * @param {"j"|"jalali"|"g"|"gregorian"} calendar - the calendar
	 * @returns {PersianDate} return class with persian date
	 */
	calendar(calendar: CalendarName): PersianDate | string;
	/**
	 * return number of weeks in year
	 * @since 2.0.0
	 * @param {Number|String} year - the year
	 * @returns {Number} number of weeks in year
	 */
	getWeeksInYear(year?: DateInput): number | string;
	/**
	 * return the Date instance of PersianDate
	 * @since 2.0.0
	 * @returns {Date} if date valid, return Date instance of date
	 * @throws {String} if date invalid return error message
	 */
	toDate(): Date | string;
	/**
	 * change the date to start of the year or month or ...
	 * @since 2.0.0
	 * @param {String} unit - the unit of time
	 * @returns {PersianDate} return the class with new date or time
	 */
	startOf(unit?: Unit): PersianDate;
	/**
	 * change the date to end of the year or month or ...
	 * @since 2.0.0
	 * @param {String} unit - the unit of time
	 * @returns {PersianDate} return the class with new date or time
	 */
	endOf(unit?: Unit): PersianDate;
	valueOf(): string | number | PersianDate;
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
	 * @throws {String} if date invalid return error message
	 */
	time(...time: AllDateInput[]): PersianDate | [] | string;
	/**
	 * show warning for deprecated functions
	 * @since 2.0.0
	 * @param {String} msg - the message for warning
	 */
	private deprecate;
	/**
	 * check the input is timestamp
	 * @since 2.0.0
	 * @param {Number|String} timestamp - input that must be checked
	 * @returns {Boolean} if input was timestamp, return true
	 */
	private isTimestamp;
	/**
	 * set the date with Date instance
	 * @since 2.0.0
	 * @param {Date} date - the Date instance
	 * @param {PersianDate} instance - the PersianDate instance
	 */
	private setGregorianDate;
	/**
	 * set the date with array of persian date
	 * @since 2.0.0
	 * @param {Array} date - the array of persian date
	 * @param {PersianDate} instance - the PersianDate instance
	 */
	private setJalaliDate;
	/**
	 * compare the dates
	 * @since 2.0.0
	 * @param {PersianDate} instance - the instance of PersianDate
	 * @param {'>'|'>='|'<'|'<='} operator - the operator for compare
	 * @param {PersianDate|Date|String|Array|Object} date - the date
	 * @returns {‌Boolean} if date valid, return true of false
	 */
	private compareDate;
	/**
	 * do the math operation on dates
	 * @since 1.4.0
	 * @param {String|PersianDate|Date|Array|Object} values - the dates
	 * @param {PersianDate} instance - the instance of PersianDate
	 * @param {'min'|'max'} operation - the operation
	 * @returns {*} return maximum date
	 * @throws {false} if parameters not send or parameters is invalid, return false
	 */
	private mathOperation;
}
export default PersianDate;
