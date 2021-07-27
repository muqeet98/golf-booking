import React from 'react';
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
const Index = (props) => {
	const classes = useStyles();
	const [ open, setOpen ] = React.useState(false);
	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<div className="container">
			<List component="nav" aria-labelledby="nested-list-subheader"
            className={'container'}>
				<ListItem button onClick={handleClick} className="container">
					<ListItemText primary={props.listtitle} />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<List className="row">
						<div className="col-lg-8">
							<label>{props.listdesc}</label>
							<div className="container">
								<div className="row">
									<label>Breakfast</label>
									<Clear />
								</div>
							</div>
							<div className="container">
								<div className="row">
									<label>Lunch</label>
									<CheckOutlined />
								</div>
							</div>
							<div className="container">
								<div className="row">
									<label>Dinner</label>
									<Clear />
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<img src={props.image} width="90%" height="30%" />
						</div>
					</List>
				</Collapse>
			</List>
		</div>
	);
};
export default Index;
