import { REGEX } from "../utils";
import { addPrefix } from "../base";

export function hour(format) {
	format = String(format).trim();

	if (REGEX["isNumeric"].test(format)) {
		if (format < 0) {
			this.d.hour = 0;
			this.subHour(format);
		} else if (format > 23) {
			this.d.hour = 23;
			this.addHour(format - 23);
		} else {
			this.d.hour = +format;
		}

		return this;
	} else {
		let h = this.d.hour;
		if (format == "H") return h;
		if (format == "HH") return addPrefix(h, 2);
		if (format == "k") return h || 24;
		if (format == "kk") return addPrefix(h || 24, 2);
		h = h > 12 ? h - 12 : h;
		if (format == "h") return h;
		if (format == "hh") return addPrefix(h, 2);
		return h;
	}
}
