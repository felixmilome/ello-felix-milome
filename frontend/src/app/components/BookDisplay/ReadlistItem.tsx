
import { Typography, Button, Grid, Card, Box, CardContent } from '@mui/material';
import { BookType } from '@/utils/types';
import { useState } from 'react';
import Image from 'next/image';
import { keyframes } from '@emotion/react';
import { listItemSx } from '@/app/styles';

type Props = {
  book: BookType;
  removeFromReadList: (title:string) => void;
}


const ReadlistItem = ({book, removeFromReadList}:Props) => {
  const [wholeTitle, setWholeTitle] = useState(false)

  const titleTimeout = () => {
    setWholeTitle(true);
    setTimeout(() => {
      setWholeTitle(false);
    }, 3 * 1000);
  };

  const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
  `;

  return (
  <Grid item xs={12} md={12} lg={12} >
    <Card  sx={{...listItemSx.mainCard, animation:`${fadeIn} 1s ease-in-out`}}>
      <CardContent sx={listItemSx.cardContent} >
        <Box sx={listItemSx.bookCover}>
          <Image 
            src={`/${book?.coverPhotoURL}`} 
            alt="Example Image" 
            layout='fill'
            objectFit="cover"         
          />   
        </Box>

        <Box  sx={{width:'80%', ml:2}}>
          {wholeTitle &&
          <Box sx={listItemSx.wholeTitle}>
            {book.title}
          </Box>
          }

          <Typography onMouseEnter={titleTimeout} onMouseDown={titleTimeout} variant="body2" fontWeight={'bold'}  sx={{ cursor:'pointer'}}  component="div">
            {book?.title.slice(0,15)}...
          </Typography>

          <Typography variant="body2" fontSize={'12px'}>
            Author:
            <span style={{fontWeight:'600'}}> {book?.author}</span>
          </Typography>

          <Typography variant="body2" fontSize={'12px'}>
            Level:
            <span style={{fontWeight:'600'}}> {book?.readingLevel}</span>
          </Typography>

          <Button 
            onClick={()=> removeFromReadList(book?.title)} 
            sx={listItemSx.removeButton}
          >
            Remove
          </Button>
        </Box>
      </CardContent>
    </Card>
  </Grid>
  )
}

export default ReadlistItem