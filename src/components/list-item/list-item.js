import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './list-item.css';

import ListItemDetails from '../list-item-details/list-item-details'; 

class ListItem  extends Component{
    render(){
        return(<div>List Item Component ---> Render Method<br/> <ListItemDetails/></div>);
    }
}

export default ListItem;
