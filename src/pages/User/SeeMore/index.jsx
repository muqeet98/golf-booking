import React from 'react';
import DetailContainer from '../../../components/DetailContainer/index';
import Header from '../../../components/Header/index';
import CategoryBar from '../../../components/CategoryBar/index';
import HotelTable from '../../../components/Table/HotelTable/index';
import PriceTable from '../../../components/Table/PriceTable/index';
import Description from './Description/index';
import Button from '../../../components/Button/index';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { Cancel, CheckOutlined, Clear } from '@material-ui/icons';
import DaysList from '../../../components/DaysList/index';
import Navbar from '../../../Navbar/index'
import { Nav } from '../../../Navbar/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper
	},
	nested: {
		paddingLeft: theme.spacing(4)
	}
}));
const Index = () => {
	const classes = useStyles();
	const [ open, setOpen ] = React.useState(true);

	const handleClick = () => {
		setOpen(!open);
	};
	
	return (
		<div>
		<Navbar/>
		<Header/>
		<div className="container">

			<DetailContainer />
			<CategoryBar bgcolor={'#3b5999'} bar_title={'HOTELS'} />
			<DaysList
				listtitle={'Day 1: Welcome to Islamabad'}
				listdesc={
					'Welcome to Finland! Start in Helsinki, a vibrant seaside city known for its beautiful islands and great green parks.'
				}
				image={'https://www.houseoftravel.co.nz/images/default-source/destination/oahu.jpg?sfvrsn=6b402124_0'}
			/>
			<DaysList
				listtitle={'Day 2:  Pirsohawa'}
				listdesc={
					"oin your Expat Explore tour leader on a walking tour of Helsinki that will introduce you to some of the city's most famous sights. This includes the likes of the Havis Amanda, as well as the Senate Square and Helsinki Cathedral. Not to mention Uspenski Cathedral and Kauppatori Market! "
				}
				image={'https://i.pinimg.com/originals/6c/f9/d7/6cf9d7f8f2ca5f61686d409f3f26ac91.jpg'}
			/>
			<DaysList
				listtitle={'Day 3:  Muree'}
				listdesc={
					"oin your Expat Explore tour leader on a walking tour of Helsinki that will introduce you to some of the city's most famous sights. This includes the likes of the Havis Amanda, as well as the Senate Square and Helsinki Cathedral. Not to mention Uspenski Cathedral and Kauppatori Market! "
				}
				image={'https://i.pinimg.com/originals/6c/f9/d7/6cf9d7f8f2ca5f61686d409f3f26ac91.jpg'}
			/>
			<DaysList
				listtitle={'Day 4:  Naran'}
				listdesc={
					"oin your Expat Explore tour leader on a walking tour of Helsinki that will introduce you to some of the city's most famous sights. This includes the likes of the Havis Amanda, as well as the Senate Square and Helsinki Cathedral. Not to mention Uspenski Cathedral and Kauppatori Market! "
				}
				image={'https://i.pinimg.com/originals/6c/f9/d7/6cf9d7f8f2ca5f61686d409f3f26ac91.jpg'}
			/>
			<DaysList
				listtitle={'Day 5:  Lake saif-ul-Malook'}
				listdesc={
					"oin your Expat Explore tour leader on a walking tour of Helsinki that will introduce you to some of the city's most famous sights. This includes the likes of the Havis Amanda, as well as the Senate Square and Helsinki Cathedral. Not to mention Uspenski Cathedral and Kauppatori Market! "
				}
				image={'https://i.pinimg.com/originals/6c/f9/d7/6cf9d7f8f2ca5f61686d409f3f26ac91.jpg'}
			/>

			<CategoryBar bgcolor={'#3b5999'} bar_title={'Rooms'} />
			<PriceTable
				threestarSingle={'100'}
				threestarDouble={'150'}
				fourstarSingle={'150'}
				fourstarDouble={'200'}
				fivestarSingle={'250'}
				fivestarDouble={'300'}
			/>
			<Description />
			<div className="container center">
				<Link to="/confirm-selection">
					<Button btn_title="Book Now" />
				</Link>
			</div>
			<div className="margin" />
		</div>
		</div>
	);
};
export default Index;
