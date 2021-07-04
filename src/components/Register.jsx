import { useState } from 'react';
import logo from '../images/logo.svg'
import { useHistory, Link } from 'react-router-dom';

function Register (props) {
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');


  function handleChangeUserName (e) {
    setUserName(e.target.value)
  };

  function handleChangeUserPassword (e) {
    setUserPassword(e.target.value)
  };

  function handleChangeUserEmail (e) {
    setUserEmail(e.target.value)
  };

  function submit (e) {
    e.preventDefault();
    props.signup({
      email: userEmail,
      password: userPassword,
      name: userName
    })
      .then(() => {
        history.push('/signin')
      })
  }

  return(
    <section className='register'>
      <div className='register__wrapper'>
        <Link to='/' className='register__wrapper-logo'>
          <img className='logo' src={logo} alt='Логотип'/>
        </Link>
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form className='form' onSubmit={submit}>
          <p className='form__label'>Имя</p>
          <input
            className='form__input'
            type='text'
            placeholder='имя'
            required
            value={userName}
            onChange={handleChangeUserName}
          />
          <p className='form__label'>E-mail</p>
          <input
            className='form__input'
            type='email'
            placeholder='E-mail'
            required
            value={userEmail}
            onChange={handleChangeUserEmail}
          />
          <p className='form__label'>Пароль</p>
          <input
            className='form__input'
            type='password'
            placeholder='пароль'
            required
            value={userPassword}
            onChange={handleChangeUserPassword}
          />
          <button
          className='form__btn form__btn_type_signup' type='submit'>Зарегистрироваться</button>
        </form>
        <p className='register__subtitle'>
            Уже зарегистрированы?
            <Link className='register__link' to='/signin'>Войти</Link>
        </p>
      </div>
    </section>
  );
}

export default Register;