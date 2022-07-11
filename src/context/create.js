import React from 'react';
import AboutContex from './const';


const Context = (props) =>{
    return(
        <AboutContex.Provider value={{}}>
            {props.children}
        </AboutContex.Provider>
    )
}


export default Context;