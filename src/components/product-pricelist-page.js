import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {cornFlakes} from '../data/data-corn-flakes';



//based on the selected option item, display the list of stores and prices
class PriceList extends Component {
     
    

     render () {
         //gets the upc as an object
        const upc = this.props.match.params;
                console.log(upc);

        const item = this.props.items.find(item => 
            item.upc === upc.upc);
        
        console.log(item);

        // const title = this.props.title;
        // console.log(title);

        return(
            <div>
                <h3>
                    {/* {title} */}
                </h3>
                <ul>
                    list of stores and prices go here
                </ul>
            </div>        
            )
    }



    
    renderList() {
        
        // const StorePriceList = offerInfo.map(offer  => {
        //     const merchant = offer.merchant;
        //     const price = offer.price;
        //     return {merchant, price};
        // })}
    
        
        // return (
        //     <ul>
        //         {offerInfo.map(offer => {
        //           return <li>{offer.merchant} - {offer.price}</li>  
        //         })}
        //         {/* // {this.renderPrices()} */}
        //     </ul>
        // );
    }
};


function mapStateToProps(state) {
  return { items: state.product };
}

export default connect(mapStateToProps)(PriceList);