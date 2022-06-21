import { REGEX } from "../utils";
import { typesToArray, compare } from "../base";

const matchingDate = (date, mainDate) => {
	mainDate.year(date[0] || mainDate.year());
	mainDate.month(date[1] || mainDate.month());
	mainDate.date(date[2] || mainDate.date());
	mainDate.hour(date[3] || mainDate.hour());
	mainDate.minute(date[4] || mainDate.minute());
	mainDate.second(date[5] || mainDate.second());
	mainDate.millisecond(date[6] || mainDate.millisecond());
	return mainDate.toArray();
};

export function isBetween(from, to, method) {
	from = typesToArray(this.c, from);
	from = matchingDate(from, this.clone());

	to = typesToArray(this.c, to);
	to = matchingDate(to, this.clone());
	if (!(this.isValid(...from) && this.isValid(...to))) return false;

	return (
		compare.call(this, from, method[0] === "[" ? ">=" : ">") &&
		compare.call(this, to, method[1] === "]" ? "<=" : "<")
	);
}
