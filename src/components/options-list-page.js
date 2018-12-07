import React, { Component } from 'react';
import OptionItem from './option-item.js';
import _ from 'lodash';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css'


class OptionsListPage extends Component {


  render() {
    const products = this.props.items.map((product, index) => {
      return (
        <OptionItem key={index} product={product} />
      )
    })
    console.log(products);
    return (
      <div className="container">
        <h1 className="my-4">Select One Item Option</h1>
        {products}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { items: state.product.items };
}

export default connect(mapStateToProps)(OptionsListPage);
