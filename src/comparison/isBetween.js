import { REGEX } from "../utils";
import { typesToArray, compare } from "../base";

export function isBetween(from, to, method) {
	const date = this.toArray();

	from = typesToArray(this.c, from);
	if (!from[2]) date[2] = 1;
	from = date.map((value, i) =>
		REGEX["isNumeric"].test(from[i]) ? from[i] : value
	);

	to = typesToArray(this.c, to);
	to = date.map((value, i) => (REGEX["isNumeric"].test(to[i]) ? to[i] : value));

	if (!(this.isValid(...from) && this.isValid(...to))) return false;

	return (
		compare.call(this, from, method[0] === "[" ? ">=" : ">") &&
		compare.call(this, to, method[1] === "]" ? "<=" : "<")
	);
}
