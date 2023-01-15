import React from "react";
import { Button, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const DescargarCv = () => {
  return (
    <Link
      href="PedroLeoniBackend.pdf"
      _hover={{ color: "detailsPrimary", textDecoration:'none'}}
      target="#blank"
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
    </Link>
  );
};

export default DescargarCv;
