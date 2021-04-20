export function subSecond(second) {
	second = Math.abs(second);
	while (second >= 60) {
		second -= 60;
		this.subMinute(1, false);
	}
	const pastSeconds = this.d.second; // pastSeconds -> Number of seconds that is past
	if (second > pastSeconds) {
		this.subMinute(1, false);
		second -= pastSeconds;
		this.d.second = 60 - second;
	} else this.d.second -= second;

	return this;
}
