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
          Tengo 26 años y vivo en Mar del Plata, Argentina. Soy desarrollador web full stack hace 2 años y hace 6 meses me desenvuelvo como tal en Neuron Health.
          <br />
          <br />
          Me considero proactivo y autodidacta. Me caracteriza principalmente la curiosidad y la necesidad de explorar, lo que me lleva a encontrarme en un proceso de aprendizaje constante, haciendo foco en la resolucion de problemas.
          <br />
          <br />
          Mi especialidad adentro del desarrollo web es el backend y me encuentro en proceso de ampliar mis conocimientos en data science y machine learning con el fin de convertirme en ingeniero IA. 
          <br />
          <br />
          Tambien me considero bueno con el scripting en python y bash, me gusta utilizarlo para automatizar la mayor cantidad de procedimientos cotidianos. 
          <br />
          <br />
        </Text>
      </Box>
    </Box>
  );
};

export default SobreMi;
