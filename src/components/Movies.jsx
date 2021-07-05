import MoviesCard from './MovieCard';
import Footer from './Footer';
import SearchForm from './SearchForm'
import HeaderProfile from './HeaderProfile';

function Movies (props) {
  return(
    <section className='movies'>
      <HeaderProfile isActive={props.isActive} burgerActive={props.burgerActive}/>
      <SearchForm />
      <div className='movies__place'>
        {props.movies.map(movie => (
        <MoviesCard
          key={movie.id}
          liked={props.liked}
          likedStatus={props.likedStatus}
          movie={movie}
        />))}
      </div>
      <button className='movies__btn'>Ещё</button>
      <Footer />
    </section>
  );
}

export default Movies;