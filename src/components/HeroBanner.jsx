import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <div>
      <Box  sx={{ 
      mt: {lg:'212px',xs:'70px'},
      ml:{sm:'50px'},position:'relative',p:'20px'
     }}>
      <Typography color={'#ff2526'} fontWeight={600} fontSize={'26px'}>
         Fitness Club
      </Typography>
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'40px'}}} mt='30px' mb=
      {'23px'}>
        Sweat, Smile <br /> and repeat
      </Typography>
      <Typography fontSize={'22px'} lineHeight={'50px'}>
        Check out the most effective exercises
      </Typography>
      <Button variant='contained' sx={{background:'#ff2625',color:'#fff',padding:'10px' }} mb={3} href="#exercises">
        Explore Exrecises
      </Button>
      <Typography fontWeight={600} fontSize={'200px'} color={'#ff2625'} sx={{ opacity:0.1,display:{lg:'block',xs:'none'} }}>
        Exercises
      </Typography>
      <img src={HeroBannerImage} alt="banner" className='hero-banner-img'/>

    </Box>
    </div>
     
  )
}

export default HeroBanner
