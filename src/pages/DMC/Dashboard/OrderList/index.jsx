import React from 'react';
import Sidebar from '../../../../components/Sidebar/Sidebar';

import { useHistory, useLocation } from 'react-router-dom';
import { AddAPhoto, AddCircleRounded, AddCircleTwoTone } from '@material-ui/icons';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const createData = (name, calories, fat, amount, duration) => {
	return { name, calories, fat, amount, duration };
};

const rows = [ createData('Turkey Tour', 159, 4,1000, 5),
createData('Turkey Tour', 159, 4,1000, 5),
createData('Turkey Tour', 159, 4,1000, 5),
];

const Index = (props) => {
	const history = useHistory();
	const location = useLocation();
	return (
		<div className="row">
			<div className="col-lg-2 col-sm-0">
				{/* <Sidebar /> */}
			</div>
			<div className="row col-lg-8  container margin">
				<div>
					<TableContainer component={Paper}>
						<Table className="table-width" aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell style={{ fontWeight: 'bold' }}>Customer Name</TableCell>
									<TableCell style={{ fontWeight: 'bold' }}>Package Name</TableCell>
									<TableCell align="" style={{ fontWeight: 'bold' }}>
										No. of Person
									</TableCell>
									<TableCell align="" style={{ fontWeight: 'bold' }}>
										Total Amount
									</TableCell>
									<TableCell align="" style={{ fontWeight: 'bold' }}>
										Duration
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row) => (
									<TableRow key={row.name}>
										<TableCell component="th" scope="row">
											{row.name}
										</TableCell>
										<TableCell>${row.calories}k</TableCell>
										<TableCell align="">{row.fat}</TableCell>
										<TableCell align="">${row.amount}</TableCell>
										<TableCell align="">{row.duration}/days</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</div>
			</div>
		</div>
	);
};
export default Index;
