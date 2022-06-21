import React from "react";
import { Button, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const DescargarCv = () => {
  return (
    <Link
      href="https://drive.google.com/file/d/1-PunNvdFMmc43fOGkEMYyerjHSEuELLR/view?usp=sharing"
      target="_blank"
      _hover={{ color: "detailsPrimary", textDecoration:'none'}}
    >
      <Button
        bgColor="textPrimary"
        textDecoration="none"
        mt={3}
        rightIcon={<ExternalLinkIcon />}
      >
        Descargar CV
      </Button>
    </Link>
  );
};

export default DescargarCv;
