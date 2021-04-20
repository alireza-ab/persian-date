import { getDayOfWeek } from "../base";

export function startOf(unit) {
	this.d.millisecond = 0;
	if (unit[0] == "s") return this;
	this.d.second = 0;
	if (unit == "m" || unit == "minute") return this;
	this.d.minute = 0;
	if (unit[0] == "h") return this;
	this.d.hour = 0;
	if (unit[0] == "d") return this;
	if (unit[0] == "w")
		return this.subDay(getDayOfWeek(this.toDate(), this.c, "array"));
	this.d.date = 1;
	if (unit[0] == "q") return this.quarter(this.quarter());
	if (unit == "M" || unit == "month") return this;
	this.d.month = 1;
	if (unit[0] == "y") return this;
}
