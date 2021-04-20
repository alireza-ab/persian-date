import { REGEX } from "../utils";
import { addPrefix, getWeekOfYear, gtj, ordinalNumber } from "../base";

const getDefaultFormat = (calendar) => {
	switch (calendar[0]) {
		case "j":
			return "jw";
		default:
			return "w";
	}
};

export function week(format) {
	format = String(format).trim();

	if (REGEX["isNumeric"].test(format)) {
		const weeksInYear = this.getWeeksInYear();
		if (format < 1) {
			this.week(1);
			this.subWeek(format - 1, false);
		} else if (format > weeksInYear) {
			this.week(weeksInYear);
			this.addWeek(format - weeksInYear, false);
		} else {
			const weekOfYear = getWeekOfYear.call(
				this,
				this.d.year,
				this.d.month,
				this.d.date,
				this.c
			);
			this.addWeek(+format - weekOfYear);
		}

		while (!this.isValidDate()) {
			this.subDay(1, false);
		}
		return this;
	} else {
		if (!format) format = getDefaultFormat(this.c);

		const jWeekOfYear = getWeekOfYear.call(
			this,
			this.year("jy"),
			this.month("jM"),
			this.date("jD"),
			this.c
		);
		if (format == "jw" || format == "jW") return jWeekOfYear;
		if (format == "jww" || format == "jWW") return addPrefix(jWeekOfYear, 2);
		if (format == "jwo" || format == "jWo") return ordinalNumber(jWeekOfYear);
		if (format == "jwO" || format == "jWO")
			return ordinalNumber(jWeekOfYear, "jalali", 2);

		const gWeekOfYear = getWeekOfYear.call(
			this,
			this.year("y"),
			this.month("M"),
			this.date("D"),
			"gregorian"
		);
		if (format == "w" || format == "W") return gWeekOfYear;
		if (format == "ww" || format == "WW") return addPrefix(gWeekOfYear, 2);
		if (format == "wo" || format == "Wo" || format == "wO" || format == "WO")
			return ordinalNumber(gWeekOfYear, "gregorian");
		return jWeekOfYear;
	}
}
