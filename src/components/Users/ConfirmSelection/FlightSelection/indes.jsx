import React from 'react';
const index = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-4 col-sm-12">
                    <div className="single-tab-select-box">
                        <h2>Arravial Flight No</h2>
                        <div>
                            <input type="text" name="arival_flight" className="form-control" placeholder="Arrival Flight No"></input>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-4 col-sm-12">
                    <div className="single-tab-select-box">
                        <h2>Departure Flight No</h2>
                        <div>
                            <input type="text" name="departure_flight" className="form-control"
                                placeholder="Departure Flight No"></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default index;
