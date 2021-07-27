import DayList from './DayList/index'
import BottomButton from '../../components/BottomButton/index'
const index = (props) => {
    return (
        <div>
            <DayList label={"Day 1"} placeholder={"Description"} rows={"4"} />
            <div className="margin"></div>
            <DayList label={"Day 2"} placeholder={"Description"} rows={"4"} />
            <div className="margin"></div>
            <DayList label={"Day 3"} placeholder={"Description"} rows={"4"} />
            <BottomButton prevPath={"add-packages"} nextPath={"pricing"} />
        </div>
    )
}
export default index;