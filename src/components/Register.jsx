import { useEffect, useState } from 'react';
import logo from '../images/logo.svg'
import { useHistory, Link } from 'react-router-dom';

function Register (props) {
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const [validate, setValidate] = useState(false)

  const [emailError, setEmailError] = useState('Нужно заполнить E-mail')
  const [nameError, setNameError] = useState('Нужно заполнить имя')
  const [passwordError, setPasswordError] = useState('Нужно заполнить пароль')

  const [clearEmail, setClearEmail] = useState(false);
  const [clearName, setClearName] = useState(false);
  const [clearPassword, setClearPassword] = useState(false);

  const status = validate ? '' : 'form__btn_status_disabled';

  useEffect(() => {
    if(emailError || nameError || passwordError) {
      setValidate(false);
    } else {
      setValidate(true)
    }
  }, [emailError, nameError, passwordError]);

  const checkStateErrors = (e) => {
    switch(e.target.name) {
      case 'name':
        setClearName(true)
        break
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

  const patternEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
  const patternName = /^[A-Za-zА-яёЁ -]+$/;


  function handleChangeUserName (e) {
    setUserName(e.target.value)
    if(!e.target.value.match(patternName)) {
      setNameError('Только латиницу, кириллицу, пробел или дефис');
      if(!e.target.value) {
        setNameError('Нужно заполнить имя')
      }
    } else {
      setNameError('')
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
            name='name'
            onBlur={e => checkStateErrors(e)}
            className='form__input'
            type='text'
            placeholder='имя'
            required
            value={userName}
            onChange={handleChangeUserName}
          />
          {(nameError && clearName) && <span className='form__error'>{nameError}</span>}
          <p className='form__label'>E-mail</p>
          <input
            name='email'
            onBlur={e => checkStateErrors(e)}
            className='form__input'
            type='email'
            placeholder='E-mail'
            required
            value={userEmail}
            onChange={handleChangeUserEmail}
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
            value={userPassword}
            onChange={handleChangeUserPassword}
          />
          {(passwordError && clearPassword) && <span className='form__error'>{passwordError}</span>}
          <button
            disabled={!validate}
            className={`form__btn form__btn_type_signup ${status}`}
            type='submit'
            >Зарегистрироваться</button>
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