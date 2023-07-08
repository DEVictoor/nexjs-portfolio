import {
  Box,
  ButtonGroup,
  Flex,
  HStack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Enlaces, ITab } from "@/data/links";
import { useRouter } from "next/router";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const NavBarDesk = () => {
  const { push, pathname } = useRouter();

  const enlaceFound = Enlaces.find((e) => e.link == pathname);

  const color = useColorModeValue("white", "gray.800");

  const { colorMode, toggleColorMode } = useColorMode();

  const handleMenu = (link: string) => {
    push(link);
  };

  return (
    <Box
      display={["none", "block"]}
      position={"fixed"}
      width={"100%"}
      top={0}
      paddingY={3}
      left={0}
      backgroundColor={color}
      zIndex={"100"}
    >
      <Flex justifyContent={"center"}>
        <HStack spacing={12} borderRadius={"20"} boxShadow={"2xl"}>
          <ButtonGroup alignItems={"center"}>
            {Enlaces.map((e: ITab, i) =>
              e.id == enlaceFound?.id ? (
                <Text
                  padding={5}
                  key={i}
                  fontSize={["", "2xl", "3xl"]}
                  cursor={"pointer"}
                  onClick={() => handleMenu(e.link)}
                  color={
                    colorMode == "light" ? "blackAlpha.900" : "whiteAlpha.900"
                  }
                >
                  {e.title}
                </Text>
              ) : (
                <Text
                  padding={5}
                  key={i}
                  fontSize={["", "2xl", "3xl"]}
                  cursor={"pointer"}
                  onClick={() => handleMenu(e.link)}
                  color={
                    colorMode == "light" ? "blackAlpha.700" : "whiteAlpha.500"
                  }
                >
                  {e.title}
                </Text>
              )
            )}
            <Box padding={5}>
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
          </ButtonGroup>
        </HStack>
      </Flex>
    </Box>
  );
};
