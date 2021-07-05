import logo from '../images/logo.svg';
import profilelogo from '../images/profile-btn.svg'
import Menu from './Menu';
import { Link } from 'react-router-dom';

function HeaderProfile (props) {

  const isActive = props.burgerActive ? 'menu-btn_active' : '';
  const logged = props.loggedIn ? 'header-profile_loggedIn' : '';

  return(
    <div className={`header-profile ${logged}`}>
      <Link to='/'>
        <img className='logo' src={logo} alt='Логотип'/>
      </Link>
      <nav className='header-profile__nav'>
        <Link to='/movies' className='header-profile__text header-profile__text_type_fat'>Фильмы</Link>
        <Link to='/saved-movies' className='header-profile__text'>Сохранённые фильмы</Link>
        <Link to='/profile' className='header-profile__text header-profile__text_type_fat'>
          <img src={profilelogo} alt="Логотип профиля" />
        </Link>
      </nav>
      <div className={`menu-btn ${isActive}`} onClick={props.isActive}>
        <span className='menu-btn__line'></span>
      </div>
      {isActive && <Menu />}
    </div>
  );
}

export default HeaderProfile;