import React from 'react';
import './App.css';
import HomePage from './components/homepage-component/homepage.jsx';
import {Route} from 'react-router-dom';
import ShopPage from './components/shoppage-component/shoppage.jsx'; 
import Navigation from './components/navigation-component/navigation.jsx';
import UserPage from './components/userpage-component/userpage.jsx';
import {auth,createUserProfileDocument} from './firebase/firebase.utils.js'
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';

class App extends React.Component {


  unsubscribeFromAuth = null;
   
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (!!userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
         
         this.props.setCurrentUser ({
              id: snapshot.id,
              ...snapshot.data()
            })
        })
      } else {
        this.props.setCurrentUser(userAuth)
      }
    })  
  }



  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
        <Route  path='/user' component={UserPage} />

      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    setCurrentUser: (user) => {dispatch(setCurrentUser(user))} 
  }
}

export default connect(null, mapDispatchToProps)(App);
