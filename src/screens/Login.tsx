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

interface Props {
  navigation: NavigationStackProp<{}>;
}

export const Login = ({ navigation }: Props) => {
  return (
    <Center _light={{ bg: "white" }} px={4} flex={1}>
      <VStack mt={32}>
        <LogoConnect />
      </VStack>

      <Spacer />

      <Center w={"100%"} mb={16}>
        <VStack>
          <Text color={"black"} fontWeight={"bold"} fontSize={"xl"}>
            Sign In
          </Text>

          <Text color={"warmGray.500"} fontSize={"md"} mb={8}>
            Entre com sua conta Google do{" "}
            <Text color={"warmGray.500"} fontSize={"md"} fontWeight={"bold"}>
              Inteli
            </Text>{" "}
            para acessar todas as Ferramentas e Plataformas de Trabalho.
          </Text>
        </VStack>

        <VStack w={"25%"}>
          <Button
            onPress={() => navigation.navigate("LoggedScreen")}
            bg={"white"}
            borderWidth={1}
            borderColor={"blue.500"}
            color={"white"}
            fontWeight={"bold"}
            fontSize={"md"}
            mb={4}
          >
            <HStack alignItems={"center"}>
              <GoogleIcon />
              <Text fontSize={"md"} ml={2} color={"blue.500"}>
                Entrar
              </Text>
            </HStack>
          </Button>
        </VStack>
      </Center>

      <Spacer />

      <VStack alignItems={"center"} mb={4}>
        <Text color={"warmGray.400"} fontSize={"sm"} alignItems={"center"}>
          2022 © Inteli - Instituto de Tecnologia e Liderança
        </Text>
      </VStack>
    </Center>
  );
};
