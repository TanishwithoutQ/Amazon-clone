export const cart=[];

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

   