import { useState } from 'react';
import logo from '../images/logo.svg'

function Register (props) {

  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');
  

  function handleChandeUserName (e) {
    setUserName(e.target.value)
  };

  function handleChandeUserPassword (e) {
    setUserPassword(e.target.value)
  };

  function handleChandeUserEmail (e) {
    setUserEmail(e.target.value)
  };

  function submit (e) {
    e.preventDefault();
    props.signup({
      email: userEmail,
      password: userPassword,
      name: userName
    })
  }
  return(
    <section className='register'>
      <div className='register__wrapper'>
        <a href='/' className='register__wrapper-logo'>
          <img className='logo' src={logo} alt='Логотип'/>
        </a>
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form className='form' onSubmit={submit}>
          <p className='form__label'>Имя</p>
          <input
            className='form__input'
            type='text'
            placeholder='имя'
            required
            value={userName}
            onChange={handleChandeUserName}
          />
          <p className='form__label'>E-mail</p>
          <input
            className='form__input'
            type='email'
            placeholder='E-mail'
            required
            value={userEmail}
            onChange={handleChandeUserEmail}
          />
          <p className='form__label'>Пароль</p>
          <input
            className='form__input'
            type='password'
            placeholder='пароль'
            required
            value={userPassword}
            onChange={handleChandeUserPassword}
          />
          <button className='form__btn form__btn_type_signup' type='submit'>Зарегистрироваться</button>
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