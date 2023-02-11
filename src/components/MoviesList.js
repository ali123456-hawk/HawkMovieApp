import './movielist.css'


function MoviesList({data}) {
 
  return (
     

    <div className='listContainer'>
         {
          data.map((movie)=>(
            <div className='movie' key={movie.Poster}>
             <img src={movie.Poster} alt='movie poster'/>
            <h1>{movie.Title}</h1>
             <p>Year : {movie.Year}</p>  
            </div>
          ))
         }
         
         
    </div>
  )
}

export default MoviesList
