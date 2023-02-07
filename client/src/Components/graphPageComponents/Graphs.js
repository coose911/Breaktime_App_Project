import React, {useEffect, useState} from 'react'
import BreakGraph from './breakGraphs';
import WaterCoffeeGraph from './waterCoffeGraph';

const Graphs = () => {     

    return (
        <>
        <div>
            <BreakGraph/>
        </div>
        <div>
            <WaterCoffeeGraph/>
        </div>
        </>
     );
}
 
export default Graphs;