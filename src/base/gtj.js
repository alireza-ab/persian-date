import { REGEX } from "../utils";
import { isDate } from "../comparison";

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
export const gtj = (year, month, day, hour, minute, second, millisecond) => {
	let date;
	if (!year) date = new Date();
	else if (isDate(year))
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
