import { REGEX } from "../utils";
import { isLeapYear } from "../comparison";

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
export const jtg = (year, month, day, hour, minute, second, millisecond) => {
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
	const daysOfMonths = [
		0,
		31,
		isLeapYear("gregorian", gYear) ? 29 : 28,
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
