import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const RecipesApp = () => {
  return (
    <Box>
      <Heading
        as="h5"
        pt={5}
        color="textColor"
        borderBottom="1px"
        borderColor="detailsSecondary"
      >
        Recipes App
      </Heading>
    </Box>
  );
};

export default RecipesApp;
