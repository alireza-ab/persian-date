import { REGEX } from "../utils";
import { gtj } from "../base";

const getDefaultFormat = (calendar) => {
	switch (calendar[0]) {
		case "j":
			return "jy";
		default:
			return "y";
	}
};

export function year(format) {
	format = String(format).trim();

	if (REGEX["isNumeric"].test(format)) {
		this.d.year = +format;
		if (!this.isValidDate()) {
			return this.subDay(1, false);
		}

		return this;
	} else {
		if (!format) format = getDefaultFormat(this.c);
		const jYear = this.c == "jalali" ? this.d.year : gtj(this.toDate())[0];
		if (format == "jy" || format == "jYYYY") return jYear;
		if (format == "jYY") return String(jYear).slice(-2);
		const gYear =
			this.c == "gregorian" ? this.d.year : this.toDate().getFullYear();
		if (format == "y" || format == "YYYY") return gYear;
		if (format == "YY") return String(gYear).slice(-2);
		return jYear;
	}
}
