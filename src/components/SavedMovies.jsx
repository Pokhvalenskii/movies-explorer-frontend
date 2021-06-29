import MoviesCard from './MovieCard';
import Footer from './Footer';
import SearchForm from './SearchForm'
import HeaderProfile from './HeaderProfile';
function SavedMovies (props) {
  return(
    <section className='movies'>
      <HeaderProfile isActive={props.isActive} burgerActive={props.burgerActive}/>
      <SearchForm />
      <div className='movies__place'>
        <MoviesCard
          liked={props.liked}
          likedStatus={props.likedStatus}
          />
          <MoviesCard
          liked={props.liked}
          likedStatus={props.likedStatus}
          />
          <MoviesCard
          liked={props.liked}
          likedStatus={props.likedStatus}
          />
          <MoviesCard
          liked={props.liked}
          likedStatus={props.likedStatus}
          />
      </div>
      <Footer />
    </section>
  );
}

export default SavedMovies;