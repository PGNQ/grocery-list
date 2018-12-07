import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart} from '../actions';
// import {cornFlakes} from '../data/data-corn-flakes';



//based on the selected option item, display the list of stores and prices
class PriceList extends Component {
     handleClick(){
         console.log("Clicked!");
     };
    

     render () {
         //gets the upc as an object
        const upc = this.props.match.params.upc;
                console.log(upc);

        const item = this.props.items.find(item => 
            item.upc === upc);
        
        console.log(item);

        const offers = item.offers;
        console.log(offers);

        const title = item.title;
        console.log(title);

        const storePriceList = offers.map((offer, index) => {
            const merchant = offer.merchant;
            const price = offer.price;
            return (
            <a key={index}
                tabIndex="0" 
                onClick={this.handleClick.bind(this)}>
                <li>
                    {merchant} - {price}
                </li>
            </a>
        )});

        return(
            <div>
                <h3>
                    {title}
                </h3>
                <ul>
                    {storePriceList}
                </ul>
            </div>        
            )
    }  
};


function mapStateToProps(state) {
  return { items: state.product.items };
}

function mapDispatchToProps(dispatch){
     return bindActionCreators({addToCart},dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PriceList);