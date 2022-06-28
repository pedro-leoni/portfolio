import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Button, Link } from '@chakra-ui/react'
import React from 'react'

const ToPageButton = ({linkToPage}) => {
  return (
    <Link
    href={linkToPage}
    target="_blank"
    _hover={{ color: "detailsPrimary", textDecoration: "none" }}
  >
    <Button m={2} rightIcon={<ExternalLinkIcon />}>
      Visitar pagina
    </Button>
  </Link>
  )
}

export default ToPageButton