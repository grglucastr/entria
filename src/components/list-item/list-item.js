import React, {Component} from 'react';
import './list-item.css';
import PropTypes from 'prop-types';

import ListItemDetails from '../list-item-details/list-item-details'; 

class ListItem  extends Component{
    handleClick = () => {
        alert('You clicked a list Item ' +  this.props.title);
    }

    render(){
        return(<div className='BackgroundListItem' onClick={this.handleClick}>
                 <p className='ListItemTitle'> {this.props.title} </p>
                 <p className='ListItemContent'> {this.props.content} </p>
               </div>);
    }
}


//Props validation to Data Type
ListItem.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string
}

//Default values to Props
ListItem.defaultProps = {
    title: 'Item Title',
    content: 'Content of list item ' 
}

export default ListItem;
