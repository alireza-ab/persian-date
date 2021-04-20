const jalali = (year) => {
	const array =
		year > 1342 ? [1, 5, 9, 13, 17, 22, 26, 30] : [1, 5, 9, 13, 17, 21, 26, 30];
	const remainder = year % 33;
	return array.includes(remainder);
};

const gregorian = (year) => {
	return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
};

export const isLeapYear = function (calendar, year) {
	// calendar[0] ==> first letter of calendar ('j' | 'g' | ...)
	switch (calendar[0]) {
		case "j":
			return jalali(year);
		default:
			return gregorian(year);
	}
};
