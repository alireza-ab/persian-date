import { isValidDate, isValidTime } from ".";

export const isValid = function (
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
		isValidDate(calendar, year, month, day) &&
		isValidTime(hour, minute, second, millisecond)
	);
};
