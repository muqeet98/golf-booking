import React from 'react';
const index = (props) => {
    return (
        <div>
            <textarea class="form-control" id="textAreaExample" placeholder={props.placeholder} rows={props.rows}></textarea>
        </div>
    );
};

export default index;
