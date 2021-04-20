import { jtg } from "../base";

const jalali = (date) => {
	return jtg(...date);
};

const gregorian = (date) => {
	--date[1];
	return new Date(...date);
};

export function toDate() {
	switch (this.c[0]) {
		case "j":
			return jalali(this.toArray());
		default:
			return gregorian(this.toArray());
	}
}
