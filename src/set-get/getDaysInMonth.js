import { isLeapYear } from "../comparison/isLeapYear";

const jalali = (calendar, year, month) => {
	if (month >= 1 && month <= 6) return 31;
	else if ((month > 6 && month <= 11) || isLeapYear(calendar, year)) {
		return 30;
	}
	return 29;
};

const gregorian = (calendar, year, month) => {
	if ([1, 3, 5, 7, 8, 10, 12].includes(month)) return 31;
	else if (month != 2) return 30;
	else if (isLeapYear(calendar, year)) return 29;
	return 28;
};

export const getDaysInMonth = function (calendar, year, month) {
	switch (calendar[0]) {
		case "j":
			return jalali(calendar, year, month);
		default:
			return gregorian(calendar, year, month);
	}
};
