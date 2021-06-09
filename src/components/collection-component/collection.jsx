import React from 'react';

import './collection.scss';
import CollectionItem from '../collection-item-component/collection-item.jsx';

const collection = ({title, items}) => (
<div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
        { items
        .filter((item,index) => index < 4)
        .map(({id,...otherCollectionItemProps}) => (
             <CollectionItem key = {id} {...otherCollectionItemProps} />
         ) )}
    </div>
</div>
);

export default collection;