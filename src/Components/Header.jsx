import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { darkMood } from '../Store/Reducers/countriesSlice';
import { Link } from 'react-router-dom';

const Header = () => {

    const dispatch = useDispatch()

    const darkMoodHandler = () => {
        dispatch(darkMood())
    }

    return (
        <div className="header py-5 shadow-md dark:bg-DME dark:shadow-lg dark:text-white">
            <div className="container">
                <nav className='ele-center justify-between'>
                    <Link to='/'><h3 className='text-[20px] md:text-[30px] font-bold'>Where in the world?</h3></Link>
                    <div className="darken cursor-pointer" onClick={darkMoodHandler}><FontAwesomeIcon icon={faMoon} className='text-[16px]  md:text-[20px] mr-2'/> <span className='text-[16px]  md:text-[18px]'>Dark Mood</span></div>
                </nav>
            </div>
        </div>
    )
}

export default Header
