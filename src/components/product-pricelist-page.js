import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart } from '../actions';



//based on the selected option item, display the list of stores and prices
class PriceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOffer: []
        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(e) {
       console.log(e);

      

        this.props.addToCart(e);

        console.log("Clicked!", this.props);
    };



    render() {
        //user chose version of product which has a upc

        //gets the upc as an object
        const upc = this.props.match.params.upc;
        const offerItems = this.props.items;



        //find specific item by upc in URL
        const item = offerItems.find(item =>
            item.upc === upc);

        console.log(item);

        //access the array of offers
        const offers = item.offers;

        // console.log(offers);

        const title = item.title;

        //list of offers made of individual store/price list items
        const storePriceList = offers.map((offer, updated_t) => {
            const merchant = offer.merchant;
            const price = offer.price;

            return (
                <a key={updated_t}
                    tabIndex="0"
                    onClick={() => this.handleClick(offer)}>
                    <li>
                        {merchant} - {price}
                    </li>
                </a>
            )
        });


        return (
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addToCart }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PriceList);