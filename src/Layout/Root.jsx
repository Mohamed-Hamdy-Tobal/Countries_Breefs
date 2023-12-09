import { Outlet } from "react-router-dom"
import Header from "../Components/Header"
import { useSelector } from "react-redux"

export const Root = () => {

    const {darkState} = useSelector(state => state.filterProducts)

    return (
        <main className={`${darkState? 'dark' : ''}`}>  
            <Header/>
            <Outlet/>
        </main>
    )
}
