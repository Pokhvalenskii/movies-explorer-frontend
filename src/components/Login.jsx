import logo from '../images/logo.svg';

function Login (props) {
  return(
    <section className='login'>
      <div className='login__wrapper'>
        <a href='/' className='login__wrapper-logo'>
          <img className='logo' src={logo} alt='Логотип'/>
        </a>
        <h2 className='login__title'>Рады видеть!</h2>
        <form className='form'>
          <p className='form__label'>E-mail</p>
          <input className='form__input' type='email' placeholder='E-mail' required/>
          <p className='form__label'>Пароль</p>
          <input className='form__input' type='password' placeholder='пароль' required/>
          <button className='form__btn form__btn_type_signin'>Войти</button>
        </form>
        <p className='login__subtitle'>
          Еще не зарегистрированы?
          <a className='login__link' href='http://localhost:3000/signup'>Регистрация</a>
        </p>
      </div>
    </section>
  );
};

export default Login;