import React from 'react'
const index = () => {
    return (
        <div className="margin-vertival">
            <div >
                <h4>Insert Prices</h4>
            </div>
            <div className="row">
                <div className="single-tab-select-box">
                    <table className="table table-bordered table-responsive table-striped">
                        <tr>
                            <th className="header" scope="col" colSpan={"0"}></th>
                            <th className="header" scope="col" colspan="3" >Price per person in double room</th>
                            <th className="header" scope="col" colspan="3">Single supplement</th>
                        </tr>
                        <tr>
                            <th className="header" scope="row">Number of Pax</th>
                            <td>3 star</td>
                            <td>4 Star</td>
                            <td>5 Star</td>
                            <td>3 Star</td>
                            <td>4 Star</td>
                            <td>5 Star</td>
                        </tr>
                        <tr>
                            <th className="header" scope="row">1-3 person</th>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                        </tr>
                        <tr>
                            <th className="header" scope="row">4-6 person</th>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                        </tr>
                        <tr>
                            <th className="header" scope="row">7-10 person</th>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                        </tr>
                        <tr>
                            <th className="header" scope="row">11-30 person</th>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                        </tr>
                        <tr>
                            <th className="header" scope="row">31-49 person</th>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                        </tr>
                        <tr>
                            <th className="header" scope="row">50 and above</th>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                            <td><input type="endingpoint" name="package-ending" className="form-control" ></input></td>
                        </tr>
                        <tr >
                            <th className="header">Accommodations notes/ children policy</th>
                            <td colSpan="6"><textarea className="form-control" id="textAreaExample" placeholder="Description" rows="3"></textarea></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default index;