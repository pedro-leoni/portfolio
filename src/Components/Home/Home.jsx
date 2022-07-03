import React from "react";
import { Box, Divider } from "@chakra-ui/react";
import Hola from "./Hola";
import SobreMi from "../Sobre Mi/SobreMi";
import Tecnologias from "../Tecnologias/Tecnologias";
import Proyectos from "../Proyectos/Proyectos";
import Contactame from "../Contactame/Contactame";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Particles from "react-tsparticles";
import { loadFull }  from "tsparticles";


const Home = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
   const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Box>
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#00FF40",
          },
          links: {
            color: "#00FF40",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.1,
          },
          shape: {
            density: {
              enable: true,
              area: 100,
            },
            type: "circle",
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },
        detectRetina: true,
      }}
    />
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
