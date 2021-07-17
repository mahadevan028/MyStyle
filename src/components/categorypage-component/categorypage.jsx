import React from 'react'
import './categorypage.scss'
import CollectionItem from '../collection-item-component/collection-item.jsx';
import { connect } from 'react-redux';
import {selectCategory} from '../../redux/shop/shop-selector'


const CategoryPage = ({category}) => {
   const {title, items} = category; 
   return(
       <div className="category-page">
         <h2 className='title'>{title}</h2>
         <div className='items'>
          {
              items.map(item => <CollectionItem key = {item.id} item = {item}/> )
          }
         </div>
       </div>
   )

}

const mapStateToProps = (state, ownProps) => {
    return{
      category : selectCategory(ownProps.match.params.categoryId)(state)
    }
}

export default connect(mapStateToProps)(CategoryPage);