import { Mod } from "@/helpers/Mod";
import { useState } from "react";
import { IImage } from "@/data/projects";
import { Box, HStack, Image } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

interface Props {
  images: IImage[];
}
export const Carousel = ({ images }: Props) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleImage = (direction: number) => {
    const updateIndex = Mod(currentImage.id + direction - 1, images.length);
    setCurrentImage(images[updateIndex]);
  };
  return (
    <>
      <HStack spacing={12}>
        <Box onClick={() => handleImage(-1)} cursor={"pointer"}>
          <ArrowBackIcon boxSize={"6"} />
        </Box>
        <Image src={currentImage.url} />
        <Box onClick={() => handleImage(1)} cursor={"pointer"}>
          <ArrowForwardIcon boxSize={"6"} />
        </Box>
      </HStack>
    </>
  );
};
