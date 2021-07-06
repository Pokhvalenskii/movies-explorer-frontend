function MoviesCard (props) {

  const isLiked = props.likedStatus;
  const like = isLiked ? 'card__like_status_enable' : '';
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

  // console.log('MOVIE', movieImage)
  return(
    <article className='card'>
      <div className='card__wrapper'>
        <h2 className='card__title'>{props.movie.nameRU}</h2>
        <div className={`card__like ${like}`} onClick={handleSaveMovie}></div>
      </div>
      <p className='card__film-length'>{timeConversion(props.movie.duration)}</p>
      <div className='card__wrapper-img'>
        <img className='card__img' src={`${movieImage}`} alt="URL КАРТОЧКА" />
      </div>
    </article>
  );
}

export default MoviesCard;