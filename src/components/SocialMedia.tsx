import { HStack, Icon } from "@chakra-ui/react";
import ResponsiveLayoutMobile from "./responsiveLayoutMobile";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import ResponsiveLayoutDesktop from "./responsiveLayoutDesk";

export const SocialMedia = () => {
  return (
    <>
      <ResponsiveLayoutMobile>
        <HStack gap={7} p={3} alignItems={["center", "flex-start"]}>
          <Icon as={AiFillGithub} boxSize={[6, 6]} />
          <Icon as={BsTwitter} boxSize={[6, 6]} />
        </HStack>
      </ResponsiveLayoutMobile>
      <ResponsiveLayoutDesktop>
        <HStack gap={7} p={3} alignItems={["center", "flex-start"]}>
          <Icon as={AiFillGithub} boxSize={[6, 6]} />
          <Icon as={BsTwitter} boxSize={[6, 6]} />
        </HStack>
      </ResponsiveLayoutDesktop>
    </>
  );
};
