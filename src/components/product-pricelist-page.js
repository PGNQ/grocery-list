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

    handleClick(event) {
        this.setState({ selectedOffer: event.target.value });

        this.props.addToCart();

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
        const storePriceList = offers.map((offer, index) => {
            const merchant = offer.merchant;
            const price = offer.price;

            return (
                <a key={index}
                    tabIndex="0"
                    onClick={this.handleClick}>
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