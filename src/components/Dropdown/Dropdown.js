import {useState, useEffect, useRef} from 'react'
import './Dropdown.css'

export const Dropdown = ({filter, sportsType, setSportsType}) => {
    const [openDropdown, setOpenDropdown] = useState(false)
    const dropdownRef = useRef(null);

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

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpenDropdown(false);
        }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className="dropdown" onClick={onOpenDropdown}>
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