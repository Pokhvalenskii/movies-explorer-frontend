import MoviesCard from './MovieCard';
import Footer from './Footer';
import SearchForm from './SearchForm'
import HeaderProfile from './HeaderProfile';

function Movies (props) {

  console.log('foundMovies', props.foundMovies, ' savedMovies ', props.savedMovies)

  let renderMovies = []

  if(props.foundMovies && props.savedMovies) {
    props.foundMovies.forEach(movie => {
      props.savedMovies.forEach(savedMovie => {
        if(movie.nameRU === savedMovie.nameRU) {
          console.log('Этот фильм добавлен')
          movie.saved = true;
        }
      })
      renderMovies.push(movie);
    })
  }

  console.log('RenderMovie ',renderMovies)

  return(
    <section className='movies'>
      <HeaderProfile
        isActive={props.isActive}
        burgerActive={props.burgerActive}
      />
      <SearchForm
        searchMovies={props.searchMovies}
      />
      <div className='movies__place'>
        {
          renderMovies.map(item => (
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