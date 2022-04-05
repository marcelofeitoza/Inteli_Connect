import React from "react";
import { Pressable, Box, VStack, Image, Text, Center } from "native-base";

interface CardDataProps {
  id: string;
  main?: boolean;
  title: string;
  imageUrl: string;
  tag?: string;
  tagColor?: string;
  body: string;
}

export const InfoCard = ({
  id,
  main,
  title,
  imageUrl,
  tag,
  tagColor,
  body,
}: CardDataProps) => {
  return (
    <Pressable>
      <Box backgroundColor={"white"} borderRadius={8} w={"full"}>
        <VStack w={"100%"} pt={2} px={2}>
          <Center>
            <Image
              alt={`Image of ${title}`}
              source={{ uri: imageUrl }}
              width={400}
              height={250}
              resizeMode={"contain"}
            />
          </Center>
        </VStack>
        <VStack m={4}>
          <Text
            fontSize={"xl"}
            style={{
              fontFamily: "Nunito_700Bold",
            }}
          >
            {title}
          </Text>

          <VStack
            borderRadius={8}
            p={2}
            my={2}
            backgroundColor={tagColor}
            maxW={100}
          >
            <Text color={"white"} fontSize={"md"}>
              {tag}
            </Text>
          </VStack>

          <Text
            fontSize={"md"}
            color={"gray.600"}
            style={{
              fontFamily: "Nunito_400Regular",
            }}
          >
            {body}
          </Text>
        </VStack>
      </Box>
    </Pressable>
  );
};

export const AccessCard = ({ imageUrl }: CardDataProps) => {
  return (
    <Box backgroundColor={"white"} borderRadius={8} w={"full"} mb={4}>
      <Center>
        <VStack m={4}>
          <Text
            fontSize={"xl"}
            textAlign={"center"}
            style={{
              fontFamily: "Nunito_700Bold",
            }}
          >
            LIBERAÇÃO DE ACESSO
          </Text>
          <Text
            fontSize={"md"}
            textAlign={"center"}
            color={"gray.500"}
            style={{
              fontFamily: "Nunito_400Regular",
            }}
          >
            Escaneie o QR-Code abaixo para liberar seu acesso pelas catracas.
          </Text>
        </VStack>

        <VStack w={"100%"}>
          <Center>
            <Image
              alt={`Your qr code for entering`}
              source={{ uri: imageUrl }}
              width={400}
              height={250}
              resizeMode={"contain"}
            />
          </Center>
        </VStack>

        <VStack m={4}>
          <Text
            fontSize={"sm"}
            color={"red.500"}
            style={{
              fontFamily: "Nunito_400Regular",
            }}
          >
            Não compartilhe este QR-Code. Ele é pessoal e intransferível.
          </Text>
        </VStack>
      </Center>
    </Box>
  );
};
