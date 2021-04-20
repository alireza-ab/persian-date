import { REGEX } from "../utils";
import { gtj, ordinalNumber } from "../base";

const getDefaultFormat = (calendar) => {
	switch (calendar[0]) {
		case "j":
			return "jQ";
		default:
			return "Q";
	}
};

export function quarter(format) {
	format = String(format).trim();

	if (REGEX["isNumeric"].test(format)) {
		if (format < 1) {
			this.d.month = 1;
			this.subQuarter(format - 1, false);
		} else if (format > 4) {
			this.d.month = 12;
			this.addQuarter(format - 4, false);
		} else {
			this.d.month = +format * 3 - 2;
		}
		while (!this.isValidDate()) {
			this.subDay(1, false);
		}
		return this;
	} else {
		if (!format) format = getDefaultFormat(this.c);

		let jQuarter = Math.ceil(
			(this.c == "jalali" ? this.d.month : gtj(this.toDate())[1]) / 3
		);
		if (format == "jQ") return jQuarter;
		if (format == "jQo") return ordinalNumber(jQuarter);
		if (format == "jQO") return ordinalNumber(jQuarter, "jalali", 2);

		const gQuarter = Math.ceil(
			(this.c == "gregorian" ? this.d.month : this.toDate().getMonth() + 1) / 3
		);
		if (format == "Q") return gQuarter;
		if (format == "Qo" || format == "QO")
			return ordinalNumber(gQuarter, "gregorian");

		return jQuarter;
	}
}
