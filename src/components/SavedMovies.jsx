import MoviesCard from './MovieCard';
import Footer from './Footer';
import SearchForm from './SearchForm'
import HeaderProfile from './HeaderProfile';
function SavedMovies (props) {

  const saveMovies = JSON.parse(localStorage.getItem('savedMovies'));

  return(
    <section className='movies'>
      <HeaderProfile isActive={props.isActive} burgerActive={props.burgerActive}/>
      <SearchForm />
      <div className='movies__place'>
        {
          saveMovies.map(item => (
            <MoviesCard
              key={item.movieId}
              saveMovie={props.saveMovie}
              movie={item}
            />
          ))
        }
      </div>
      <Footer />
    </section>
  );
}

export default SavedMovies;