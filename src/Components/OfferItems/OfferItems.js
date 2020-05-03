import React from 'react';
import './OfferItems.css';
const OfferItems = (props) => {
    const {img, recipe_name, price, offer} = props.item;
    return (

            <div className="col-md-4" >
                <div className=" m-4">
                    <div className="card offer-items p-4">
                        <img className="card-img-top" src={img} alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">{recipe_name}</h5>
                            <p className="card-text">{offer}</p>
                            <h4 className="price">${price}</h4>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default OfferItems;