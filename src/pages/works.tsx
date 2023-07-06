import MainLayout from "@/components/MainLayout";
import React from "react";
import { Box, Flex, Stack, Text, VStack } from "@chakra-ui/react";
import { works } from "@/data/works";

export default function Works() {
  return (
    <MainLayout>
      <Flex justifyContent={"center"}>
        <VStack
          spacing={"10"}
          w={"70%"}
          position={"relative"}
          top={["16", "5"]}
        >
          {works.map((e, i) => (
            <Flex direction={"column"} gap={"3"} key={i}>
              <Text fontSize={"3xl"} as={"b"}>
                {e.title}
              </Text>
              <Text fontSize={"1xl"} textAlign={"justify"}>
                {e.descripcion}
              </Text>
              <Flex gap={"3"}>
                <Text as={"b"}>Frontend:</Text>
                {e.tecnologies.frontend.map((c, i) => (
                  <Text key={i}>{c}</Text>
                ))}
              </Flex>
              {e.tecnologies.backend && (
                <Flex gap={"3"}>
                  <Text as={"b"}>Backend:</Text>
                  {e.tecnologies?.backend?.map((c, i) => (
                    <Text key={i}>{c}</Text>
                  ))}
                </Flex>
              )}
              {e.tecnologies.databases && (
                <Flex gap={"3"}>
                  <Text as={"b"}>Database:</Text>
                  <Text>{e.tecnologies.databases}</Text>
                </Flex>
              )}
            </Flex>
          ))}
        </VStack>
      </Flex>
    </MainLayout>
  );
}
