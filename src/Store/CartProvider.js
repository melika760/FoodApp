import React,{useReducer} from "react"
import CartContext from "./cart-context"
const defaultState ={
    items:[],
    totalAmount:0
}
function CartReducer(state,action){
    if(action.type==="ADD"){
        const UpdateTotalAmount=state.totalAmount+action.item.price*action.item.amount;
        const existingItemIndex=state.items.findIndex(item=>item.id===action.item.id)
        const existingItem=state.items[existingItemIndex];
        let UpdatedItems;
        if(existingItem){
const UpdatedItem ={
    ...existingItem,
    amount:existingItem.amount+action.item.amount
}
UpdatedItems=[...state.items];
UpdatedItems[existingItemIndex]=UpdatedItem
        }else{
         UpdatedItems=state.items.concat(action.item)
        } 
return{
    items:UpdatedItems,
    totalAmount:UpdateTotalAmount
}
    }
    if(action.type==="REMOVE"){
        const existingItemIndex=state.items.findIndex(item=>item.id===action.id)
        const existingItem=state.items[existingItemIndex];
        const UpdateTotalAmount=state.totalAmount-existingItem.price;
        let UpdatedItems;
        if(existingItem.amount===1){
            UpdatedItems=state.items.filter(item=> item.id !== action.id);

        }else{
            const UpdatedItem= {...existingItem, amount:existingItem.amount-1};
            UpdatedItems=[...state.items];
            UpdatedItems[existingItemIndex]=UpdatedItem;
        }

        return{
            items:UpdatedItems,
            totalAmount:UpdateTotalAmount
        }
    }
    if(action.type==="CLEAR"){
        return defaultState
    }
return defaultState
}
export default function CartProvider(props){
    const[cartState,dispatchCart]= useReducer(CartReducer,defaultState)
    function AddingItems(item){
        dispatchCart({type:"ADD",item:item})
    };
    function RemovingItems(id){
        dispatchCart({type:"REMOVE",id:id})
    };
    function ClearCardHandler(){
        dispatchCart({type:"CLEAR"})
    }
    const cartContext={
    items:cartState.items,
    totalAmount: cartState.totalAmount,
    addItem:AddingItems,
    removeItem:RemovingItems,
    clearCard:ClearCardHandler,
    }
    return(
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    )
}