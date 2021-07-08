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
  const JWTtoken = localStorage.getItem('jwt');
  const [burgerActive, setBurgerActive] = useState(false);
  const [currentUser, setCurrentUser] = useState({})
  const [jwt, setJwt] = useState({})
  // const [userName, setUserName] = useState('');
  // const [userEmail, setUserEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [savedMovies, setSavedMovies] = useState();
  const [newMovie, setNewMovie] = useState();
  const [foundMovies, setFoundMovies] = useState();
  const [foundSavedMovie, setFoundSavedMovie] = useState();
  // const [userMovies, setUserMovies] = useState();

  // console.log(savedMovies, 'savedMOVIES INIT')
  useEffect(() => {
    if(JWTtoken !== null) {
      Promise.all([mainApi._getMe({ jwt: JWTtoken }), getMovies(), getSavedMovies()]) //
        .then(value => {
          console.log('Первый useEffect')
          setCurrentUser(value[0])
          // console.log('promise2', value[2][1].owner)
          let userMovies = []
          value[2].forEach(movie => {
            if(movie.owner === value[0]._id) {
              userMovies.push(movie);
            }
          })
          // console.log('userMovie', userMovies)
          // console.log('allMovies', value[1])
          localStorage.setItem('movies', JSON.stringify(value[1]))
          localStorage.setItem('savedMovies', JSON.stringify(userMovies))
          setSavedMovies(userMovies);
          setNewMovie(value[1])
          setLoggedIn(true);
        })
          .catch(error => console.log(`${error}`));
    } else {
      console.log('Сработал но без токена')
      setLoggedIn(false);
      history.push('/signin');
    }
  }, [jwt]);

  function getMovies () {
    return moviesApi.getMovies();
  }

  function getSavedMovies () {
    return mainApi._getMovies({
      jwt: JWTtoken,
    })
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
        console.log('login: jwt - ', res.token)
        mainApi._getMe({
          jwt: res.token
        })
          .then(user => {
            setCurrentUser(user);
          })
        localStorage.setItem('jwt', res.token);
        setJwt(res.token);
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
          // setUserName(res.name);
          // setUserEmail(res.email);
          // history.push('/')
        })
    }
  }, [JWTtoken]);

  useEffect(() => {
    checkLoggedIn();
  }, [checkLoggedIn])

  function logout () {
    localStorage.removeItem('jwt');
    localStorage.removeItem('savedMovies')
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

  function saveMovie (movie) {
    // console.log('saveMovie', movie)
    const country = movie.country ? movie.country : 'NONE';
    mainApi._addMovie({
      country: country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: 'https://api.nomoreparties.co' + movie.image.url,
      trailer: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: 'https://api.nomoreparties.co' + movie.image.formats.thumbnail.url,
      movieId: String(movie.id) + currentUser._id,
      jwt: JWTtoken,
    })
      .then(res => {
        // console.log('добавили фильм', res)
        getSavedMovies().then(res => {
          let userMovies = []
          res.forEach(movie => {
            if(movie.owner === currentUser._id) {
              userMovies.push(movie);
            }
          })
          setSavedMovies(userMovies);
        })
      })
  }

  function deleteMovie (id) {
    mainApi._deleteMovie({
      movieId: id,
      jwt: JWTtoken,
    })
      .then((res) => {
        // console.log('deleteMovie: ', res)
        getSavedMovies().then(res => {
          let userMovies = []
          res.forEach(movie => {
            if(movie.owner === currentUser._id) {
              userMovies.push(movie);
            }
          })
          setSavedMovies(userMovies);
        })
      })
  }

  function searchMovies (name, place) {

    if(place === 'savedMovies') {
      console.log('поиск по сохронкам')
      let foundMovies = [];
      console.log('поиск по всем')
      savedMovies.forEach(movie => {
        if(movie.nameRU.includes(name)){
          foundMovies.push(movie)
        }
      })
      setFoundSavedMovie(foundMovies);
    }

    if(place === 'movies') {
      let foundMovies = [];
      console.log('поиск по всем')
      newMovie.forEach(movie => {
        if(movie.nameRU.includes(name)){
          foundMovies.push(movie)
        }
      })
      setFoundMovies(foundMovies);
    }

    // console.log('foundMovies name: ', name, ' ARR: ' , foundMovies)
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
            editProfile={editProfile}
          />
        </ProtectedRoute>
        <ProtectedRoute path='/movies' loggedIn={loggedIn}>
          <Movies
            isActive={handleActiveBurger}
            burgerActive={burgerActive}
            foundMovies={foundMovies}
            saveMovie={saveMovie}
            deleteMovie={deleteMovie}
            savedMovies={savedMovies}

            place={'movies'}

            searchMovies={searchMovies}
          />
        </ProtectedRoute>
        <ProtectedRoute path='/saved-movies' loggedIn={loggedIn}>
          <SavedMovies
            isActive={handleActiveBurger}
            burgerActive={burgerActive}
            saveMovie={saveMovie}
            deleteMovie={deleteMovie}
            savedMovies={savedMovies}

            foundMovies={foundSavedMovie}
            place={'savedMovies'}

            searchMovies={searchMovies}
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
