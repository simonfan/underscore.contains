//     UnderscoreContains
//     (c) simonfan
//     UnderscoreContains is licensed under the MIT terms.

/**
 * AMD and CJS module.
 *
 * @module UnderscoreContains
 */

/* jshint ignore:start */
if (typeof define !== 'function') { var define = require('amdefine')(module) }
/* jshint ignore:end */

define(['underscore'], function (_) {

	function containsAll(container, contained) {
		return _.all(contained, function (val) {
			return _.contains(container, val);
		});
	}

	function containsAny(container, contained) {
		return _.any(contained, function (val) {
			return _.contains(container, val);
		});
	}

	_.mixin({
		containsAll: containsAll,
		containsAny: containsAny
	});

	return _;
});

