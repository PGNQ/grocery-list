import { connect } from "react-redux";
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class OptionItem extends Component {

  render() {
    const title = this.props.product.title;
    const image = this.props.product.images[0];
    const upc = this.props.product.upc;

    return (

      <div className="row">
        <div className="col-md-4 col-sm-6">
          <div className="card bg-light h-100">
            <div className="card-body">
              <h4 className="card-title">
                <Link to={`/pricelist/${upc}`}><a href="#">{title}</a></Link>
              </h4>
            </div>
            <img className="card-img" src={image} alt=""/>
          </div>
        </div>
      </div>
    );
  }
}

export default OptionItem;
