import PersianDate from "../PersianDate";
import { REGEX } from "../utils";
import { gtj } from ".";

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
export const typesToArray = (
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
	if (typeof year == "string" && year.search(REGEX["separators"]) != -1) {
		return year.split(/[/ -.,:\\]/);
	} else if (Array.isArray(year)) {
		return year;
	} else if (PersianDate.isPersianDate(year)) {
		return year.clone().calendar(calendar).toArray();
	} else if (PersianDate.isDate(year)) {
		return new PersianDate(year).calendar(calendar).toArray();
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
