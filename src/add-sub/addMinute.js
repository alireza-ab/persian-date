export function addMinute(minute) {
	if (minute < 0)
		// if the number was negative, send to subMinute method
		return this.subMinute(Math.abs(minute));
	minute = +minute; //plus sign before a variable, convert variable to int
	while (minute >= 60) {
		this.addHour(1, false);
		minute -= 60;
	}
	const minuteToNextHour = 60 - this.d.minute; // minuteToNextHour -> Number of minute to start of next hour
	if (minute >= minuteToNextHour) {
		this.addHour(1, false);
		minute -= minuteToNextHour;
		this.d.minute = minute;
	} else this.d.minute += minute;

	return this;
}
