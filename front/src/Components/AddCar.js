import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AddingCars } from '../Redux/CarSlice'

const AddCar = () => {
    const navigate = useNavigate()
    const [newCar, setNewCar] = useState({})
    const [image,setImage] = useState('')
    const HandleImageChange=(e)=>{
        setImage(e.target.files[0])
    }
    const HandleChange = (e)=>{
       setNewCar({...newCar,[e.target.name] : e.target.value})
    }
    const dispatch = useDispatch()
    const adding=(e)=>{
        e.preventDefault()
        const CarData = new FormData()
        CarData.append('carburant', newCar.carburant)
        CarData.append('carName', newCar.carName)
        CarData.append('model', newCar.model)
        CarData.append('kilometrage', newCar.kilometrage)
        CarData.append('coleur', newCar.coleur)
        CarData.append('etat', newCar.etat)
        CarData.append('phone', newCar.phone)
        CarData.append('cylindre', newCar.cylindre)
        CarData.append('Image', image)
        dispatch(AddingCars(CarData))
        navigate('/cars')
    }
    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Carburant</InputLabel>
                <Select
                    onChange={HandleChange}
                    name='carburant'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="carburant"
        
                >
                    <MenuItem value={'Gasoil'}>Gasoil</MenuItem>
                    <MenuItem value={'Essence'}>Essence</MenuItem>
                </Select>
                
            </FormControl>
            <TextField onChange={HandleChange} name='carName'  id="outlined-basic" label="carName" variant="outlined" />
            <TextField onChange={HandleChange} name='model'  id="outlined-basic" label="model" variant="outlined" />
            <TextField onChange={HandleChange} name='kilometrage'  id="outlined-basic" label="kilometrage" variant="outlined" />
            <TextField onChange={HandleChange} name='coleur'  id="outlined-basic" label="coleur" variant="outlined" />
            <TextField onChange={HandleChange} name='etat'  id="outlined-basic" label="etat" variant="outlined" />
            <TextField onChange={HandleChange} name='phone'  id="outlined-basic" label="phone" variant="outlined" />
            <TextField onChange={HandleChange} name='cylindre'  id="outlined-basic" label="cylindre" variant="outlined" />
            
            <input onChange={HandleImageChange} type='file' accept='image/*' />
            <Button  onClick={adding} style={{color : "red"}}>
                submit
            </Button>
        </div>
    )
}

export default AddCar