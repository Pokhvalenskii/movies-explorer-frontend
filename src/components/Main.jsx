import Header from './Header';
import Promo from './Promo';
import Project from './Project';
import Technologies from './Technologies'
import Student from './Student';
import Footer from './Footer';
import HeaderProfile from './HeaderProfile';
function Main (props) {
  return (
    <>
      {props.loggedIn ? <HeaderProfile loggedIn={props.loggedIn} isActive={props.isActive}
            burgerActive={props.burgerActive}/> : <Header isActive={props.isActive}
            burgerActive={props.burgerActive}/>}
      <Promo />
      <Project />
      <Technologies />
      <Student />
      <Footer />
    </>
  );
}

export default Main;