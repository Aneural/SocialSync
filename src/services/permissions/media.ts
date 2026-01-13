import { AccessibilityInfo, PermissionsAndroid, Platform } from "react-native";

async function requestAndroidMediaPermissions() {
    if(Platform.OS != 'android') return true;

    // Android 13+ (API 33+): permisos granulares
    if(Platform.Version >= 33) {
        const result = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
        );
        return result === PermissionsAndroid.RESULTS.GRANTED;
    }

    // Android 12 o menor
  const result = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
  );
  return result === PermissionsAndroid.RESULTS.GRANTED;

}