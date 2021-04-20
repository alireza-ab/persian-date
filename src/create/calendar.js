import { setJalaliDate, setGregorianDate } from "../base";

export function calendar(c) {
	if (!c) return this.c;

	if (c[0] == "j" && this.c[0] != "j") {
		if (!this.error) setJalaliDate.call(this, this.toDate());
		this.c = "jalali";
	} else if (c[0] == "g" && this.c[0] != "g") {
		if (!this.error) setGregorianDate.call(this, this.toDate());
		this.c = "gregorian";
	}

	return this;
}
