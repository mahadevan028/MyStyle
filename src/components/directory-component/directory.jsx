import React from 'react';
import './directory.scss';
import MenuItem from '../menu-item-component/menu-item.jsx';
import {selectDirectorySections} from  '../../redux/directory/directory-selector.js';
import {connect}  from 'react-redux';

const Directory = ({sections}) => {
  console.log("$$$$$$$$$$$$$$",sections)
  return (
    <div className="directory-menu">
      {
        sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
         sections:selectDirectorySections(state)
  }
}
export default connect(mapStateToProps)(Directory);