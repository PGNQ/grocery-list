import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';


class GroceryListPage extends Component {


  renderCart() {
    console.log('rendering cart');
    return (
      <tr key={this.cart.updated_t}>
        <td>{this.cart.title}</td>
        <td>{this.cart.merchant}</td>
        <td>${this.cart.price}</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Item</th>
            <th>Store</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
            {this.renderCart}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {cart: state.product.cart};
}

export default connect(mapStateToProps)(GroceryListPage);
