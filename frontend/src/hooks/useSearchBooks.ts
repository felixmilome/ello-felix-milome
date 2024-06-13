import { useEffect } from 'react';
import { BookType, SetStateType } from '@/utils/types';



const useSearchBooks = (searchTerm:string, setBooks:SetStateType<BookType[]>, books:BookType[]) => {
  useEffect(() => {

    if(books?.length>0){
      const findBooksByTitle = (searchTerm:string) => {
        const lowerCaseTerm = searchTerm?.toLowerCase();
        return books.filter(book => book?.title?.toLowerCase()?.includes(lowerCaseTerm));
      };
      const filteredBooks = findBooksByTitle(searchTerm);
      console.log(filteredBooks);
      
      setBooks(filteredBooks);
    }
  
  }, [searchTerm]);
};

export default useSearchBooks;
