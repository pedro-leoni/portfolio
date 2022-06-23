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
      <Box pl='30vw' pr='30vw' pb="10vh">
        <Divider />
    </Box>
        <SobreMi />
      </Box>
      <Box id="Tecnologias" bgGradient='linear(to-r , backgroundHome 70%, backgroundHomeSecondary)' h="auto">
        <Tecnologias />
      </Box>
      <Box id="Proyectos" bgGradient='linear(to-r , backgroundHome 70%, backgroundHomeSecondary)' h="auto">
        <Proyectos />
      </Box>
      <Box id="Contactame" bgGradient='linear(to-r , backgroundHome 70%, backgroundHomeSecondary)' h="auto">
        <Contactame />
      </Box>
      <Box id="Footer" bgGradient='linear(to-r , backgroundHome 70%, backgroundHomeSecondary)' h="auto" >
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
