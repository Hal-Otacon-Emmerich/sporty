import './Searchbar.css';

export const SearchBar = ({onSearch, value}) => {
    return <input className="searchbar" type="text" onChange={onSearch} value={value} placeholder="type for searching..."/>
}