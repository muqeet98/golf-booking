import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import MultiSelect from 'react-multi-select-component';
import Button from '../../../components/Button/index';
import ImageUploader from 'react-images-upload';
import Header from '../../../components/AdminDashboard/Header'
import SideBar from '../../../components/AdminDashboard/SideBar'
import { Link } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar/Sidebar';
const Index = () => {
	const options = [
		{ label: '3 🌟', value: 'three' },
		{ label: '4 🌟', value: 'four' },
		{ label: '5 🌟', value: 'five' }
	];

	const [ startDate, setStartDate ] = useState(new Date());
	const [ endDate, setEndDate ] = useState(new Date());
	const [ selected, setSelected ] = useState([]);

	const [item, setItem] = useState('Home');

  const callbackFunction = (childData) => {
    setItem(childData)
    console.log("Hello Boys")
}
	return (

		<div className="skin-blue sidebar-mini">
    <Header/>
	{/* <SideBar /> */}
    <SideBar parentCallback = {callbackFunction}/>

		<div className="row">
			<div className="col-lg-2">

			</div>
			<div className="col-lg-8">
				<div className="margin" />
				<div classNameName="row">
					<div classNameName="clo-sm-7">
						<div classNameName="about-btn travel-mrt-0 pull-left">
							<h1>Adding New Package</h1>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-4 col-md-4 col-sm-12">
						<div className="single-tab-select-box">
							<h2>Package Type</h2>
							<div className="travel-select-icon">
								<select className="form-control">
									<option value="default">Holiday Package</option>
									<option value="turkey">Tour </option>
									<option value="russia">Excursion/Sightseeing</option>
									<option value="egept">Cruise</option>
								</select>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-4 col-sm-12">
						<div className="single-tab-select-box">
							<h2>Tour Name</h2>
							<div>
								<input type="Name" name="package-name" className="form-control" />
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-4 col-sm-12">
						<div className="single-tab-select-box">
							<h2>duration</h2>
							<div className="travel-select-icon">
								<select className="form-control">
									<option value="default">4 Days</option>
									<option value="5">5 Days</option>
									<option value="7">7 Days</option>
									<option value="10">10 Days</option>
								</select>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-4 col-sm-12">
						<div className="single-tab-select-box">
							<h2>Starting Point</h2>
							<input type="Name" name="package-name" className="form-control" />
						</div>
					</div>

					<div className="col-lg-4 col-md-4 col-sm-12">
						<div className="single-tab-select-box">
							<h2>Ending Point</h2>
							<div>
								<input type="Name" name="package-name" className="form-control" />
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-12">
						<div className="single-tab-select-box">
							<h2>Main Cities</h2>
							<input type="Name" name="package-name" className="form-control" />
						</div>
					</div>
				</div>
				<div className="margin" />
				<div className="row">
					<div className="col-lg-4 col-md-4 col-sm-12">
						<div className="single-tab-select-box">
							<h2>Activated To</h2>
							<div>
								<DatePicker
									selected={endDate}
									onChange={(date) => setEndDate(date)}
									className="form-control"
								/>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-12">
						<div className="single-tab-select-box">
							<h2>Activated Till</h2>
							<div>
								<DatePicker
									selected={endDate}
									onChange={(date) => setEndDate(date)}
									className="form-control"
								/>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-12">
						<div className="single-tab-select-box">
							<h2>Hotel Class</h2>
							<MultiSelect
								options={options}
								value={selected}
								onChange={setSelected}
								labelledBy="Select"
							/>
						</div>
					</div>
				</div>
				<div className="margin" />
				<div className="row">
					<div className="col-lg-4 col-md-4 col-sm-12">
						<ImageUploader
							withIcon={false}
							buttonText="Choose images"
							// onChange={this.onDrop}
							imgExtension={[ '.jpg', '.gif', '.png', '.gif' ]}
							maxFileSize={5242880}
						/>
					</div>
				</div>
				<div className="center">
					<Link to="days-detail">
						<Button btn_title={'Next'} />
					</Link>
				</div>
			</div>
		</div>
		</div>
	);
};
export default Index;
