import React from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const ResponsiveLayoutMobile: React.FunctionComponent<Props> = ({
  children,
}: Props) => {
  return <Box display={["block", "none"]}>{children}</Box>;
};

export default ResponsiveLayoutMobile;
