import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';


function Header (props) {
  return (
    <header className='header'>
      <Link to='/'>
        <img className='logo' src={logo} alt='Логотип'/>
      </Link>
      <div className='header__wrapper'>
        <Link className='header__btn-singup' to='/signup'>Регистрация</Link>
        <Link className='header__btn-login' to='/signin'>Войти</Link>
      </div>
    </header>
  );
}

export default Header;