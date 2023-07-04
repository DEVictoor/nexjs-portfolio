import MainLayout from "@/components/MainLayout";
import React from "react";
import { Box, Flex, Stack, Text, VStack } from "@chakra-ui/react";
import { works } from "@/data/works";

export default function Works() {
  return (
    <MainLayout>
      <Flex justifyContent={"center"} position={"relative"} top={"3em"}>
        <VStack w={"70%"} spacing={"10"}>
          {works.map((e, i) => (
            <Flex direction={"column"} gap={"5"} key={i}>
              <Text fontSize={"3xl"} as={"b"}>
                {e.title}
              </Text>
              <Text fontSize={"1xl"}>{e.descripcion}</Text>
              <Flex gap={"3"}>
                <Text as={"b"}>Frontend:</Text>
                {e.tecnologies.frontend.map((c, i) => (
                  <Text key={i}>{c}</Text>
                ))}
              </Flex>
              <Flex gap={"3"}>
                <Text as={"b"}>Backend:</Text>
                {e.tecnologies.backend.map((c, i) => (
                  <Text key={i}>{c}</Text>
                ))}
              </Flex>
            </Flex>
            // <VStack spacing={6} key={i}>
            // </VStack>
          ))}
        </VStack>
      </Flex>
    </MainLayout>
  );
}
