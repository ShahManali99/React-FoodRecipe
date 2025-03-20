import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Components/Search/Search';
import FoodCard from './Components/FoodCard/FoodCard';
import Navigationbar from './Components/Navigationbar/Navigationbar';
import RecipeDetail from './Components/RecipeDetail/RecipeDetail';
import './App.css';

function App() {
  const [foodData, setFoodData] = useState([])
  const [foodId,setFoodId] = useState('658615')
  return (
    <>
      <Navigationbar />
      <Search foodData={foodData} setFoodData={setFoodData}/>
      <div className='outerContainer'>
        <div className='innerContainer'>
          {foodData.map((item)=>{
            return <FoodCard key={item.id} foodItem={item} setFoodId={setFoodId}/>
          })}
        </div>
        <div className='innerContainer'>
          <RecipeDetail foodId={foodId}/>
        </div>
      </div>
    </>
  )
}

export default App
