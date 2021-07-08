import { useState } from "react";
import Checkbox from "./Checkbox";

function SearchForm (props) {
  const [nameMovie, setNameMovie] = useState('')

  function searchName (e) {
    setNameMovie(e.target.value)
  }

  function searchSubmit (e) {
    e.preventDefault();
    props.searchMovies(nameMovie)
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
        <Checkbox />
      </div>
    </form>
  );
}

export default SearchForm;