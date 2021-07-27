import Textarea from '../../Textarea/index'
import ImageUploader from 'react-images-upload';
const index = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-1 col-md-1 col-sm-12">
                    <div className="single-tab-select-box">
                        <h2>{props.label}</h2>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <input type="title" name="package-ending" placeholder="Title" className="form-control" ></input>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="single-tab-select-box">
                        <Textarea placeholder={props.placeholder} rows={props.rows} />
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <ImageUploader
                        withIcon={false}
                        buttonText='Choose images'
                        // onChange={this.onDrop}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                    />
                </div>
            </div>
        </div>
    )
}
export default index;

