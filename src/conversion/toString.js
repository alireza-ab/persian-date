import { REGEX, TIMETYPE } from "../utils";

const jalali = (format) => {
	return format
		.replace(/\?/g, "j")
		.replace(/datetime/gi, "jYYYY/jMM/jDD HH:mm")
		.replace(/date/gi, "jYYYY/jMM/jDD")
		.replace(/time/gi, "HH:mm");
};

const gregorian = (format) => {
	return format
		.replace(/\?/g, "")
		.replace(/datetime/gi, "YYYY-MM-DD HH:mm")
		.replace(/date/gi, "YYYY-MM-DD")
		.replace(/time/gi, "HH:mm");
};

export function toString(format) {
	const rawTexts = [];
	format = format.replace(REGEX["betweenBacktick"], (_matched, text) => {
		rawTexts.push(text);
		return "###";
	});
	switch (this.c[0]) {
		case "j":
			format = jalali(format);
			break;
		default:
			format = gregorian(format);
	}
	const matchedFormats = format.match(REGEX["format"]);
	let dateString = "";
	for (const i of matchedFormats) {
		dateString += format.substring(0, format.indexOf(i));

		if (i.search(/Y|y/) != -1) dateString += this.year(i);
		else if (i.search(/M/) != -1) dateString += this.month(i);
		else if (i.search(/Q/) != -1) dateString += this.quarter(i);
		else if (i.search(/D|d/) != -1) dateString += this.date(i);
		else if (i.search(/W|w/) != -1) dateString += this.week(i);
		else if (i.search(/H|h|k/) != -1) dateString += this.hour(i);
		else if (i.search(/m/) != -1) dateString += this.minute(i);
		else if (i.search(/s/) != -1) dateString += this.second(i);
		else if (i.search(/c|C/) != -1) dateString += this.millisecond(i);
		else if (i.search(/t/) != -1) dateString += this.timestamp();
		else if (i.search(/a|A/) != -1) dateString += TIMETYPE(this.d.hour, i);

		format = format.substr(format.indexOf(i) + i.length);
	}
	dateString += format;
	for (let i = 0; i < rawTexts.length; i++)
		dateString = dateString.replace("###", rawTexts[i]);
	return String(dateString);
}
