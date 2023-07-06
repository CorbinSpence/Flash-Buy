import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        UPDATE_PRODUCTS: (state, action)=>{
            return {
                ...state,
                products: [...action.products],
            };
        },
        ADD_TO_CART: (state, action)=>{
            return {
                ...state,
                cartOpen: true,
                cart: [...state.cart, action.product],
            };
        },
        ADD_MULTIPLE_TO_CART: (state, action)=>{
            return {
                ...state,
                cart: [...state.cart, ...action.products],
            };
        },
        UPDATE_CART_QUANTITY: (state, action)=>{
            return {
                ...state,
                cartOpen: true,
                cart: state.cart.map((product) => {
                  if (action._id === product._id) {
                    product.purchaseQuantity = action.purchaseQuantity;
                  }
                  return product;
                }),
            };
        },
        REMOVE_FROM_CART: (state, action)=>{
            let newState = state.cart.filter((product) => {
                return product._id !== action._id;
              });
        
              return {
                ...state,
                cartOpen: newState.length > 0,
                cart: newState,
            };
        },
        CLEAR_CART: (state)=>{
            return {
                ...state,
                cartOpen: false,
                cart: [],
            };
        },
        TOGGLE_CART: (state)=>{
            return {
                ...state,
                cartOpen: !state.cartOpen,
            };
        },
        UPDATE_CATEGORIES: (state, action)=>{
            return {
                ...state,
                categories: [...action.categories],
            };
        },
        UPDATE_CURRENT_CATEGORY: (state, action)=>{
            return {
                ...state,
                currentCategory: action.currentCategory,
            };
        }
    }
})

export const {UPDATE_PRODUCTS, ADD_TO_CART, ADD_MULTIPLE_TO_CART, UPDATE_CART_QUANTITY, REMOVE_FROM_CART, CLEAR_CART, TOGGLE_CART, UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY} = cartSlice.actions

export default cartSlice.reducer