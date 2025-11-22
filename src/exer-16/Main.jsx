// import React, { useState } from 'react'
// import CartContext from './CartContext'
// import ProductCart from './ProductCart';
// import CartDisplay from './CartDisplay';

// const Main = () => {
//     const [cartItems, setCartItems]=useState([]);
//     const addToCart = (item) => {
//         setCartItems([...cartItems, item]);
//     }
//     const removeFromCart = (item) => {
//         setCartItems(cartItems.filter(i=>i.id!==item));
//     }

//   return (
//     <CartContext.Provider value={{cartItems,addToCart,removeFromCart}}>
//         <ProductCart i={1} itemName="Widget" price={19.99}/>
//         <ProductCart i={2} itemName="Gadget" price={19.99}/>
//         <CartDisplay/>
//     </CartContext.Provider>
//   )
// }

// export default Main
import React, { useState } from 'react'
import CartContext from './CartContext'
import ProductCart from './ProductCart'
import CartDisplay from './CartDisplay'

const Main = () => {
    const [cartItems, setCartItems]=useState([])

    const addToCart=(item)=>{
        setCartItems([...cartItems, item])
    }
    const removeFromCart=(item)=>{
        setCartItems(cartItems.filter(i => i.id !=item))
    }
  return (
    <CartContext.Provider value={{cartItems,addToCart,removeFromCart}}>
        <ProductCart i={1} itemName="widget" price={19.99}/>
        <ProductCart i={2} itemName="Gadget" price={29.99}/>
        <CartDisplay/>
    </CartContext.Provider>
  )
}

export default Main
