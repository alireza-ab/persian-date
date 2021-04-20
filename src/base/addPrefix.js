/**
 * add a prefix to the text in the number of characters that the text has less
 * @param {String|Number} text a text need prefix
 * @param {Number} length length of text
 * @param {String} [prefix=0] - string for add before of text
 * @returns {String} text with or wihtout prefix
 */
export const addPrefix = (text, length, prefix = "0") => {
	return prefix.repeat(length - String(text).length) + text;
};
