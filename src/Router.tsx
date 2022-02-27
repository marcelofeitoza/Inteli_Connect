import React from "react";
import * as Icons from "react-native-feather";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Login } from "./screens/Login";
//import { LoggedScreen } from "./screens/LoggedScreen";

import { NavigationContainer } from "@react-navigation/native";
import { Attendance } from "./screens/Attendance";
import { News } from "./screens/News";
import { Profile } from "./screens/Profile";
import { Tools } from "./screens/Tools";
import { Home } from "./screens/Home";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoggedScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LoggedScreen" component={BottomTabRouter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const BottomTabRouter = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: { height: 60 },
        tabBarItemStyle: { marginVertical: 5 },
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
  );
};
