import MainLayout from "@/components/MainLayout";
import React from "react";
import { Box, Flex, Stack, Text, VStack } from "@chakra-ui/react";
import { works } from "@/data/works";

export default function Works() {
  return (
    <MainLayout>
      <Flex justify={"center"}>
        <VStack
          spacing={"10"}
          w={["80%", "65%"]}
          position={"relative"}
          top={["16", "32"]}
        >
          {works.map((e, i) => (
            <VStack key={i} width={"100%"}>
              {/* Titulo */}
              <Text fontSize={"3xl"} as={"b"} width={"100%"}>
                {e.title}
              </Text>

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
