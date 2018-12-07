import React, { Component } from 'react';
import {cornFlakes} from '../data/data-corn-flakes';
//import PropTypes???

//import item from '../index.js';



//based on the selected option item, display the list of stores and prices
class PriceList extends Component {
    renderTitle () {
        return(
            <h3>
                {cornFlakes.items.title}
            </h3>
        )
    }


    // renderPrices () {
    //     return(
    //         //list every store/price
    //         //may click 1 item to add to GroceryList
    //         <li 
    //         //onClick????
    //             key={cornFlakes.items.upc}>           
                
                
    //         </li>
    //     )
    // }

    renderList() {
        const offerInfo = cornFlakes.items.offers;
        // const StorePriceList = offerInfo.map(offer  => {
        //     const merchant = offer.merchant;
        //     const price = offer.price;
        //     return {merchant, price};
        // })}
        
        return (
            <ul>
                {offerInfo.map(offer => {
                  return <li>{offer.merchant} - {offer.price}</li>  
                })}
                {/* // {this.renderPrices()} */}
            </ul>
        );
    }
}


export default PriceList
