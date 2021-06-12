import React from 'react';
import './App.css';
import HomePage from './components/homepage-component/homepage.jsx';
import {Route} from 'react-router-dom';
import ShopPage from './components/shoppage-component/shoppage.jsx'; 
import Navigation from './components/navigation-component/navigation.jsx';
import UserPage from './components/userpage-component/userpage.jsx';
import {auth,createUserProfileDocument} from './firebase/firebase.utils.js'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;
   
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (!!userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      } else {
        this.setState({ currentUser: userAuth })
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Navigation currentUser={this.state.currentUser}/>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
        <Route  path='/user' component={UserPage} />

      </div>
    );
  }
}

export default App;
