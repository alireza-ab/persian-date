import { CALENDAR } from "../utils";
import { error } from "./error";
import { isDate } from "../comparison/isDate";

/**
 * get the day of the week
 * @param {Date} date - the date that received day of week
 * @param {'jalali', 'gregorian'} calendar - the calendar
 * @param {'standard','array'} mode - standard mode start from 1 and array mode start from 0
 * @returns {Number|String} the number of the day of week
 */
export const getDayOfWeek = (
	date = new Date(),
	calendar = "jalali",
	mode = "standard"
) => {
	if (isDate(date)) {
		// if the year was an instance of Date
		return (
			CALENDAR[calendar]["days"]["weekNumber"][date.getDay()] +
			(mode != "standard" ? 0 : 1)
		);
	}
	return error("the first param must be instance of Date.");
};
