import SearchBar from "../components/SearchBar"
import {useEffect, useState} from 'react';
import MoviesList from "../components/MoviesList";
import Navbar from "../components/Navbar";
import './home.css'


function Home() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('Superman');
  const [loading,setLoading] = useState(true);

  const searchHandler = async() => {

    const response = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=${process.env.REACT_APP_SECRET_KEY}`)

      const mydata = await response.json()
      setData(mydata.Search)
        setLoading(false); 

  }

  useEffect(() => {
     searchHandler(); 
     // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])  

  
  





  return (
    <div>
        <Navbar/> 
        <SearchBar searchHandler={searchHandler} title={title} setTitle={setTitle} />  
         <MoviesList data={data}/> 
        {loading && <h1 className="Loading">Loading......</h1>} 
    </div>
  )
}

export default Home
