export function addHour(hour) {
	if (hour < 0)
		// if the number was negative, send to subHour method
		return this.subHour(Math.abs(hour));
	hour = +hour; //plus sign before a variable, convert variable to int
	while (hour >= 24) {
		hour -= 24;
		this.addDay(1, false);
	}
	const hourToNextDay = 24 - this.d.hour; // hourToNextDay -> Number of hour to start of next day
	if (hour >= hourToNextDay) {
		this.addDay(1, false);
		hour -= hourToNextDay;
		this.d.hour = hour;
	} else this.d.hour += hour;

	return this;
}
