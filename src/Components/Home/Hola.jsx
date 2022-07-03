import React from "react";
import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";
import DescargarCv from "../Buttons/DescargarCv";
import SobreMiButton from "../Buttons/SobreMiButton";
import Typewriter from "typewriter-effect";

const Hola = () => {
  const machineText = (typewriter) => {
    typewriter.typeString("Hola, soy Pedro Leoni.").start();
  };
  const machineText2 = (typewriter) => {
    typewriter
      .pauseFor(5000)
      .typeString("Full Stack Web Developer")
      .pauseFor(2000)
      .deleteAll()
      .typeString("Frontend Developer")
      .pauseFor(2000)
      .deleteAll()
      .typeString("Backend Developer")
      .pauseFor(2000)
      .start();
  };

  return (
    <Box textAlign="center" pt="33vh">
      <Box>
        <Heading
          as="h1"
          size={["", "1xl", "2xl"]}
          color="textSecondary"
          noOfLines={1}
          m={3}
          p={3}
        >
          <Typewriter onInit={machineText} />
          {/* Full Stack Web Developer */}
        </Heading>

        <Heading
          as="h1"
          size={["","2xl","4xl"]}
          color="textColor"
          noOfLines={1}
          m={3}
          p={3}
        >
          <Typewriter onInit={machineText2} options={{ loop: true }} />
          {/* Hola, soy Pedro Leoni */}
        </Heading>
      </Box>
      <Box>
        <SobreMiButton />
        <DescargarCv />
      </Box>
    </Box>
  );
};

export default Hola;
