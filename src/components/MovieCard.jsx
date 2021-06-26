function MoviesCard (props) {
  return(
    <article className='card'>
      <img className='card__img' src="https://www.soyuz.ru/public/uploads/files/2/7446725/20200918112442b2267e02b5.png" alt="URL КАРТОЧКА" />
      <div className='card__wrapper'>
        <h2 className='card__title'>Lock, Stock and Two Smoking Barrels</h2>
        <div className='card__like'></div>
      </div>
      <p className='card__film-length'>2ч 5м</p>
    </article>
  );
}

export default MoviesCard;