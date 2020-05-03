import React from 'react';

import './HomePage.css';
import RegularFood from '../RegularFood/RegularFood';
import Offer from '../OfferItems/Offer';
import Footer from '../Footer/Footer';
import Special from '../SpecialItem/Special';

const HomePage = () => {
    return (
        <div>
            <RegularFood/>
            <Special/>
            <Offer/>
            <Footer/>
        </div>
    );
};

export default HomePage;