import React from 'react';
import Sidebar from '../../../../components/Sidebar/Sidebar';
import CardItem from '../../../../components/CardList/CardItem/index';
import { useHistory, useLocation } from 'react-router-dom';
import { AddAPhoto, AddCircleRounded, AddCircleTwoTone } from '@material-ui/icons';
const Index = (props) => {
	const history = useHistory();
	const location = useLocation();
	return (
		<div className="row">
			<div className="col-lg-2 col-sm-0">
				{/* <Sidebar /> */}
			</div>
			<div className="row col-lg-8  container margin">
				<CardItem
					item_image={
						'https://static.india.com/wp-content/uploads/2020/06/Maldives1.jpg?impolicy=Medium_Resize&w=1200&h=800'
					}
					item_name={'Beach '}
					item_country={'Maldives'}
					item_price={'$1200'}
					item_duration={'10 days and 9 nights'}
					item_category={'4*, 5*'}
				/>

				<CardItem
					item_image={'https://cdn.britannica.com/82/167882-050-8F4AC206/Blue-Mosque-Istanbul.jpg'}
					item_name={'Beach 3 '}
					item_country={'Turkey'}
					item_price={'$1100'}
					item_duration={'10 days and 9 nights'}
					item_category={'4*, 5*'}
				/>

				<div className="col-md-4 col-sm-6">
					<div style={{textAlign:'center',justifyContent:'center',  flexDirection:'column'}} className="single-package-item imagesize2">
                       <div  >
						<AddCircleRounded style={{width: '4em', height:'4em'}} className="add-icon" onClick={()=> history.push({pathname: '/add-packages'})}/>
						</div>
						<div>
							<h5>Add Package</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Index;
