import { CALENDAR } from "../utils";
import { error } from "./error";
import { isDate } from "../comparison/isDate";

/**
 * get label of day
 * @param {Date} date - the date that received day
 * @param {'jalali'|'gregorian'} calendar - the calendar
 * @returns {String} returns day label
 * @example Saturday | شنبه
 */
export const getDayLabel = function (date = new Date(), calendar = "jalali") {
	if (isDate(date)) return CALENDAR[calendar]["days"]["label"][date.getDay()];
	return error("the first param must be instance of Date.");
};
