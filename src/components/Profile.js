import logo from '../images/logo.svg';
import icon from '../images/icon-user.svg';

function Profile (props) {
  return(
    <section className='profile'>
      <div className='profile__header'>
        <img className='logo' src={logo} alt='Логотип'/>
        <nav className='profile__nav'>
          <p className='profile__text profile__text_type_fat'>Фильмы</p>
          <p className='profile__text'>Сохранённые фильмы</p>
          <p className='profile__text'>Аккаунт</p>
          <div className='icon-block'>
            <img className='icon-block__img' src={icon} alt='иконка профиля'/>
          </div>
        </nav>        
        <form className='profile-form'>
          <h2 className='profile-form__title'>Привет, Виталий!</h2>
          <input className='profile-form__input' type='text'/>
          <input className='profile-form__input' type='email'/>
          <button className='profile-form__btn profile-form__btn_type_edit'>Редактировать</button>
          <button className='profile-form__btn profile-form__btn_type_exit'>Выйти из аккаунта</button>
        </form>
      </div>
    </section>
  );
}

export default Profile;