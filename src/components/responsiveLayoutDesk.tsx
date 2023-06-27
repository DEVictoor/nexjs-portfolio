import React from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const ResponsiveLayoutDesktop: React.FunctionComponent<Props> = ({
  children,
}: Props) => {
  return <Box display={["none", "block"]}>{children}</Box>;
};

export default ResponsiveLayoutDesktop;
