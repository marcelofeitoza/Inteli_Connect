import React from "react";
import { Center, VStack, Text, View, ScrollView } from "native-base";

export const Home = () => {
  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
    >
      <VStack>
        <Text>Home</Text>
      </VStack>
    </Center>
  );
};
