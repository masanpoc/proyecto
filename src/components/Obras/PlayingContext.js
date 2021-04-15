import React, {useState, createContext} from 'react';

export const PlayingContext = createContext();

export const PlayingProvider = (props) => {
    const [active, setActive] = useState([]);

    return (
        <PlayingContext.Provider value={[active, setActive]}>
            {props.children}
        </PlayingContext.Provider>
    )
}
