export const cart=[{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
},{
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1
}];

export function addtocart(productId){
    let matchingcartItem;
  
    cart.forEach((cartItem)=>{
      if(productId=== cartItem.productId)
      {
        matchingcartItem=cartItem;
      }
    });
  
    if (matchingcartItem) {
      // Increase the quantity if the item already exists
      matchingcartItem.quantity += 1;
    } else {
      // Add a new item to the cart
      cart.push({
        productId: productId,
        quantity: 1,
      });
    }
  }

   