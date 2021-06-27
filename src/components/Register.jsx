import logo from '../images/logo.svg'

function Register (props) {
  return(
    <section className='register'>
      <div className='register__wrapper'>
        <a href='/' className='register__wrapper-logo'>
          <img className='logo' src={logo} alt='Логотип'/>
        </a>
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form className='form'>
          <p className='form__label'>Имя</p>
          <input className='form__input'/>
          <p className='form__label'>E-mail</p>
          <input className='form__input' type='email'/>
          <p className='form__label'>Пароль</p>
          <input className='form__input' type='password'/>
          <button className='form__btn form__btn_type_signup'>Зарегистрироваться</button>
        </form>
        <p className='register__subtitle'>
            Уже зарегистрированы?
            <a className='register__link' href='http://localhost:3000/signin'>Войти</a>
        </p>
      </div>
    </section>
  );
}

export default Register;