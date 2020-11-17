/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import showScreen from './src/screens/showScreen';
import addScreen from './src/screens/addScreen';
import deleteScreen from './src/screens/deleteScreen';
import loginScreen from './src/screens/loginScreen';
import registerScreen from './src/screens/registerScreen';
import combineReducers from './store/reducers/index';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const PrivateContainer = () => {
  return (
    <Tab.Navigator
      initialRoute="SHOW"
      tabBarOptions={{activeTintColor: '#deaf04'}}>
      <Tab.Screen
        name="SHOW"
        component={showScreen}
        options={{
          tabBarLabel: 'SHOW',
        }}
      />
      <Tab.Screen
        name="ADD"
        component={addScreen}
        options={{
          tabBarLabel: 'ADD',
        }}
      />
      <Tab.Screen
        name="DELETE"
        component={deleteScreen}
        options={{
          tabBarLabel: 'DELETE',
        }}
      />
    </Tab.Navigator>
  );
};
const store = createStore(combineReducers, applyMiddleware(ReduxThunk));
//console.log('Before', store.getState());
//store.dispatch(addCar('BMW', 'M3', 1));
//store.dispatch(addCar('BMW', 'M5', 2));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login_page">
            <Stack.Screen
              name="Login_page"
              component={loginScreen}
              options={{title: 'Login page', headerShown: false}}
            />
            <Stack.Screen
              name="Register_page"
              component={registerScreen}
              options={{title: 'Register page', headerShown: false}}
            />
            <Stack.Screen
              name="PrivatePage"
              component={PrivateContainer}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
