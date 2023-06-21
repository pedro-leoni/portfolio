import React from "react";
import { Box } from "@chakra-ui/react";
import SkillCard from "./SkillCard";
import {
  Html5,
  CssThree,
  ReactJs,
  Redux,
  Nodedotjs,
  Express,
  Postgresql,
  Python,
  Flask,
  Git,
  Gnubash,
  Javascript,
  Sequelize,
  Nextdotjs,
  Typescript,
  Mongodb,
  Sass
} from "@icons-pack/react-simple-icons";


const SkillCards = () => {
  return (
  <Box display='flex' flexDirection={['column','row']} flexWrap='wrap' alignItems='center' alignContent='center' pb='10vh'>
    <SkillCard Icon={Html5} text={'HTML5'} />
    <SkillCard Icon={CssThree} text={'CSS3'} />
    <SkillCard Icon={Sass} text={'SCSS'}/>
    <SkillCard Icon={Javascript} text={'Javascript'}/>
    <SkillCard Icon={Typescript} text={'Typescript'}/>
    <SkillCard Icon={ReactJs} text={'React'}/>
    <SkillCard Icon={Nextdotjs} text={'NextJs'}/>
    <SkillCard Icon={Nodedotjs} text={'Node Js'}/>
    <SkillCard Icon={Express} text={'Express'}/>
    <SkillCard Icon={Python} text={'Python'}/>
    <SkillCard Icon={Flask} text={'Flask'}/>
    <SkillCard Icon={Sequelize} text={'Sequelize'}/>
    <SkillCard Icon={Postgresql} text={'PostgreSQL'}/>
    <SkillCard Icon={Mongodb} text={'Mongodb'}/>
    <SkillCard Icon={Git} text={'Git'}/>
    <SkillCard Icon={Gnubash} text={'Bash'}/>
  </Box>);
};

export default SkillCards;
