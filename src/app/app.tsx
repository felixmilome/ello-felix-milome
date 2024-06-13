"use client"
import { Box} from '@mui/material';
import Header from './components/Header';
import Books from './components/BookDisplay/Books';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import { BookType } from '@/utils/types';
import useSearchBooks from '@/hooks/useSearchBooks';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '@/queries/books';


export default function App () {

  const [searchTerm, setSearchTerm] = useState ('');
  const [books, setBooks] = useState<BookType[]>([]);
  const [firstLoadBooks, setFirstLoadBooks] = useState<BookType[]>([]);
  const { loading, error, data } = useQuery(GET_BOOKS);
  console.log({books});

  useEffect (() => {
    if (data?.books?.length > 0 && searchTerm === '') {
        setBooks(data.books);
        setFirstLoadBooks(data.books)
    }
  }, [data]);

  useSearchBooks(searchTerm, setBooks, firstLoadBooks);

  return (

  
          <Box sx={{height:'100vh'}}>
            
            <Header
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm} 
              books = {books}
            />
            <Books
              searchTerm={searchTerm}
              books = {books}
              setBooks={setBooks}
            />
            <Footer/>
          

          </Box>



  );
}
