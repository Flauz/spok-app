export const addNewItem = (currentItems, addItem) => {
    const existingItem = currentItems.find(
        currentItem => currentItem.id === addItem.id
    )

    if(existingItem){
        return currentItems.map(currentItem => (
            currentItem.id === addItem.id ? {...currentItem, quantity: currentItem.quantity + 1}
            : currentItem
        ))
    }
    return [...currentItems,{...addItem, quantity: 1}]
}

export const removeCartItem = (
    CartItems,
    cartItemToRemove
    ) => {
    return CartItems.filter(item => item.id !== cartItemToRemove.id);
}

export const reduceItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
        
    );
    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
};