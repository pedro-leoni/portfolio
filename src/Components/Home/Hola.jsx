import React from 'react';
import { Box, Heading } from "@chakra-ui/react";
import DescargarCv from '../Buttons/DescargarCv';
import SobreMiButton from '../Buttons/SobreMiButton';


const Hola = () => {
  return (
    <Box textAlign='center' pt='33vh'>
      <Box>
        <Heading as='h1' size='4xl' color='textColor' noOfLines={1} m={3} p={3} >
          Hola, soy Pedro Leoni
        </Heading>
        <Heading  as='h1' size='2xl' color='textSecondary' noOfLines={1} m={3} p={3} >
          Full Stack Web Developer
        </Heading>
      </Box>
      <Box>
        <SobreMiButton />
        <DescargarCv/>
      </Box>
    </Box>
  )
}

export default Hola