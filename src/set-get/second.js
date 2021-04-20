import { REGEX } from "../utils";
import { addPrefix } from "../base";

export function second(format) {
	format = String(format).trim();

	if (REGEX["isNumeric"].test(format)) {
		if (format < 0) {
			this.d.second = 0;
			this.subSecond(format);
		} else if (format > 23) {
			this.d.second = 23;
			this.addSecond(format - 23);
		} else {
			this.d.second = +format;
		}

		return this;
	} else {
		if (format == "s") return this.d.second;
		if (format == "ss") return addPrefix(this.d.second, 2);
		return this.d.second;
	}
}
