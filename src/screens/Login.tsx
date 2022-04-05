import React from "react";
import {
  Button,
  Center,
  HStack,
  Pressable,
  Spacer,
  Text,
  VStack,
} from "native-base";

import LogoConnect from "../assets/icons/LogoConnect";
import GoogleIcon from "../assets/icons/GoogleIcon";

import { NavigationStackProp } from "react-navigation-stack";
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

interface Props {
  navigation: NavigationStackProp<{}>;
}

export const Login = ({ navigation }: Props) => {
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
    <Center _light={{ bg: "white" }} px={4} flex={1}>
      <VStack mt={32}>
        <LogoConnect width={128} />
      </VStack>

      <Spacer />

      <Center w={"100%"} mb={16}>
        <VStack mx={4}>
          <Text
            color={"gray.500"}
            fontSize={"xl"}
            style={{ fontFamily: "Nunito_700Bold" }}
          >
            Sign In
          </Text>

          <Text
            color={"warmGray.400"}
            fontSize={"md"}
            mb={8}
            style={{ fontFamily: "Nunito_400Regular" }}
          >
            Entre com sua conta Google do{" "}
            <Text
              color={"warmGray.500"}
              fontSize={"md"}
              style={{ fontFamily: "Nunito_600SemiBold" }}
            >
              Inteli
            </Text>{" "}
            para acessar todas as Ferramentas e Plataformas de Trabalho.
          </Text>
        </VStack>

        <VStack w={"60%"}>
          <Button
            onPress={() => navigation.navigate("LoggedScreen")}
            bg={"white"}
            borderWidth={1}
            borderColor={"#8c76db"}
            color={"white"}
            fontWeight={"bold"}
            fontSize={"md"}
            mb={4}
          >
            <HStack alignItems={"center"}>
              <GoogleIcon color={"#8c76db"} />
              <Text
                fontSize={"md"}
                ml={2}
                color={"#8c76db"}
                style={{ fontFamily: "Nunito_600SemiBold" }}
              >
                Entrar com o Google
              </Text>
            </HStack>
          </Button>
        </VStack>
      </Center>

      <Spacer />

      <VStack alignItems={"center"} mb={4}>
        <Text
          color={"warmGray.400"}
          fontSize={"sm"}
          alignItems={"center"}
          style={{ fontFamily: "Nunito_400Regular" }}
        >
          2022 © Inteli - Instituto de Tecnologia e Liderança
        </Text>
      </VStack>
    </Center>
  );
};
