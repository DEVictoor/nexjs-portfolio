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
  Link,
  useToast,
} from "@chakra-ui/react";
import { CopyIcon, DownloadIcon } from "@chakra-ui/icons";
import { SocialMedia } from "@/components/SocialMedia";

export default function Home() {
  const color = useColorModeValue("gray.800", "teal");
  const toast = useToast();
  const { colorMode } = useColorMode();

  const copyLink = (e: any) => {
    navigator.clipboard.writeText("devictormireles@gmail.com");
    toast({
      title: "Correo copiado",
      description: "Revisa tu clipboard",
      status: "success",
      duration: 2000,
      isClosable: false,
    });
  };

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
          spacing={[30, 30, 30, 39, "28"]}
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
          <VStack
            spacing={3}
            align={["center", "center", "center", "flex-start"]}
          >
            <Text
              width={["80%", "100%"]}
              fontSize={["5xl", "6xl"]}
              textAlign={"center"}
              as="b"
            >
              I&apos;m Victor Mireles
            </Text>
            <Text textAlign={"center"} fontSize={["3xl", "4xl"]}>
              Backend developer
            </Text>
            <Stack
              direction={["column", "row"]}
              paddingTop={"5"}
              gap={2}
              alignItems={["center", "flex-start"]}
            >
              <Link href="https://drive.google.com/uc?id=1VGDNAXwumQrCYlc5coplrFGmQUCLaMKc&export=download">
                {colorMode === "dark" ? (
                  <Button colorScheme={color} variant={"solid"} gap="13px">
                    <DownloadIcon />
                    Descargar CV
                  </Button>
                ) : (
                  <Button
                    bg={color}
                    color={"white"}
                    variant={"solid"}
                    gap="13px"
                    _hover={{
                      bg: "gray.700",
                      color: "white.500",
                    }}
                  >
                    <DownloadIcon />
                    Descargar CV
                  </Button>
                )}
              </Link>
              <Button
                colorScheme={color}
                variant="outline"
                gap="13px"
                onClick={copyLink}
              >
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
