import React from 'react'

export const Pagination = ({ songsPerPage, totalSongs, paginate }) => {
    const pageNumber = [];

    for(let i=1; i<=Math.ceil(totalSongs/songsPerPage) ; i++) {
        pageNumber.push(i);
    }
    return (
        <nav>
            <ul className='pagination'>
                {pageNumber.map(number => (
                    <li 
                        key={number+'item'}
                        className='page-item'
                    >
                        <div 
                            className='page-link'
                            onClick={()=>paginate(number)}
                        >
                            {number}
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
