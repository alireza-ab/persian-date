import { typesToArray, gtj, jtg, setGregorianDate, invalid } from "../base";

export function fromJalali(...date) {
	if (!date.length) date = gtj();
	else date = typesToArray("jalali", ...date);

	if (this.c == "jalali") {
		this.d.year = +date[0];
		this.d.month = +date[1] || 1;
		this.d.date = +date[2] || 1;
		this.d.hour = +date[3] || 0;
		this.d.minute = +date[4] || 0;
		this.d.second = +date[5] || 0;
		this.d.millisecond = +date[6] || 0;
	} else {
		setGregorianDate.call(this, jtg(...date));
	}

	if (!this.isValid()) return invalid.call(this, "تاریخ نامعتبر");
	return this;
}
