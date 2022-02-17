import React from "react";
import { Center, VStack, Text, View, Button } from "native-base";

export const Profile = () => {
  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Text>Profile</Text>
        <Button onPress={() =>console.log('123')}>
          <Text>Logout</Text>
        </Button>
      </VStack>
    </Center>
  );
};
