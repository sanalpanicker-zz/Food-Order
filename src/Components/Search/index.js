import React from 'react';
import { SearchContainer, SearchBox } from './styles';


const Search = ({ handleSearch, className }) => (
    <SearchContainer data-testid="search" className={className}>
        <SearchBox type="text" placeholder="Search" onKeyUp={handleSearch} />
    </SearchContainer>
);


export default Search;