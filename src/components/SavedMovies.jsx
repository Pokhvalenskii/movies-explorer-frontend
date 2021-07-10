import MoviesCard from './MovieCard';
import Footer from './Footer';
import SearchForm from './SearchForm'
import HeaderProfile from './HeaderProfile';
function SavedMovies (props) {

  const savedMovies = props.savedMovies ? props.savedMovies : JSON.parse(localStorage.getItem('savedMovies'));
  const renderMovie = props.foundMovies ? props.foundMovies : savedMovies;
  
  return(
    <section className='movies'>
      <HeaderProfile isActive={props.isActive} burgerActive={props.burgerActive}/>
      <SearchForm
        place={props.place}
        savedMovies={savedMovies}
        searchMovies={props.searchMovies}
      />
      <div className='movies__place'>
        {
          renderMovie.map(item => (
            <MoviesCard
              key={item._id}
              saveMovie={props.saveMovie}
              deleteMovie={props.deleteMovie}
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