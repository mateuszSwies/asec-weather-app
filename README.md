# Welcome to SkySpy 👋

ASEC Sky Spy is a weather search application that allows users to search for a city and check the current weather conditions. Users can also add their favorite cities to a favorites list for quick access.

## Security Notice

Please note that exposing API keys in the .env file is against security best practices. However, for the purposes of this project and to ensure the application is functional, the API keys are included.

## Important info

The application was developed on android and I am not sure if and how it can work on iOS - please take this into consideration when using it.

**Due to limitations in the number of queries to the API, I decided not to display a dynamic list of hints about the searched cities as the letters are typed. Otherwise, I would have used the debounce technique and automatic search**

## Get started

1. Install dependencies

```bash
   npm install
```

2. Run the app

- Start the app:

```bash
    npm run start
```

- Start the application on Android:

```bash
    npm run android
```

- Start the application on Web:

```bash
    npm run web
```

- You can also check it on iOS (read the [description above](#important-info))

```bash
    npm run ios
```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

3. Testing

Tests are created for two components (Loader and CityWeatherCard)

- Run the tests using Jest:

```bash
npm run test
```

## Technologies Used

The application is built using the following technologies and libraries:

- Expo - A framework and a platform for universal React applications.
- React - A JavaScript library for building user interfaces.
- React Native - A framework for building native apps using React.
- TypeScript - A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- Axios - A promise-based HTTP client for making requests.
- React Query - A data-fetching library for React.
- Zustand - A small, fast, and scalable state-management solution.
- Jest - A delightful JavaScript testing framework.
- React Native Paper - A high-quality, standard-compliant Material Design library that has you covered in all major use cases.

Expo Libraries

- expo-font
- expo-splash-screen
- expo-status-bar
- @expo/vector-icons

React Native Libraries

- react-native-async-storage/async-storage
- react-native-gesture-handler
- react-native-reanimated
- react-native-safe-area-context
- react-native-screens
- react-native-svg
- react-native-svg-transformer
- react-native-toast-message
