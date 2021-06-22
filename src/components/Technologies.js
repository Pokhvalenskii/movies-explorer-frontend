function Technologies (props) {
  return(
    <section className='technologies'>
      <h2 className='section-title'>Технологии</h2>
      <h3 className='technologies__title'>7 технологий</h3>
      <p className='technologies__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className='technologies__stack'>
        <li className='technologies__stack-item'>
          <p className='technologies__stack-name'>HTML</p>
        </li>
        <li className='technologies__stack-item'>
          <p className='technologies__stack-name'>CSS</p>
        </li>
        <li className='technologies__stack-item'>
          <p className='technologies__stack-name'>JS</p>
        </li>
        <li className='technologies__stack-item'>
          <p className='technologies__stack-name'>React</p>
        </li>
        <li className='technologies__stack-item'>
          <p className='technologies__stack-name'>Git</p>
        </li>
        <li className='technologies__stack-item'>
          <p className='technologies__stack-name'>Express.js</p>
        </li>
        <li className='technologies__stack-item'>
          <p className='technologies__stack-name'>mongoDB</p>
        </li>
      </ul>
    </section>
  );
}

export default Technologies;