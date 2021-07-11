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
  const [visible, setVisible] = useState(3);
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [savedMovies, setSavedMovies] = useState();
  const [newMovie, setNewMovie] = useState();
  const [foundMovies, setFoundMovies] = useState();
  const [foundSavedMovie, setFoundSavedMovie] = useState();

  function showMore () {
    setVisible((value) => value + 3);
  }

  useEffect(() => {
    if(JWTtoken !== null) {
      Promise.all([mainApi._getMe({ jwt: JWTtoken }), getMovies(), getSavedMovies()]) //
        .then(value => {
          setCurrentUser(value[0])
          let userMovies = []
          value[2].forEach(movie => {
            if(movie.owner === value[0]._id) {
              userMovies.push(movie);
            }
          })
          localStorage.setItem('movies', JSON.stringify(value[1]))
          localStorage.setItem('savedMovies', JSON.stringify(userMovies))
          setSavedMovies(userMovies);
          setNewMovie(value[1])
          setLoggedIn(true);
        }).catch(error => console.log(`${error}`));
    } else {
      setLoggedIn(false);
      // history.push('/signin');
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

  function handleSignup (data) {
    return mainApi._signup(data)
  }

  function handleSignin (data) {
    return mainApi._signin(data)
      .then((res) => {
        setLoggedIn(true);
        mainApi._getMe({
          jwt: res.token
        })
          .then(user => {
            setCurrentUser(user);
          }).catch(error => console.log(`${error}`));
        localStorage.setItem('jwt', res.token);
        setJwt(res.token);
      })
  }

  const checkLoggedIn = useCallback(() => {
    if(JWTtoken !== null) {
      mainApi._getMe({ jwt: JWTtoken })
        .then(() => {
          setLoggedIn(true)
        }).catch(error => console.log(`${error}`));
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
      }).catch(error => console.log(`${error}`));
  }

  function saveMovie (movie) {
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
      .then(() => {
        getSavedMovies().then(res => {
          let userMovies = []
          res.forEach(movie => {
            if(movie.owner === currentUser._id) {
              userMovies.push(movie);
            }
          })
          setSavedMovies(userMovies);
        }).catch(error => console.log(`${error}`));
      }).catch(error => console.log(`${error}`));
  }

  function deleteMovie (id) {
    mainApi._deleteMovie({
      movieId: id,
      jwt: JWTtoken,
    })
      .then(() => {
        getSavedMovies().then(res => {
          let userMovies = []
          res.forEach(movie => {
            if(movie.owner === currentUser._id) {
              userMovies.push(movie);
            }
          })
          setSavedMovies(userMovies);
        })
      }).catch(error => console.log(`${error}`));
  }

  function searchMovies (name, place, shortFilm) {
    if(place === 'savedMovies') {
      let foundMovies = [];
      savedMovies.forEach(movie => {
        if(shortFilm) {
          if(movie.nameRU.includes(name) && movie.duration <= 40){
            foundMovies.push(movie)
          }
        } else {
          if(movie.nameRU.includes(name)){
            foundMovies.push(movie)
          }
        }
      })
      setFoundSavedMovie(foundMovies);
    }

    if(place === 'movies') {
      let foundMovies = [];

      newMovie.forEach(movie => {
        if(shortFilm) {
          if(movie.nameRU.includes(name) && movie.duration <= 40){
            foundMovies.push(movie)
          }
        } else {
          if(movie.nameRU.includes(name)){
            foundMovies.push(movie)
          }
        }
      })
      setFoundMovies(foundMovies);
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path='/'>
          <Main loggedIn={loggedIn}
            isActive={handleActiveBurger}
            burgerActive={burgerActive}
          />
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
            showMore={showMore}
            visible={visible}
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
