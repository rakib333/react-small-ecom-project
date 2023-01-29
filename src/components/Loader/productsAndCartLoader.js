import { getStoredData } from "../../utilities/fakedb";

export const productsAndCartLoader = async () => {

    // get all products
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    // saved cart
    const savedCart = getStoredData();
    const initialCart = [];
    for (let id in savedCart) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct)
        }
    }




    return {products: products, initialCart: initialCart};
}