import React from 'react';
import { connect} from 'react-redux';
import './collection-overview.scss';
import Collection from '../collection-component/collection';
import {selectCollectionsForPreview} from '../../redux/shop/shop-selector';

const CollectionOverview = ({collections}) => {
 return(
     <div className="collection-overview">
          {collections.map(({id, ...otherCollectionProps}) => (
                   <Collection key={id} {...otherCollectionProps}/>
               ))}
     </div>
 )

}

const mapStateToProps = state => {
    return {
        collections: selectCollectionsForPreview(state)
    } 
}

export default connect(mapStateToProps)(CollectionOverview);