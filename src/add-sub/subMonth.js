export function subMonth(month, checkDate) {
	month = Math.abs(month); //plus sign before a variable, convert variable to int
	const pastMonth = this.d.month; //pastMonth -> Number of month that is past
	if (pastMonth > month) {
		this.d.month -= month;
	} else {
		this.subYear(1, false);
		this.d.month = 12;
		month -= pastMonth;
		while (month >= 12) {
			this.subYear(1, false);
			month -= 12;
		}
		if (month != 0) {
			this.d.month -= month;
		}
	}

	while (checkDate && !this.isValidDate()) this.subDay(1, false);
	return this;
}
