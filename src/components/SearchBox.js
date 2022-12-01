import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return(
        <div className='ma2'>
            <input 
                className='pa2 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='Search robots...' 
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;