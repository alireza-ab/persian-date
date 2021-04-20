import { REGEX } from "../utils";
import { addPrefix } from "../base";

export function minute(format) {
	format = String(format).trim();

	if (REGEX["isNumeric"].test(format)) {
		if (format < 0) {
			this.d.minute = 0;
			this.subMinute(format);
		} else if (format > 23) {
			this.d.minute = 23;
			this.addMinute(format - 23);
		} else {
			this.d.minute = +format;
		}

		return this;
	} else {
		if (format == "m") return this.d.minute;
		if (format == "mm") return addPrefix(this.d.minute, 2);
		return this.d.minute;
	}
}
