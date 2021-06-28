import logo from '../images/logo.svg';
import icon from '../images/icon-user.svg';

import Menu from './Menu';

function HeaderProfile (props) {

  const isActive = props.burgerActive ? 'menu-btn_active' : '';

  return(
    <div className='header-profile'>
      <a href='/'>
        <img className='logo' src={logo} alt='Логотип'/>
      </a>
      <nav className='header-profile__nav'>
        <a href='/movies' className='header-profile__text header-profile__text_type_fat'>Фильмы</a>
        <a href='/saved-movies' className='header-profile__text'>Сохранённые фильмы</a>
        <a href='/profile' className='header-profile__text header-profile__text_type_fat'>Аккаунт</a>
        <div className='icon-block'>
          <img className='icon-block__img' src={icon} alt='иконка профиля'/>
        </div>
      </nav>
      <div className={`menu-btn ${isActive}`} onClick={props.isActive}>
        <span className='menu-btn__line'></span>
      </div>
      {isActive && <Menu />}
    </div>
  );
}

export default HeaderProfile;