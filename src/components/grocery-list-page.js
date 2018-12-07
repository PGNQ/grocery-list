import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';


class GroceryListPage extends Component {


  renderCart = () => {
    const cartlist = this.props.cart.map(item => {
      console.log(item);
      return (
        <tr key={item.updated_t}>
          <td>{item.title}</td>
          <td>{item.merchant}</td>
          <td>${item.price}</td>
        </tr>
      );

    })
    return cartlist;
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
            {this.renderCart()}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {cart: state.product.cart};
}

export default connect(mapStateToProps)(GroceryListPage);
