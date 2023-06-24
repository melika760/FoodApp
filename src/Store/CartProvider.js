import React,{useReducer} from "react"
import CartContext from "./cart-context"
const defaultState ={
    items:[],
    totalAmount:0
}
function CartReducer(state,action){
    if(action.type==="ADD"){
        const UpdatedItem=state.items.concat(action.item)
        const UpdateTotalAmount=state.totalAmount+action.item.price*action.item.amount
return{
    items:UpdatedItem,
    totalAmount:UpdateTotalAmount
}
    }
return defaultState
}
export default function CartProvider(props){
    const[cartState,dispatchCart]= useReducer(CartReducer,defaultState)
    function AddingItems(item){
        dispatchCart({type:"ADD",item:item})
    };
    function RemovingItems(id){
        dispatchCart({type:"ID",id:id})
    };
    const cartContext={
    items:cartState.items,
    totalAmount: cartState.totalAmount,
    addItem:AddingItems,
    removeItem:RemovingItems
    }
    return(
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    )
}