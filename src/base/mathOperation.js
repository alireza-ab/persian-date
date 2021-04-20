import { typesToArray } from "../base";

/**
 * do the math operation on dates
 * @since 1.4.0
 * @param {...String|PersianDate|Date|Array|Object} values - the dates
 * @param {'min'|'max'} operation - the operation
 * @returns {*} return maximum date
 * @throws {false} if parameters not send or parameters is invalid, return false
 */
export const mathOperation = function (values, operation) {
	if (!values.length) {
		return false;
	}
	const args = [...values];
	const argsNumber = args.map((date) => {
		date = typesToArray(this.c, date);
		if (this.isValid(...date))
			return this.clone()
				.parse(...date)
				.timestamp();
		return false;
	});
	if (argsNumber.includes(false)) return false;
	return args[argsNumber.indexOf(Math[operation](...argsNumber))];
};
