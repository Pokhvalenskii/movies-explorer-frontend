import logo from './../images/landing-logo.svg'
function Main (props) {
  return (
    <section className='main'>
      <div className='main__body'>
        <img className='main__logo' src={logo} alt='Главное лого' />
        <h1 className='main__title'>Учебный проект студента факультета Веб-разработки.</h1> 
      </div>
      <div className='main__footer'>
        <a className='main__footer-link' href='URL'>О проекте</a>
        <a className='main__footer-link' href='URL'>Технологии</a>
        <a className='main__footer-link' href='URL'>Студент</a>
      </div>
    </section>
  );
}

export default Main;