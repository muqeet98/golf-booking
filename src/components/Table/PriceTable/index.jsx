
const index = (props) => {
    return (
        <div className="container">
            <table class="table table-bordered table-responsive display">
                <tr>
                    <th>Single</th>
                    <th>Double</th>
                    <th>Single</th>
                    <th>Double</th>
                    <th>Single</th>
                    <th>Double</th>
                </tr>
                <tr>
                    <td>USD {props.threestarSingle}</td>
                    <td>USD {props.threestarDoubble}</td>
                    <td>USD {props.fourstartSingle}</td>
                    <td>USD {props.fourstarDouble}</td>
                    <td>USD {props.fivestarSingle}</td>
                    <td>USD {props.fivestarDouble}</td>
                </tr>
            </table>
        </div>
    );
};
export default index;
