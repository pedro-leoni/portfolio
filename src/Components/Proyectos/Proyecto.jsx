import React from "react";
import { Box, Heading, Text, Image, Link } from "@chakra-ui/react";
import TecnologiasParaCard from "./TecnologiasParaCard";

const Proyecto = ({
  name,
  cardImg,
  shortDescription,
  technologiesIcons,
}) => {
  return (
    <Link >
    <Box
      border="1px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      mb={3}
      _hover={{
        transform: "scale(1.1)"
      }}

    >
      <Box display="flex" overflow="auto">
        <Image boxSize="150px" m={2} p={2} src={cardImg} objectFit="cover" />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading size="md" pt={5} color="textColor">
            {name}
          </Heading>
          <Text color="textColor" m={2}>
            {shortDescription}
          </Text>
          <Box>
            <TecnologiasParaCard technologiesIcons={technologiesIcons} />
          </Box>
        </Box>
      </Box>
    </Box>
    </Link>
  );
};

export default Proyecto;
