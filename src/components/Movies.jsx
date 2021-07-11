import MoviesCard from './MovieCard';
import Footer from './Footer';
import SearchForm from './SearchForm'
import HeaderProfile from './HeaderProfile';

function Movies (props) {


  let renderMovies = [];
  let hiddenBtn = true;

  if(props.localMoviesState && props.localSavedMoviesState) {
    props.localMoviesState.forEach(movie => {
      props.localSavedMoviesState.forEach(savedMovie => {
        if(movie.nameRU === savedMovie.nameRU) {
          movie.saved = true;
        }
      })
      renderMovies.push(movie);
    })
  }

  if( props.visible > renderMovies.length) {
    hiddenBtn = false
  }
  
  return(
    <section className='movies'>
      <HeaderProfile
        isActive={props.isActive}
        burgerActive={props.burgerActive}
      />
      <SearchForm
        place={props.place}
        searchMovies={props.searchMovies}
      />
      <div className='movies__place'>
        {
          renderMovies.slice(0, props.visible).map(item => (
          <MoviesCard
            key={item.id}
            movie={item}
            saveMovie={props.saveMovie}
            deleteMovie={props.deleteMovie}
          />
          ))
        }
      </div>
      {}
      {hiddenBtn && <button className='movies__btn' onClick={props.showMore}>Ещё</button>}
      <Footer />
    </section>
  );
}

export default Movies;