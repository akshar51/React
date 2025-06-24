import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetch = createAsyncThunk('fetch/product',async()=>{
    let res = await axios.get("http://localhost:3000/products");
    return res.data
})

export const createProduct = createAsyncThunk('create/product',async(product)=>{
    let res = await axios.post("http://localhost:3000/products",{...product, id : String(Date.now())});
    return res.data;
})

export const updateProduct = createAsyncThunk('update/product',async(product)=>{
    let res = await axios.put(`http://localhost:3000/products/${product.id}`,product);
    return res.data;
})

export const deleteProduct = createAsyncThunk('delete/product',async(id)=>{
    await axios.delete(`http://localhost:3000/products/${id}`);
    return id;
})
