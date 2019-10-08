import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem, id) => <CartItem key={id} item={cartItem} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
