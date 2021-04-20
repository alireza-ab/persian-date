export function subHour(hour) {
	hour = Math.abs(hour);
	while (hour >= 24) {
		hour -= 24;
		this.subDay(1, false);
	}
	const pastHours = this.d.hour; // pastHours -> Number of hours that is past
	if (hour > pastHours) {
		this.subDay(1, false);
		hour -= pastHours;
		this.d.hour = 24 - hour;
	} else this.d.hour -= hour;

	return this;
}
