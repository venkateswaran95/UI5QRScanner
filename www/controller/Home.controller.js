sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	
	var that;

	return Controller.extend("QRCodeScanner.controller.Home", {
		onInit: function(){
			
		},
		onScanClick: function(){
			that=this;
			  cordova.plugins.barcodeScanner.scan(
				  function (result) {
				/*	  alert("We got a barcode\n" +
					  "Result: " + result.text + "\n" +
					  "Format: " + result.format + "\n" +
					  "Cancelled: " + result.cancelled);*/
					 that.getView().byId("result").setText(result.text);
					 that.getView().byId("format").setText(result.format);
					 sap.m.MessageToast.show("We got a barcode\n" +
					  "Result: " + result.text + "\n" +
					  "Format: " + result.format + "\n" +
					  "Cancelled: " + result.cancelled, {
									duration: 3000,                  // default
									width: "15em",                   // default
									my: "center bottom",             // default
									at: "center bottom",             // default
									of: window,                      // default
									offset: "0 0",                   // default
									collision: "fit fit",            // default
									onClose: null,                   // default
									autoClose: true,                 // default
									animationTimingFunction: "ease", // default
									animationDuration: 1000,         // default
									closeOnBrowserNavigation: true   // default
				});
				  },
				  function (error) {
				
					sap.m.MessageToast.show("Scanning Failed");
				  }
			  );
		}


	});
	
});