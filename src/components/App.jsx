import Header from './Header'
import Main from './Main'
import Project from './Project';
import Technologies from './Technologies'
import Student from './Student';
import Footer from './Footer'
import Register from './Register';
import Login from './Login'
import NotFoundPage from './NotFoundPage';
import Profile from './Profile';
import Movies from './Movies'
import SavedMovies from './SavedMovies'

import { useState } from 'react';

import { Switch, Route } from 'react-router-dom';

function App() {

  const [burgerActive, setBurgerActive] = useState(false);

  function handleActiveBurger (status) {
    if(burgerActive) {
      setBurgerActive(false);
      document.body.style.overflow = 'scroll';
    } else {
      setBurgerActive(true);
      document.body.style.overflow = 'hidden';
    }
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Header />
          <Main />
          <Project />
          <Technologies />
          <Student />
          <Footer />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='/profile'>
          <Profile isActive={handleActiveBurger} burgerActive={burgerActive}/>
        </Route>
        <Route path='/movies'>
          <Movies isActive={handleActiveBurger} burgerActive={burgerActive}/>
        </Route>
        <Route path='/saved-movies'>
         <SavedMovies isActive={handleActiveBurger} burgerActive={burgerActive}/>
        </Route>
        <Route path='*'>
          <NotFoundPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;