import React from 'react'
import Box from '@mui/material/Box'
import Link from 'next/link'
interface LinkProps {
  linkData : {
    linkTitle: string;
    link: string
    }
}
const CustomLink = ({linkData}:LinkProps) => {
  return (
      <Box className='linkBackground' sx={{padding: "0.75rem 5.625rem", width:"40%", display:"flex", justifyContent:"center",
        alignItems:"center", margin: "0.5rem 0",
        borderRadius:"0.75rem"
      }}>
        <Link className='link' href={linkData.link} target='_blank'>{linkData.linkTitle}</Link>
      </Box>
  )
}

export default CustomLink;