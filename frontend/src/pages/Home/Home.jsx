import React,{useState} from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {
  const [catagory, setcatagory] = useState('all')
  return (
    <div>
        <Header/>
        <ExploreMenu catagory={catagory} setcatagory={setcatagory}/>
        <FoodDisplay catagory={catagory}/>
    </div>
  )
}

export default Home