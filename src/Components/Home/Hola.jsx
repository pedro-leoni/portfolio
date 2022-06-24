import React from 'react';
import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";
import DescargarCv from '../Buttons/DescargarCv';
import SobreMiButton from '../Buttons/SobreMiButton';


const Hola = () => {
  const prueba = useBreakpointValue({base:{size:'4xl',color:'red'}, md:{size:'2xl',color:'green'}})
  return (
    <Box textAlign='center' pt='33vh'>
      <Box variant={prueba}>
        <Heading as='h1' size={'4xl'}  color='textColor' noOfLines={1} m={3} p={3} >
          Hola, soy Pedro Leoni
        </Heading>
        <Heading  as='h1' size={['','2xl','2xl']} color='textSecondary' noOfLines={1} m={3} p={3} >
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