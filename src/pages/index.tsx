import MainLayout from "@/components/MainLayout";
import { Flex, Stack, Image, VStack, Text, Button } from "@chakra-ui/react";
import { CopyIcon, DownloadIcon } from "@chakra-ui/icons";
import { SocialMedia } from "@/components/SocialMedia";

export default function Home() {
  return (
    <MainLayout>
      <Stack
        direction={["column", "column", "column", "row", "row"]}
        alignContent={"center"}
        justifyContent={"center"}
        spacing={[30, 30, 30, 39, 37]}
      >
        <Flex align={"center"} justify="center">
          <Image
            borderRadius={"full"}
            objectFit="cover"
            boxSize={["202px", "320px"]}
            src="/perfil.jpg"
            alt="Victor Mireles"
          />
        </Flex>
        <VStack gap={2} align={["center", "center", "center", "flex-start"]}>
          <Text fontSize={["5xl", "6xl"]} textAlign={"center"} as="b">
            I&apos;m Victor Mireles
          </Text>
          <Text textAlign={"center"} fontSize={["3xl", "4xl"]}>
            Back-end developer
          </Text>
          <Stack
            p={3}
            direction={["column", "row"]}
            gap={2}
            alignItems={["center", "flex-start"]}
          >
            <Button bg={"black"} variant="solid" color={"white"} gap="13px">
              <DownloadIcon />
              Curriculum
            </Button>
            <Button colorScheme="black" variant="outline" gap={"13px"}>
              <CopyIcon />
              Contact me
            </Button>
          </Stack>
          <SocialMedia />
        </VStack>
      </Stack>
    </MainLayout>
  );
}
