export function subMinute(minute) {
	minute = Math.abs(minute);
	while (minute >= 60) {
		minute -= 60;
		this.subHour(1, false);
	}
	const pastMinute = this.d.minute; // pastMinutes -> Number of minutes that is past
	if (minute > pastMinute) {
		this.subHour(1, false);
		minute -= pastMinute;
		this.d.minute = 60 - minute;
	} else this.d.minute -= minute;

	return this;
}
