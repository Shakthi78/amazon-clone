export async function productsData(){
    const products = await fetch(
      "https://fakestoreapi.com/products"
    );
    return products
}