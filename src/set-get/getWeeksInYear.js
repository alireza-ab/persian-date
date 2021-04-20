const getDayOfYearFormat = (calendar) => {
	switch (calendar[0]) {
		case "j":
			return "jd";
		default:
			return "d";
	}
};

export function getWeeksInYear(year) {
	const dayOfYearFormat = getDayOfYearFormat(this.c);

	const firstOfYear = this.clone().parse(year);
	const firstOfYearDay = firstOfYear.date(dayOfYearFormat);
	const lastOfYear = firstOfYear.clone().endOf("year").startOf("day");
	const lastOfYearDay = lastOfYear.date(dayOfYearFormat);

	if (firstOfYearDay > 3) firstOfYear.addDay(7 - firstOfYearDay);
	else firstOfYear.subDay(firstOfYearDay);

	if (lastOfYearDay > 3) lastOfYear.addDay(7 - lastOfYearDay);
	else lastOfYear.subDay(lastOfYearDay);

	return Math.ceil(lastOfYear.diff(firstOfYear, "date") / 7);
}
