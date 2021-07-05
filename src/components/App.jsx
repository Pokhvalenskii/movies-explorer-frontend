import Register from './Register';
import Login from './Login';
import NotFoundPage from './NotFoundPage';
import Profile from './Profile';
import Movies from './Movies';
import SavedMovies from './SavedMovies';
import Main from './Main';
import { useState, useEffect, useCallback} from 'react';
import { Switch, Route, useHistory} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

import { CurrentUserContext } from '../contexts/CurrentUserContext';
import mainApi from '../utils/MainApi';
import moviesApi from '../utils/MoviesApi';

function App() {
  const history = useHistory();
  const [burgerActive, setBurgerActive] = useState(false);
  const [liked, setLiked] = useState(false);
  const [currentUser, setCurrentUser] = useState({})
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const JWTtoken = localStorage.getItem('jwt');
  const [movies, setMovies] = useState({});
  // console.log(movies)
  useEffect(() => {
    // console.log('первая проверка авторизации. JWT-', JWTtoken, movies)
    if(JWTtoken !== null) {
      Promise.all([mainApi._getMe({ jwt: JWTtoken }), getMovies()])
        .then(value => {
          setCurrentUser(value[0])
          setMovies(value[1])
          setLoggedIn(true);
        })
          .catch(error => console.log(`${error}`));
    }
  }, []);

  function getMovies () {
    return moviesApi.getMovies();
  }

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
    return mainApi._signup(data)
      .then(() => {
        // ПОПАП РЕГИСТРАЦИИ
      })
  }

  // LOGIN
  function handleSignin (data) {
    return mainApi._signin(data)
      .then((res) => {
        setLoggedIn(true);
        setUserEmail(data.email);
        console.log('login: jwt - ', res.token)
        mainApi._getMe({
          jwt: res.token
        })
          .then(user => {
            // console.log('USER', user)
            setCurrentUser(user);
            // console.log('CONTEXT:', currentUser)
            setUserEmail(user.email);
            setUserName(user.name);
          })
        localStorage.setItem('jwt', res.token);
      }).catch(() => {
        // ПОПАП ОШИБКИ ВХОДА
      })
  }

  const checkLoggedIn = useCallback(() => {
    // console.log('checkLoggedIn')
    if(JWTtoken !== null) {
      mainApi._getMe({ jwt: JWTtoken })
        .then(res => {
          setLoggedIn(true)
          setUserName(res.name);
          setUserEmail(res.email);
          history.push('/')
        })
    }
  }, [history]);

  useEffect(() => {
    checkLoggedIn();
  }, [checkLoggedIn])

  function logout () {
    localStorage.removeItem('jwt');
    setUserName('');
    setUserEmail('');
    setLoggedIn(false);
    history.push('/')
  }

  function editProfile (data) {
    mainApi._editUser({
      email: data.email,
      name: data.name,
      jwt: JWTtoken
    })
      .then(res => {
        setCurrentUser(res);
      })
  }



  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path='/'>
          <Main loggedIn={loggedIn}/>
        </Route>
        <Route path='/signin'>
          <Login
            signin={handleSignin}
          />
        </Route>
        <Route path='/signup'>
          <Register
            signup={handleSignup}
          />
        </Route>
        <ProtectedRoute path='/profile' loggedIn={loggedIn}>
          <Profile
            logout={logout}
            isActive={handleActiveBurger}
            burgerActive={burgerActive}
            userName={userName}
            editProfile={editProfile}
          />
        </ProtectedRoute>
        <ProtectedRoute path='/movies' loggedIn={loggedIn}>
          <Movies
            isActive={handleActiveBurger}
            burgerActive={burgerActive}
            liked={handleLiked}
            likedStatus={liked}
            movies={movies}
          />
        </ProtectedRoute>
        <ProtectedRoute path='/saved-movies' loggedIn={loggedIn}>
          <SavedMovies
            isActive={handleActiveBurger}
            burgerActive={burgerActive}
            liked={handleLiked}
            likedStatus={liked}
          />
        </ProtectedRoute>
        <Route path='*'>
          <NotFoundPage/>
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
