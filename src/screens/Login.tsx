import React from "react";
import { Button, Center, Pressable, Spacer, Text, VStack } from "native-base";
import LogoConnect from "../assets/icons/LogoConnect";
import GoogleIcon from "../assets/icons/GoogleIcon";

export const Login = ({ setIsLogged }: any) => {
  return (
    <Center _light={{ bg: "blueGray.50" }} px={4} flex={1}>
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

        <Button
          onPress={() => setIsLogged(true)}
          bg={"white"}
          borderWidth={1}
          borderColor={"blue.500"}
          color={"white"}
          fontWeight={"bold"}
          fontSize={"md"}
          mb={4}
        >
          <GoogleIcon />
          <Text fontSize={"md"} color={"blue.500"}>
            Entrar
          </Text>
        </Button>
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
