import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './list.css';

import ListItem from '../list-item/list-item'; 

class List  extends Component{

    render(){
        return(
            <div>List Component ---> Render Method<br/> <ListItem/></div>
        );
    }
}

//Props validation to Data Type
List.propTypes = {
    source: PropTypes.array
}

//Default values to Props
List.defaultProps = {
    source: []
}

export default List;
