import {Item} from "../models/Item";


export const initialState: Item[] = [];

export function ItemReducer (state = initialState, action: { type: string, payload: Item }) {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload];
        case 'DELETE_ITEM':
            return state.filter((customer: Item) => customer.id !== action.payload.id);
        case 'UPDATE_ITEM':
            return state.map((customer: Item) => customer.id === action.payload.id ? action.payload : customer);
        default:
            return state;
    }
}