import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch  } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useState } from 'react';

const MainCountries = () => {

    const [toggle, setToggle] = useState(false);

    const toggleHandler = () => {
        setToggle(!toggle)
        console.log(toggle)
    }
    const continents = ['Africa', 'Europe', 'Asia', 'America', 'Oceania']

    return (
        <div className="main-countries py-[60px] bg-[#fafafa] dark:bg-DMB">
            <div className="container">
                <div className="filteration flex justify-between items-center">
                    <div className="search relative dark:text-white"><FontAwesomeIcon icon={faSearch} className="absolute top-2/4 left-[28px] -translate-y-2/4"/><input type="text" placeholder="Search for country..." className="p-[16px] pl-[70px] shadow-sm rounded-[8px] w-[400px] dark:bg-DME"/></div>
                    <div className="filter-country relative">
                        <button onClick={toggleHandler} className="text-LMT dark:text-white bg-white hover:bg-[#eee] focus:outline-none font-medium rounded-lg text-sm px-6 py-3 text-center inline-flex items-center dark:bg-DME dark:[#17172d]" type="button">
                            Filter By Region
                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>
                        <div id="dropdownHover" className={`${!toggle? 'hidden': ''} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-DME absolute bottom-[-238px] left-0 z-10`}>
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" >
                                {continents.map((item, idx) => <li key={idx}><Link to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{item}</Link></li>)}
                                <li><Link to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCountries
