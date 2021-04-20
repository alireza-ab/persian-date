/**
 * make error and delete this.d
 * @param {String} errorText - Error Text
 * @returns {PersianDate} make error and return class
 */
export const invalid = function (errorText) {
	delete this.d;
	this.error = errorText;
	return this;
};
