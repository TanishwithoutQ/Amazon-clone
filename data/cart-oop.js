
function Cart(localStorageKey) {
    const cart={
        cartItems: undefined,
        loadFromStorage(){
           this.cartItems= JSON.parse(localStorage.getItem(localStorageKey));
         if(!this.cartItems){
            this.cartItems= [{
             productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                 quantity: 2,
                 deliveryOptionId: '1'
         },{
             productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                 quantity: 1,
                 deliveryOptionId: '2'
         }];
         }
         },
   
         savetolocalstorage(){  
           localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
       },
           addtocart(productId){
           let matchingcartItem;
         
           this.cartItems.forEach((cartItem)=>{
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
             this.cartItems.push({
               productId: productId,
               quantity: 1,
               deliveryOptionId: '1'
             });
           }
           this.savetolocalstorage();
         },
   
         removefromcart(productId){
           const newcart=[];
       
           this.cartItems.forEach((cartItem)=>{
             if(productId!== cartItem.productId)
             {
               newcart.push(cartItem);
             }
           });
           this.cartItems=newcart;
           this.savetolocalstorage();
         },
   
         updateDeliveryOption(productId, deliveryOptionId) {
       
           let matchingcartItem;
         
           this.cartItems.forEach((cartItem)=>{
             if(productId=== cartItem.productId)
             {
               matchingcartItem=cartItem;
             }
           });
       
           matchingcartItem.deliveryOptionId = deliveryOptionId;
           this.savetolocalstorage();
         } 
   };
   return cart;
}



const cart= Cart('cart-oop');
const businesscart = Cart('cart-business');

cart.loadFromStorage();
businesscart.loadFromStorage();

console.log(cart);
console.log(businesscart);











 