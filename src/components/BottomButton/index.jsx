import { Link } from "react-router-dom";
const index = (props) => {
    return (
        <div class="row space-between" >
            <div class="about-btn travel-mrt-0 pull-left">
                <Link to={props.prevPath}>
                    <button class="about-view travel-btn">
                        Previous
                            </button>
                </Link>
            </div>
            <div class="about-btn travel-mrt-0 pull-right">
                <Link to={props.nextPath}>
                    <button class="about-view travel-btn">
                        Next
							</button>
                </Link>
            </div>
        </div>
    )
}
export default index;