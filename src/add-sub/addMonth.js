export function addMonth(month, checkDate) {
	if (month < 0)
		// if the number was negative, send to subMonth method
		return this.subMonth(Math.abs(month));
	month = +month; // plus sign before a variable, convert variable to int

	const monthToStartNewYear = 12 - this.d.month + 1; // monthToStartNewYear -> Number of month to start of new year
	if (monthToStartNewYear > month) {
		this.d.month += month;
	} else {
		this.addYear(1, false);
		this.d.month = 1;
		month -= monthToStartNewYear;
		while (month >= 12) {
			month -= 12;
			this.addYear(1, false);
		}
		if (month != 0) {
			this.d.month += month;
		}
	}

	while (checkDate && !this.isValidDate()) this.subDay(1, false);
	return this;
}
