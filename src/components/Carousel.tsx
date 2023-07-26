import { Mod } from "@/helpers/Mod";
import { useState } from "react";
import { IImage } from "@/data/projects";
import {
  Box,
  Button,
  HStack,
  Text,
  Image,
  VStack,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

interface Props {
  images: IImage[];
}
export const Carousel = ({ images }: Props) => {
  console.log(images);
  const [currentImage, setCurrentImage] = useState(images[0]);

  const color = useColorModeValue("white", "gray.700");

  const handleImage = (direction: number) => {
    const updateIndex = Mod(currentImage.id + direction - 1, images.length);
    setCurrentImage(images[updateIndex]);
  };

  return (
    <VStack>
      <Image src={currentImage.url} alt="imagen" objectFit={"cover"} />
      <HStack
        width={"100%"}
        justify={"end"}
        alignItems={"center"}
        spacing={"4"}
      >
        <Text>
          {currentImage.id} / {images.length}
        </Text>
        <Flex
          onClick={() => handleImage(-1)}
          cursor={"pointer"}
          align={"center"}
        >
          <ArrowBackIcon boxSize={"4"} bgColor={color} />
        </Flex>
        <Flex
          onClick={() => handleImage(1)}
          cursor={"pointer"}
          align={"center"}
        >
          <ArrowForwardIcon />
        </Flex>
      </HStack>
    </VStack>
  );
};
