import React from "react";
import { Box, Heading, Divider } from "@chakra-ui/react";
import SkillCards from "./SkillCards";

const Tecnologias = () => {
  return (
    <>
      <Box pl="20vw" h="100%" w="100%" id="SobreMi" pt="10vh">
        <Box
          h="auto"
          w="60vw"
          display="flex"
          flexDirection="column"
          textAlign="center"
          alignItems="center"
        >
          <Heading
            as="h3"
            size="2xl"
            pt={5}
            color="textColor"
            borderBottom="1px"
            borderColor="detailsSecondary"
          >
            Tecnologias
          </Heading>
          <SkillCards />
        </Box>
      </Box>
      <Box pl='30vw' pr='30vw'>
        <Divider />
      </Box>
    </>
  );
};

export default Tecnologias;
