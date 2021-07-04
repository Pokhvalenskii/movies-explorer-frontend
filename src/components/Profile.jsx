import HeaderProfile from './HeaderProfile';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useContext } from 'react';

function Profile (props) {

  const currentUser = useContext(CurrentUserContext)
  console.log('PROPS: ', props, 'USERCONTEXT: ', currentUser, )
  function submit (e) {
    e.preventDefault();
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
          <input className='profile-form__input' type='text' dir='rtl' maxLength='30' minLength='1'
          placeholder={currentUser.name}/>
        </div>
        <div className='profile-form__input-wrapper'>
          <p className='profile-form__input-label'>E-mail</p>
          <input className='profile-form__input' type='email' dir='rtl' maxLength='30' minLength='1' placeholder={currentUser.email}/>
        </div>
        <button className='profile-form__btn profile-form__btn_type_edit'>Редактировать</button>
        <button className='profile-form__btn profile-form__btn_type_exit' onClick={logout}>Выйти из аккаунта</button>
      </form>
    </section>
  );
}

export default Profile;