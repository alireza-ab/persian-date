import { typesToArray } from "../base";

export function diff(date, unit, addOne) {
	date = typesToArray(this.c, date);
	if (!this.isValid(...date)) return "تاریخ نامعتبر";
	let result =
		this.timestamp() -
		this.clone()
			.parse(...date)
			.timestamp();
	switch (unit) {
		case "y":
		case "year":
		case "years":
			result = this.d.year - date[0];
			break;
		case "M":
		case "month":
		case "months":
			result = this.d.year * 12 + this.d.month - (+date[0] * 12 + +date[1]);
			break;
		case "d":
		case "date":
		case "day":
		case "days":
			result = Math.ceil(result / 1000 / 60 / 60 / 24);
			break;
		case "h":
		case "hour":
		case "hours":
			result = Math.ceil(result / 1000 / 60 / 60);
			break;
		case "m":
		case "minute":
		case "minutes":
			result = Math.ceil(result / 1000 / 60);
			break;
		case "s":
		case "second":
		case "seconds":
			result = Math.ceil(result / 1000);
			break;
		case "ms":
		case "millisecond":
		case "milliseconds":
	}
	return addOne ? result + (result >= 0 ? 1 : -1) : result;
}
