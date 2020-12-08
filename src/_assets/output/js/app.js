(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
	typeof define === 'function' && define.amd ? define(['jquery'], factory) :
	(global = global || self, factory(global.jquery));
}(this, (function (jquery) { 'use strict';

	jquery = jquery && Object.prototype.hasOwnProperty.call(jquery, 'default') ? jquery['default'] : jquery;

})));
