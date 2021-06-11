import React from 'react';
import './App.css';
import HomePage from './components/homepage-component/homepage.jsx';
import {Route} from 'react-router-dom';
import ShopPage from './components/shoppage-component/shoppage.jsx'; 
import Navigation from './components/navigation-component/navigation.jsx';
import UserPage from './components/userpage-component/userpage.jsx';


function App() {
  return (  
    <div>
       <Navigation/>
      <Route exact path='/' component={HomePage}/>
      <Route  exact path='/shop' component={ShopPage}/>
      <Route exact path='/user' component={UserPage}/>

    </div>
  );
}

export default App;
