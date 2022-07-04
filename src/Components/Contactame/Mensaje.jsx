import React, { useState, useRef } from "react";
import {
  Box,
  FormControl,
  Input,
  Textarea,
  Button,
  Heading,
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import emailjs from "@emailjs/browser";
import { Formik } from "formik";
import Swal from "sweetalert2";

const Mensaje = () => {
  const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } =
    process.env;
  emailjs.init(REACT_APP_PUBLIC_KEY);
  const formRef = useRef(null);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    msg: "",
  });
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', inputs, 'YOUR_PUBLIC_KEY')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };
  const onChangeInputs = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitInputs = (e) => {
    let templateParams = inputs;
    e.preventDefault();
    emailjs
      .send(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, templateParams)
      .then(
        (result) => {
          Swal.fire({
            title: "Mensaje Enviado!",
            text: "Recibiras una respuesta a la brevedad",
            icon: "success",
            background: "#161616",
            color: "#FBFBFB",
            confirmButtonColor:"#00A429"     
          });
        },
        (error) => {
          console.log("este es el error => ", error);
        }
      );
  };

  return (
    <Box p={10}>
      <Heading p={3} pt={5} color="textColor" textAlign="center">
        O dejame tu mensaje
      </Heading>
      <form onSubmit={onSubmitInputs} ref={formRef}>
        <Box display="flex" w="30vw" mt={5}>
          <FormControl isRequired p={3}>
            <Input
              id="name"
              name="name"
              color="textColor"
              placeholder="Nombre"
              onChange={onChangeInputs}
            />
          </FormControl>
          <FormControl isRequired p={3}>
            <Input
              id="email"
              type="email"
              color="textColor"
              placeholder="Email"
              name="email"
              onChange={onChangeInputs}
            />
          </FormControl>
        </Box>
        <FormControl isRequired p={3}>
          <Textarea
            id="msg"
            name="msg"
            placeholder="Escribi tu mensaje"
            color="textColor"
            onChange={onChangeInputs}
          />
        </FormControl>

        <Box display="flex" justifyContent="flex-end" p={3}>
          <Button
            type="submit"
            _hover={{ color: "detailsPrimary" }}
            rightIcon={<ChatIcon />}
          >
            Enviar
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Mensaje;
