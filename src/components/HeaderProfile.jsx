import logo from '../images/logo.svg';
import icon from '../images/icon-user.svg';

function HeaderProfile (props) {
  return(
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
  );
}

export default HeaderProfile;