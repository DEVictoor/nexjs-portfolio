import MainLayout from "@/components/MainLayout";
import React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { TfiGallery } from "react-icons/tfi";
import { works } from "@/data/works";

export default function Projects() {
  return (
    <MainLayout>
      <Flex justify={"center"}>
        <VStack
          spacing={"10"}
          w={["80%", "50%"]}
          position={"relative"}
          top={["16", "32"]}
        >
          {works.map((e, i) => (
            <VStack key={i} width={"100%"} spacing={3}>
              <VStack width={"100%"} spacing={[3, 2]} align={"start"}>
                {/* Titulo */}
                <Text fontSize={"3xl"} as={"b"}>
                  {e.title}
                </Text>
                <HStack spacing={"4"}>
                  <Link href={e.repo} isExternal>
                    <Button leftIcon={<AiFillGithub />}>Repositorio</Button>
                  </Link>
                  <Link href={e.repo} isExternal>
                    <Button variant={"outline"}>
                      <BiLinkExternal />
                    </Button>
                  </Link>
                  <Button variant={"outline"}>
                    <TfiGallery />
                  </Button>
                </HStack>
              </VStack>

              {/* Descripcion */}
              <Text fontSize={"1xl"} textAlign={"justify"} width={"100%"}>
                {e.descripcion}
              </Text>

              {/* Techs frontend  */}
              <Flex gap={"3"} width={"100%"}>
                <Text as={"b"}>Frontend:</Text>
                {e.tecnologies.frontend.map((c, i) => (
                  <Text key={i}>{c}</Text>
                ))}
              </Flex>

              {/* Techs backend */}
              {e.tecnologies.backend && (
                <Flex gap={"3"} width={"100%"}>
                  <Text as={"b"}>Backend:</Text>
                  {e.tecnologies?.backend?.map((c, i) => (
                    <Text key={i}>{c}</Text>
                  ))}
                </Flex>
              )}

              {/* Database */}
              {e.tecnologies.databases && (
                <Flex gap={"3"} width={"100%"}>
                  <Text as={"b"}>Database:</Text>
                  <Text>{e.tecnologies.databases}</Text>
                </Flex>
              )}
            </VStack>
          ))}
        </VStack>
      </Flex>
    </MainLayout>
  );
}
