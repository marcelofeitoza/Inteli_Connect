import React from "react";

import * as Icons from "react-native-feather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "./screens/Home";
import { Profile } from "./screens/Profile";
import { News } from "./screens/News";
import { Tools } from "./screens/Tools";
import { Attendance } from "./screens/Attendance";

import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tab.Screen
          name="Atendimento"
          component={Attendance}
          options={{
            tabBarIcon: ({ color }) => <Icons.HelpCircle color={color} />,
          }}
        />
        <Tab.Screen
          name="Notícias"
          component={News}
          options={{
            tabBarIcon: ({ color }) => <Icons.List color={color} />,
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => <Icons.Home color={color} />,
          }}
        />
        <Tab.Screen
          name="Ferramentas"
          component={Tools}
          options={{
            tabBarIcon: ({ color }) => <Icons.Tool color={color} />,
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => <Icons.User color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
