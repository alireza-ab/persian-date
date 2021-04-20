import { gtj } from ".";
/**
 * set the date with Date instance
 * @since 2.0.0
 * @param {Date} date - the Date
 */
export const setJalaliDate = function (date) {
	[
		this.d.year,
		this.d.month,
		this.d.date,
		this.d.hour,
		this.d.minute,
		this.d.second,
		this.d.millisecond,
	] = gtj(date);
};
