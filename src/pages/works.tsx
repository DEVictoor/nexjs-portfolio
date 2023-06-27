import MainLayout from "@/components/MainLayout";
import React from "react";
import { Box, Flex, Stack, Text, VStack } from "@chakra-ui/react";
import { works } from "@/data/works";

export default function Works() {
  return (
    <MainLayout>
      <Flex>
        {works.map((e, i) => (
          <VStack spacing={6} key={i}>
            <Text fontSize={"2xl"}>{e.title}</Text>
            <Text fontSize={"1xl"}>{e.descripcion}</Text>
          </VStack>
        ))}
      </Flex>
    </MainLayout>
  );
}
