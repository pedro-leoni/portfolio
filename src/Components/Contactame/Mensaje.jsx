import React from "react";
import {
  Box,
  FormControl,
  Input,
  Textarea,
  Button,
  Heading,
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";

const Mensaje = () => {
  return (
    <Box p={10}>
      <Heading p={3} pt={5} color="textColor" textAlign='center'>
        O dejame tu mensaje
      </Heading>
      <Box display="flex" w="30vw" mt={5}>
        <FormControl isRequired p={3}>
          <Input id="name" color="textColor" placeholder="Nombre" />
        </FormControl>
        <FormControl isRequired p={3}>
          <Input
            id="email"
            type="email"
            color="textColor"
            placeholder="Email"
          />
        </FormControl>
      </Box>
      <FormControl isRequired p={3}>
        <Textarea placeholder="Escribi tu mensaje" color="textColor" />
      </FormControl>
      <Box display="flex" justifyContent="flex-end" p={3}>
        <Button _hover={{ color: "detailsPrimary" }} rightIcon={<ChatIcon />}>
          Enviar
        </Button>
      </Box>
    </Box>
  );
};

export default Mensaje;
