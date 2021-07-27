import React from 'react';
const index = (props) => {
    return (
        <div className="col-md-4 col-sm-6">
            <div className="single-package-item">
                <div className="single-package-item-txt">
                    <h3>Distination: {props.distination}</h3>
                    <div className="packages-para">
                        <p>
                            <i className="fa fa-angle-right"></i>Duration: {props.duration}
                        </p>
                        <p>
                            <i className="fa fa-angle-right"></i> Hotel Category: {props.category}
                        </p>
                    </div>
                    <div className="packages-review">
                        <p>
                            <h4>From  $ {props.price}<span><i></i>/per person</span></h4>
                        </p>
                    </div>
                    <div className="packages-para">
                        <p>
                            <i className="fa fa-angle-right">{props.description} </i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default index;
