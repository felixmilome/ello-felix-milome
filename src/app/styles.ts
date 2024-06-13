export const appBarSx = {

  container: { 
        bgcolor: 'white',
        py:'10px',
        borderBottom: '2px solid whitesmoke',
        height:'10%',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        elevation: 3 
    },

    innerContainer: {mx: 4, height:'100%',  display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    searchInput: { position: 'relative', display:'flex',  width:'50%', borderRadius: '10px' },
    searchResult: {position:'absolute', fontWeight:'light', textAlign:'center', fontSize:'12px', color:'gray', bottom:-10, left:50, zIndex:2},
    dpContainer:{position:'relative', width: '40px', marginRight:'10px', height: '40px', borderRadius: '30%', overflow: 'hidden'  }

  }

export const booksSx = {
  container: {height:'85%', position:'relative',  flex:8, display:'flex', justifyContent:'center', alignItems:'center', bgcolor:'#f9f9f9'}
}

export const mainListSx = {
  container: {flex:3, height: '100%', overflow: 'auto' },
  grid: { flex:1, p:4, justifyContent: 'start', alignItems: 'center' }
}
export const readListSx = {
  container: {height: '100%',  borderLeft: '2px solid whitesmoke', bgcolor:'white'},
  topBar: {height:'15%', p:2, borderBottom: '2px solid whitesmoke', display:'flex', justifyContent:'space-between', alignItems:'center' },
  dpContainer: {position:'relative', width: '50px', marginRight:'10px', height: '50px', borderRadius: '30%', overflow: 'hidden'},
  switchIcon: {display:'flex', flexDirection:'column',color:'gray', justifyContent:'center', alignItems:'center', textTransform:'none'},
  grid:{ flex:1, p:4, justifyContent: 'start', alignItems: 'center' }
}

export const bookItemSx = {
  mainCard: { boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.2)', display:'flex', justifyContent:'start', alignItems:'center', bgcolor: 'white', height:'160px', borderRadius: '15px'},
  cardContent: { display:'flex', justifyContent:'center', alignItems:'center', bgcolor: 'white', height:'150px', borderRadius: '15px'},
  bookCover: {position:'relative', width: '80px', marginRight:'10px', height: '100px', borderRadius: '5%', overflow: 'hidden'  },
  addedButton:{
    p: 0, 
    position: 'absolute', 
    bottom: 0, 
    color: 'white', 
    bgcolor: 'orangered',
    opacity:0.9,
    textTransform: 'none', 
    fontSize: '14px', 
    fontWeight: 'bold', 
    transition: 'background-color 0.3s ease 0.1s', 
    
  },
  addButton: {
    p: 0, 
    position: 'absolute', 
    bottom: 0, 
    color: 'white', 
    bgcolor: 'orange', 
    textTransform: 'none', 
    fontSize: '14px', 
    fontWeight: 'bold', 
    transition: 'background-color 0.3s ease 0.1s', 
    '&:hover': {
      bgcolor: 'primary.main',
    }
  }

}
export const listItemSx ={
  mainCard: { boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.2)',  position: 'relative', display:'flex', justifyContent:'start', alignItems:'center', bgcolor:'#f9f9f9', height:'120px', borderRadius: '15px'},
  cardContent:{ display:'flex', justifyContent:'center',  height:'120px', alignItems:'center',  borderRadius: '15px'}, 
  bookCover: {position:'relative', width: '70px', marginRight:'5px', height: '80px', borderRadius: '8%', overflow: 'hidden'  },
  wholeTitle: {position: 'absolute', width:'100%', fontSize:'12px', top:0, p:1, left:0, bgcolor:'white'},
  removeButton:{
    p: 0, 
    color: 'white', 
    bgcolor: 'teal', 
    textTransform: 'none', 
    fontSize: '12px', 
    fontWeight: 'semibold', 
    transition: 'background-color 0.3s ease 0.1s', 
    '&:hover': {
      bgcolor: 'orangered',
    }
  }
}


