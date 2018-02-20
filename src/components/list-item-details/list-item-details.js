import React, {Component} from 'react';
import './list-item-details.css';

class ListItemDetails  extends Component{
    render(){
        return(<div>
                <p>{this.props.title} {this.props.information.date}</p>
                <p>{this.props.content}</p>
                <img src={this.props.information.image} />
              </div>);
    }
}

export default ListItemDetails;
