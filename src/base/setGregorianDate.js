/**
 * set the date with Date instance
 * @since 2.0.0
 * @param {Date} date - the Date instance
 */
export const setGregorianDate = function (date) {
	this.d = {
		year: date.getFullYear(),
		month: date.getMonth() + 1,
		date: date.getDate(),
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds(),
		millisecond: date.getMilliseconds(),
	};
};
