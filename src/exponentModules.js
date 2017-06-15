module.exports = [
  {
    Accelerometer: [
      { setUpdateInterval: 'function' },
      { addListener: 'function' },
      { removeListeners: 'function' },
    ],
  },
  {
    Amplitude: [
      { initialize: 'function' },
      { setUserId: 'function' },
      { setUserProperties: 'function' },
      { clearUserProperties: 'function' },
      { logEvent: 'function' },
      { logEventWithProperties: 'function' },
      { setGroup: 'function' },
    ],
  },
  { AppLoadingManager: [{ finishedAsync: 'function' }] },
  {
    Audio: [
      { setIsEnabled: 'function' },
      { setAudioMode: 'function' },
      { load: 'function' },
      { play: 'function' },
      { pause: 'function' },
      { stop: 'function' },
      { unload: 'function' },
      { setPosition: 'function' },
      { setRate: 'function' },
      { setVolume: 'function' },
      { setIsMuted: 'function' },
      { setIsLooping: 'function' },
      { getStatus: 'function' },
      { setPlaybackFinishedCallback: 'function' },
      { prepareToRecord: 'function' },
      { startRecording: 'function' },
      { pauseRecording: 'function' },
      { stopRecording: 'function' },
      { getRecordingStatus: 'function' },
      { unloadRecorder: 'function' },
    ],
  },
  {
    BarCodeScannerManager: [
      { BarCodeType: 'object' },
      { Type: 'object' },
      { TorchMode: 'object' },
    ],
  },
  { BlurViewManager: [] },
  {
    Constants: [
      { isDevice: 'boolean' },
      { linkingUri: 'string' },
      { deviceId: 'string' },
      { expoVersion: 'string' },
      { manifest: 'object' },
      { deviceName: 'string' },
      { platform: 'object' },
      { statusBarHeight: 'number' },
      { sessionId: 'string' },
      { systemFonts: 'object' },
      { deviceYearClass: 'number' },
      { appOwnership: 'string' },
    ],
  },
  { Contacts: [{ getContactsAsync: 'function' }] },
  { DocumentPicker: [{ getDocumentAsync: 'function' }] },
  { ErrorRecovery: [{ setRecoveryProps: 'function' }] },
  { Facebook: [{ logInWithReadPermissionsAsync: 'function' }] },
  {
    FileSystem: [
      { downloadAsync: 'function' },
      { getInfoAsync: 'function' },
      { deleteAsync: 'function' },
    ],
  },
  {
    Fingerprint: [
      { hasHardwareAsync: 'function' },
      { isEnrolledAsync: 'function' },
      { authenticateAsync: 'function' },
    ],
  },
  { FontLoader: [{ loadAsync: 'function' }] },
  { GLViewManager: [] },
  { Google: [{ logInAsync: 'function' }] },
  {
    Gyroscope: [
      { setUpdateInterval: 'function' },
      { addListener: 'function' },
      { removeListeners: 'function' },
    ],
  },
  {
    ImagePicker: [
      { launchCameraAsync: 'function' },
      { launchImageLibraryAsync: 'function' },
    ],
  },
  { KeepAwake: [{ activate: 'function' }, { deactivate: 'function' }] },
  {
    LegacyAsyncLocalStorage: [
      { multiGet: 'function' },
      { getAllKeys: 'function' },
      { isMigrationDone: 'function' },
      { setMigrationDone: 'function' },
    ],
  },
  { LinearGradientManager: [] },
  {
    Location: [
      { getCurrentPositionAsync: 'function' },
      { watchPositionImplAsync: 'function' },
      { removeWatchAsync: 'function' },
      { addListener: 'function' },
      { removeListeners: 'function' },
    ],
  },
  {
    Notifications: [
      { presentLocalNotification: 'function' },
      { getExponentPushTokenAsync: 'function' },
      { scheduleLocalNotification: 'function' },
      { cancelScheduledNotification: 'function' },
      { cancelAllScheduledNotifications: 'function' },
      { getBadgeNumberAsync: 'function' },
      { setBadgeNumberAsync: 'function' },
    ],
  },
  { Permissions: [{ getAsync: 'function' }, { askAsync: 'function' }] },
  { SQLite: [{ exec: 'function' }] },
  { Scope: [] },
  {
    Segment: [
      { initializeIOS: 'function' },
      { initializeAndroid: 'function' },
      { identify: 'function' },
      { identifyWithTraits: 'function' },
      { track: 'function' },
      { trackWithProperties: 'function' },
      { flush: 'function' },
    ],
  },
  {
    Util: [
      { reload: 'function' },
      { getCurrentLocaleAsync: 'function' },
    ],
  },
  {
    VideoManager: [
      { ScaleToFill: 'string' },
      { ScaleAspectFill: 'string' },
      { ScaleAspectFit: 'string' },
      { ScaleNone: 'string' },
    ],
  },
  {
    WebBrowser: [
      { dismissBrowser: 'function' },
      { openBrowserAsync: 'function' },
    ],
  },
];
