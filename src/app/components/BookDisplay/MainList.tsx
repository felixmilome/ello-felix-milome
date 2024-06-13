import {Grid, Box} from '@mui/material';
import BookItem from './BookItem';
import {BookType} from '@/utils/types'
import { mainListSx } from '@/app/styles';

type Props = {
  books: BookType[];
  readListBooks: BookType[];
  addToReadList: (book: BookType) => void;
  
}


const MainList = ({books, readListBooks, addToReadList}:Props) => {

  return (
    <Box sx={mainListSx.container}>
      <Grid container spacing={4} sx={mainListSx.grid}>
  
          {books?.length>0 && books.map((book, index) => (
            <BookItem key={index} book={book} readListBooks={readListBooks} addToReadList={addToReadList} />
          ))}

      </Grid>
    </Box>
  )
}

export default MainList