export function parse(...date) {
	if (this.c == "jalali") {
		return this.fromJalali(...date);
	} else {
		return this.fromGregorian(...date);
	}
}
