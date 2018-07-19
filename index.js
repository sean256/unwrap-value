// Yup, that's it. GENIUS! MUCH WOW.
module.exports = function(c) {
	try {
		return c();
	} catch (e) {
		return undefined;
	}
}
