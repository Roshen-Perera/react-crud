import {useContext, useState} from "react";
import {Customer} from "../models/Customer";
import {CustomerContext} from "../store/CustomerProvider";

export function Customers(){
    const [customers, dispatch] = useContext(CustomerContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    function addCustomer(){
        const newCustomer = new Customer(name, email, Number(phone), address);
        dispatch({type:'ADD_CUSTOMER', payload: newCustomer})
    }

    function deleteCustomer(){
        const newCustomer = new Customer(name, email, Number(phone), address);
        dispatch({type:'DELETE_CUSTOMER', payload: newCustomer})
    }

    function updateCustomer(){
        const newCustomer = new Customer(name, email, Number(phone), address);
        dispatch({type:'UPDATE_CUSTOMER', payload: newCustomer})
    }
    return (
        <>
            <h2>Customer</h2>

            <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)}/>
            <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder='address' onChange={(e) => setAddress(e.target.value)}/>
            <input type="text" placeholder='phone' onChange={(e) => setPhone(e.target.value)}/>
            <button onClick={addCustomer}>Add Customer</button>
            <button onClick={updateCustomer}>Update Customer</button>
            <button onClick={deleteCustomer}>Delete Customer</button>

            {customers.map((customer: Customer) => (
                <div key={customer.email}>{customer.name + ' ' + customer.email + ' ' + customer.address + ' ' + customer.phone}</div>))}

        </>
    )
}