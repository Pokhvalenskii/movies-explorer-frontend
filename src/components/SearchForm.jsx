import Checkbox from "./Checkbox";

function SearchForm (props) {
  return(
    <form className='search-form'>
      <div className='search-form__wrapper'>
        <input className='search-form__input' type='text' placeholder='Фильм' />
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