import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {fetchData,exerciseOptions} from '../utils/fetchData'
import HorizontalScrollBar from '../components/HorizontalScrollBar'
const SearchExercises = ({bodyPart,setBodyPart,setExercises}) => {
  const [search,setSearch]=useState('')
  // const [exercise,setExercises]=useState([])
  const [bodyParts,setBodyParts]=useState([])
  useEffect(()=>{
    const fetchExercisesData=async()=>{
      const bodyPartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
       setBodyParts(['all',...bodyPartsData])
    }
    fetchExercisesData();
     console.log(bodyParts)
  },[])
  const handleSearch=async()=>{
    
    if(search){
      if(search.length===0) return
      const exerciseData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
      const SearchedExercises=exerciseData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
          || exercise.target.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
          || exercise.bodyPart.toLowerCase().includes(search)
        );
      setSearch('')
      setExercises(SearchedExercises)
    }
  }
  return (
    <Stack alignContent={'center'} justifyContent={'center'} mt={'37px'} p='20px'>
      <Typography fontWeight={700} sx={{ fontSize:{lg:'44px',xs:'30x'}}} mb={'50px'} textAlign={'center'}>
        Awesome Exercises You <br/> Should Know
      </Typography>
      <Box position="relative" mb='72px'>
         <TextField 
           sx={{
             input:{
               fontWeight:'700',
               boredr:'none',
              //  borderRadius:'4px',
               width:{lg:'1170px',xs:'350px'},
               background:'#ffff',
               borderRadius:'40px'
           }
            }} 
            height={'76px'}
            placeholder='Search exercises...'
            type='text'
            value={search}
            onChange={(e)=>setSearch(e.target.value.toLowerCase())}
            >

           </TextField>
           <Button className='search-btn' sx={{
               background:'#ff2625' ,
               color:'#fff',
               textTransform:'none',
               width:{lg:'175px',xs:'80px'},
               fontSixe:{lg:'20px',xs:'14px'},
               height:'56px',
               position:'absolute',
              
             }}
             onClick={handleSearch}>
             Search
           </Button>
      </Box>
      <Box sx={{position:"relative",width:'100%',p:'20px'}}>
         <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises
