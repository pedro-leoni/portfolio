import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import RecipesApp from "./RecipesApp";
import Exmine from "./Exmine";

const Proyectos = () => {
  return (
    <Box h="100%" id="SobreMi" pt="10vh" pl="20vw">
      <Box
        h="auto"
        w="60vw"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Heading
          as="h3"
          size="2xl"
          pt={5}
          color="textColor"
        >
          Mis Trabajos
        </Heading>
        <Box mt={10} mb={10}>
          <RecipesApp/>
          <Exmine/>
        </Box>
      </Box>
    </Box>
  );
};

export default Proyectos;
