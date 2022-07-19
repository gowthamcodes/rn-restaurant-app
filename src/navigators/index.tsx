import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { OrderScreen, CartScreen } from '../screens';
import routes from './routes';
import { Colors } from '../constants';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.PRIMARY,
    background: Colors.WHITE,
  },
};

const Navigators = () => {
  return (
    <>
      <StatusBar backgroundColor={Colors.PRIMARY} barStyle={'light-content'} />
      <NavigationContainer theme={appTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name={routes.Orders} component={OrderScreen} />
            <Stack.Screen name={routes.MyCart} component={CartScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigators;
