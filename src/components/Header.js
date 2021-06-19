import logo from '../images/logo.svg'

function Header (props) {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Логотип'/>
      <div className='header__wrapper'>
        <a className='header__btn-singup' href='http://localhost:3000/'>Регистрация</a>
        <button className='header__btn-login'>Войти</button>        
      </div>
    </header>
  );
}

export default Header;