import { REGEX } from "../utils";
import { addPrefix } from "../base";

export function millisecond(format) {
	format = String(format).trim();

	if (REGEX["isNumeric"].test(format)) {
		if (format < 0) {
			this.d.millisecond = 0;
			this.subMillisecond(format);
		} else if (format > 23) {
			this.d.millisecond = 23;
			this.addMillisecond(format - 23);
		} else {
			this.d.millisecond = +format;
		}

		return this;
	} else {
		if (format == "CCC" || format == "c") return this.d.millisecond;
		if (format == "CCCC") return addPrefix(this.d.millisecond, 3);
		return this.d.millisecond;
	}
}
