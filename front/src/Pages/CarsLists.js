import { useSelect } from '@mui/base'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllCars } from '../Redux/CarSlice'
import CardData from './Profile'
import Navbar from '../Components/NavBar'

const CarsLists = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(GetAllCars())
    },[])
    const cars = useSelector(state=> state.CarReducer.cars)
  return (

    <div style={{display:'grid', gridTemplateColumns: '100% 100% 100%'}}>
        {cars.map(car=> <CardData  card={car} key={car._id}/>)}
        
    </div>
  )
}

export default CarsLists