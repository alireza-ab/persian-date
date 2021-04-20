import { typesToArray } from "../base";
import { isDate, isPersianDate } from "../comparison";

export function time(...t) {
	if (!t.length) return this.toArray().slice(3);
	let times = [];
	if (isPersianDate(t[0])) times = t[0].time();
	else if (isDate(t[0]))
		times = [
			t[0].getHours(),
			t[0].getMinutes(),
			t[0].getSeconds(),
			t[0].getMilliseconds(),
		];
	else if (Object.prototype.toString.call(t[0]) === "[object Object]")
		times = [
			t[0].h || t[0].hour || t[0].hours || 0,
			t[0].m || t[0].minute || t[0].minutes || 0,
			t[0].s || t[0].second || t[0].seconds || 0,
			t[0].ms || t[0].millisecond || t[0].milliseconds || 0,
		];
	else times = typesToArray(this.c, ...t);
	if (this.isValidTime(...times)) {
		return this.hour(times[0] || 0)
			.minute(times[1] || 0)
			.second(times[2] || 0)
			.millisecond(times[3] || 0);
	} else return "زمان نامعتبر";
}
