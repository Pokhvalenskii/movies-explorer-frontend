import Header from './Header'
import Promo from './Promo';
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

import mainApi from '../utils/MainApi';

function App() {

  const [burgerActive, setBurgerActive] = useState(false);
  const [liked, setLiked] = useState(false);

  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');

  function handleActiveBurger (status) {
    if(burgerActive) {
      setBurgerActive(false);
      document.body.style.overflow = 'scroll';
    } else {
      setBurgerActive(true);
      document.body.style.overflow = 'hidden';
    }
  }

  function handleLiked (status) {
    if(liked) {
      setLiked(false);
    } else {
      setLiked(true);
    }
  }

  // REGISTRATION

  function handleSignup (data) {
    mainApi._signup(data)
      .then(() => {
        setUserName(data.name);
        setUserEmail(data.email);
      })
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Header />
          <Promo />
          <Project />
          <Technologies />
          <Student />
          <Footer />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Register
            signup={handleSignup}
          />
        </Route>
        <Route path='/profile'>
          <Profile
            isActive={handleActiveBurger}
            burgerActive={burgerActive}
          />
        </Route>
        <Route path='/movies'>
          <Movies
            isActive={handleActiveBurger}
            burgerActive={burgerActive}
            liked={handleLiked}
            likedStatus={liked}
          />
        </Route>
        <Route path='/saved-movies'>
         <SavedMovies
          isActive={handleActiveBurger}
          burgerActive={burgerActive}
          liked={handleLiked}
          likedStatus={liked}
         />
        </Route>
        <Route path='*'>
          <NotFoundPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
