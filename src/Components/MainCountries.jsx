import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch  } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllContinents, setFilterContinent } from '../Store/Reducers/countriesSlice';
import MainCards from './MainCards';

const MainCountries = () => {

    const dispatch = useDispatch()

    const [toggle, setToggle] = useState(true);
    const [selectedContinent, setSelectedContinent] = useState(null);


    const toggleHandler = useCallback(() => {
        console.log('toggleHandler', toggle)
        setToggle((prevToggle) => !prevToggle);
    }, [toggle]);

    const continents = ['Africa', 'Europe', 'Asia', 'Americas', 'Oceania']

    const dropdownRef = useRef(null);

    // window.addEventListener('click', (e) => {
    //     console.log(' e.target:', e.target);
    //     console.log('dropdownRef.current:', dropdownRef.current);
    //     console.log('Clicked outside:', e.target !== dropdownRef.current);

    //     if (toggle && e.target !== dropdownRef.current) {
    //         // setToggle(false)
    //         toggleHandler();
    //         console.log('Clicked outside V:', dropdownRef.current.className);
    //     }
    // })

    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         console.log('Clicked outside:', event.target);
    //         console.log('Clicked outside:', dropdownRef.current.contains(event.target));
            
    //         if (toggle && !dropdownRef.current.contains(event.target)) {
    //             setToggle(false)
    //             // toggleHandler();
    //             console.log('Clicked outside V:', dropdownRef.current.className);
    //         }
    //     };

    //     // Check if the toggle has changed due to a click on the filter button
    //     if (toggle) {
    //         document.addEventListener('click', handleClickOutside);
    //     }

    //     return () => {
    //         document.removeEventListener('click', handleClickOutside);
    //     };
    // }, [toggle, toggleHandler]);

    return (
        <div className="main-countries py-[60px] bg-[#fafafa] dark:bg-DMB">
            <div className="container">
                <div className="filteration flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-y-5 w-full">
                    <div className="search relative dark:text-white w-full md:w-auto"><FontAwesomeIcon icon={faSearch} className="absolute top-2/4 left-[28px] -translate-y-2/4"/><input type="text" id='search-input' placeholder="Search for country..." className="p-[16px] pl-[70px] shadow-sm rounded-[8px] w-full md:w-[400px] max-w-full dark:bg-DME"/></div>
                    <div className="filter-country relative">
                        <button onClick={toggleHandler}  ref={dropdownRef} className="text-LMT dark:text-white bg-white hover:bg-[#eee] focus:outline-none font-medium rounded-lg text-sm px-6 py-3 text-center inline-flex items-center dark:bg-DME dark:[#17172d]" type="button">
                            Filter By Region
                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>
                        <div id="dropdownHover" className={`${toggle? 'hidden': ''} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-DME absolute bottom-[-200px] left-0 z-10`}>
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" >
                                {continents.map((item, idx) => <li key={idx}><Link
                        to="/"
                        className={`block px-4 py-2 ${
                            selectedContinent === item
                            ? 'bg-gray-100 dark:bg-gray-600 dark:text-white'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                        }`}
                        onClick={() => {
                            toggleHandler()
                            // Check if no continent is selected, dispatch action to get all elements
                            if (selectedContinent === item) {
                                setSelectedContinent(null)
                                dispatch(getAllContinents());
                            } else {
                                // No continent is selected or a different one is selected, dispatch action to get all elements
                                dispatch(setFilterContinent(item)); // Continent was selected again, filter by the continent
                                setSelectedContinent(item)
                            }
                        }}
                        >
                        {item}
                    </Link></li>)}
                            </ul>
                        </div>
                    </div>
                </div>

                <MainCards/>
            </div>
        </div>
    )
}

export default MainCountries


