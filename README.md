# Android Camera Module

## Description

Titanium View with the background image sourced directly from the Android camera.

## Accessing the custom-android-camera Module

To access this module from JavaScript, you would do the following:

	var androidcamera = require("pw.custom.androidcamera");

The androidcamera variable is a reference to the Module object.	

## Reference

The cameraview takes the same properties and methods as the standard titanium view.

### createCameraView _(method)_

Create a new instance of the camera view. The method takes a dictionary of the following arguments: 

**arguments** 
 
+ save_location - DIrectory to save the image to

### takePicture _(method)_

Capture the image currently on screen and save to the filesystem

### picture_taken _(event)_

Returns a dictionary containing the following:

+ path - location of the image on the filesystem

## Usage

The following permissions need to be added to the manifest tag in tiapp.xml

	<!-- Camera Permissions -->
    <uses-permission android:name="android.permission.CAMERA"/>
    <uses-feature android:name="android.hardware.camera"/>
    <uses-feature android:name="android.hardware.camera.autofocus"/>

Then, to use the module in app, do something like the following:
	
	var win = Ti.UI.createWindow({
		navBarHidden: true,
		fullscreen: true,
		backgroundColor:'white'
	});
	win.orientationModes = [Ti.UI.PORTRAIT];
	win.open();
	
	if( Ti.Media.isCameraSupported ) {
		var androidcamera = require("pw.custom.androidcamera");
		var camera = androidcamera.createCameraView({save_location: "pharmacy"});
		
		var btSnap = Ti.UI.createButton({
			title: "Capture",
			bottom: "10dp",
			height: "80dp",
			width: "80dp",
			zIndex: 2
		});
	
		btSnap.addEventListener("click", function(){
			camera.snapPicture();
		});
	
		camera.addEventListener("picture_taken", function(evt){
			alert("Image saved to "+evt.path);
		});
	
		win.addEventListener("close", function(){
			camera = null;
		});
	
		win.add(camera);
		win.add(btSnap);
	} else {
		alert("No camera found!");
	}

## Author

Michael Browne

[@brownemint](http://www.twitter.com/brownemint)

## Notes

+ Currently the image quality is set to its lowest value. An update to dynamically change this is imminent.
+ Don't forget to check out Jonathon Carter's [CameraView](https://github.com/jonathanrcarter/CameraView) for something similar for iOS