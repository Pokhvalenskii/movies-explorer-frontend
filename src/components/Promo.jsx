import logo from './../images/landing-logo.svg'

function Promo (props) {
  return(
    <section className='promo'>
      <div className='promo__wrapper'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <a className='promo__btn' href='#about-project'>Узнать больше</a>
      </div>
      <img className='promo__image' src={logo} alt='Главное лого' />
    </section>
  );
}

export default Promo;