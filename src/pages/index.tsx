import MainLayout from "@/components/MainLayout";
import {
  Flex,
  Stack,
  Image,
  VStack,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import { CopyIcon, DownloadIcon } from "@chakra-ui/icons";
import { SocialMedia } from "@/components/SocialMedia";

export default function Home() {
  return (
    <MainLayout>
      <Flex
        height={"100vh"}
        width={"100vw"}
        align={"center"}
        justify={"center"}
      >
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
            <Text
              width={["80%", "100%"]}
              fontSize={["5xl", "6xl"]}
              textAlign={"center"}
              as="b"
            >
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
              <Button colorScheme="gray" variant={"solid"} gap="13px">
                <DownloadIcon />
                Descargar CV
              </Button>
              <Button colorScheme="gray" variant="outline" gap={"13px"}>
                <CopyIcon />
                Contact me
              </Button>
            </Stack>
            <SocialMedia />
          </VStack>
        </Stack>
      </Flex>
    </MainLayout>
  );
}
