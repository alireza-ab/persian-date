export const isValidTime = function (hour, minute, second, millisecond) {
	if (
		[hour, minute, second, millisecond].some(
			(e) => String(e).search(/null|NaN/) != -1
		)
	)
		return false;
	if (hour < 0 || hour > 23) return false;
	if (minute < 0 || minute > 59) return false;
	if (second < 0 || second > 59) return false;
	if (millisecond < 0 || millisecond > 999) return false;
	return true;
};
