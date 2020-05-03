import React, { useState } from 'react';
import regularFood from '../Data/RegularFood';
import RegularItems from './RegularItems';

const RegularFood = () => {

    const [currentCategory, setCurrentCategory] = useState('Lunch');
    const [currentMenu, setCurrentMenu] = useState(regularFood.filter(item => {
        return item.category === currentCategory;
    }))

    const selectHandle = menu => {
        setCurrentCategory(menu);
        setCurrentMenu(regularFood.filter(item => {
            return item.category === menu;
        })) 
    }

    return ( 
        <div className='body-container'>    

            <div className='d-flex justify-content-center'>              
                <button className={`category-btn ${currentCategory === 'Breakfast' ? 'active-btn' : ''}`} onClick={() => selectHandle('Breakfast')}>Breakfast</button>
                <button className={`category-btn ${currentCategory === 'Lunch' ? 'active-btn' : ''}`} onClick={() => selectHandle('Lunch')}>Lunch</button>
                <button className={` category-btn ${currentCategory === 'Dinner' ? 'active-btn' : ''}`} onClick={() => selectHandle('Dinner')}>Dinner</button>    
            </div>

            <div className='row'>
                {    
                    currentMenu.map( items =>
                        <RegularItems
                            key = {items.key} 
                            item = {items}
                        ></RegularItems>)       
                }
            </div>

        </div>  
    );
};

export default RegularFood;