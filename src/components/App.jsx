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

import { Switch, Route } from 'react-router-dom';
const cards = {

}

function App() {
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
          <Profile />
        </Route>
        <Route path='/movies'>
          <Movies cards={cards}/>
        </Route>
        <Route path='/saved-movies'>
         <SavedMovies />
        </Route>
        <Route path='*'>
          <NotFoundPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
