import React from 'react'
const index = () => {
    return (
        <div className="margin-vertival">
            <div >
                <h4>Insert Hotel Names</h4>
            </div>
            <div className="row">
                <div>
                    <div className="single-tab-select-box">

                        <table className="table table-bordered table-responsive table-striped">
                            <tr>
                                <th scope="col" colspan="6" className="header">HOTELS used or similar </th>
                            </tr>
                            <tr>
                                <th scope="row" className="header">Day</th>
                                <th>City</th>
                                <th>State</th>
                                <th>3*</th>
                                <th>4*</th>
                                <th>5*</th>
                            </tr>
                            <tr>
                                <th scope="row" className="header">Day1</th>
                                <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                                <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                                <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                                <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                                <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>

                            </tr>
                            <tr >
                                <th scope="row" className="header">Day2</th>
                                <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                                <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                                <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                                <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                                <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>

                            </tr>
                            <tr>
                                <th scope="row" className="header">Day3</th>
                                <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                                <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                                <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                                <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                                <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            </tr>
                            <tr>
                                <th scope="row" className="header">Day4</th>
                                <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                                <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                                <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                                <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                                <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>

                            </tr>
                            <tr>
                                <th scope="row" className="header">Day5</th>
                                <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                                <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                                <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                                <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                                <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default index;