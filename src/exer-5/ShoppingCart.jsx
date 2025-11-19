import { useState } from "react";

const ShoppingCart=()=>{
    const [items, setItems]=useState([])
    const [productName, setProductName]=useState("")
    const [productPrice, setProductPrice]=useState(0)
    const [totalPrice, setTotalPrice]=useState(0)


    const handleItems=()=>{
        const newItems={
            id:crypto.randomUUID(),
            title:productName,
            price:productPrice,
            quantity:1
        }
        setItems([...items,newItems])
        setTotalPrice(prev => prev + Number(newItems.price)) 
        setProductName("")
        setProductPrice("")
        console.log(items);
    }
    const addItem=(id)=>{
        const addedItem=items.find(i => i.id === id)
        console.log(addedItem.price);
        setItems(prev =>
            prev.map(item => item.id === id ? 
                {...item, quantity:item.quantity+1}
                : item)
        )
        setTotalPrice(prev => prev + Number(addedItem.price))
    }
    const subtractItem=(id)=>{
        const subtractItem=items.find(i => i.id === id)
        
        if(subtractItem.quantity <= 1) return;
        setItems(prev => 
            prev.map(item => 
                item.id === id ? 
                {...item, quantity:item.quantity-1}
                :item
            ))
            
        setTotalPrice(prev => prev - Number(subtractItem.price))
    }
        
    const removeItem=(id)=>{
        const subtractItem=items.find(i => i.id === id)
        console.log(subtractItem.quantity);

        setItems(prev => prev.filter(item => item.id !== id))
        setTotalPrice(prev => prev - Number(subtractItem.price * subtractItem.quantity))
    }

    return(
        <div>
            <h2>Simple Shopping Cart</h2>
            <input 
               type="text"
               placeholder="enter product name"
               value={productName}
               onChange={e => setProductName(e.target.value)}
            />
            <input 
              type="number" 
              value={productPrice}
              onChange={e => setProductPrice(e.target.value)}
            />
            <button onClick={handleItems}>add to cart</button>
            <div>
                {
                    items.length > 0 ? (
                        <div>
                            <h2>Products in cart</h2>
                            <ul>
                                {
                                    items.map(item =>(
                                        <div key={item.id}>
                                            <h2>product name: {item.title}</h2>
                                            <p>product price: ${item.price}</p>
                                            <p>
                                                Quantity: 
                                                <button onClick={()=> subtractItem(item.id)}>-</button>
                                                  {item.quantity}
                                                <button onClick={()=> addItem(item.id)}>+</button></p>
                                            <button onClick={()=> removeItem(item.id)}>Remove</button>
                                        </div>
                                    ))
                                }
                            </ul>
                            <h3>Total price: ${totalPrice}</h3>
                        </div>
                    ): <p>the cart is empty</p>
                }
            </div>
        </div>

    )
}
export default ShoppingCart;