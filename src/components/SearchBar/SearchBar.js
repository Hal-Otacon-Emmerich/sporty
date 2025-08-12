export const SearchBar = ({onSearch, value}) => {
    return <input type="text" onChange={onSearch} value={value} placeholder="type for searching..."/>
}