export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // quantity property gets attached the first time around since this if block wont run when its new item
  //! make user use "..." to create new array with existingCartItem, then add in object with quantity of cartItemToAdd
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
