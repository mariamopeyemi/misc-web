import { Box, 
    Container, 
    Typography} 
    from '@mui/material';
import React from 'react';
import Link from '@mui/material/Link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='h-[auto] md:px-[4rem] bg-[#111111] text-white flex flex-col ' >
    <Box sx={{
        display: 'flex',
        flexDirection: {md:'row', xs:'column'},
        justifyContent:'space-between',
        // textAlign:'center',
        alignItems:'center',
        marginTop:'6vh',
        // marginBottom:'4vh',
        // backgroundColor: {md:'red', xs:'greenyellow'},
        }}
        >
        <Container >
            <Image src='/img/yeboxLogo.svg' alt='Brand logo' width='80px' height='80px' />
        </Container>
        <Container sx={{display: 'flex', flexDirection: 'row', justifyContent: {md:'flex-end', xs:'space-between'}, gap: {md:'4rem', xs:'2rem'},  }}>
            <Typography className='footer-text' >info@yebox.com</Typography>
            <Typography className='footer-text' >+234-916-299-4549</Typography>
        </Container>
    </Box>
    <hr className='bg-[#2E3228] h-[2px] border-0 my-[2rem] ' />
    {/* <Divider sx={{
        color: 'white',
    }} /> */}
    <Box sx={{
        display: 'flex',
        flexDirection: {md:'row', xs:'column'},
        justifyContent:'space-between',
        marginTop:{md:'6vh', xs:'0vh'},
        gap: {md:'0px', xs:'1rem'},
        marginBottom:'4vh',
        // backgroundColor: {md:'red', xs:'greenyellow'},
        }}
        >
        <Container><p className=' sub-title2-light'> &#169; {" "} {new Date().getFullYear()} Yebox Technologies. All Right Reserved  </p></Container>
        <Container sx={{display: 'flex', gap: {md:'2rem', xs:'1rem'}, justifyContent: {md:'flex-end', xs:'flex-start'}, width:{md:'30%', xs:'100%'}}}>
            <Image src='/img/linkedin.svg' alt='Brand logo' width='25px' height='25px' />
            <Image src='/img/twitter.svg' alt='Brand logo' width='25px' height='25px' />
            <Image src='/img/ig.svg' alt='Brand logo' width='25px' height='25px' />
        </Container>
    </Box>
    </div>
  )
}

export default Footer;