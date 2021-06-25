import React from 'react';
import './collection-item.scss';
import CustomButton from '../custom-button-component/custom-button.jsx';
import { connect } from 'react-redux';
import {setCartItems} from '../../redux/cart/cart-actions.js';

const collectionItem = ({item, setCartItems}) => {
    return(
        <div className = "collection-item">
        <div className = "image" style={{backgroundImage: `url(${item.imageUrl})`}}/>
        <div className = "collection-footer">
          <span className = "name"> {item.name} </span>
          <span className = "price"> &#8377; {item.price} </span>
        </div>
        <CustomButton className = "custom-button" onClick = {() => setCartItems(item)}> Add to Cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCartItems: item => dispatch(setCartItems(item))
  }
}

export default connect(null, mapDispatchToProps)(collectionItem);