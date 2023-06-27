import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
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
import { motion } from "framer-motion";

export const NavBarCel = () => {
  const { push, pathname } = useRouter();

  const enlaceFound = Enlaces.find((e) => e.link == pathname);

  const [currentTab, SetCurrentTab] = useState(enlaceFound ?? Enlaces[0]);

  const handleMenu = (direction: number) => {
    const updateIndex = Mod(currentTab.id + direction - 1, Enlaces.length);

    SetCurrentTab(Enlaces[updateIndex]);
  };

  useEffect(() => {
    push(currentTab.link);
  }, [currentTab, push]);

  return (
    <Box display={["block", "none"]}>
      <Flex justifyContent={"space-around"} alignItems={"center"}>
        <AtSignIcon boxSize={"5"} color={"gray"} cursor={"pointer"} />
        <HStack spacing={12}>
          <ArrowBackIcon
            boxSize={"6"}
            onClick={() => handleMenu(-1)}
            cursor={"pointer"}
          />
          <Text fontSize={"2xl"}>{currentTab.title}</Text>
          <ArrowForwardIcon
            boxSize={"6"}
            onClick={() => handleMenu(+1)}
            cursor={"pointer"}
          />
        </HStack>
        <MoonIcon boxSize={"5"} color={"gray"} cursor={"pointer"} />
      </Flex>
    </Box>
  );
};
