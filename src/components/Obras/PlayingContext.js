import React, {useState, createContext} from 'react';

export const PlayingContext = createContext();

export const PlayingProvider = (props) => {
    const [active, setActive] = useState({
        0: false,
        1: false,
        2: false, 
        3: false,
        4: false,
        5: false
    }) 
    return (
        <PlayingContext.Provider value={[active, setActive]}>
            {props.children}
        </PlayingContext.Provider>
    )
}
