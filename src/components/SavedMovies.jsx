import MoviesCard from './MovieCard';
import Footer from './Footer';
import SearchForm from './SearchForm'
import HeaderProfile from './HeaderProfile';
function SavedMovies (props) {

  const savedMovies = props.savedMovies ? props.savedMovies : JSON.parse(localStorage.getItem('savedMovies'));
  console.log('savedMovies', savedMovies)
  return(
    <section className='movies'>
      <HeaderProfile isActive={props.isActive} burgerActive={props.burgerActive}/>
      <SearchForm />
      <div className='movies__place'>
        {           
          savedMovies.map(item => (
            <MoviesCard
              key={item._id}
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