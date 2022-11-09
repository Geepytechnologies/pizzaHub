import {createSlice} from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        pizzas: [],
        cartquantity: 0,
        total: 0,
    },
    reducers: {
        addPizza(state, action) {
            state.pizzas.push(action.payload);
            state.cartquantity += 1;
            state.total += action.payload.price * action.payload.quantity;
        },
        reset:(state) => {
            state = initialState;
        }
    }
})

export const { addPizza , reset} = cartSlice.actions;
export default cartSlice.reducer;