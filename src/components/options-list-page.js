import React, { Component } from 'react';
import OptionItem from './option-item.js';
import _ from 'lodash';
import { connect } from 'react-redux';


class OptionsListPage extends Component {


  renderOptionItem() {

  }

  render() {
    return (
      <div className="container">
        <h1 className="my-4">Select One Item Option</h1>
        {this.renderOptionItem()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { items: state.items };
}

export default OptionsListPage;
