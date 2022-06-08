import React, { useReducer } from "react";
export const cardContext = React.createContext();

const INIT_STATE = {
    cart:null,
    count: 0,
}

function reducer(state = INIT_STATE, action){
    switch(action.type){
        case "GET_CART": 
        return {...state, cart: action.payload,count: action.payload.products.length};
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
    getCart()
  }
  function checkProductInCart(products){
    let cart = JSON.parse(localStorage.getItem('cart'));
    if(!cart){
        cart = {
            products: [],
            totalPrice: 0
        }
    };
    let isProductInCart = cart.products.some((item)=> item.item.id === products.id );
    return isProductInCart;
  }

  function getCart(){
    let cart = JSON.parse(localStorage.getItem('cart'));
    if(!cart){
        cart = {
            products: [],
            totalPrice: 0
        }
    };
    dispatch({
        type: "GET_CART",
        payload: cart,
    })
  }
// console.log(state.count);


    return (<cardContext.Provider value={ { 
        cart: state.cart,
        count: state.count,
        addProductToCart,checkProductInCart,  getCart}}>{children}</cardContext.Provider>)
}
export default CardContextProvider;