import React from 'react';
import './SpecialItem.css';

const SpecialItem = (props) => {
    const {img, recipe_name, price, label} = props.items;
    return (
        <div className="col-md-6" >
            <div className='special-item row no-gutters'>
                <div className='special-img col-md-4'>
                    <img src={img} className='' alt=""/>
                </div>
                <div className="col-md-8">
                    <div className='card-body'>
                    <h5 className='card-title'>{recipe_name}</h5>
                    <p className='card-text'>${price}</p>
                    <p className='card-text text-muted'><small>{label}</small></p>
                    </div>    
                </div>
            
            </div>
            
      </div>
        
    );
};

export default SpecialItem;

