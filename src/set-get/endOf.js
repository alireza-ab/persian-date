import { getDayOfWeek } from "../base";

export function endOf(unit) {
	this.d.millisecond = 999;
	if (unit[0] == "s") return this;
	this.d.second = 59;
	if (unit == "m" || unit == "minute") return this;
	this.d.minute = 59;
	if (unit[0] == "h") return this;
	this.d.hour = 23;
	if (unit[0] == "d") return this;
	if (unit[0] == "w")
		return this.addDay(7 - getDayOfWeek(this.toDate(), this.c));
	if (unit[0] == "q") {
		this.quarter(this.quarter()).addMonth(2);
		this.d.date = this.getDaysInMonth();
		return this;
	}
	this.d.date = this.getDaysInMonth();
	if (unit == "M" || unit == "month") return this;
	this.d.month = 12;
	this.d.date = this.getDaysInMonth();
	if (unit[0] == "y") return this;
}
