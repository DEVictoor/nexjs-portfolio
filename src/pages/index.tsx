import MainLayout from "@/components/MainLayout";
import {
  Flex,
  Stack,
  Image,
  VStack,
  Text,
  Button,
  Box,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { CopyIcon, DownloadIcon } from "@chakra-ui/icons";
import { SocialMedia } from "@/components/SocialMedia";

export default function Home() {
  const color = useColorModeValue("gray.800", "teal");
  const { colorMode } = useColorMode();

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
          spacing={[30, 30, 30, 39, 50]}
        >
          <Flex align={"center"} justify="center">
            <Image
              borderRadius={"full"}
              objectFit="cover"
              boxSize={["180px", "320px"]}
              src="/perfil.jpg"
              alt="Victor Mireles"
            />
          </Flex>
          <VStack gap={3} align={["center", "center", "center", "flex-start"]}>
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
              direction={["column", "row"]}
              gap={2}
              alignItems={["center", "flex-start"]}
            >
              {colorMode === "dark" ? (
                <Button colorScheme={color} variant={"solid"} gap="13px">
                  <DownloadIcon />
                  Descargar CV
                </Button>
              ) : (
                <Button bg={color} color={"white"} variant={"solid"} gap="13px">
                  <DownloadIcon />
                  Descargar CV
                </Button>
              )}
              <Button colorScheme={color} variant="outline" gap="13px">
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
