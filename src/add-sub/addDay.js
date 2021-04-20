export function addDay(day) {
	if (day < 0)
		// if the number was negative, send to subDay method
		return this.subDay(Math.abs(day));
	day = +day; //plus sign before a variable, convert variable to int

	const dayToStartNextMonth = this.getDaysInMonth() - this.d.date + 1; // dayToStartNextMonth -> Number of day to start of next month
	if (dayToStartNextMonth > day) {
		this.d.date += day;
	} else {
		this.addMonth(1, false);
		this.d.date = 1;
		day -= dayToStartNextMonth;
		let daysInMonth = this.getDaysInMonth();
		while (day >= daysInMonth) {
			day -= daysInMonth;
			this.addMonth(1, false);
			daysInMonth = this.getDaysInMonth();
		}
		if (day != 0) {
			this.d.date += day;
		}
	}

	return this;
}
