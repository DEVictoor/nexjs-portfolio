import MainLayout from "@/components/MainLayout";
import React, { useState } from "react";
import {
  Button,
  Flex,
  Image,
  HStack,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
  ModalHeader,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { TfiGallery } from "react-icons/tfi";
import { Projects as works } from "@/data/projects";
import { Carousel } from "@/components/Carousel";

export default function Projects() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
                {/* Titulo */}
                <Text fontSize={"3xl"} as={"b"}>
                  {e.title}
                </Text>
                {/* Materiales */}
                <HStack spacing={4}>
                  {/* Repositorio */}
                  {e.repo && (
                    <Link href={e.repo} isExternal>
                      <Button leftIcon={<AiFillGithub />}>Repositorio</Button>
                    </Link>
                  )}
                  {/* Enlace */}
                  {e.enlace && (
                    <Link href={e.enlace} isExternal>
                      <Button variant={"outline"}>
                        <BiLinkExternal />
                      </Button>
                    </Link>
                  )}

                  {/* Imagenes */}
                  {e.images && (
                    <>
                      <Button variant={"outline"} onClick={onOpen}>
                        <TfiGallery />
                      </Button>

                      <Modal onClose={onClose} isOpen={isOpen} isCentered>
                        <ModalOverlay />
                        <ModalContent>
                          <ModalHeader />
                          <ModalCloseButton />
                          <ModalBody>
                            <Carousel images={e.images} />
                          </ModalBody>
                        </ModalContent>
                      </Modal>
                    </>
                  )}
                </HStack>
              </VStack>

              {/* Descripcion */}
              <Text
                fontSize={"1xl"}
                textAlign={"justify"}
                width={"full"}
                // borderColor={"black"}
                // border={"1px"}
              >
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
