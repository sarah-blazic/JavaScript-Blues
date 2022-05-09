import axios from 'axios';
import React from 'react';

export async function getProduct(id) {
    const response = await axios.get(`/products/${id}`).then(function (response){
        console.log(response)
    }).catch(function (error){
        console.log(error);
    })
    return response
}

export async function getProducts(){
    console.log('url', process.env.REACT_APP_API_URL)
    const result = await axios.get(`/products`)
    return result

}