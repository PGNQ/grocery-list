import React, { Component } from 'react';
import OptionItem from './option-item.js'


class OptionsListPage extends Component {

  render() {

    return (
      <div className="container">
        <h1 className="my-4">Select One Item Option</h1>
        <OptionItem />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { items: state.items };
}

export default OptionsListPage;
