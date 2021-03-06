import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './list.css';
import ListItem from '../list-item/list-item'; 

class List  extends Component{
    componentWillMount(){
        this
    }
    render(){
        return(
            <div  className="BackgroundList">
                <p className="ListTitle">{this.props.title}</p>
                {this.props.source.map((listitem) =>
                        <ListItem key={listitem.toString()} title={listitem.title} content={listitem.content} adtionalInformation = {listitem.adtionalInformation}/>
                    )}
            </div>
        );
    }
}

//Props validation to Data Type
List.propTypes = {
    source: PropTypes.array,
    title : PropTypes.string
}

//Default values to Props
List.defaultProps = {
    source: [],
    title: 'A list sample using react' 
}


export default List;
