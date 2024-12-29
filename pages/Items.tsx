import {useContext, useState} from "react";
import {Item} from "../models/Item";
import {ItemContext} from "../store/ItemProvider";

export function Items(){
    const [items, dispatch] = useContext(ItemContext);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [qty, setQty] = useState("");
    const [price, setPrice] = useState("");

    function addItem(){
        const newItem = new Item(id, name, type, Number(qty), Number(price));
        dispatch({type:'ADD_ITEM', payload: newItem})
    }

    function deleteItem(){
        const newItem = new Item(id, name, type, Number(qty), Number(price));
        dispatch({type:'DELETE_ITEM', payload: newItem})
    }

    function updateItem(){
        const newItem = new Item(id, name, type, Number(qty), Number(price));
        dispatch({type:'UPDATE_ITEM', payload: newItem})
    }
    return (
        <>
            <h2>Item</h2>

            <input type="text" placeholder='Id' onChange={(e) => setId(e.target.value)}/>
            <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder='type' onChange={(e) => setType(e.target.value)}/>
            <input type="text" placeholder='Quantity' onChange={(e) => setQty(e.target.value)}/>
            <input type="text" placeholder='Price' onChange={(e) => setPrice(e.target.value)}/>
            <button onClick={addItem}>Add Item</button>
            <button onClick={updateItem}>Update Item</button>
            <button onClick={deleteItem}>Delete Item</button>

            {items.map((item: Item) => (
                <div key={item.id}>{item.id + ' ' +  item.name + ' ' + item.type + ' ' + item.qty + ' ' + item.price}</div>))}

        </>
    )
}