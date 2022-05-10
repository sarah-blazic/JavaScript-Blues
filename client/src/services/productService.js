import axios from 'axios';
import React, { useState, useEffect } from 'react';



export async function getProduct(id) {
    const response = await axios.get(`/products/${id}`).then(function (response){
        console.log(response)
    }).catch(function (error){
        console.log(error);
    })
    return response
}

export async function addToCart(id) {
    const response = await axios.get(`api/orders/${id}`).then(function (response){
        console.log(response)
    }).catch(function (error){
        console.log(error);
    })
    return response
}
