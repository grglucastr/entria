import React, {Component} from 'react';
import './list-item.css';
import PropTypes from 'prop-types';

import ListItemDetails from '../list-item-details/list-item-details'; 

class ListItem  extends Component{
    componentWillMount(){
        this.setState({expanded : false});
    }
    handleClick = () => {
        this.setState({expanded : !this.state.expanded});
    }
    renderNormalState(){
        return(<div className='BackgroundListItem' onClick={this.handleClick}>
                 <p className='ListItemTitle'> {this.props.title} </p>
                 <p className='ListItemContent'> {this.props.content} </p>
               </div>);
    }
    renderExpanded(){
        return(<div className='BackgroundListItem' onClick={this.handleClick}>
                 <ListItemDetails information={this.props.adtionalInformation} title={this.props.title} content= {this.props.content} />
               </div>);
    }
    render(){
        return(this.state.expanded ? this.renderExpanded() : this.renderNormalState());
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
