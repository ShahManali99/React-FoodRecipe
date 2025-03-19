import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Components/Search/Search';
import FoodCard from './Components/FoodCard/FoodCard';
import Navigationbar from './Components/Navigationbar/Navigationbar';

function App() {
  const [foodData, setFoodData] = useState([])
  return (
    <>
      <Navigationbar />
      <Search foodData={foodData} setFoodData={setFoodData}/>
      {foodData.map((item)=>{
        return <FoodCard key={item.id} foodItem={item} />
      })}
    </>
  )
}

export default App
