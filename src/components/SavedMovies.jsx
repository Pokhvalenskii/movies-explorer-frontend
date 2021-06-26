import MoviesCard from './MovieCard';
import Footer from './Footer';
import SearchForm from './SearchForm'
import HeaderProfile from './HeaderProfile';
function SavedMovies (props) {
  return(
    <section className='savedMovies'>
      <HeaderProfile />
      <SearchForm />
      <div className='savedMovies__place'>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      <Footer />
    </section>
  );
}

export default SavedMovies;