import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { Enlaces, ITab } from "@/data/links";

export const NavBarDesk = () => {
  return (
     <Box display={["none", "block"]} backgroundColor={"whiteAlpha.900"}> 
      <Flex justifyContent={'flex-end'}>
        <HStack spacing={12}>
          {
            Enlaces.map((e, i) => (
              <Box key={i}>
                <Text fontSize={['', '2xl','3xl']} >{e.title}</Text>
              </Box>
            ))
          }
        </HStack>
      </Flex>
    </Box>
  );
};
