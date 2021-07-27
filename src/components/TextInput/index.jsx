const index = (props) => {
    return (

            <div className="container col-lg-6 col-md-6 col-sm-12">
                <input type="text" name={props.name} className="form-control" placeholder={props.placeholder}></input>
            </div>
    );
};
export default index;
