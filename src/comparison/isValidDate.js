import { isLeapYear } from "./isLeapYear";

const jalali = (year, month, day) => {
	if (month >= 7 && month <= 11 && day == 31) return false;
	if (month == 12 && day == 31) return false;
	if (month == 12 && day == 30 && !isLeapYear("j", year)) return false;
	return true;
};

const gregorian = (year, month, day) => {
	if ([2, 4, 6, 9, 11].includes(month) && day == 31) return false;
	if (month == 2 && (day == 30 || (day == 29 && !isLeapYear("g", year))))
		return false;
	return true;
};

export const isValidDate = function (calendar, year, month, day) {
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
