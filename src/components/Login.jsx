import { useState } from 'react';
import logo from '../images/logo.svg';
import { useHistory, Link } from 'react-router-dom';

function Login (props) {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  function handleChangeUserPassword (e) {
    setUserPassword(e.target.value)
  };

  function handleChangeUserEmail (e) {
    setUserEmail(e.target.value)
  };

  function submit (e) {
    e.preventDefault();
    props.signin({
      email: userEmail,
      password: userPassword,
    })
      .then(() => {
        history.push('/profile');
      })
  }

  return(
    <section className='login'>
      <div className='login__wrapper'>
        <Link to='/' className='login__wrapper-logo'>
          <img className='logo' src={logo} alt='Логотип'/>
        </Link>
        <h2 className='login__title'>Рады видеть!</h2>
        <form className='form' onSubmit={submit}>
          <p className='form__label'>E-mail</p>
          <input
            className='form__input'
            type='email'
            placeholder='E-mail'
            required
            onChange={handleChangeUserEmail}
            value={userEmail}
          />
          <p className='form__label'>Пароль</p>
          <input
            className='form__input'
            type='password'
            placeholder='пароль'
            required
            onChange={handleChangeUserPassword}
            value={userPassword}
          />
          <button className='form__btn form__btn_type_signin' type='submit'>Войти</button>
        </form>
        <p className='login__subtitle'>
          Еще не зарегистрированы?
          <Link className='login__link' to='/signup'>Регистрация</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;