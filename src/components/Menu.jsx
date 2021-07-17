import { Link } from 'react-router-dom';

function Menu (props) {
  const isActiveWrapper = props.burgerActive ? 'menu__wrapper_active' : '';


  return(
    <div className='menu'>
      <div className={`menu__wrapper ${isActiveWrapper}`}>
        <div className='menu__overlay'></div>
        <li className='menu__list'>
          <ul className='menu__list-item'>
            <Link className='menu__link' to='/'>Главная</Link>
          </ul>
          <ul className='menu__list-item'>
            <Link className='menu__link' to='/movies'>Фильмы</Link>
          </ul>
          <ul className='menu__list-item'>
            <Link className='menu__link' to='/saved-movies'>Сохранённые Фильмы</Link>
          </ul>
        </li>
      </div>
    </div>
  );
}

export default Menu;