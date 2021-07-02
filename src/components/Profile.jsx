import HeaderProfile from './HeaderProfile';

function Profile (props) {
  return(
    <section className='profile'>
      <HeaderProfile isActive={props.isActive} burgerActive={props.burgerActive}/>
      <form className='profile-form'>
        <h2 className='profile-form__title'>Привет, Виталий!</h2>
        <div className='profile-form__input-wrapper'>
          <p className='profile-form__input-label'>Имя</p>
          <input className='profile-form__input' type='text' dir='rtl' maxLength='30' minLength='1'
          placeholder='Имя'/>
        </div>
        <div className='profile-form__input-wrapper'>
          <p className='profile-form__input-label'>E-mail</p>
          <input className='profile-form__input' type='email' dir='rtl' maxLength='30' minLength='1' placeholder='E-mail'/>
        </div>
        <button className='profile-form__btn profile-form__btn_type_edit'>Редактировать</button>
        <button className='profile-form__btn profile-form__btn_type_exit'>Выйти из аккаунта</button>
      </form>
    </section>
  );
}

export default Profile;