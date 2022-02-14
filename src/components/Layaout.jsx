import React from 'react'
import Footer from "./Footer";
import Header from './Header';


const Layaout = ({children}) => (
    <div>
        <Header/>
            {children}
        <Footer/>
    </div>
);

export default Layaout;