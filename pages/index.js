'use client'

import Header from '@/components/header';
import Layout from '@/components/layout';
import { Box, Button, Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      <Layout>
        <Box component={"section"} className='flex flex-wrap items-center w-full'>
          <Box component="div" className='w-6/12 flex flex-col items-start gap-6'>
            <h2 className='text-[62px] font-semibold'>Dare to Be Different</h2>
            <p className='text-lg leading-9'>Dare to be different Dare to be different Dare to be different Dare to be different Dare to be different Dare to be different Dare to be different Dare to be different Dare to be different Dare to be different Dare to be different </p>
            <Button sx={{fontFamily: "Poppins"}} href='/products' variant='contained' className='bg-[#EFF1ED] text-black text-base'>Shop Now</Button>
          </Box>
          <Box component="div" className='w-6/12'>
            <div className="pointer-events-none">
              <iframe src="https://giphy.com/embed/3o85xpLLKhFwT2SqLC" className='pointer-events-none w-full' width="680" height="680" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </div>
          </Box>
        </Box>
      </Layout>
    </>
  );
}
