import { Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { singleByBorder } from "../Store/Reducers/countriesSlice"

const Details = () => {

    const dispatch = useDispatch()

    const params = useParams()
    console.log(params)

    const {singlePro} = useSelector(state => state.filterProducts)
    console.log(singlePro)

    return (
        <Fragment>
            <div className="main-countries py-[60px] bg-[#fafafa] dark:bg-DMB dark:text-white md:h-[calc(100vh-85px)] ">
                <div className="container">
                    <Link to='/' className="block"><span className="block w-[100px] h-[30px] leading-[30px] rounded-[6px] shadow-main transition-all duration-300 text-center hover:shadow-mainHover dark:shadow-mainDark dark:hover:shadow-mainDarkHover">Back</span></Link>
                    <div className="mainDetails grid md:grid-cols-2 gap-6 lg:gap-[80px] mt-[60px]">
                        <div className="image ele-center"><img src={singlePro.flag} alt="flag" /></div>
                        <div className="main-info py-[30px]">
                            <h1 className="text-[25px] font-black mb-5">{singlePro.name}</h1>
                            <div className="country-info grid md:grid-cols-2 gap-6 text-[14px]">
                                <ul className="flex flex-col gap-[6px]">
                                    <li><span className="font-bold">Native Name : </span><span className="opacity-[0.9]">{singlePro.nativeName}</span></li>
                                    <li><span className="font-bold">Population : </span><span className="opacity-[0.9]">{singlePro.population}</span></li>
                                    <li><span className="font-bold">Region : </span><span className="opacity-[0.9]">{singlePro.region}</span></li>
                                    <li><span className="font-bold">Sub Region : </span><span className="opacity-[0.9]">{singlePro.subregion}</span></li>
                                    <li><span className="font-bold">Capital : </span><span className="opacity-[0.9]">{singlePro.capital}</span></li>
                                </ul>
                                <ul className="flex flex-col gap-[6px]">
                                    <li><span className="font-bold">Top Level Domain : </span><span className="opacity-[0.9]">{singlePro.topLevelDomain[0]}</span></li>
                                    <li><span className="font-bold">currencies : </span><span className="opacity-[0.9]">{singlePro.currencies[0].name}</span></li>
                                    <li className="languages 2xl:flex w-full justify-between items-center">
                                        <span className="font-bold block">Languages : </span>
                                        <div>{singlePro.languages.map((lang, idx) => {
                                            return <span key={idx} className="opacity-[0.9]">{lang.name}, </span>
                                        })}</div>
                                    </li>
                                </ul>
                                {singlePro.borders && <div className="main-borders flex flex-wrap items-center justify-start w-full col-span-2 gap-3 mt-5">
                                    <h3 className="text-[18pxp] font-semibold">Border Countries : </h3>
                                    <div className="borders flex gap-3 items-center justify-start flex-wrap">
                                        {singlePro.borders.map((border, idx) => {
                                            return (<Link to={`/countries/${border}`} onClick={() => {dispatch(singleByBorder(border))}} key={idx} className="block border-[#eee] dark:border-[#3d4551] dark:text-[#afaeae] border-[2px] border-solid w-[90px] h-[30px] text-center leading-[30px]"><span className="">{border}</span></Link>)
                                        })}
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Details
