export function addWeek(week, checkDate) {
	// if the number was negative, send to subWeek method
	if (week < 0) return this.subWeek(Math.abs(week));
	return this.addDay(+week * 7, checkDate);
}
