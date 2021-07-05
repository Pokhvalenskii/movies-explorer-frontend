import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function ProtectedRoute(props) {

  return(
    <Route>
      {props.loggedIn ? props.children : <Redirect to='/signin' />}
    </Route>
  )
}

export default ProtectedRoute;