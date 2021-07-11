import HeaderProfile from './HeaderProfile';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useContext, useState, useEffect } from 'react';

function Profile (props) {

  const currentUser = useContext(CurrentUserContext);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');


  const [validate, setValidate] = useState(false)

  const [emailError, setEmailError] = useState('Нужно заполнить E-mail')
  const [nameError, setNameError] = useState('Нужно заполнить пароль')

  const [clearEmail, setClearEmail] = useState(false);
  const [clearName, setClearName] = useState(false);

  const status = validate ? '' : 'profile-form__btn_type_disabled';
  const patternName = /^[A-Za-zА-яёЁ -]+$/;
  const patternEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

  useEffect(() => {
    if(emailError || nameError) {
      setValidate(false);
    } else {
      setValidate(true)
    }
  }, [emailError, nameError]);

  const checkStateErrors = (e) => {
    switch(e.target.name) {
      case 'email':
        setClearEmail(true)
        break
      case 'name':
        setClearName(true)
        break
      default :
        break
    }
  }

  function submit (e) {
    e.preventDefault();
    props.editProfile({
      email: userEmail,
      name: userName,
    })
  }


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
  }

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
  }

  function logout () {
    props.logout();
  }


  return(
    <section className='profile'>
      <HeaderProfile isActive={props.isActive} burgerActive={props.burgerActive}/>
      <form className='profile-form' onSubmit={submit}>
        <h2 className='profile-form__title'>Привет, {currentUser.name}!</h2>
        <div className='profile-form__input-wrapper'>
          <p className='profile-form__input-label'>Имя</p>
          <input
            name='name'
            onBlur={e => checkStateErrors(e)}

            className='profile-form__input'
            type='text'
            maxLength='30'
            minLength='1'
            placeholder={currentUser.name}
            value={userName}
            onChange={handleChangeUserName}
          />          
        </div>
        {(nameError && clearName) && <span className='form__error'>{nameError}</span>}
        <div className='profile-form__input-wrapper'>
          <p className='profile-form__input-label'>E-mail</p>
          <input
            name='email'
            onBlur={e => checkStateErrors(e)}

            className='profile-form__input'
            type='email'
            maxLength='30'
            minLength='1'
            placeholder={currentUser.email}
            value={userEmail}
            onChange={handleChangeUserEmail}
          />          
        </div>
        {(emailError && clearEmail) && <span className='form__error'>{emailError}</span>}
        <button 
        className={`profile-form__btn profile-form__btn_type_edit ${status}`}
        disabled={!validate}
        >Редактировать</button>
        <button className='profile-form__btn profile-form__btn_type_exit' onClick={logout}>Выйти из аккаунта</button>
      </form>
    </section>
  );
}

export default Profile;