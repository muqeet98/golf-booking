import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../../../assets/css/style.css';
const Index = (props) => {
	const history = useHistory();
	return (
		<div className="col-md-4 col-sm-8">
			<div className="single-package-item">
				<img src={props.item_image} className="imagesize" alt="package-place" />
				<div className="single-package-item-txt">
					<h3>
						{props.item_country}
						<span className="pull-right">
							<Link to="see-more">
								<button className="about-view packages-btn">See More</button>
							</Link>
						</span>
					</h3>
					<div className="packages-para">
						<p>
							<i className="fa fa-angle-right" />Duration: {props.item_duration}
						</p>
						<p>
							<i className="fa fa-angle-right" /> Hotel Category: {props.item_category}
						</p>
					</div>
					<div className="packages-review">
						<p>
							<h4>
								From {props.item_price}
								<span>
									<i />/per person
								</span>
							</h4>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Index;
