export function addQuarter(quarter, checkDate) {
	// if the number was negative, send to subQuarter method
	if (quarter < 0) return this.subQuarter(Math.abs(quarter));
	return this.addMonth(+quarter * 3, checkDate);
}
