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
  Figma,
  Mui,
  Chakraui,
  Git,
  Gnubash,
  Javascript,
  Sequelize,
  Github
} from "@icons-pack/react-simple-icons";

const SkillCards = () => {
  return (
  <Box display='flex' flexWrap='wrap' alignContent='center' pb='10vh'>
    <SkillCard Icon={Html5} text={'HTML5'} />
    <SkillCard Icon={CssThree} text={'CSS3'} />
    <SkillCard Icon={Javascript} text={'Javascript'}/>
    <SkillCard Icon={ReactJs} text={'React'}/>
    <SkillCard Icon={Redux} text={'Redux'}/>
    <SkillCard Icon={Mui} text={'Material UI'}/>
    <SkillCard Icon={Chakraui} text={'Chakra UI'}/>
    <SkillCard Icon={Figma} text={'Figma'}/>
    <SkillCard Icon={Nodedotjs} text={'Node Js'}/>
    <SkillCard Icon={Express} text={'Express'}/>
    <SkillCard Icon={Sequelize} text={'Sequelize'}/>
    <SkillCard Icon={Postgresql} text={'PostgreSQL'}/>
    <SkillCard Icon={Git} text={'Git'}/>
    <SkillCard Icon={Github} text={'Github'}/>
    <SkillCard Icon={Gnubash} text={'Bash'}/>
  </Box>);
};

export default SkillCards;
