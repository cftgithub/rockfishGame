import React from "react";
import "./style.css";

function Title(props) {
  return (
    <>
      <div>
        <h1 className="title">{props.title}</h1>
        <h3 className="instruction">{props.instruction}</h3>
      </div>
      <div className="row">
        <div className="col-sm-6 mx-3 currScore">
          <h2 className="good">{props.good}</h2>
          <h2 className="unknown">{props.unknown}</h2>
        </div>
        <div className="col-sm-6 mx-3 currScore">
          <h2 className="vulnerable">{props.vulnerable}</h2>
          <h2 className="threatened">{props.threatened}</h2>
        </div>
        <div className="col-sm-12 mx-3 currScore">
          <h2 className="endangered">{props.endangered}</h2>
        </div>
        <div className="col-sm-6 mx-3 currScore">
          <h4 className="score">{props.currentScore}</h4>
        </div>
        <div className="col-sm-6 mx-3 currScore">
          <h4 className="score">{props.highScore}</h4>
        </div>
      </div>
    </>
  );
}

export default Title;