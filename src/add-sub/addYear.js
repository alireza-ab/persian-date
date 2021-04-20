export function addYear(year, checkDate) {
	// if the number was negative, send to subYear method
	if (year < 0) return this.subYear(Math.abs(year));
	this.d.year += +year; //plus sign before a variable, convert variable to int
	while (checkDate && !this.isValidDate()) this.subDay(1, false);
	return this;
}
