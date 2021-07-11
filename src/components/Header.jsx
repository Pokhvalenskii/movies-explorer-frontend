import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import Menu from './Menu';



function Header (props) {

  const isActive = props.burgerActive ? 'menu-btn_active' : '';

  return (
    <header className='header'>
      <Link to='/'>
        <img className='logo' src={logo} alt='Логотип'/>
      </Link>
      <div className='header__wrapper'>
        <Link className='header__btn-singup' to='/signup'>Регистрация</Link>
        <Link className='header__btn-login' to='/signin'>Войти</Link>
      </div>
      {isActive && <Menu />}
    </header>
  );
}

export default Header;