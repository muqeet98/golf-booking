import React from 'react'
import Textarea from '../Textarea/index'
const index = (props) => {
    return (
        <div className="margin-vertival">
            <div className="container" >
                <h4>{props.title}</h4>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="single-tab-select-box">
                    <Textarea rows={props.rows} placeholder={props.placeholder} />
                </div>
            </div>
        </div>
    )
}

export default index;