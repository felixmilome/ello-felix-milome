
import { Typography, Button, Container, Grid, Card, Box, CardContent } from '@mui/material';
import {BookType} from '@/utils/types'
import Image from 'next/image';
import { keyframes } from '@emotion/react';
import { bookItemSx } from '@/app/styles';

type Props = {
  book: BookType;
  readListBooks: BookType[];
  addToReadList: (book:BookType) => void
}



const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;


const BookItem = ({book, readListBooks, addToReadList}:Props) => {

  const bookInReadlist = readListBooks.some(existingBook => existingBook.title === book.title)

  return (
    <Grid item xs={12} md={12} lg={6} >
      <Card  sx={{...bookItemSx.mainCard,  animation:`${fadeIn} 0.5s ease-in-out`}}>
        <CardContent sx={bookItemSx.cardContent} >
          <Box sx={{...bookItemSx.bookCover, animation:`${fadeIn} 3.5s ease-in-out`}}>
                <Image 
                src={`/${book?.coverPhotoURL}`} 
                alt="Example Image" 
                layout='fill'
                objectFit="cover"
              
          />
            
            {bookInReadlist ?
              <Button 
              
              sx={bookItemSx.addedButton}
              >
                Added
              </Button>
              :
              <Button 
              onClick={()=> addToReadList(book)} 
                sx={bookItemSx.addButton}
              >
                Add
              </Button>            
            }

          </Box>

          <Box sx={{width:'60%', ml:2}}>

            <Typography fontWeight={'bold'} sx={{my:1}} component="div">
              {book?.title}
            </Typography>
            
            <Typography variant="body2">
              Author:
            <span style={{fontWeight:'600'}}> {book?.author}</span>
            
            </Typography>
            
            <Typography variant="body2">
              Level:
              <span style={{fontWeight:'600' }}> {book?.readingLevel}</span>      
            </Typography>

          </Box>

        </CardContent>
      </Card>
    </Grid>
  )
}

export default BookItem