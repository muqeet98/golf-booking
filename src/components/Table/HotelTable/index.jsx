const index = (props) => {
    return (
        <div className="container">
            <table class="table table-bordered table-responsive display ">
                <tr >
                    <th>3*</th>
                    <th>4*</th>
                    <th>5*</th>
                </tr>
                <tr>
                    <td>{props.threestarHotel}</td>
                    <td>{props.fourstarHotel}</td>
                    <td>{props.fivestarHotel}</td>
                </tr>
            </table>
        </div>
    );
};
export default index;
