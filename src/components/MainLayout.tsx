import React from "react";
import { NavBar } from "./NavBar";
import { Box, Flex } from "@chakra-ui/react";
import LPageTransition from "./LPageTransition";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FunctionComponent<Props> = ({ children }: Props) => {
  return (
    <Box h={"100vh"} w={"100vw"}>
      <NavBar />
      <Flex h={"90%"} w={"100%"}>
        <LPageTransition>{children}</LPageTransition>
      </Flex>
    </Box>
  );
};

export default MainLayout;
