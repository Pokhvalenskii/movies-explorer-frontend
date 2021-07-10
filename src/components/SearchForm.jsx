import { useState } from "react";
import Checkbox from "./Checkbox";

function SearchForm (props) {
  const [nameMovie, setNameMovie] = useState('')

  const [timeSearch, setTimeSearch] = useState(false);

  function searchName (e) {
    setNameMovie(e.target.value)
  }

  function searchSubmit (e) {
    e.preventDefault();
    if (props.place === 'movies') {
      props.searchMovies(nameMovie, props.place, timeSearch)
    }
    if (props.place === 'savedMovies') {
      props.searchMovies(nameMovie, props.place, timeSearch)
    }

  }

  return(
    <form className='search-form' onSubmit={searchSubmit}>
      <div className='search-form__wrapper'>
        <input
          className='search-form__input'
          type='text'
          placeholder='Фильм'
          required
          value={nameMovie}
          onChange={searchName}
        />
        <button className='search-form__btn'></button>
      </div>
      <div className='search-form__checkbox'>
        <p className='search-form__checkbox-text'>Короткометражки</p>
        <Checkbox
          setTimeSearch={setTimeSearch}
          timeSearch={timeSearch}
        />
      </div>
    </form>
  );
}

export default SearchForm;