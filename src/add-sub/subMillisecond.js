export function subMillisecond(millisecond) {
	millisecond = Math.abs(millisecond);
	while (millisecond >= 1000) {
		millisecond -= 1000;
		this.subSecond(1, false);
	}
	const pastMilliseconds = this.d.millisecond; // pastMilliseconds -> Number of milliseconds that is past
	if (millisecond > pastMilliseconds) {
		this.subSecond(1, false);
		millisecond -= pastMilliseconds;
		this.d.millisecond = 1000 - millisecond;
	} else this.d.millisecond -= millisecond;

	return this;
}
