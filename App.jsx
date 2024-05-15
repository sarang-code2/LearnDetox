import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import React, {useCallback, useRef} from 'react';
import {Text, View} from 'react-native';
import 'react-native-gesture-handler';
import Auth from './src/navigation/Auth';
import useAuthCheck from './src/hooks/useAuthCheck';

const App = () => {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef();
  const authChecked = useAuthCheck();

  const handleStateChange = useCallback(async () => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef?.getCurrentRoute()?.name;

    // if DEV show navigation screens
    if (__DEV__) {
      console.info(
        '[navigation]',
        `${previousRouteName} -> ${currentRouteName}`,
      );
    }

    if (previousRouteName !== currentRouteName) {
      routeNameRef.current = currentRouteName;
    }
  }, [routeNameRef, navigationRef]);

  const handleReady = useCallback(() => {
    routeNameRef.current = navigationRef?.getCurrentRoute()?.name;
  }, [routeNameRef, navigationRef]);

  return authChecked ? (
    <NavigationContainer
      ref={navigationRef}
      onReady={handleReady}
      onStateChange={handleStateChange}>
      {/* App stacks / screens */}
      <Auth />
    </NavigationContainer>
  ) : (
    <View>
      <Text>Loading...</Text>
    </View>
  );
};

export default App;
