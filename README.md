# Android Camera Module

## Description

Titanium View with the background image sourced directly from the Android camera.

This module is not actively maintained. If you like using it and want to contribute that would be great, and very much appreciated. If you are looking for more features, check out [flashcam](https://github.com/RicardoJCP/flashcam) from Ricardo Pereira. Ricardo has cloned version 0.6.4 and will be adding methods for flash, torch, and possibly much more.

## Accessing the custom-android-camera Module

To access this module from JavaScript, you would do the following:

	var androidcamera = require("pw.custom.androidcamera");

The androidcamera variable is a reference to the Module object.

## Reference

The cameraview takes the same properties and methods as the standard titanium view.

### createCameraView _(method)_

Create a new instance of the camera view. The method takes a dictionary of the following arguments:

**arguments**

+ save_location (String) - Directory to save the image in. DEFAULT = "camera". CREATION ONLY.
+ useFrontCamera (Boolean) - Use the front camera or not. DEFAULT = false. CREATION ONLY.
+ autoFlash (Boolean) - USe the flash light if needed. DEFAULT = false. CREATION ONLY.
+ pictureTimeout (Integer) - Integer to indicate how long to wait (milliseconds) before restarting the preview after a picture has been taken. A negative number (or 0) will result in the preview not restarting. DEFAULT = 1000. CREATION ONLY.
+ resolutionNamed (Integer) - Resolution for the camera and preview. Use one of these [constants](#res_constants). Default is _RESOLUTION_HIGH_. CREATION ONLY.

### takePicture _(method)_

Capture the image currently on screen and save to the filesystem

### doFocus _(method)_

Focus view

### picture_taken _(event)_

Returns a dictionary containing the following:

+ path - location of the image on the filesystem

### onFocus _(event)_

When done focusing

### <a name="res_constants"></a>Resolution Constants

+ RESOLUTION_HIGH - Use the highest resolution available on the device
+ RESOLUTION_LOW - Use the lowest resolution available on the device
+ RESOLUTION_SCREEN - Try to match the views resolution for the picture
+ RESOLUTION_480 - Set the resolution to 720*480 (or as close as possible)
+ RESOLUTION_720 - Set the resolution to 1280*720 (or as close as possible)
+ RESOLUTION_1080 - Set the resolution to 1920*1080 (or as close as possible)

## Usage

The following permissions need to be added to the manifest tag in tiapp.xml

	<!-- Camera Permissions -->
    <uses-permission android:name="android.permission.CAMERA"/>
    <uses-feature android:name="android.hardware.camera"/>
    <uses-feature android:name="android.hardware.camera.autofocus"/>

Then, to use the module in app, do something like the following: <a href="example/app.js">Example</a>

## Changelog

Version 1.0.0:
Updated to support Ti SDK 7.0.0.GA at a minimum
Added: Touch to Focus
Added: autoFlash

Version 0.6.6:
Updated to support Ti SDK 6.0.1.GA at a minimum

Version 0.6.3:
Added the ability to change the desired resolution for the camera (and match it with the preview) when the view is created.

Version 0.6.1:
Added ability to restart preview after x number of milliseconds after a picture is taken.

Version 0.5:
Removed potential crash when the app is resumed while the camera view is open.
Added ability to pick camera when creating view (useFrontCamera).

## Author

Michael Browne
[Email](mailto:brownemt@gmail.com)
[@brownemint](http://www.twitter.com/brownemint)

## Notes

+ To switch between cameras, remove the current camera from the window, null it and recreate the camera view with the opposite useFrontCamera boolean and add it back to the window.
+ Don't forget to check out Jonathon Carter's [CameraView](https://github.com/jonathanrcarter/CameraView) for something similar for iOS
