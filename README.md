# Install dependencies

```bash
npm install
```

## Appium

### Installation

1. Install WebdriverIO, used to convert tests into http request to appium:  
`npm install @wdio/cli --save-dev`

2. Initialize WebdriverIO configuration:
`npx wdio config`
   - On my local machine
   - Cucumber
   - No compiler
   - Spect Location: Default
   - Do you want WebDriverIO to generate some test files?: No
   - Reporter: Spec
   - No Plugin
   - Service: Appium
   - Base URL: Default
   - NPM Install: Yes

This will generate a `wdio.conf.js` file that is the base template for `wdio-<platform>.conf.j`, so you can delete it.

Also install appium server by continuing inside the appium installation.

3. Install appium driver dependencies for android and iOS:  
`appium driver install uiautomator2`
`appium driver install xcuitest`

4. Create a ADV emulator with android studio.
5. Create a iOS emulator with XCode

### Set config and write test

2. Edit `wdio-<plateform>.conf.js` with capabilities. Replace name and version with the good values.

Example for Android
``` typescript
...
capabilities: [{
   // capabilities for local Appium web tests on an Android Emulator
   platformName: 'Android',
   'appium:deviceName': 'Medium Phone API 35',
   'appium:platformVersion': '15',
   'appium:automationName': 'UiAutomator2',
   'appium:appPackage': 'com.orbitalizetest',
   'appium:appActivity': 'com.orbitalizetest.MainActivity',
   'appium:noReset': false,
}],
...
```

The steps for convert Gherkin to js tests are in `tests/appium_steps`.

It is important for the testID and accessibilityLabel to be set for appium to find the item, or Appium Inspector to naviguate in the app. The inspector is useful to see the hierarchy of the app.

![alt text](image.png)

## Playwright

`orbitalize-test-web` is an react app with the same structure than the react-native app. 

You need to install the dependencies `npm install`. You can then start the app using `npm start`.

The config of playwright is done inside `playwright.config.ts` and the one of cucumber in `cucumber.json`.

## Run the tests

### Android testing
You may need to export your path to the android SDK

```bash
export ANDROID_HOME=~/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools
```

Run the emulator using `npm run android` and execute `npm run test:android`.

### iOS testing
Run the emulator using `npm run ios` and execute `npm run test:ios`.

### Web testing
Run the web app by runing `npm start` inside the `orbitalize-test-web` folder.

Then, run `npm run test:web` in the root folder to run the tests.