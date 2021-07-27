import Paragraph from '../../../../components/Paragraph/index'
import Heading from '../../../../components/Heading/index';
const index = () => {
    return (
        <div className="container">
            <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-12">
                    <h4>Above price includes:</h4>
                    <Paragraph paragraph={"Our 8 days budget tour for Maldives is a perfect fit for those who want to enjoy this destination on a strict budget. Our budget tours start from $220 per person Our budget tours start from $220 per person Our budget tours start from $220 per person Our budget tours start from $220 per person "} />
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <h4>Above price exclude</h4>
                    <Paragraph paragraph=" Our budget tours start from $220 per person " />
                </div>
            </div>
            <div class="margin"></div>
            <div>
                <h4>Terms and Condition</h4>
            </div>
            <div>
                <Paragraph paragraph="Cancellation Policy: Cancellations made 7 days or more in advance of the event date, will receive a 100% refund. Cancellations made within 3 - 6 days will incur a 20% fee. Cancellations made within 48 hours to the event will incur a 30% fee." />

            </div>
            <div>
                <Paragraph paragraph="No show Policy: Cancellations made 7 days or more in advance of the event date, will receive a 100% refund. Cancellations made within 3 - 6 days will incur a 20% fee. Cancellations made within 48 hours to the event will incur a 30% fee" />

            </div>
            <div>
                <Paragraph paragraph="Children Policy: Cancellations made 7 days or more in advance of the event date, will receive a 100% refund. Cancellations  made within 3 - 6 days will incur a 20% fee. Cancellations made within 48 hours to the event will incur a 30% fee." />

            </div>
        </div>
    );
};
export default index;
