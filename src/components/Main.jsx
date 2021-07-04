import Header from './Header';
import Promo from './Promo';
import Project from './Project';
import Technologies from './Technologies'
import Student from './Student';
import Footer from './Footer';
import HeaderProfile from './HeaderProfile';
function Main (props) {
  console.log('LOGGEDID ', props.loggedIn)

  return (
    <>
      {props.loggedIn ? <HeaderProfile loggedIn={props.loggedIn}/> : <Header/>}
      <Promo />
      <Project />
      <Technologies />
      <Student />
      <Footer />
    </>
  );
}

export default Main;