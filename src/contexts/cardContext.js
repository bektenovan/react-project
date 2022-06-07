import React, { useReducer } from "react";
export const cardContext = React.createContext();

const INIT_STATE = {
    cart:{},
    count: 0,
}

function reducer(state = INIT_STATE, action){
    switch(action.type){
        case "GET_CART": 
        return {...state, cart: action.payload};
        default: 
        return state
    }

}

const CardContextProvider = ({children})=>{
  const[state, dispatch] = useReducer(reducer, INIT_STATE)
  function addProductToCart(products){
      let cart = JSON.parse(localStorage.getItem('cart'));
      if(!cart){
          cart = {
              products: [],
              totalPrice: 0
          }
      }
      let newProduct = {
          item: products,
          count: 1,
          subPrice: products.price
      }
      let isProductInCart = cart.products.some((item)=> item.item.id === products.id )
if(isProductInCart){
    cart.products = cart.products.filter(item => item.item.id
!== products.id)
}else{

    cart.products.push(newProduct);
}
      console.log(isProductInCart);
     
      localStorage.setItem('cart',JSON.stringify(cart))
    //   console.log(cart);
    //   console.log(products)
  }
  function checkProductInCart(products){
    let cart = JSON.parse(localStorage.getItem('cart'));
    if(!cart){
        cart = {
            products: [],
            totalPrice: 0
        }
    }
    let isProductInCart = cart.products.some((item)=> item.item.id === products.id );
    return isProductInCart;
  }



    return (<cardContext.Provider value={{addProductToCart,checkProductInCart}}>{children}</cardContext.Provider>)
}
export default CardContextProvider;