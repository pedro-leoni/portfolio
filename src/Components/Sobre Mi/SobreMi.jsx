import React from "react";
import { Box, Text, Heading, Divider } from "@chakra-ui/react";

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
          size="2xl"
          pt={5}
          color="textColor"
          borderBottom="1px"
          borderColor="detailsSecondary"
        >
          Sobre Mi
        </Heading>
        <Text p={10} color="textColor" fontSize="2xl">
          Me considero proactivo y autodidacta, me apasiona el desarrollo web y
          hago foco en las buenas practicas y la optimizacion del codigo.
          <br />
          <br />
          Soy una persona muy curiosa que quiere entender el funcionamiento de
          todo y eso me motiva a estar en un proceso de aprendizaje constante.
          <br />
          <br />
          Tambien estudie mas de 700 horas en Soy Henry con el objetivo de
          obtener mi titulo de desarrollador full stack
        </Text>
      </Box>
    </Box>
  );
};

export default SobreMi;
