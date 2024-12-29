import {Customer} from "../models/Customer";

export const initialState: Customer[] = [];

export function CustomerReducer(state = initialState, action: { type: string , payload: Customer}) {
    switch (action.type) {
        case 'ADD_CUSTOMER':
            return [...state, action.payload];
        case 'DELETE_CUSTOMER':
            return state.filter((customer: Customer) => customer.email !== action.payload.email);
        case 'UPDATE_CUSTOMER':
            return state.map((customer: Customer) => customer.email === action.payload.email ? action.payload : customer);
        default:
            return state;
    }
}