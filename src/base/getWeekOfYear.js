const dayOfYearFormat = (calendar) => {
	switch (calendar[0]) {
		case "j":
			return "jd";
		default:
			return "d";
	}
};

/**
 * get the week of the year
 * @param {Null|Number|String} year - the year of date that gives the week of the year
 * @param {Null|Number|String} month - the month of date that gives the week of the year
 * @param {Null|Number|String} day - the day of date that gives the week of the year
 * @param {String} calendar - the calendar
 * @returns {Number} the week of the year
 */
export const getWeekOfYear = function (year, month, day, calendar) {
	const firstOfYear = this.clone().calendar(calendar).parse(year);
	const firstOfYearDay = firstOfYear.date(dayOfYearFormat(calendar));
	const date = firstOfYear.clone().parse(year, month, day);
	if (firstOfYearDay > 3) firstOfYear.addDay(7 - firstOfYearDay);

	const weekNumber = Math.ceil(date.diff(firstOfYear, "date", true) / 7);

	const weeksInYear = date.clone().getWeeksInYear();
	return weekNumber > weeksInYear ? weeksInYear : weekNumber;
};
