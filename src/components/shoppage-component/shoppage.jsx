import React from 'react';
import './shoppage.scss';
import CollectionOverview from '../collection-overview-component/collection-overview';
import CategoryPage from '../categorypage-component/categorypage';
import {Route} from 'react-router-dom';



const ShopPage = ({match}) => {
      return(
          <div className="shop-page">
             <Route exact path={`${match.path}`} component={CollectionOverview} />  
             <Route path={`${match.path}/:categoryId`} component={CategoryPage} /> 
              
          </div>
      )
}

export default ShopPage;