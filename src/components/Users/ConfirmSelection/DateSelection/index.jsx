import React from 'react';
const index = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-12">
                    <div className="single-tab-select-box">
                        <h2>Choose the date</h2>
                        <div className="travel-check-icon">
                            <input type="text" name="check_in" className="form-control" data-toggle="datepicker"
                                placeholder="28 -05 - 2021"></input>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4">
                    <div className="single-tab-select-box">
                        <h2>Hotel Category</h2>
                        <div className="travel-select-icon">
                            <select className="form-control ">
                                <option value="1">3*</option>
                                <option value="2">4*</option>
                                <option value="3">5*</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4">
                    <div className="single-tab-select-box">
                        <h2>Rooms</h2>
                        <div className="travel-select-icon">
                            <select className="form-control ">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4">
                    <div className="single-tab-select-box">
                        <h2>adults</h2>
                        <div className="travel-select-icon">
                            <select className="form-control ">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">4</option>
                                <option value="4">5</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4">
                    <div className="single-tab-select-box">
                        <h2>children</h2>
                        <div className="travel-select-icon">
                            <select className="form-control ">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default index;
