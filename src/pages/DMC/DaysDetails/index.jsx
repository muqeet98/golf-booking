import DaysDetail from '../../../components/DaysDetail/index';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Header from '../../../components/AdminDashboard/Header';
import SideBar from '../../../components/AdminDashboard/SideBar';
// import SideBar from '../'
const index = () => {
	return (
		<div className="skin-blue sidebar-mini">
			<Header />
			<SideBar />
			<div className="row">
				<div className="col-lg-2">
				</div>
				<div className=" margin-vertival col-lg-9">
					<DaysDetail />
				</div>
			</div>
		</div>
	);
};
export default index;
