import {configureStore} from '@reduxjs/toolkit'
import { cartSlice } from './cart' 

export default configureStore({
    reducer:{
        StoreProvider: cartSlice
    }
})