import Box from '@mui/material/Box'
import React from 'react'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import CustomLink from './Link'

const links = [{ linkTitle: "GitHub", link: "https://github.com" },
{ linkTitle: "Frontend Mentor", link: "https://frontendmentor.com" },
{ linkTitle: "LinkedIn", link: "https://linkedin.com" },
{ linkTitle: "Twitter", link: "https://twitter.com" },
{ linkTitle: "Instagram", link: "https://instagram.com" }

]
const Card = () => {
  return (
    <Box className="cardBackground" sx={{ padding: "2rem", borderRadius: "0.75rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Image src="/jil.jpeg"
        alt='Jil'
        height={88}
        width={88}
        style={{ borderRadius: "50%", marginBottom: "1.5rem" }}
      />
      <Typography variant='h1' sx={{ fontSize: "2.25rem", marginBottom: "0.5rem" }}>Patel Jil</Typography>
      <Typography className='neon' variant='h2' sx={{ fontSize: "1.3125rem", fontWeight: "600", marginBottom:"1.5rem" }}>Gujarat, India</Typography>
      <Typography sx={{marginBottom:"1.5rem"}}>&quot;Front-end developer and avid reader&quot;</Typography>
      {links.map((link) => {
        return <CustomLink linkData={link} key={link.link} />
      })}
    </ Box>
  )
}

export default Card