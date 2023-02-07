import React, {useEffect, useState} from 'react'
import { getBreakData } from '../helpers/BreaksService'
import { getCoffeeData } from '../helpers/CoffeeService'
import { getWaterData } from '../helpers/WaterService'

const Graphs = () => {

    const [breakData, setBreakData] = useState([])
    const [waterData, setWaterData] = useState([])
    const [coffeeData, setCoffeeData] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = () => {
        setBreakData(getBreakData())
        setCoffeeData(getCoffeeData())
        setWaterData(getWaterData())
    }    

    
    return (
        
        <>
        <h1>Graphs</h1>
        <p>breakdata</p>
        </>
     );
}
 
export default Graphs;