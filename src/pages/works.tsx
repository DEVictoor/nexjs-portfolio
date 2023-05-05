import LPageTransition from "@/components/LPageTransition";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

export default function Works(props: IndexPageProps, ref: IndexPageRef) {
  return (
    <LPageTransition>
      <Box padding={'15px'}>
        <LPageTransition ref={ref}>
          <Text>Work Page</Text>
        </LPageTransition>
      </Box>
    </LPageTransition>
  );
}
