// import React, { useContext } from 'react'
// import CartContext from './CartContext'

// const ProductCart = ({i,itemName,price}) => {
//     const {addToCart}=useContext(CartContext);

//     const handleAdd=()=>{
//         addToCart({id:i, name:itemName, price:price})
//     }
//   return (
//     <div>
//         <h3>{itemName}</h3>
//         <p>price: {price}</p>
//         <button onClick={handleAdd}>Add to cart</button>
//     </div>
//   )
// }

// export default ProductCart

import React, { useContext } from 'react'
import CartContext from './CartContext'

const ProductCart = ({i,itemName,price}) => {
  const {addToCart}=useContext(CartContext)

  const handleAdd=()=>{
    addToCart({id:i,name:itemName, price})
  }
  return (
    <div>
      <h2>{itemName}</h2>
      <p>price: ${price}</p>
      <button onClick={handleAdd}>add to cart</button>
    </div>
  )
}

export default ProductCart
