export function timestamp(value) {
	if (value) {
		return this.fromGregorian(+String(value).trim());
	} else {
		return this.toDate().getTime();
	}
}
