import React from 'react';
import './App.css';
import HomePage from './components/homepage-component/homepage.jsx';
import {Route} from 'react-router-dom';
import ShopPage from './components/shoppage-component/shoppage.jsx'; 



function App() {
  return (  
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route  path='/shop' component={ShopPage}/>

    </div>
  );
}

export default App;
