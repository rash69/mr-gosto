import React from 'react';
import specialItem from '../Data/SpecialItem';
import SpecialItem from './SpecialItem';

const Special = () => {
    return (
        <div id='specialItems'>
        <h3 className='title'>Special Item</h3>
            <div className = 'row'>
                {
                    specialItem.map(items => <SpecialItem 
                        key = {items.key}
                        items = {items}></SpecialItem>)
                }
            </div>
        </div>
    );
};

export default Special;