import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    return (
        <div>
            <h4>order summary</h4>
            <p>Selected Item:{cart.length}</p>
        </div>
    );
};

export default Cart;