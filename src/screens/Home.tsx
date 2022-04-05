import React from "react";
import {
  Center,
  VStack,
  Text,
  View,
  ScrollView,
  Heading,
  Box,
  Pressable,
  Image,
} from "native-base";
import { NavigationStackProp } from "react-navigation-stack";
import { InfoCard } from "../components/InfoCard";

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

import { sampleData, qrCode } from "../assets/sampleData";
import { AccessCard } from "../components/InfoCard";

export const Home = ({ navigation }: Props) => {
  const [data, setData] = React.useState(sampleData);

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
    <Center
      // _dark={{ bg: "blueGray.900" }}
      // _light={{ bg: "blueGray.50" }}
      _dark={{ bg: "blueGray.50" }}
      _light={{ bg: "#f9fafd" }}
      px={0}
      flex={1}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        w={"full"}
        mt={10}
        borderColor={"red.500"}
        mb={2}
        px={4}
      >
        <Text
          fontSize={"2xl"}
          style={{
            fontFamily: "Nunito_700Bold",
          }}
          my={4}
        >
          Portaria
        </Text>

        <Center>
          <AccessCard imageUrl={qrCode.imageUrl} />
        </Center>

        <Text
          fontSize={"2xl"}
          style={{
            fontFamily: "Nunito_700Bold",
          }}
          m={4}
        >
          Home
        </Text>

        <Center>
          {sampleData.map((cardData) => {
            <InfoCard
              key={cardData.id}
              qrCode={cardData.qrCode}
              main={cardData.main}
              title={cardData.title}
              imageUrl={cardData.imageUrl}
              tag={cardData.tag}
              tagColor={cardData.tagColor}
              body={cardData.body}
            />;
          })}

          <InfoCard
            key={sampleData[0].id}
            main={sampleData[0].main}
            title={sampleData[0].title}
            imageUrl={sampleData[0].imageUrl}
            tag={sampleData[0].tag}
            tagColor={sampleData[0].tagColor}
            body={sampleData[0].body}
          />
        </Center>
      </ScrollView>
    </Center>
  );
};
