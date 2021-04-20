export function subYear(year, checkDate) {
	this.d.year -= Math.abs(year);
	while (checkDate && !this.isValidDate()) this.subDay(1, false);
	return this;
}
