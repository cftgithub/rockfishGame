import React from "react";
import "./style.css";

// class FishCard extends React.Component {

// clicker = () => {
//     this.props.handleOnClick(this.props.id)
// };

// render() {
//     return (
//         <div className="card" onClick={this.clicker}>
//             <div className="img-container">
//                 <img alt={this.props.species} src={this.props.image}/>
//             </div>
//             <div>{this.props.species}</div>
//             <div>{this.props.status}</div>
//         </div>
//     );
// }
// }

function FishCard(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.species} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.species}
            </li>
            <li>
              <strong>Status:</strong> {props.status}
            </li>
          </ul>
        </div>
        <span onClick={() => props.removeFish(props.id)} className="remove">𝘅</span>
      </div>
    );
  }

export default FishCard;