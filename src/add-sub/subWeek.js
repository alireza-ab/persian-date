export function subWeek(week, checkDate) {
	week = Math.abs(week);
	return this.subDay(week * 7, checkDate);
}
