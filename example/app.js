// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white',
	navBarHidden: false
});
var label = Ti.UI.createLabel();
win.add(label);
win.open();

// TODO: write your module tests here
var customandroidcamera = require('pw.custom.androidcamera');
Ti.API.info("module is => " + customandroidcamera);

label.text = customandroidcamera.example();

Ti.API.info("module exampleProp is => " + customandroidcamera.exampleProp);
customandroidcamera.exampleProp = "This is a test value";

label.addEventListener("click", function(){
	if (Ti.Platform.name == "android") {
		var proxy = customandroidcamera.createCameraView({height: 200, width: 200});

		proxy.printMessage("Hello world!");
		proxy.message = "Hi world!.  It's me again.";
		proxy.printMessage("Hello world!");
		win.add(proxy);
	}
});
