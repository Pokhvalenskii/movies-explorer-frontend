import HeaderProfile from './HeaderProfile';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useContext, useState } from 'react';

function Profile (props) {

  const currentUser = useContext(CurrentUserContext);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');


  function submit (e) {
    e.preventDefault();
    props.editProfile({
      email: userEmail,
      name: userName,
    })
  }


  function handleChangeUserName (e) {
    setUserName(e.target.value)
  }

  function handleChangeUserEmail (e) {
    setUserEmail(e.target.value)
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
            className='profile-form__input'
            type='text'
            // dir='rtl'
            maxLength='30'
            minLength='1'
            placeholder={currentUser.name}
            value={userName}
            onChange={handleChangeUserName}
          />
        </div>
        <div className='profile-form__input-wrapper'>
          <p className='profile-form__input-label'>E-mail</p>
          <input
            className='profile-form__input'
            type='email'
            // dir='rtl'
            maxLength='30'
            minLength='1'
            placeholder={currentUser.email}
            value={userEmail}
            onChange={handleChangeUserEmail}
          />
        </div>
        <button className='profile-form__btn profile-form__btn_type_edit'>Редактировать</button>
        <button className='profile-form__btn profile-form__btn_type_exit' onClick={logout}>Выйти из аккаунта</button>
      </form>
    </section>
  );
}

export default Profile;