import React from 'react';
import offerItem from '../Data/Offers';
import OfferItems from './OfferItems';

const Offer = () => {
    return (
        <div id='offerItems'>
        <h3 className='title'>Offer Items</h3>
            <div className='row'>
                {
                    offerItem.map(items => <OfferItems
                        key = {items.key} 
                        item = {items}
                        ></OfferItems>)
                }
            </div>                   
        </div>
    );
};

export default Offer;