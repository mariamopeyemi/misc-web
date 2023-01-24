import React from 'react';
// import PrimaryBtn from '../buttons/PrimaryBtn';
import { Box, Typography } from '@mui/material';

const Blurb2 = ({title, name, firm}) => {
  return (
    <Box className=' testCard md:w-[350px] p-[2rem] m-[1rem] flex flex-col items-start'>
        <Typography className='sub-title4-dark mb-6 text-start'> {title} </Typography>
        <Typography className='sub-title5-black mb-2'> {name} </Typography>
        <Typography className='sub-title5-nude mb-6'> {firm} </Typography>
        {/* <PrimaryBtn text={btnText} /> */}
    </Box>
  )
}

export default Blurb2;