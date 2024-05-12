import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import React, {useCallback, useRef} from 'react';
import 'react-native-gesture-handler';
import Auth from './src/navigation/Auth';

const App = () => {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef();

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

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={handleReady}
      onStateChange={handleStateChange}>
      {/* App stacks / screens */}
      <Auth />
    </NavigationContainer>
  );
};

export default App;
