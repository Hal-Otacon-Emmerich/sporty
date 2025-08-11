import {useState} from 'react'
import './Dropdown.css'

export const Dropdown = ({filter, sportsType, setSportsType}) => {
    const [openDropdown, setOpenDropdown] = useState(false)
    function renderFilter() {
        return Array.from(filter).map((type, index) => (
            <li className="dropdown-list__item" onClick={() => setSportsType(type)} key={`${index}-${type}`}>
                {type}
            </li>
        ));
    } 
    function onOpenDropdown() {
        setOpenDropdown(!openDropdown)
    }
    return (
        <div className="dropdown" onClick={onOpenDropdown}>
            <span>{sportsType ? sportsType : "Select the filter"}</span>
            {openDropdown && (
                <ul className="dropdown-list">
                    <li className="dropdown-list__item" onClick={() => setSportsType('')}>All</li>
                    {renderFilter()}
                </ul>
            )}
        </div>
    )
}