import { typesToArray } from "../base";

export function toObject() {
	if (!arguments.length) {
		return this.d;
	}
	const formats = typesToArray(this.c, ...arguments);
	return {
		year: this.year(formats[0]),
		month: this.month(formats[1]),
		date: this.date(formats[2]),
		hour: this.hour(formats[3]),
		minute: this.minute(formats[4]),
		second: this.second(formats[5]),
		millisecond: this.millisecond(formats[6]),
	};
}
