import React from 'react';
import { Box, Heading, Link, Image, Text, Button } from "@chakra-ui/react";
import imagen from "../../multimedia/exmine/Exmine.png"
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Github } from "@icons-pack/react-simple-icons"

const Exmine = () => {
  return (
    <Box border="1px" display="flex" flexDirection="column" alignItems="center" mt={5}>
      <Heading
        as="h5"
        pt={5}
        color="textColor"
      >
        Exmine
      </Heading>
      <Box display="flex">
        <Image boxSize="300px" m={2} p={2} src={imagen} objectFit="cover" />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text color="textColor" m={2}>
            Ecommerce de venta de Placas de video y ASIC para la mineria de criptomonedas. Realizada en grupo como proyecto final de Soy Henry.
            <br />
            <br />
            El frontend fue realizado con: React, Redux y Material UI, se utlizo tambien Formik para la gestion de formularios.<br/>
            El backend fue realizado con: NodeJs, Express. Se utilizo Nodemailer para el envio de correos, JWT para la autenticacion y seguridad y Multer para la gestion de contenido multimedia.<br/>
            La base de datos fue realizada con PostgreSQL y se utilizo Sequelize como ORM.
          </Text>
          <Box w="100%" display="flex" justifyContent="flex-end" p={3}>
            <Link
              href="https://final-project-beryl.vercel.app/"
              target="_blank"
              _hover={{ color: "detailsPrimary", textDecoration: "none" }}
            >
              <Button m={2} rightIcon={<ExternalLinkIcon />}>
                Visitar pagina
              </Button>
            </Link>
            <Link
              href="https://github.com/ortega-pablo/Final-Project"
              target="_blank"
              _hover={{ color: "detailsPrimary", textDecoration: "none" }}
            > 
            <Button m={2} rightIcon={<Github />}>
              Ver codigo
            </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Exmine