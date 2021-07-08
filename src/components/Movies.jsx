import MoviesCard from './MovieCard';
import Footer from './Footer';
import SearchForm from './SearchForm'
import HeaderProfile from './HeaderProfile';

function Movies (props) {
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
          props.foundMovies && props.foundMovies.map(item => (
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