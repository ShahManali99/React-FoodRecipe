import React, { useEffect, useState } from 'react';
import { fetchFood } from '../../Services/Api';
import './Search.css';

const Search = ({foodData, setFoodData}) => {
    const [query, setQuery] = useState('pizza')
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        const fetchFoodItems = async () => {
            try{
                const foodItems = await fetchFood(query)
                setFoodData(foodItems)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchFoodItems();
    },[query])
  return (
    <div className='search-container'>
        <input className='input' type='text' value={query} onChange={(e)=>setQuery(e.target.value)}/>
    </div>
  )
}

export default Search;