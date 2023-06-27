import React from "react";
import { NavBar } from "./NavBar";
import { Box, Flex } from "@chakra-ui/react";
import LPageTransition from "./LPageTransition";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FunctionComponent<Props> = ({ children }: Props) => {
  return (
    <Box p={"4"} w={"100vw"} h={"100vh"}>
      <NavBar />
      <Flex h={"80%"} align={"center"} justify={"center"} position={"relative"}>
        <LPageTransition>{children}</LPageTransition>
      </Flex>
    </Box>
  );
};

export default MainLayout;
