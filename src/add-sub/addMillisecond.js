export function addMillisecond(millisecond) {
	if (millisecond < 0)
		// if the number was negative, send to subMillisecond method
		return this.subMillisecond(Math.abs(millisecond));
	millisecond = +millisecond; //plus sign before a variable, convert variable to int
	while (millisecond >= 1000) {
		this.addSecond(1, false);
		millisecond -= 1000;
	}
	const millisecondToNextSecond = 1000 - this.d.millisecond; // millisecondToNextSecond -> Number of milllisecond to start of next second
	if (millisecond >= millisecondToNextSecond) {
		this.addSecond(1, false);
		millisecond -= millisecondToNextSecond;
		this.d.millisecond = millisecond;
	} else this.d.millisecond += millisecond;

	return this;
}
