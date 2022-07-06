import React from "react";
import { Box, Link, Text } from "@chakra-ui/react";
import {
  Gmail,
  Whatsapp,
  Linkedin,
  Github,
} from "@icons-pack/react-simple-icons";

const Footer = () => {
  return (
    <Box h="7vh" display='flex' alignItems='center' justifyContent='space-between' color='textColor'>
      <Box display="flex">
        <Link
          href="mailto:pedroleoni1996@gmail.com"
          target="_blank"
          _hover={{ color: "detailsPrimary", textDecoration: "none" }}
          display="flex"
          alignItems="center"
          p={3}
        >
          <Gmail />
        </Link>

        <Link
          href="https://linkedin.com/in/pedro-leoni/"
          target="_blank"
          _hover={{ color: "detailsPrimary", textDecoration: "none" }}
          display="flex"
          alignItems="center"
          p={3}
        >
          <Linkedin />
        </Link>
        <Link
          href="https://github.com/pedro-leoni"
          target="_blank"
          _hover={{ color: "detailsPrimary", textDecoration: "none" }}
          display="flex"
          alignItems="center"
          p={3}
        >
          <Github />
        </Link>
        <Link
          href="https://wa.me/5493512329263"
          target="_blank"
          _hover={{ color: "detailsPrimary", textDecoration: "none" }}
          display="flex"
          alignItems="center"
          p={3}
        >
          <Whatsapp />
        </Link>
      </Box>
      <Box display={["none","block"]}>
        <Text  p={3}>
          Todos los derechos reservados © Pedro Leoni 2022.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
