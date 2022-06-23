import React from "react";
import { Box, Text, Link, Divider } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box>
      <Box
        display="flex"
        textAlign="center"
        justifyContent="space-evenly"
        borderBottom="1px"
        position="fixed"
        top={0}
        zIndex={1000}
        bgGradient="linear(to-r , backgroundHome 70%, backgroundHomeSecondary)"
        p={4}
        pl="50%"
        w="100%"
      >
        <Link href="#SobreMi" _hover={{textDecoration:'none'}}>
          <Text color="textColor" _hover={{ color: "detailsPrimary"}}>
            Sobre Mi
          </Text>
        </Link>

        <Link href="#Proyectos" _hover={{textDecoration:'none'}}>
          <Text color="textColor" _hover={{ color: "detailsPrimary" }}>
            Proyectos
          </Text>
        </Link>

        <Link href="#Contactame" _hover={{textDecoration:'none'}}>
          <Text color="textColor" _hover={{ color: "detailsPrimary" }}>
            Contactame
          </Text>
        </Link>
        <Link
          href="https://drive.google.com/file/d/1-PunNvdFMmc43fOGkEMYyerjHSEuELLR/view?usp=sharing"
          isExternal
          _hover={{textDecoration:'none'}}
        >
          <Text color="textColor" _hover={{ color: "detailsPrimary" }}>
            CV
          </Text>
        </Link>
        {/* <Divider /> */}
      </Box>
    </Box>
  );
};

export default NavBar;
