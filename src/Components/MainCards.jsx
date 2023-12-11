import { Link } from "react-router-dom"
// import { storeData } from "../assets/data"
import { CardCountry } from "./CardCountry"
import { useDispatch, useSelector } from "react-redux"
import { singleProduct } from "../Store/Reducers/countriesSlice"

const MainCards = () => {

    const dispatch = useDispatch()

    const {filterProducts} = useSelector(state => state.filterProducts)
    console.log(filterProducts)

    return (
        <div className="countries grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 py-[60px]">
            {filterProducts.map((item, index) => <Link to={`/countries/${item.name}`} onClick={() => {dispatch(singleProduct(item.name))}}  key={index} className="mb-[28px]"><CardCountry name={item.name} population={item.population} region={item.region} capital={item.capital} flag={item.flag}/></Link>)}
        </div>
    )
}

export default MainCards
