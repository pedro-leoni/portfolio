import React, { useRef } from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Html5,
  CssThree,
  ReactJs,
  Redux,
  Nodedotjs,
  Express,
  Postgresql,
  Figma,
  Mui,
  Chakraui,
  Git,
  Gnubash,
  Javascript,
  Sequelize,
  Github,
} from "@icons-pack/react-simple-icons";
import TechnologiesIcons from "./TechnologiesIcons";
import ProyectModal from "./ProyectModal";

const Proyecto = ({
  name,
  cardImg,
  shortDescription,
  technologiesIcons,
  description,
  frontEndTech,
  backEndTech,
  dbAndORM,
  otherTechs,
  imgsGalery,
  linkToPage,
  linkToRepo
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);
  return (
    <Box onClick={onOpen} >
      <ProyectModal
        name={name}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        description={description}
        frontEndTech={frontEndTech}
        backEndTech={backEndTech}
        dbAndORM={dbAndORM}
        otherTechs={otherTechs}
        imgsGalery={imgsGalery}
        linkToPage={linkToPage}
        linkToRepo={linkToRepo}
      />
      <Box
        border="1px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        mb={3}
        _hover={{
          transform: "scale(1.1)",
          cursor: 'pointer'
        }}
       backgroundColor='black'
       opacity='80%'
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
            <Text color="textColor" mt={2}>
              {shortDescription}
            </Text>
            <Box display="flex" width="100%" justifyContent="center" m={4}>
              <ReactJs color="#FBFBFB" />
              <Nodedotjs color="#FBFBFB" />
              <Postgresql color="#FBFBFB" />
              {/* {
              technologiesIcons?.map((i)=> {
                return <TechnologiesIcons Icon={i} />
              })
            } */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Proyecto;
