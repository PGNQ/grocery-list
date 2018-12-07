import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {cornFlakes} from '../data/data-corn-flakes';



//based on the selected option item, display the list of stores and prices
class PriceList extends Component {
     render () {

        const title = this.props.title;
        console.log(title);

        return(
            <div>
                <h3>
                    {title}
                </h3>
                <ul>
                    list of stores and prices go here
                </ul>
            </div>        
            )
    }
}


    
//     renderList() {
//         const offerInfo = cornFlakes.items.offers;
//         // const StorePriceList = offerInfo.map(offer  => {
//         //     const merchant = offer.merchant;
//         //     const price = offer.price;
//         //     return {merchant, price};
//         // })}
//     }
        
//         return (
//             <ul>
//                 {offerInfo.map(offer => {
//                   return <li>{offer.merchant} - {offer.price}</li>  
//                 })}
//                 {/* // {this.renderPrices()} */}
//             </ul>
//         );
//     }
// }

function mapStateToProps(state) {
debugger;
  return { items: state.product };
}

export default connect(mapStateToProps)(PriceList);