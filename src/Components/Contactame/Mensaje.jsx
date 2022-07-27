import React from "react";
import {
  Box,
  FormControl,
  Input,
  Textarea,
  Button,
  Heading,
  FormHelperText,
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, "Minimo 2 caracteres ")
    .max(20, "Máximo 20 caracteres")
    .required("Debes insertar un nombre"),

  msg: yup
    .string()
    .min(15, "Minimo 10 caracteres")
    .max(500, "Máximo 600 caracteres")
    .required("Debes escribir un mensaje"),

  email: yup.string().email('El email debe poseer un formato valido').required("Por favor ingrese un email"),
});

const Mensaje = () => {
  const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } =
    process.env;

  emailjs.init(REACT_APP_PUBLIC_KEY);


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      msg: "",
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      emailjs.send(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, values).then(
        (result) => {
          Swal.fire({
            title: "Mensaje Enviado!",
            text: "Recibirás una respuesta a la brevedad",
            icon: "success",
            background: "#161616",
            color: "#FBFBFB",
            confirmButtonColor: "#00A429",
          });
          formik.resetForm()
        },
        (error) => {
          Swal.fire({
            title: "Ups! Ocurrio un problema",
            icon: "error",
            background: "#161616",
            color: "#FBFBFB",
          });
          console.log("este es el error => ", error);
        }
      );
    },
  });

  return (
    <Box p={[2, 10]}>
      <Heading p={3} pt={5} color="textColor" textAlign="center">
        O dejame tu mensaje
      </Heading>
      <form onSubmit={formik.handleSubmit}>
        <Box
          display="flex"
          flexDirection={["column", "column", "row"]}
          w={["50vw", "30vw"]}
          mt={5}
        >
          <FormControl isRequired p={3}>
            <Input
              id="name"
              name="name"
              color="textColor"
              placeholder="Nombre"
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.touched.name && formik.errors.name}
            />
              {
                formik.touched.name && 
                <FormHelperText>
                  {formik.errors.name}
                </FormHelperText>
              }
          </FormControl>
          <FormControl isRequired p={3}>
            <Input
              id="email"
              type="text"
              color="textColor"
              placeholder="Email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && formik.errors.email}
            />
              {
                formik.touched.email &&
                  <FormHelperText>
                    {formik.errors.email}
                  </FormHelperText>
              }
          </FormControl>
        </Box>
        <FormControl isRequired p={3}>
          {
            formik.touched.msg &&
            <FormHelperText>
              {formik.errors.msg}
            </FormHelperText>
          }
          <Textarea
            id="msg"
            name="msg"
            placeholder="Escribi tu mensaje"
            color="textColor"
            onChange={formik.handleChange}
            value={formik.values.msg}
          />
        </FormControl>

        <Box display="flex" justifyContent="flex-end" p={3}>
          <Button
            type="submit"
            _hover={{ color: "detailsPrimary" }}
            rightIcon={<ChatIcon />}
            size={["xs", "md"]}
          >
            Enviar
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Mensaje;
