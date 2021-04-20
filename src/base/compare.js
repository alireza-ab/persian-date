import { typesToArray } from "../base";

/**
 * compare the dates
 * @since 2.0.0
 * @param {PersianDate|Date|String|Array|Object} date - the date
 * @param {'>'|'>='|'<'|'<='|'=='} operator - the operator for compare
 * @returns {‌Boolean} if date valid, return true of false
 */
export const compare = function (date, operator) {
	date = typesToArray(this.c, ...date);

	if (this.isValid(...date))
		return eval(
			"this.timestamp()" + operator + "this.clone().parse(...date).timestamp()"
		);
	return false;
};
