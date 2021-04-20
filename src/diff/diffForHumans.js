export function diffForHumans(date, suffix) {
	let result = this.diff(date, "s");
	if (typeof result == "string") return "تاریخ نامعتبر";

	const prefix = suffix && (result > 0 ? "آینده" : "پیش");
	result = Math.abs(result);

	if (result == 0) return "هم اکنون";
	else if (result < 45) result = "لحظات";
	else if ((result /= 60) < 45)
		// divide by 60, for getting minute
		result = Math.round(result) + " " + "دقیقه";
	else if ((result /= 60) < 23.5)
		// divide by 60, for getting hour
		result = Math.round(result) + " " + "ساعت";
	else if ((result /= 24) < 26)
		// divide by 24, for getting day
		result = Math.round(result) + " " + "روز";
	else if (result < 320) result = Math.round(result / 30) + " " + "ماه";
	else result = Math.round(result / 365) + " " + "سال";
	return result + (suffix ? " " + prefix : "");
}
