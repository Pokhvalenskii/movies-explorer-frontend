function MoviesCard (props) {

  const isLiked = props.likedStatus;
  const like = isLiked ? 'card__like_status_enable' : '';
  const movie = props.movie;
  // console.log(movie.image.url)
  function handleLike() {
    props.liked();
  }

  return(
    <article className='card'>
      <div className='card__wrapper'>
        <h2 className='card__title'>Lock, Stock and Two Smoking Barrels</h2>
        <div className={`card__like ${like}`} onClick={handleLike}></div>
      </div>
      <p className='card__film-length'>2ч 5м</p>
      <div className='card__wrapper-img'>
        <img className='card__img' src={`https://api.nomoreparties.co${movie.image.url}`} alt="URL КАРТОЧКА" />
      </div>
    </article>
  );
}

export default MoviesCard;