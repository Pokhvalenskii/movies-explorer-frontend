import MoviesCard from './MovieCard';
import Footer from './Footer';
import SearchForm from './SearchForm'
import HeaderProfile from './HeaderProfile';
import { useEffect, useState } from 'react';

function Movies (props) {

  const [prerender, setPrerender] = useState(props.localMoviesState);
  const [btn, setBtn] = useState(true);

  console.log('checkLengthMovies: ', props.localMoviesState, ' <= all | save => ', props.localSavedMoviesState)

  let renderMovies = [];
  // const render = (renderMovies.length === 0) ? prerender : renderMovies;
  let hiddenBtn = true;

  // useEffect(() => {
  //   let prerender = [];
  //   if(props.localMoviesState && props.localSavedMoviesState) {
  //     props.localMoviesState.forEach(movie => {
  //       props.localSavedMoviesState.forEach(savedMovie => {
  //         if(movie.nameRU === savedMovie.nameRU) {
  //           movie.saved = true;
  //         }
  //       })
  //       prerender.push(movie);
  //       setPrerender(prerender)
  //     })
  //   }

  //   if( props.visible > prerender.length) {
  //     setBtn(false);
  //   }
  // }, [])
  // console.log(prerender)

  // if(props.foundMovies && props.savedMovies) {
  //   props.foundMovies.forEach(movie => {
  //     props.savedMovies.forEach(savedMovie => {
  //       if(movie.nameRU === savedMovie.nameRU) {
  //         movie.saved = true;
  //       }
  //     })
  //     renderMovies.push(movie);
  //   })
  // }
  // const [render, setRender] = useState([])
  // useEffect(() => {
  //   console.log('rerender')
  //   let rerender = []
  //   if(props.localMoviesState && props.localSavedMoviesState) {
  //     props.localMoviesState.forEach(movie => {
  //       props.localSavedMoviesState.forEach(savedMovie => {
  //         if(movie.nameRU === savedMovie.nameRU) {
  //           movie.saved = true;
  //         }
  //       })
  //       rerender.push(movie);
  //     })
  //     console.log('rerender arr', rerender)
  //     setRender(rerender);
  //   }
  // }, [props.localSavedMoviesState])

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


  console.log('renderMovies', renderMovies)
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
          renderMovies.slice(0, props.visible).map(item => (   //renderMovies prerender
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