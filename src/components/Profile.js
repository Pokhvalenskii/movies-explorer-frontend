import logo from '../images/logo.svg';
import icon from '../images/icon-user.svg';

function Profile (props) {
  return(
    <section className='profile'>
      <div className='header-profile'>
        <img className='logo' src={logo} alt='Логотип'/>
        <nav className='header-profile__nav'>
          <p className='header-profile__text header-profile__text_type_fat'>Фильмы</p>
          <p className='header-profile__text'>Сохранённые фильмы</p>
          <p className='header-profile__text header-profile__text_type_fat'>Аккаунт</p>
          <div className='icon-block'>
            <img className='icon-block__img' src={icon} alt='иконка профиля'/>
          </div>
        </nav>
      </div>
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