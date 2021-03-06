import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";

const SobreMi = () => {
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
          size={["2xl"]}
          pt={5}
          color="textColor"
        >
          Sobre Mí
        </Heading>
        <Text p={[5,10]} color="textColor" fontSize={["","2xl"]}>
          Me considero proactivo y autodidacta, me apasiona el desarrollo web y
          hago foco en las buenas prácticas y la optimización del código.
          <br />
          <br />
          Soy una persona muy curiosa que quiere entender el funcionamiento de
          todo y eso me motiva a estar en un proceso de aprendizaje constante.
          <br />
          <br />
          Estudie mas de 800 horas en Soy Henry con el objetivo de
          obtener mi título de desarrollador full stack.
        </Text>
      </Box>
    </Box>
  );
};

export default SobreMi;
