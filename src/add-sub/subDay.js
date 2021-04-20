export function subDay(day) {
	day = Math.abs(day);
	let pastDays = this.d.date; // pastDays -> Number of days that is past
	if (pastDays > day) {
		this.d.date -= day;
	} else {
		this.subMonth(1, false);
		let daysInMonth = this.getDaysInMonth();
		this.d.date = daysInMonth;
		day -= pastDays;
		while (day >= daysInMonth) {
			day -= daysInMonth;
			this.subMonth(1, false);
			daysInMonth = this.getDaysInMonth();
		}
		this.d.date = daysInMonth - day;
	}

	return this;
}
