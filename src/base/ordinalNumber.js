import { CALENDAR } from "../utils";
/**
 * returns the ordinal number of that number sent to it
 * @param {Number} number - the number that gives ordinal number --> from 1 to 366
 * @param {'jalali','gregorian'} calendar - the calendar
 * @param {?Number} mode  - 'jalali' calendar have two mode of ordinal number
 * @returns {String} ordinal number
 * @example 1st | اول | اولین
 */
export const ordinalNumber = (number, calendar = "jalali", mode = 1) => {
	return CALENDAR[calendar].ordinalNumbers(number, mode);
};
