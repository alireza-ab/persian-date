import { typesToArray } from "../base";

export function toArray() {
	if (!arguments.length) {
		return Object.values(this.d);
	}
	const formats = typesToArray(this.c, ...arguments);
	return [
		this.year(formats[0]),
		this.month(formats[1]),
		this.date(formats[2]),
		this.hour(formats[3]),
		this.minute(formats[4]),
		this.second(formats[5]),
		this.millisecond(formats[6]),
	];
}
