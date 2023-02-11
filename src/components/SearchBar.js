import './searchbar.css'
import { FaSearch } from "react-icons/fa"; 

function SearchBar({searchHandler,title,setTitle}) {
  

  return (
    
    <div className="searchBar">
     
         
         <input type='text' className='searchInput'   value={title} onChange={e=>setTitle(e.target.value)} />
         <FaSearch size='25px' className='searchIcon' onClick={searchHandler} />
       
    </div>
  )
}

export default SearchBar
   