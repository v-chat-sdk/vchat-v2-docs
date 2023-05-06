---
sidebar_position: 5
id: flutter_bugs
title: Flutter bugs
---

### some bugs may face you

#### libc++_shared.so

if your project use one of this packages
`flutter_ffmpeg`: A package for adding FFmpeg support to Flutter apps.
`flutter_vlc_player`: A package for adding VLC player support to Flutter apps.
`flutter_opencv`: A package for adding OpenCV support to Flutter apps.

- and you face this bug while you try to run the app

```
* What went wrong:
Execution failed for task ':app:mergeDevelopmentDebugNativeLibs'.
> A failure occurred while executing com.android.build.gradle.internal.tasks.MergeNativeLibsTask$MergeNativeLibsTaskWorkAction
   > 2 files found with path 'lib/arm64-v8a/libc++_shared.so' from inputs:
      - /Users/rahman/.gradle/caches/transforms-3/a46e50a5c858fbf9fa136cba41fb846a/transformed/jetified-libvlc-all-3.6.0-eap2/jni/arm64-v8a/libc++_shared.so
      - /Users/rahman/.gradle/caches/transforms-3/ca694aba195835fea687f519a60e6fb7/transformed/jetified-ffmpeg-kit-min-gpl-5.1.LTS/jni/arm64-v8a/libc++_shared.so
     If you are using jniLibs and CMake IMPORTED targets, see
     https://developer.android.com/r/tools/jniLibs-vs-imported-targets
```

- then the solution is


- The error you're encountering occurs when there are duplicate native libraries with the same name in your Android project. In this case, both `libvlc-all-3.6.0-eap2` and `ffmpeg-kit-min-gpl-5.1.LTS` have a file named `libc++_shared.so`.

- To resolve this issue, you can use the `packagingOptions` block in your `build.gradle` (app level) file to pick one of the libraries and exclude the other. Follow these steps:

1. Open your `build.gradle` file in the `app` module.

2. Inside the `android` block, add a `packagingOptions` block as follows:

```groovy
android {
    // ...

    packagingOptions {
        pickFirst '**/libc++_shared.so'
    }

    // ...
}
```

- Save the file and try building your project again.

The `packagingOptions` block with `pickFirst` will ensure that the build process uses the first occurrence of `libc++_shared.so` it encounters and ignores the others. This should resolve the conflict and allow you to build your project successfully.


#### any package conflict happens

- when your try to run `flutter pub get` after you add the required flutter packages and see packages `conflict`
- you need to update your package to the last version `suppose` you have conflict with `image` package and
  run `flutter pub upgrade`
- and your image package inside your pub.yaml is lower then `version 3` and it in v chat is v `^4.0.15`
- then you need to update your `image` package to v `^4.0.15` or above
- and if you cant update at this moment witch not recommend you can
  use  [dependency override](https://dart.dev/tools/pub/dependencies) like

``` yaml
name: my_app
dependencies:
  your_pacakge: ^1.2.0
dependency_overrides:
  your_pacakge: '3.2.1'
  ```