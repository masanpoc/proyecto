import React, {useEffect, useState} from 'react'

export const Pagination = ({ songsPerPage, totalSongs, paginate, row, updatingPage, currentNumber }) => {
    const pageNumber = [];

    // // current Number
    // const [currentNumber, setCurrentNumber] = useState(1);

    // useEffect
    // useEffect(() => {
    // //    console.log(currentNumber);
    // }, [currentNumber])

    for(let i=1; i<=Math.ceil(totalSongs/songsPerPage) ; i++) {
        pageNumber.push(i);
    }
    return (
        <nav className={row}>
            <ul className='pagination'>
                {pageNumber.map(number => (
                    <li 
                        key={number+'item'}
                        className='page-item'
                    >
                        <div 
                            className={number===currentNumber 
                                ? 'active link'
                                : 'page link'
                            }
                            onClick={()=> {paginate(number); updatingPage(number)}}
                        >
                            {number}
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
