import React from 'react';
import './RegularItems.css';
const RegularItems = (props) => {
    const {img, recipe_name, price, label} = props.item;
    return (
        <div className="col-md-4" >
                <div className=" m-4">
                    <div className="card reg-items p-4">
                        <img className="card-img-top" src={img} alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">{recipe_name}</h5>
                            <p className="card-text text-muted">{label}</p>
                            <h4 className="price">${price}</h4>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default RegularItems;