export function subQuarter(quarter, checkDate) {
	quarter = Math.abs(quarter);
	return this.subMonth(quarter * 3, checkDate);
}
