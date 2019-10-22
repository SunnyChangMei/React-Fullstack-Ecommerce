import React from 'react';
import { Mutation } from 'react-apollo';
import CartIcon from './CartIcon';
import { gql } from 'apollo-boost';

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const cartIconContainer = () => (
  <Mutation mutation={TOGGLE_CART_HIDDEN}>
    {toggleCartHidden => <CartIcon toggleCartHidden={toggleCartHidden} />}
  </Mutation>
);

export default cartIconContainer;
