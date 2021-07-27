import React from 'react';
import Card from '../DetailContainer/Card/index'
import Image from '../DetailContainer/Image/index'
import Carosal from '../DetailContainer/Carosal/index'
const index = () => {
    return (
        <div className="container row justify" style={{justifyContent: 'space-between'}}>
            <Card
                distination={"Turkey"}
                duration={"15 days & 14 nights"}
                category={"4*, 5*"}
                price={"600"}
                description={"Maldives, officially the Republic of Maldives, is a small archipelagic state in South Asia situated in the Indian Ocean. "}
            />
            <Carosal/>
        </div>
    )
}
export default index;
