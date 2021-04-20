import { getDaysInMonth } from "../set-get";

/**
 * get the day of the year
 * @param {Null|String|Number} year - the year of date
 * @param {Null|Number|String} month - the month of date that gives the day of the year
 * @param {Null|Number|String} day - the day of date that gives the day of the year
 * @param {Null|Number|String} calendar - the calendar
 * @returns {Number} the day of the year
 */
export const getDayOfYear = (year, month, day, calendar) => {
	//plus sign before a variable, convert variable to int
	month = +month;
	day = +day;
	while (--month != 0) {
		day += getDaysInMonth(calendar, year, month);
	}
	return day;
};
