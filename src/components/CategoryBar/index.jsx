import '../../assets/css/style.css';
const index = (props) => {
	return (
		<div className="container">
			<div className="text-center" style={{ backgroundColor: props.bgcolor}}>
				<h4 className="h2-tag">{props.bar_title}</h4>
			</div>
			<div className="margin" />
		</div>
	);
};
export default index;
