import React from "react";
import { Center, VStack, Text, View } from "native-base";

 

export const Attendance = () => {
  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Text>Attendance</Text>
      </VStack>
    </Center>
  );
};
