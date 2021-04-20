const CALENDAR = {
	jalali: {
		months: {
			1: "فروردین",
			2: "اردیبهشت",
			3: "خرداد",
			4: "تیر",
			5: "مرداد",
			6: "شهریور",
			7: "مهر",
			8: "آبان",
			9: "آذر",
			10: "دی",
			11: "بهمن",
			12: "اسفند",
		},
		days: {
			label: {
				6: "شنبه",
				0: "یکشنبه",
				1: "دوشنبه",
				2: "سه‌شنبه",
				3: "چهارشنبه",
				4: "پنجشنبه",
				5: "جمعه",
			},
			weekNumber: {
				// days in jalali calendar start from saturday or 6
				6: 0, //شنبه
				0: 1, //یکشنبه
				1: 2, //دوشنبه
				2: 3, //سه‌شنبه
				3: 4, //چهارشنبه
				4: 5, //پنجشنبه
				5: 6, //جمعه
			},
		},
		ordinalNumbers: function (number, mode) {
			const numbers = {
				1: "یک",
				2: "دو",
				3: "سو",
				4: "چهار",
				5: "پنج",
				6: "شش",
				7: "هفت",
				8: "هشت",
				9: "نه",
				10: "ده",
				11: "یازده",
				12: "دوازده",
				13: "سیزده",
				14: "چهارده",
				15: "پانزده",
				16: "شانزده",
				17: "هفده",
				18: "هجده",
				19: "نوزده",
				20: "بیست",
				30: "سی‌",
				40: "چهل",
				50: "پنجاه",
				60: "شصت",
				70: "هفتاد",
				80: "هشتاد",
				90: "نود",
				100: "صد",
				200: "دویست",
				300: "سیصد",
			};
			let ordinalNumber = "";
			if (number == 1) ordinalNumber = "اول";
			else if (numbers[number])
				ordinalNumber = numbers[number] + (number == 30 ? "ام" : "م");
			else {
				let remainder = number % 100;
				if (numbers[remainder]) ordinalNumber = numbers[remainder] + "م";
				else {
					remainder = number % 10;
					if (remainder) ordinalNumber = numbers[remainder] + "م";
				}
				remainder = (number - remainder) % 100;
				if (remainder)
					ordinalNumber =
						numbers[remainder] +
						(ordinalNumber
							? " و " + ordinalNumber
							: remainder == 30
							? "ام "
							: "م");
				remainder = Math.floor(number / 100) * 100;
				if (remainder)
					ordinalNumber =
						numbers[remainder] + (ordinalNumber ? " و " + ordinalNumber : "م");
			}
			if (mode == 2) ordinalNumber += "ین";
			return ordinalNumber;
		},
	},
	gregorian: {
		months: {
			1: "January",
			2: "February",
			3: "March",
			4: "April",
			5: "May",
			6: "June",
			7: "July",
			8: "August",
			9: "September",
			10: "October",
			11: "November",
			12: "December",
		},
		days: {
			label: {
				0: "Sunday",
				1: "Monday",
				2: "Tuesday",
				3: "Wednesday",
				4: "Thursday",
				5: "Friday",
				6: "Saturday",
			},
			weekNumber: {
				// days in gregorian calendar start from sunday or 0
				0: 0, // Sunday
				1: 1, // Monday
				2: 2, // Tuesday
				3: 3, // Wednesday
				4: 4, // Thursday
				5: 5, // Friday
				6: 6, // Saturday
			},
		},
		ordinalNumbers: function (number) {
			if (number == 1 || (number % 10 == 1 && number != 11))
				return number + "st";
			else if (number == 2 || (number % 10 == 2 && number != 12))
				return number + "nd";
			else if (number == 3 || (number % 10 == 3 && number != 13))
				return number + "rd";
			else return number + "th";
		},
	},
};

const REGEX = {
	format: /j*(YYYY|YY|y|Qo|QO|Q|MMMM|MMM|MM|Mo|MO|M|DDDD|DDDo|DDDO|DDD|DD|Do|DO|D|dddd|ddd|dd|do|dO|de|d|ww|WW|wo|Wo|wO|WO|w|W|HH|hh|H|h|kk|k|mm|m|ss|s|CCCC|CCC|c|t|aa|a|A)/g,
	isNumeric: /^\d+$/, // this regex, checks input to see is a number or not
	separators: "\\/| |-|\\.|,|:", // find ['/',' ','-','.',',',':'] and split string to array by this symbols
	betweenBacktick: /`(.*?)`/g, // find the texts between the backticks ==> `Alireza`
};

const TIMETYPE = function (hour, format) {
	if (hour >= 0 && hour < 12) {
		if (format == "a") return "am";
		else if (format == "aa") return "A.M.";
		else if (format == "A") return "AM";
		else if (format == "ja") return "ق ظ";
		else if (format == "jaa") return "ق.ظ";
		else if (format == "jA") return "قبل از ظهر";
		return "ق.ظ";
	} else if (hour >= 12 && hour < 24) {
		if (format == "a") return "pm";
		else if (format == "aa") return "P.M.";
		else if (format == "A") return "PM";
		else if (format == "ja") return "ب ظ";
		else if (format == "jaa") return "ب.ظ";
		else if (format == "jA") return "بعد از ظهر";
		return "ب.ظ";
	}
};

export { CALENDAR, TIMETYPE, REGEX };
