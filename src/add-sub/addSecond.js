export function addSecond(second) {
	if (second < 0)
		// if the number was negative, send to subSecond method
		return this.subSecond(Math.abs(second));
	second = +second; //plus sign before a variable, convert variable to int
	while (second >= 60) {
		this.addMinute(1, false);
		second -= 60;
	}
	const secondToNextMinute = 60 - this.d.second; // secondToNextMinute -> Number of second to start of next Minute
	if (second >= secondToNextMinute) {
		this.addMinute(1, false);
		second -= secondToNextMinute;
		this.d.second = second;
	} else this.d.second += second;

	return this;
}
