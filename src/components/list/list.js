import React, {Component} from 'react';
import './list.css';

import ListItem from '../list-item/list-item'; 

class List  extends Component{
    render(){
        return(<div>List Component ---> Render Method<br/> <ListItem/></div>);
    }
}

export default List;
