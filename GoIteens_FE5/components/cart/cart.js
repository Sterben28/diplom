export const cart = {
    items: [],
    totalPrice: 0,
    totalQuantity: 0
}

export const addToCart = (product) => {
    cart.items.push(product);
    cart.totalPrice += product.price;
    cart.totalQuantity += 1;
    console.log(cart)
}