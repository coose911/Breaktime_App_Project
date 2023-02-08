import React, {useEffect, useState} from 'react'
import BreakGraph from './breakGraphs';
import WaterCoffeeGraph from './waterCoffeGraph';
import styled from 'styled-components';

const SingleGraphContainer = styled.div`
    width: 80%;
    height: auto;
    padding: 1.5rem;
`
const GraphsContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Graphs = () => {     

    return (
        <GraphsContainer>

            <SingleGraphContainer>
                <BreakGraph/>
            </SingleGraphContainer>
            
            <SingleGraphContainer>
                <WaterCoffeeGraph/>
            </SingleGraphContainer>
            
        </GraphsContainer>
    );
}

export default Graphs;