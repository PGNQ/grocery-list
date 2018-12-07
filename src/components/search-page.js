import React, { Component } from "react";
import { connect } from "react-redux";
import {bindActionCreators } from "redux";
import { fetchProduct } from "../actions/index";
import  { Redirect } from 'react-router-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {search: ""}
  }

  onSearchChange = (event) => {
    this.setState({ search: event.target.value});
  }

  onSearchSubmit = (event) => {
    event.preventDefault();

    //fetches our product data
    this.props.fetchProduct(this.state.search);
    this.setState({ search: ""});
    this.props.history.push('/optionslist');
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <h1>Grocery BNB</h1>
        <form onSubmit={this.onSearchSubmit} className="input-group">
        <input
          placeholder="Search for a product"
          className="form-control"
          value={this.state.search}
          onChange={this.onSearchChange}
        />
        <span className="input-group-btn">
         <button type ="submit" className ="btn btn-secondary">Search</button>
        </span>
        </form>
      </div>  

    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProduct }, dispatch);
}

export default connect( null, mapDispatchToProps)(SearchBar);
