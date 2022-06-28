import { Box } from '@chakra-ui/react';
import React from 'react';
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
import TechnologiesIcons from './TechnologiesIcons';

const TecnologiasParaCard = ({technologiesIcons}) => {
  return (
    <Box>
        {
            technologiesIcons.map((Icon) => {
                return (<>
                    {<TechnologiesIcons Icon={Icon}/>}
                </>)
            })
        }
       
        
    </Box>
  )
}

export default TecnologiasParaCard