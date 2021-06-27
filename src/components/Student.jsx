import photo from '../images/author-photo.jpg'
import linkLogo from '../images/logo-arrow.svg'
function Student (props) {
  return (
    <section className='student'>
      <h2 className='section-title' id='about-student'>Студент</h2>
      <div className='student__info'>
        <div className='student__texts'>
          <h3 className='student__title'>Никита Похваленский</h3>
          <p className='student__subtitle'>Фронтенд-разработчик, 25лет</p>
          <p className='student__text'>Во время учебы пробовал много сфер деятельности, но остановился на веб-разработке. Хочу
дальше совершенствовать свои навыки именно в этой области, и стать кунг-фу мастером в ней. Не
плохо рисую, что помогает мне заниматься дизайном Twitch каналов, и лендосов. В
свободное время играю в видеоигры и зарабатываю в них.
          </p>
          <p className='student__text'>С 2020 года обучаюсь веб-разработке под присмотром опытных наставников</p>
          <div className='student__media'>
            <a className='student__media-item student__text' href='https://github.com/Pokhvalenskii' target='_blank' rel='noreferrer'>Github</a>
            <a className='student__media-item student__text' href='https://t.me/pokhvalenskii' target='_blank' rel='noreferrer'>Telegram</a>
          </div>
        </div>
        <img className='student__photo' src={photo} alt='Фотография студента'/>
      </div>
      <div className='portfolio'>
        <h3 className='portfolio__title'>Портфолио</h3>
        <a className='portfolio__link' href='https://pokhvalenskii.github.io/how-to-learn/' target='_blank' rel='noreferrer'>
          <div className='portfolio__wrapper-item'>
            <p className='portfolio__link-item'>Статичный сайт</p>
            <img className='portfolio__link-logo' src={linkLogo}  alt='Стрелочка'/>
          </div>
        </a>
        <a className='portfolio__link' href='https://pokhvalenskii.github.io/russian-travel/index.html' target='_blank' rel='noreferrer'>
          <div className='portfolio__wrapper-item'>
            <p className='portfolio__link-item'>Адаптивный сайт</p>
            <img className='portfolio__link-logo' src={linkLogo}  alt='Стрелочка'/>
          </div>
        </a>
        <a className='portfolio__link' href='http://lenskii.yandex15.nomoredomains.icu/' target='_blank' rel='noreferrer'>
          <div className='portfolio__wrapper-item'>
            <p className='portfolio__link-item'>Одностраничное приложение</p>
            <img className='portfolio__link-logo' src={linkLogo}  alt='Стрелочка'/>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Student;