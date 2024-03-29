import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../../redux-toolkit/getAndFilter";
import { Box, Heading, Divider, Text } from "@chakra-ui/react";
import  Proyecto  from "./Proyecto.jsx";

const Proyectos = () => {
  // esto fue una prueba, FUNCIONA, lo dejo hasta que lo arme bien en los hooks
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch]);
  return (
    <>
      
      <Box h="100%" id="SobreMi" pt="10vh" pl="20vw">
        <Box
          h="auto"
          w="60vw"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Heading as="h3" size="2xl" pt={5} color="textColor">
            Mis Trabajos
          </Heading>
          <Text width={['200px','500px']} mt={3} color="textColor">
            En esta lista se encuentran solo las apps deployadas, podes encontrar mas repositorios con ejercicios, apuntes y proyectos sin deployar en mi perfil de <a style={{textDecoration: 'underline'}} href="https://github.com/pedro-leoni" target="#blank" >github</a>.
          </Text>
          <Box mt={10} mb={10}>

              {jobs.length && jobs.map((j) => {
                return (
                  <Proyecto
                    key={j.id}
                    name={j.name}
                    id={j.id}
                    cardImg={j.cardImg}
                    shortDescription={j.shortDescription}
                    linkToPage={j.linkToPage}
                    linkToRepo={j.linkToRepo}
                    technologiesIcons={j.technologiesIcons}
                    description={j.description}
                    frontEndTech={j.frontEndTech}
                    backEndTech={j.backEndTech}
                    dbAndORM={j.dbAndORM}
                    otherTechs={j.otherTechs}
                    imgsGalery={j.imgsGalery}
                  />
                );
              })}

          </Box>
        </Box>
      </Box>
      <Box pl="30vw" pr="30vw" pt="10vh">
        <Divider />
      </Box>
    </>
  );
};

export default Proyectos;
