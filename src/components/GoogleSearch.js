import React, { useState, useEffect } from 'react';
import { key } from './Keys';

const context_key= "context_key";

const GoogleSearch=(term)=>{

    const[data, setData]= useState(null);

    useEffect(()=>{
        const fetching= async() =>{
            fetch(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${context_key}&q=${term}`)
            .then(response => response.json())
            .then(result=>{
                setData(result)
            })
        }
        fetching();
    }, [term])
    
    return {data}
};
export default GoogleSearch;