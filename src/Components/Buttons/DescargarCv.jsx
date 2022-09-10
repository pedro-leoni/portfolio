import React from "react";
import { Button, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const DescargarCv = () => {
  return (
    <a
      href="PedroLeoniFullStack.pdf"
      target="#blank"
      _hover={{ color: "detailsPrimary", textDecoration:'none'}}
    >
      <Button
        bgColor="textPrimary"
        textDecoration="none"
        mt={3}
        rightIcon={<ExternalLinkIcon />}
        size={['xs','md']}
      >
        Descargar CV
      </Button>
    </a>
  );
};

export default DescargarCv;
