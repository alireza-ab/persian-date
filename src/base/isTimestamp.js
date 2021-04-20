/**
 * check the input is timestamp
 * @since 2.0.0
 * @param {Number|String} timestamp - input that must be checked
 * @returns {Boolean} if input was timestamp, return true
 */
export const isTimestamp = (timestamp) => {
	return !isNaN(timestamp) && Math.floor(timestamp / 10000) > 0;
};
