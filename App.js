import React, {useCallback} from 'react';
import {Provider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

import store from './src/store/store';
import StackNavigator from './src/navigation/StackNavigator';

const App = () => {
  const [fontsLoaded] = useFonts({
    'DMSans-Regular': require('./src/assets/fonts/DMSans-Regular.ttf'),
    'DMSans-Medium': require('./src/assets/fonts/DMSans-Medium.ttf'),
    'DMSans-Bold': require('./src/assets/fonts/DMSans-Bold.ttf'),
    'Inter-Medium': require('./src/assets/fonts/Inter-Medium.ttf'),
    'Inter-SemiBold': require('./src/assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Bold': require('./src/assets/fonts/Inter-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <Provider store={store}>
        <StackNavigator />
        <FlashMessage position="top" />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
