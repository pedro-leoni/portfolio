import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";

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
        pl={[4, "50%"]}
        w="100vw"
      >
        <Link href="#SobreMi" _hover={{ textDecoration: "none" }}>
          <Text
            color="textColor"
            _hover={{
              color: "detailsPrimary",
              textShadow: "3px 3px 7px #0FFF4F",
            }}
          >
            Sobre Mí
          </Text>
        </Link>

        <Link href="#Proyectos" _hover={{ textDecoration: "none" }}>
          <Text
            color="textColor"
            _hover={{
              color: "detailsPrimary",
              textShadow: "3px 3px 7px #0FFF4F",
            }}
          >
            Proyectos
          </Text>
        </Link>

        <Link href="#Contactame" _hover={{ textDecoration: "none" }}>
          <Text
            color="textColor"
            _hover={{
              color: "detailsPrimary",
              textShadow: "3px 3px 7px #0FFF4F",
            }}
          >
            Contactame
          </Text>
        </Link>
        <Link
          href="PedroLeoniFullStack.pdf"
          target="#blank"
          _hover={{ textDecoration: "none" }}
        >
          <Text
            color="textColor"
            _hover={{
              color: "detailsPrimary",
              textShadow: "3px 3px 7px #0FFF4F",
            }}
          >
            CV
          </Text>
        </Link>
        {/* <Divider /> */}
      </Box>
    </Box>
  );
};

export default NavBar;
