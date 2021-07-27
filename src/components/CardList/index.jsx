import '../../assets/css/style.css'
import CardItem from './CardItem/index'
const index = () => {
  return (
    <div className="container">
      <div className="row">
        <CardItem
          item_image={"https://static.india.com/wp-content/uploads/2020/06/Maldives1.jpg?impolicy=Medium_Resize&w=1200&h=800"}
          item_name={"Beach "}
          item_country={"Maldives"}
          item_price={"$1200"}
          item_duration={"10 days and 9 nights"}
          item_category={"4*, 5*"}
        />
        <CardItem
          item_image={"https://cdn.britannica.com/82/167882-050-8F4AC206/Blue-Mosque-Istanbul.jpg"}
          item_name={"Beach 3 "}
          item_country={"Turkey"}
          item_price={"$1100"}
          item_duration={"10 days and 9 nights"}
          item_category={"4*, 5*"}
        />
        <CardItem
          item_image={"https://assets.kpmg/is/image/kpmg/houses-on-mountains-near-sea-italy:cq5dam.web.1200.630"}
          item_name={"Beach 3 "}
          item_country={"Itley"}
          item_price={"$900"}
          item_duration={"10 days and 9 nights"}
          item_category={"4*, 5*"}
        />
      </div>
    </div>
  );
}
export default index;
