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
          Tengo 26 años, soy de Mar del Plata, Argentina. Me converti en desarrollador web tras 2 años de estudio autodidacta que complemente con las 800 horas del bootcamp Soy Henry.
          <br />
          <br />
          Me considero proactivo y autodidacta. Me caracteriza principalmente la curiosidad y la necesidad de explorar, lo que me lleva a encontrarme en un proceso de aprendizaje constante, haciendo foco en el codigo limpio y seguro.
          <br />
          <br />
          Actualmente me encuentro trabajando para Neuron Health.
        </Text>
      </Box>
    </Box>
  );
};

export default SobreMi;
