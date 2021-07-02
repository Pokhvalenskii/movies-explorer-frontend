import logo from './../images/landing-logo.svg'
function Main (props) {
  return (
    <section className='main'>
      <div className='main__body'>
        <img className='main__logo' src={logo} alt='Главное лого' />
        <h1 className='main__title'>Учебный проект студента факультета Веб_разработки.</h1>
      </div>
      <p className='main__sibtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <a className='main__btn' href='#about-project'>Узнать больше</a>
      {/* <div className='main__footer'>
        <a className='main__footer-link' href='#about-project'>О проекте</a>
        <a className='main__footer-link' href='#about-techs'>Технологии</a>
        <a className='main__footer-link' href='#about-student'>Студент</a>
      </div> */}
    </section>
  );
}

export default Main;