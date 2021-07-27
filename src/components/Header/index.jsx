import { useEffect } from 'react';
import React from 'react';
import Button from '../Button/index';
import Button2 from '../Button2/index';
import '../../assets/css/style.css';
import { CalendarToday, LocationCity, LocationOnOutlined } from '@material-ui/icons';
const image = 'https://cdn.turkishairlines.com/m/67b2593c934bc0d8/original/TourIstanbul-1400x600Headimage-OK-jpg.jpg';
const sectionStyle = {
	width: '100%',
	height: 'px',
	textAlign: 'center',
	lineHeight: '600px',
	backgroundImage: `url(${image})`
};
const index = (props) => {
	return (
		<div className="">
			<div className="s01">
				{/* <div className="search-sec">
					<LocationOnOutlined style={{ width: '35px', height: '35px', color: '#00d8ff' }} />
					<input type="text" placeholder="Where would you like to go?" className="header-input-location" />
					<CalendarToday style={{ width: '35px', height: '35px', color: '#00d8ff' }} />
					<input type="date" placeholder="When?" className="header-input" />
					<button class="about-view" style={{ width: '150px', height: '40px', lineHeight: 'normal' }}>
						Search
					</button>
				</div> */}

				<div className="inner-form">
					<div className="input-field first-wrap">
						<input
							id="search"
							type="text"
							className="first-wrap input-field input-width"
							placeholder="	Where would you like to go?"
						/>
					</div>
					<div className="input-field second-wrap">
						<input
							id="location"
							type="date"
							className="input-field input-width"
							textAlign="center"
							placeholder="	location"
						/>
					</div>
					<div className="input-field third-wrap">
						<button className="btn-search input-field input-width" type="button">
							Search
						</button>
					</div>
				</div>
			</div>
			<div className="margin" />
		</div>
	);
};

export default index;
