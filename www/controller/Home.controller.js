sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("QRCodeScanner.controller.Home", {
		onInit: function(){
			
		},
		onScanClick: function(){
			  cordova.plugins.barcodeScanner.scan(
				  function (result) {
					  alert("We got a barcode\n" +
					  "Result: " + result.text + "\n" +
					  "Format: " + result.format + "\n" +
					  "Cancelled: " + result.cancelled);
				  },
				  function (error) {
					alert("Scanning failed: " + error);
				  }
			  );
		}


	});
	
});