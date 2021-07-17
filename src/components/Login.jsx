import { useState, useEffect } from 'react';
import logo from '../images/logo.svg';
import { useHistory, Link } from 'react-router-dom';

function Login (props) {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const [validate, setValidate] = useState(false)

  const [emailError, setEmailError] = useState('Нужно заполнить E-mail')
  const [passwordError, setPasswordError] = useState('Нужно заполнить пароль')

  const [clearEmail, setClearEmail] = useState(false);
  const [clearPassword, setClearPassword] = useState(false);

  const status = validate ? '' : 'form__btn_status_disabled';
  const patternEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

  useEffect(() => {
    if(emailError || passwordError) {
      setValidate(false);
    } else {
      setValidate(true)
    }
  }, [emailError, passwordError]);

  const checkStateErrors = (e) => {
    switch(e.target.name) {
      case 'email':
        setClearEmail(true)
        break
      case 'password':
        setClearPassword(true)
        break
      default :
        break
    }
  }

  function handleChangeUserPassword (e) {
    setUserPassword(e.target.value)
    if(e.target.value.length < 6) {
      setPasswordError('Пароль не должен быть меньше 6 символов')
      if(!e.target.value) {
        setPasswordError('Нужно заполнить пароль')
      }
    } else {
      setPasswordError('')
    }
  };

  function handleChangeUserEmail (e) {
    setUserEmail(e.target.value)
    if(!e.target.value.match(patternEmail)) {
      setEmailError('Неправильный E-mail');
      if(!e.target.value) {
        setEmailError('Нужно заполнить E-mail')
      }
    } else {
      setEmailError('')
    }
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
            name='email'
            onBlur={e => checkStateErrors(e)}
            className='form__input'
            type='email'
            placeholder='E-mail'
            required
            onChange={handleChangeUserEmail}
            value={userEmail}
          />
          {(emailError && clearEmail) && <span className='form__error'>{emailError}</span>}
          <p className='form__label'>Пароль</p>
          <input
            name='password'
            onBlur={e => checkStateErrors(e)}
            className='form__input'
            type='password'
            placeholder='пароль'
            required
            onChange={handleChangeUserPassword}
            value={userPassword}
          />
          {(passwordError && clearPassword) && <span className='form__error'>{passwordError}</span>}
          <button className={`form__btn form__btn_type_signin ${status}`} type='submit' disabled={!validate}>Войти</button>
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