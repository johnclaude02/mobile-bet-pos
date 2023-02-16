import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ExampleContainer, LoginContainer, RegisterContainer } from '@/Containers';

const Tab = createBottomTabNavigator();

// @refresh reset
function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={ExampleContainer}
        options={{
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon',
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginContainer}
        options={{
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon',
        }}
      />
      <Tab.Screen
        name="Register"
        component={RegisterContainer}
        options={{
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon',
        }}
      />
    </Tab.Navigator>
  );
}

export default MainNavigator;
