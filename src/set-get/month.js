import { REGEX, CALENDAR } from "../utils";
import { addPrefix, gtj, ordinalNumber } from "../base";

const getDefaultFormat = (calendar) => {
	switch (calendar[0]) {
		case "j":
			return "jM";
		default:
			return "M";
	}
};

export function month(format) {
	format = String(format).trim();

	if (REGEX["isNumeric"].test(format)) {
		if (format < 1) {
			this.d.month = 1;
			this.subMonth(format - 1, false);
		} else if (format > 12) {
			this.d.month = 12;
			this.addMonth(format - 12, false);
		} else {
			this.d.month = +format;
		}

		while (!this.isValidDate()) {
			this.subDay(1, false);
		}
		return this;
	} else {
		if (!format) format = getDefaultFormat(this.c);

		const jMonth = this.c == "jalali" ? this.d.month : gtj(this.toDate())[1];
		if (format == "jMM") return addPrefix(jMonth, 2);
		if (format == "jM") return jMonth;
		if (format == "jMMMM" || format == "jMMM")
			return CALENDAR["jalali"]["months"][jMonth];
		if (format == "jMo") return ordinalNumber(jMonth);
		if (format == "jMO") return ordinalNumber(jMonth, "jalali", 2);

		const gMonth =
			this.c == "gregorian" ? this.d.month : this.toDate().getMonth() + 1;
		if (format == "M") return gMonth;
		if (format == "MM") return addPrefix(gMonth, 2);
		if (format == "MMMM") return CALENDAR["gregorian"]["months"][gMonth];
		if (format == "Mo" || format == "MO")
			return ordinalNumber(gMonth, "gregorian");
		if (format == "MMM")
			return CALENDAR["gregorian"]["months"][gMonth].slice(0, 3);

		return jMonth;
	}
}
