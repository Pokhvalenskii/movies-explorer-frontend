function MoviesCard (props) {
  
  const saved = props.movie.saved ? 'card__like_status_enable' : '';
  const movie = props.movie;
  const movieImage = props.movie.image.url ? 'https://api.nomoreparties.co' + props.movie.image.url : props.movie.image;

  function handleSaveMovie () {
    props.saveMovie(movie);
  }

  function timeConversion (minutes) {
    let hours = Math.trunc(minutes/60);
    let mins = minutes % 60;
      if(hours === 0) {
        return mins + 'м';
      }
      if(mins === 0) {
        return hours + 'ч';
      }
      else {
        return  hours + 'ч ' + mins + 'м';
      }
  }

  return(
    <article className='card'>
      <div className='card__wrapper'>
        <h2 className='card__title'>{props.movie.nameRU}</h2>
        <div className={`card__like ${saved}`} onClick={handleSaveMovie}></div>
      </div>
      <p className='card__film-length'>{timeConversion(props.movie.duration)}</p>
      <a className='card__wrapper-img' href={movie.trailer || movie.trailerLink} target='_blank' rel='noreferrer'>
        <img className='card__img' src={`${movieImage}`} alt="URL КАРТОЧКА" />
      </a>
    </article>
  );
}

export default MoviesCard;