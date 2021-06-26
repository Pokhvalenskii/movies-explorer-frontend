import logo from '../images/logo.svg'

function Header (props) {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Логотип'/>
      <div className='header__wrapper'>
        <a className='header__btn-singup' href='/signup'>Регистрация</a>
        <a className='header__btn-login' href='/signin'>Войти</a>
      </div>
    </header>
  );
}

export default Header;