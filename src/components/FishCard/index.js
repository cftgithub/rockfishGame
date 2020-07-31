import React from "react";
import "./style.css";

class FishCard extends React.Component {

clicker = () => {
    this.props.handleOnClick(this.props.id)
};

render() {
    return (
        <div className="card" onClick={this.clicker}>
            <div className="img-container">
                <img alt={this.props.species} src={this.props.image}/>
            </div>
            <div>{this.props.species}</div>
            <div>{this.props.status}</div>
        </div>
    );
}
}

export default FishCard;