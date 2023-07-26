import MainLayout from "@/components/MainLayout";
import React from "react";
import { Box, Flex, Stack, Text, VStack } from "@chakra-ui/react";
import { works } from "@/data/works";

export default function Works() {
  return (
    <MainLayout>
      <Flex justify={"center"} width={"100vw"}>
        <VStack
          spacing={"10"}
          w={["80%", "60%"]}
          position={"relative"}
          top={["16", "36"]}
        >
          {works.map((e, i) => (
            <VStack width={"100%"} key={i} spacing={3}>
              <VStack width={"full"} spacing={[3, 2]} align={"start"}>
                <Text fontSize={"3xl"} as={"b"}>
                  {e.labor}
                </Text>
                <Text fontSize={"1xl"} textAlign={"justify"} width={"full"}>
                  {e.inicio.toLocaleString("es-ES", {
                    // weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  &nbsp;-&nbsp;
                  {e.fin.toLocaleString("es-ES", {
                    // weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Text>
                <Text as={"b"} fontSize={"1xl"}>
                  Empresa: {e.empresa}
                </Text>
                <Text fontSize={"1xl"} textAlign={"justify"} width={"full"}>
                  {e.aporte}
                </Text>
              </VStack>
            </VStack>
          ))}
        </VStack>
      </Flex>
    </MainLayout>
  );
}
