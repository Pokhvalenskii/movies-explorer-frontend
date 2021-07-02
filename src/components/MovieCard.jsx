function MoviesCard (props) {

  const isLiked = props.likedStatus;
  const like = isLiked ? 'card__like_status_enable' : '';

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
        <img className='card__img' src="https://www.soyuz.ru/public/uploads/files/2/7446725/20200918112442b2267e02b5.png" alt="URL КАРТОЧКА" />
      </div>
    </article>
  );
}

export default MoviesCard;