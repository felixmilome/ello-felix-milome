import {Box} from '@mui/material';
import Readlist from './Readlist';
import MainList from './MainList';
import { useMediaQuery } from '@mui/material';
import { keyframes } from '@emotion/react';
import { useState} from 'react';
import {ArrowCircleRightOutlined, ArrowCircleLeftOutlined} from '@mui/icons-material';
import { BookType, SetStateType } from '@/utils/types';
import { booksSx } from '@/app/styles';





type Props = {
  searchTerm:string;
  books: BookType[];
  setBooks: SetStateType<BookType[]>;
}

const Books = ({searchTerm, books, setBooks}:Props) => {
  
  const aboveMdScreen = useMediaQuery('(min-width:750px)');
  const [readList, setReadList] = useState<boolean>(false);
  const [readListBooks, setReadListBooks] = useState<BookType[]>([]);

  const addToReadList = (book: BookType) => {
    const updatedReadListBooks = [book, ...readListBooks];
    setReadListBooks(updatedReadListBooks);
}
  const removeFromReadList = (title:string) =>{
    const updatedReadListBooks = readListBooks.filter(book => book.title !== title);
    setReadListBooks(updatedReadListBooks);
  }

 


  const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;
  //`

  return (

    <Box sx={{ ...booksSx.container, animation: `${fadeIn} 0.5s ease-in-out` }}>    
  
      {aboveMdScreen === true ?
          <>  
            <MainList books={books}   readListBooks = {readListBooks} addToReadList = {addToReadList}/>
            <Readlist books={readListBooks} removeFromReadList = {removeFromReadList} />   
          </>     
          :
          <>   
          <Box sx= {{display: 'flex', position:'absolute', top:0,  width:'100vw', left:0, zIndex:2, alignItems: 'center', justifyContent:'end'}}>
          
            {readList ? 
              <Box onClick={()=>setReadList(!readList)}  sx={{ display: 'flex', px:1,  alignItems:'center', justifyContent:'center', color:'teal', borderRadius:'none', bgcolor:'white', mx:0, fontSize:'12px',  fontWeight:'bold', textTransform:'none' }}>
                <p>Hide </p>
                <ArrowCircleRightOutlined sx={{ml:0.5}}/>
                
              </Box>
              :
              <Box onClick={()=>setReadList(!readList)}  sx={{ display: 'flex', px:1, borderLeft:'2px solid whitesmoke', borderBottom:'2px solid whitesmoke',  alignItems:'center', justifyContent:'center', color:'teal', borderRadius:'none', bgcolor:'white', mx:0, fontSize:'12px',  fontWeight:'bold', textTransform:'none' }}>
                  <p>Show Read List</p>
                  <ArrowCircleLeftOutlined sx={{ml:0.5}}/>
              </Box>
            }
          </Box>
          
          {readList ?
            <Readlist books={readListBooks} removeFromReadList = {removeFromReadList}/>
            :
            < MainList books={books} readListBooks = {readListBooks} addToReadList = {addToReadList}/>
          }
      
          </>
      } 
          
  </Box>
  )
}

export default Books