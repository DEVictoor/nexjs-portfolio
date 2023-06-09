import {
  Box,
  Button,
  Flex,
  HStack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Enlaces } from "@/data/links";
import { useEffect, useState } from "react";
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  AtSignIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import { Mod } from "@/helpers/Mod";
import { useRouter } from "next/router";

export const NavBarCel = () => {
  const { push, pathname } = useRouter();

  const enlaceFound = Enlaces.find((e) => e.link == pathname);

  const color = useColorModeValue("white", "gray.800");

  const { colorMode, toggleColorMode } = useColorMode();

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
      display={["box", "none"]}
      position={"fixed"}
      left={"0"}
      top={"0"}
      width={"100vw"}
      backgroundColor={color}
      padding={"2"}
      zIndex={"100"}
    >
      <Flex justify={"center"} align={"center"} justifyContent={"space-evenly"}>
        {/*  Avatar Icon */}
        <AtSignIcon boxSize={"5"} color={"gray"} cursor={"pointer"} />

        {/* Menu */}
        <HStack spacing={12}>
          <Box onClick={() => handleMenu(-1)} cursor={"pointer"}>
            <ArrowBackIcon boxSize={"6"} />
          </Box>
          <Text fontSize={"2xl"}>{currentTab.title}</Text>
          <Box onClick={() => handleMenu(+1)} cursor={"pointer"}>
            <ArrowForwardIcon boxSize={"6"} />
          </Box>
        </HStack>

        {/* Icon dark */}
        <Box>
          {colorMode == "light" ? (
            <MoonIcon
              onClick={toggleColorMode}
              boxSize={"5"}
              color={"gray"}
              cursor={"pointer"}
              alignSelf={"center"}
            />
          ) : (
            <SunIcon
              onClick={toggleColorMode}
              boxSize={"5"}
              color={"gray"}
              cursor={"pointer"}
              alignSelf={"center"}
            />
          )}
        </Box>
      </Flex>
    </Box>
  );
};
