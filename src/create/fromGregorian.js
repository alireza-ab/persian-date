import {
	typesToArray,
	setGregorianDate,
	setJalaliDate,
	invalid,
	isTimestamp,
} from "../base";
import { isValid } from "../comparison";

export function fromGregorian(...date) {
	if (!date.length) date[0] = new Date().getTime();
	else if (this.isPersianDate(date[0])) {
		date = date[0].clone().calendar("g").toArray();
	} else if (!isTimestamp(date[0])) {
		date = typesToArray("gregorian", ...date);
		date[6] = +date[6] || 0;
		date[5] = +date[5] || 0;
		date[4] = +date[4] || 0;
		date[3] = +date[3] || 0;
		date[2] = +date[2] || 1;
		date[1] = +date[1] || 1;
		date[0] = +date[0];
	}

	if (date.length > 1) {
		if (!isValid("gregorian", ...date))
			return invalid.call(this, "تاریخ نامعتبر");
		--date[1]; // this is month; becuse the Date get month from 0, subtract one
	}

	date = new Date(...date);
	if (date == "Invalid Date") return invalid.call(this, "تاریخ نامعتبر");
	if (this.c == "jalali") {
		setJalaliDate.call(this, date);
	} else {
		setGregorianDate.call(this, date);
	}
	return this;
}
