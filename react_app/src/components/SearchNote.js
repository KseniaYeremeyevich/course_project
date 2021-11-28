import React from 'react';
import { Search } from '@styled-icons/material-outlined/Search';

const SearchNote = ({ handleSearchNote }) => {
    return (
        <div className='search'>
            <Search className='search_icons' size='1.3em' />
            <input 
                onChange={(event) => 
                    handleSearchNote(event.target.value)
                }
                type='text' 
                placeholder='type to search' 
            />
        </div>
    );
};

export default SearchNote;