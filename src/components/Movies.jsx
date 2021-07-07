import MoviesCard from './MovieCard';
import Footer from './Footer';
import SearchForm from './SearchForm'
import HeaderProfile from './HeaderProfile';

function Movies (props) {
  // console.log('movies1, ', props.movies)
  const moviesTest = [];
  props.movies.forEach(movie => {
    if(movie) {
      moviesTest.push(movie);
      // console.log(moviesTest);
    }
  })
  return(
    <section className='movies'>
      <HeaderProfile isActive={props.isActive} burgerActive={props.burgerActive}/>
      <SearchForm foundMovies={props.foundMovies}/>
      <div className='movies__place'>
        {
          moviesTest.map(item => (
          <MoviesCard
            key={item.id}
            movie={item}
            saveMovie={props.saveMovie}
          />
          ))
        }
      </div>
      <button className='movies__btn'>Ещё</button>
      <Footer />
    </section>
  );
}

export default Movies;