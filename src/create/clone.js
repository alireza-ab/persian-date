export function clone() {
	return Object.assign(
		Object.create(Object.getPrototypeOf(this)),
		JSON.parse(JSON.stringify(this))
	);
}
