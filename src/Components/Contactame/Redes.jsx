import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import {
  Github,
  Linkedin,
  Gmail,
  Whatsapp,
} from "@icons-pack/react-simple-icons";

const Redes = () => {
  return (
    <Box color="textColor">
      <Box>
        <Box display='flex' flexDirection={['column','row']}>
          <Link
            href="mailto:pedroleoni1996@gmail.com"
            target="_blank"
            _hover={{ color: "detailsPrimary", textShadow:"3px 3px 7px #0FFF4F", textDecoration: "none" }}
            display="flex"
            alignItems="center"
            p={3}
          >
            <Gmail height="40" width="40" />
            <Text ml={5}> pedroleoni1996@gmail.com </Text>
          </Link>

          <Link
            href="https://wa.me/5493512329263"
            target="_blank"
            _hover={{ color: "detailsPrimary", textShadow:"3px 3px 7px #0FFF4F" ,textDecoration: "none" }}
            display="flex"
            alignItems="center"
            p={3}
          >
            <Whatsapp height="40" width="40" />
            <Text ml={5}>+54 9 351 2329263</Text>
          </Link>
        </Box>
        <Box display='flex' flexDirection={['column','row']}>
          <Link
            href="https://linkedin.com/in/pedro-leoni/"
            target="_blank"
            _hover={{ color: "detailsPrimary",textShadow:"3px 3px 7px #0FFF4F" ,textDecoration: "none" }}
            display="flex"
            alignItems="center"
            p={3}
          >
            <Linkedin height="40" width="40" />
            <Text ml={5}>linkedin.com/in/pedro-leoni/</Text>
          </Link>

          <Link
            href="https://github.com/pedro-leoni"
            target="_blank"
            _hover={{ color: "detailsPrimary",textShadow:"3px 3px 7px #0FFF4F", textDecoration: "none" }}
            display="flex"
            alignItems="center"
            p={3}
          >
            <Github height="40" width="40" />
            <Text ml={5}>github.com/pedro-leoni</Text>
          </Link>
        </Box>
      </Box>

    </Box>
  );
};

export default Redes;
