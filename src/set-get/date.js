import { REGEX } from "../utils";
import {
	addPrefix,
	ordinalNumber,
	getDayOfWeek,
	gtj,
	getDayLabel,
	getDayOfYear,
} from "../base";

const getDefaultFormat = (calendar) => {
	switch (calendar[0]) {
		case "j":
			return "jD";
		default:
			return "D";
	}
};

export function date(format) {
	format = String(format).trim();

	if (REGEX["isNumeric"].test(format)) {
		const daysInMonth = this.getDaysInMonth();

		if (format < 1) {
			this.d.date = 1;
			this.subDay(format - 1);
		} else if (format > daysInMonth) {
			this.d.date = daysInMonth;
			this.addDay(format - daysInMonth);
		} else {
			this.d.date = +format;
		}

		return this;
	} else {
		if (!format) format = getDefaultFormat(this.c);

		const jDate = this.c == "jalali" ? this.d.date : gtj(this.toDate())[2];
		//---------- Day of Month ----------//
		if (format == "jDD") return addPrefix(jDate, 2);
		if (format == "jD") return jDate;
		if (format == "jDo") return ordinalNumber(jDate);
		if (format == "jDO") return ordinalNumber(jDate, "jalali", 2);
		//---------- Day of Week ----------//
		const gDate = this.toDate();
		if (format == "jdddd" || format == "jddd") return getDayLabel(gDate);
		if (format == "jdd") return getDayLabel(gDate).slice(0, 1);
		let dayOfWeek = getDayOfWeek(gDate);
		if (format == "jdo") return ordinalNumber(dayOfWeek);
		if (format == "jdO") return ordinalNumber(dayOfWeek, "jalali", 2);
		if (format == "jd") return getDayOfWeek(gDate, "jalali", "array");
		if (format == "jde") return dayOfWeek;
		//---------- Day of Year ----------//
		let dayOfYear = getDayOfYear(this.year("jy"), this.month("jM"), jDate, "j");
		if (format == "jDDDD") return addPrefix(dayOfYear, 3);
		if (format == "jDDD") return dayOfYear;
		if (format == "jDDDo") return ordinalNumber(dayOfYear);
		if (format == "jDDDO") return ordinalNumber(dayOfYear, "jalali", 2);
		//---------- Day of Month ----------//
		if (format == "DD") return addPrefix(gDate.getDate(), 2);
		if (format == "D") return gDate.getDate();
		if (format == "Do" || format == "DO")
			return ordinalNumber(gDate.getDate(), "gregorian");
		//---------- Day of Week ----------//
		if (format == "dddd") return getDayLabel(gDate, "gregorian");
		if (format == "ddd") return getDayLabel(gDate, "gregorian").slice(0, 3);
		if (format == "dd") return getDayLabel(gDate, "gregorian").slice(0, 2);
		dayOfWeek = getDayOfWeek(gDate, "gregorian");
		if (format == "do" || format == "dO")
			return ordinalNumber(dayOfWeek, "gregorian");
		if (format == "d") return dayOfWeek - 1;
		if (format == "de") return dayOfWeek;
		//---------- Day of Year ----------//
		dayOfYear = getDayOfYear(
			gDate.getFullYear(),
			gDate.getMonth() + 1,
			gDate.getDate(),
			"g"
		);
		if (format == "DDDD") return addPrefix(dayOfYear, 3);
		if (format == "DDD") return dayOfYear;
		if (format == "DDDo" || format == "DDDO")
			return ordinalNumber(dayOfYear, "gregorian");
		return jDate;
	}
}
