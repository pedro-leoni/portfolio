import React from "react";
import { Box, Divider } from "@chakra-ui/react";
import Hola from "./Hola";
import SobreMi from "../Sobre Mi/SobreMi";
import Tecnologias from "../Tecnologias/Tecnologias";
import Proyectos from "../Proyectos/Proyectos";
import Contactame from "../Contactame/Contactame";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Home = () => {
  return (
    <Box>
      <NavBar />
      <Box  bgGradient='linear(to-r , backgroundHome 70%, backgroundHomeSecondary)' h="100vh">
        <Hola />
      </Box>
      <Box bgGradient='linear(to-r , backgroundHome 70%, backgroundHomeSecondary)' h="auto" >
        <SobreMi />
      </Box>
      <Box id="Tecnologias" bgGradient='linear(to-r , backgroundHome 70%, backgroundHomeSecondary)' h="auto">
        <Tecnologias />
      </Box>
      <Box id="Proyectos" bgGradient='linear(to-r , backgroundHome 70%, backgroundHomeSecondary)' h="auto">
        <Proyectos />
      </Box>
      <Divider />
      <Box id="Contactame" bgGradient='linear(to-r , backgroundHome 70%, backgroundHomeSecondary)' h="100vh">
        <Contactame />
      </Box>
      <Box>
        <Divider />
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
