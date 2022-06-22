import React from "react";
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Heading
} from "@chakra-ui/react";

const Contactame = () => {
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
         Deja tu mensaje
        </Heading>
        <Box>
          <Box display="flex">
            <FormControl isRequired p={3}>
              <FormLabel htmlFor="name" color="textColor">
                Nombre
              </FormLabel>
              <Input id="name" color="textColor" />
            </FormControl>
            <FormControl isRequired p={3}>
              <FormLabel htmlFor="email" color="textColor">
                Email
              </FormLabel>
              <Input id="email" type="email" color="textColor" />
            </FormControl>
          </Box>
          <FormControl isRequired p={3}>
            <FormLabel htmlFor="email" color="textColor">
              Mensaje
            </FormLabel>
            <Textarea placeholder="Escribi tu mensaje" color="textColor" />
          </FormControl>
        </Box>
      </Box>
    </Box>

  );
};

export default Contactame;
