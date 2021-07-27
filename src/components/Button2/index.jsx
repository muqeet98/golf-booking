const index = (props) => {
    return (
        <div>
            <button class="about-view travel-btn" style={{width: props.width, height: props.height, backgroundColor: props.bgcolor, lineHeight: props.lineHeight}}>
                {props.btn_title}
            </button>
        </div>
    );
};
export default index;
