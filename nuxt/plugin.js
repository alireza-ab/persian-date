import PersianDate from "@alireza-ab/persian-date";

export default (ctx, inject) => {
	const persianDate = new PersianDate();
	ctx.$PersianDate = persianDate;
	inject("PersianDate", persianDate);
};
