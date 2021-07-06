import MoviesCard from './MovieCard';
import Footer from './Footer';
import SearchForm from './SearchForm'
import HeaderProfile from './HeaderProfile';
function SavedMovies (props) {

  // const savedLocalMovies = JSON.parse(localStorage.getItem('savedMovies'));  // console.log('saved_Movie', props.savedMovies)
  // console.log('props: ', props.savedMovies, 'local', savedLocalMovies);

  return(
    <section className='movies'>
      <HeaderProfile isActive={props.isActive} burgerActive={props.burgerActive}/>
      <SearchForm />
      <div className='movies__place'>
        {           
          props.savedMovies.map(item => (
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