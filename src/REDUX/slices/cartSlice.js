import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const exisitngProduct=state.find(item=>item.id==action.payload.id)
            if(exisitngProduct){
                const remainingProduct=state.filter(item=>item.id!=exisitngProduct.id)

                exisitngProduct.quantity++
                exisitngProduct.totalPrice=exisitngProduct.quantity*exisitngProduct.totalPrice
state=[...remainingProduct,exisitngProduct]
            }else{
state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        },
        removeCartItem:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        incQuantity:(state,action)=>{
            const exisitngProduct=state.find(item=>item.id==action.payload)

            exisitngProduct.quantity++
            exisitngProduct.totalPrice=exisitngProduct.quantity*exisitngProduct.price
            const remainingProduct=state.filter(item=>item.id!=exisitngProduct.id)
            state=[...remainingProduct,exisitngProduct]
        },
        decQuantity:(state,action)=>{
            const exisitngProduct=state.find(item=>item.id==action.payload)
            exisitngProduct.quantity--
            exisitngProduct.totalPrice=exisitngProduct.quantity*exisitngProduct.price
            const remainingProduct=state.filter(item=>item.id!=exisitngProduct.id)
            state=[...remainingProduct,exisitngProduct]
        },
        emptyCart:(state,action)=>{
           return state=[]

        }
    }
})
export const {addToCart,removeCartItem,incQuantity,decQuantity,emptyCart}=cartSlice.actions
export default cartSlice.reducer