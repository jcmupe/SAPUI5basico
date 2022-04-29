/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"esjcmupesapui5/projectjc/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
