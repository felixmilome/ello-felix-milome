import { AppBar,Box,IconButton, InputBase} from "@mui/material";
import Image from "next/image";
import SearchIcon from '@mui/icons-material/Search';
import { BookType, SetStateType } from "@/utils/types";
import { appBarSx } from "../styles";



type Props = { 
  searchTerm: string;
  setSearchTerm: SetStateType<string>;
  books: BookType[];
}

const Header = ({searchTerm, setSearchTerm, books}:Props) => {



  return (
    <AppBar position="static" sx={appBarSx.container}>
     
        <Box sx={appBarSx.innerContainer}>

          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <Image src='/elloinc_logo.jpeg' alt="Ello" width={50} height={50}/>
          </Box>

          <Box sx={appBarSx.searchInput}>
            <IconButton sx={{ px:1 }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search books…"
              value={searchTerm}
              onChange={(e)=>setSearchTerm(e.target.value)}
              inputProps={{ 'aria-label': 'search' }}
              sx={{color: 'inherit', width:'100%'}}
            />

            {searchTerm?.length>0 &&
              <Box sx={appBarSx.searchResult}>
                {books?.length} Search Results
              </Box>
            }         
          </Box>
           

          <Box sx={{ display: 'flex',  alignItems: 'center', justifyContent:'end' }}>
            <Box sx={appBarSx.dpContainer}>
              <Image 
              src={`/teacher.png`} 
              alt="Example Image" 
              layout='fill'
              objectFit="cover"
              />
            </Box> 
          </Box>
          
        </Box>
      
    </AppBar>
  );
};

export default Header;
