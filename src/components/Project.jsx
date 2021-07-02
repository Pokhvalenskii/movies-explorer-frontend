function Project (props) {
  return (
    <section className='project'>
      <h2 className='section-title' id='about-project'>О проекте</h2>
      <div className='project__texts'>
        <div className='project__text-item'>
          <h3 className='project__text-title'>Дипломный проект включал 5 этапов</h3>
          <p className='project__text-subtitle'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='project__text-item'>
          <h3 className='project__text-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='project__text-subtitle'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='project__progress-bar'>
        <div className='project__back-end'>
          <p className='project__back-end-title project__back-end-title_theme_back-end'>1 неделя</p>
          <p className='project__back-end-subtitle'>Back-end</p>
        </div>
        <div className='project__front-end'>
          <p className='project__front-end-title project__front-end-title_theme_front-end'>4 недели</p>
          <p className='project__front-end-subtitle'>Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default Project;