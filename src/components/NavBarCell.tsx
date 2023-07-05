import {
  Box,
  Button,
  Flex,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Enlaces } from "@/data/links";
import { useEffect, useState } from "react";
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  AtSignIcon,
  MoonIcon,
} from "@chakra-ui/icons";
import { Mod } from "@/helpers/Mod";
import { useRouter } from "next/router";

export const NavBarCel = () => {
  const { push, pathname } = useRouter();

  const enlaceFound = Enlaces.find((e) => e.link == pathname);

  const color = useColorModeValue("white", "gray.800");

  const [currentTab, SetCurrentTab] = useState(enlaceFound ?? Enlaces[0]);

  const handleMenu = (direction: number) => {
    const updateIndex = Mod(currentTab.id + direction - 1, Enlaces.length);

    SetCurrentTab(Enlaces[updateIndex]);
  };

  useEffect(() => {
    push(currentTab.link);
  }, [currentTab]);

  return (
    <Box
      display={["block", "none"]}
      position={"fixed"}
      width={"100%"}
      top={"0"}
      backgroundColor={color}
      zIndex={"100"}
    >
      <Flex justifyContent={"space-around"} alignItems={"center"}>
        <AtSignIcon boxSize={"5"} color={"gray"} cursor={"pointer"} />
        <HStack spacing={12}>
          <Box onClick={() => handleMenu(-1)} cursor={"pointer"}>
            <ArrowBackIcon boxSize={"6"} />
          </Box>
          <Text fontSize={"2xl"}>{currentTab.title}</Text>
          <Box onClick={() => handleMenu(+1)} cursor={"pointer"}>
            <ArrowForwardIcon boxSize={"6"} />
          </Box>
        </HStack>
        <MoonIcon boxSize={"5"} color={"gray"} cursor={"pointer"} />
      </Flex>
    </Box>
  );
};
