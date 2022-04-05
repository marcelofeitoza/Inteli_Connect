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

import AppLoading from "expo-app-loading";
import {
  useFonts,
  Nunito_200ExtraLight,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
} from "@expo-google-fonts/nunito";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

interface Props {
  isLogged: boolean;
}

export const Router = ({ isLogged }: Props) => {
  let [fontsLoaded] = useFonts({
    Nunito_200ExtraLight,
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLogged ? "LoggedScreen" : "Login"}
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
  let [fontsLoaded] = useFonts({
    Nunito_200ExtraLight,
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: { height: 60 },
        tabBarItemStyle: { marginVertical: 5 },
        tabBarActiveTintColor: "#8c76db",
        tabBarLabelStyle: {
          fontFamily: "Nunito_600SemiBold",
          fontSize: 12,
        },
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
