
function Menu (props) {
  // const isActive = props.burgerActive ? 'menu__block_active' : '';
  const isActiveWrapper = props.burgerActive ? 'menu__wrapper_active' : '';


  return(
    <div className='menu'>
      {/* <div className={`menu__block ${isActive}`} onClick={props.isActive}>
        <span className='menu__line'></span>
      </div> */}
      <div className={`menu__wrapper ${isActiveWrapper}`}>
        <div className='menu__overlay'></div>
        <li className='menu__list'>
          <ul className='menu__list-item'>
            <a className='menu__link' href='/'>Главная</a>
          </ul>
          <ul className='menu__list-item'>
            <a className='menu__link' href='/movies'>Фильмы</a>
          </ul>
          <ul className='menu__list-item'>
            <a className='menu__link' href='/saved-movies'>Сохранённые Фильмы</a>
          </ul>
        </li>
      </div>
    </div>
  );
}

export default Menu;