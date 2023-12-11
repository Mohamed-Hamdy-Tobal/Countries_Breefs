import { Fragment } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const Details = () => {

    const params = useParams()
    console.log(params)

    const {singlePro} = useSelector(state => state.filterProducts)
    console.log(singlePro)

    return (
        <Fragment>
            {singlePro.name}
        </Fragment>
    )
}

export default Details
