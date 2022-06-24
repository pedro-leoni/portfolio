import React from "react";
import { Box, Heading, Text, Image, Button, Link } from "@chakra-ui/react";
import imagen from "../../multimedia/recipesApp/RecipesApp1.png";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Github } from "@icons-pack/react-simple-icons";

const RecipesApp = () => {
  return (
    <Box border="1px" display="flex" flexDirection="column" alignItems="center">
      <Heading
        as="h5"
        pt={5}
        color="textColor"
      >
        Recipes App
      </Heading>
      <Box display="flex" overflow='auto'>
        <Image boxSize="300px" m={2} p={2} src={imagen} objectFit="cover" />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text color="textColor" m={2}>
            SPA que permite ver mas de 5000 recetas traidas por medio de una
            API, filtrarlas, ordenarlas, crear y almacenar nuevas en nuestra
            base de datos.
            <br />
            <br />
            Fue creada con React.js, Redux y CSS puro para el frontend, el
            backend fue desarrollado con NodeJs y Express y para la base de
            datos se utilizo PostgreSQL y Sequelize como ORM
          </Text>
          <Box w="100%" display="flex" justifyContent="flex-end" p={3}>
            <Link
              href="https://pi-food-zeta.vercel.app/"
              target="_blank"
              _hover={{ color: "detailsPrimary", textDecoration: "none" }}
            >
              <Button m={2} rightIcon={<ExternalLinkIcon />}>
                Visitar pagina
              </Button>
            </Link>
            <Link
              href="https://github.com/pedro-leoni/PI-Food"
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
  );
};

export default RecipesApp;
