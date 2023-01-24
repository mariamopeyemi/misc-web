import React from 'react';
// import PrimaryBtn from '../buttons/PrimaryBtn';
import { Box, Typography } from '@mui/material';

const Blurb = ({title, details, sn, circle, square}) => {
  return (
    <Box className=' md:w-[500px]'>
      {circle && <div className='mb-6 p-[1rem] text-center w-[50px] h-[50px] rounded-[50%] bg-black'>
      <Typography className='sub-title3-light '> {sn} </Typography>
      </div>}
      { square && <div className='mb-6 p-[1rem] text-center w-[50px] h-[50px]  bg-black'>
      <Typography className='sub-title3-light '> {sn} </Typography>
      </div>}
        
        <Typography className='sub-title4-dark mb-6'> {title} </Typography>
        <Typography className='sub-title5-nude mb-6'> {details} </Typography>
        {/* <PrimaryBtn text={btnText} /> */}
    </Box>
  )
}

export default Blurb;