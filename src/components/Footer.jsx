function Footer (props) {
  return (
    <section className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__links'>
        <p className='footer__copyright'>©2021 Похваленский Никита</p>
        <ul className='footer__list'>
          <li className='footer__list-item'>
            <a className='footer__link' href='https://praktikum.yandex.ru/'>Яндекс.Практикум</a>
          </li>
          <li className='footer__list-item'>
            <a className='footer__link' href='https://github.com/Pokhvalenskii'>Github</a>
          </li>
          <li className='footer__list-item'>
            <a className='footer__link' href='https://t.me/pokhvalenskii'>Telegram</a>
          </li>          
        </ul>
      </div>
    </section>
  );
};

export default Footer;


