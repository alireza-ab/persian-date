import { REGEX } from "../utils";
import { typesToArray, compare } from "../base";

export function isSame() {
	let date = typesToArray(this.c, ...arguments);
	date = this.toArray().map((value, i) =>
		REGEX["isNumeric"].test(date[i]) ? date[i] : value
	);

	return compare.call(this, date, "==");
}
