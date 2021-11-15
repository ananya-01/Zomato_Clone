import React from 'react';

//components
import checkoutNavbar from '../components/Navbar/checkoutNavbar';

const CheckoutLayout = (props) => {
    return (
        <>
        <checkoutNavbar/>
        <div className='container mx-auto px-4 lg:px-20'>{props.children}</div>
            
        </>
    )
}

export default CheckoutLayout;