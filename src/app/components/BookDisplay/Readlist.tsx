import { Typography, Button, Grid, Box} from '@mui/material';
import Image from 'next/image';
import ReadlistItem from './ReadlistItem';
import {SwitchAccountOutlined} from '@mui/icons-material';
import { useMediaQuery } from '@mui/material';
import { keyframes } from '@emotion/react';
import {BookType} from '@/utils/types';
import { readListSx } from '@/app/styles';

type Props = {
  books: BookType[];
  removeFromReadList: (title: string) => void;
}


const Readlist = ({books,  removeFromReadList}:Props) => {

    const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;




    const isSmallScreen = useMediaQuery('(max-width: 1100px)');

  return (
    <Box sx = {{...readListSx.container,flex:isSmallScreen? 2 : 1,  animation: `${slideIn} 1.5s ease-in-out` }}>
      <Box sx ={readListSx.topBar}>
      
        <Box sx={{display:'flex', justifyContent:'start', alignItems:'center'}}>
          <Box sx={readListSx.dpContainer}>
              <Image 
                src="/child.png" 
                alt="Example Image" 
                layout='fill'
                objectFit="cover"
              
              />
          </Box>
          <Box>
            <p style= {{fontWeight:'900', fontSize:'14px', color:'black'}}> 
              Anne's Reading List
            </p>
            <p style= {{fontWeight:'300', fontSize:'12px', color:'gray'}}> 
              12 years
            </p>
          </Box>
        </Box>
        
        <Button sx= {readListSx.switchIcon}> 
          <SwitchAccountOutlined  />
        </Button>
      </Box>
      <Box sx = {{height: '85%', overflow:'scroll'}}>

        {books?.length<1  &&
        <Typography fontWeight={'bold'} textAlign={'center'} color={'lightgray'} sx={{my:10}} component="div">
              Add items to list
        </Typography>
        }
        
        <Grid container spacing={4} sx={readListSx.grid}>
        
            {books?.length>0 && books.map((book, index) => (
              <ReadlistItem key={index} book={book} removeFromReadList= {removeFromReadList} />
            ))}

        </Grid>
      </Box>
    </Box>
  )
}

export default Readlist