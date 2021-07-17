import React from 'react';
import './menu-item.scss';
import {withRouter} from 'react-router-dom';

const menuItem = ({title,  imageUrl, size, history, linkUrl}) =>{
    console.log("&&&&&&&",linkUrl,history)
    return(
        <div className= {`${size} menu-item`}>
        <div className = "background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className="content" onClick={() => history.push(`${linkUrl}`)}>
            <div className="title">
                <div className="subtitle">
                 <h1>{title}</h1>
                 <span>SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
    )

}

export default withRouter(menuItem);