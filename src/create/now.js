import { setJalaliDate, setGregorianDate } from "../base";

export function now() {
	const date = new Date();

	if (this.c == "jalali") {
		setJalaliDate.call(this, date);
	} else {
		setGregorianDate.call(this, date);
	}

	return this;
}
