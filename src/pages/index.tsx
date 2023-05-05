import LPageTransition from "@/components/LPageTransition";
import { NavBar } from "@/components/NavBar";
import { Box } from "@chakra-ui/react";
import React from "react";

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

export default function Home(props: IndexPageProps, ref: IndexPageRef) {
  return (
    <Box padding={'15px'}>
      <Box>
        <NavBar />
      </Box>
      <LPageTransition ref={ref}>
        <h1>Home Page</h1>
      </LPageTransition>
    </Box>
  );
}
