import React, { useEffect } from 'react';
const index = () => {
    return (
        <div className="container">
            <form>
                <label class="radio-inline">
                    <input type="radio" name="optradio"></input><img src="https://www.freeiconspng.com/thumbs/visa-icon/visa-icon-16.png" width="50" height="50"></img>
                </label>

                <label class="radio-inline">
                    <input type="radio" name="optradio"></input><img src="https://mea.mastercard.com/content/dam/mccom/global/logos/logo-mastercard-mobile.svg" width="80" height="80"></img>
                </label>
            </form>
        </div>
    );
};
export default index;
