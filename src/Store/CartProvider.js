import CartContext from "./cart-context"
export default function CartProvider(props){
    function AddingItems(item){};
    function RemovingItems(id){};
    const cartContext={
    items:[],
    totalAmount:0,
    addItem:AddingItems,
    removeItem:RemovingItems
    }
    return(
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    )
}