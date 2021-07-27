import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const index = () => {
	return (
		<div>
			<Carousel showArrows={true} showThumbs={false} height="400" width="50%" autoPlay={true}>
				<div className="image">
					<img src="https://www.houseoftravel.co.nz/images/default-source/destination/oahu.jpg?sfvrsn=6b402124_0" />
				</div>
				<div className="image">
					<img src="https://i.pinimg.com/originals/6c/f9/d7/6cf9d7f8f2ca5f61686d409f3f26ac91.jpg" />
				</div>
			</Carousel>
		</div>
	);
};
export default index;
