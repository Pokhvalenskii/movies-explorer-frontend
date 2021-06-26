import logo from '../images/logo.svg';
import icon from '../images/icon-user.svg';

function Movies (props) {
  return(
    <section className='movies'>
      <div className='header-profile'>
        <img className='logo' src={logo} alt='Логотип'/>
        <nav className='header-profile__nav'>
          <p className='header-profile__text header-profile__text_type_fat'>Фильмы</p>
          <p className='header-profile__text'>Сохранённые фильмы</p>
          <p className='header-profile__text header-profile__text_type_fat'>Аккаунт</p>
          <div className='icon-block'>
            <img className='icon-block__img' src={icon} alt='иконка профиля'/>
          </div>
        </nav>
      </div>
      <form className='search-form'>
        <div className='search-form__wrapper'>
          <input className='search-form__input' type='text' placeholder='Фильм' />
          <button className='search-form__btn'></button>
        </div>
        <div className='search-form__checkbox'>
          <label className='checkbox'>
            <input className='checkbox__input' type='checkbox'/>
            <span className='checkbox__state'></span>
          </label>
          <p className='search-form__checkbox-text'>Короткометражки</p>
        </div>

      </form>
    </section>
  );
}

export default Movies;