import { connect } from "react-redux";
import React, { Component } from 'react';


class OptionItem extends Component {

  render() {

    return (
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <div className="card bg-light h-100">
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Item Option 1</a>
              </h4>
              <p className="card-text">Description of the item.</p>
            </div>
            <img className="card-img" src="http://placehold.it/700x400" alt=""/>
          </div>
        </div>
      </div>
    );
  }
}

export default OptionItem;
