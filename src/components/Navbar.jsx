import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'
const Navbar = () => {
  return (
    <Stack direction='row' justifyContent={'space-between'} sx={{ gap:{sm:'122px',xs:'40px'},mt:{sm:'32px',xs:'20px'}, justifyContent:'none'}} px={'20px'}>
        <Link to="/" >
          <img src={Logo} alt="logo" />
        </Link>
        <Stack direction='row' alignItems={'flex-end'} gap={'40px'} fontSize={'24px'}>
          <Link to={'/home'} style={{ textDecoration:'none',color:'#3a1212',borderBottom:'3px solid #ff2625' }}>Home</Link>
          <a href="#exercices" style={{ textDecoration:'none',color:'#3a1212' }}>Exercies</a>
        </Stack>
    </Stack>
  )
}

export default Navbar
