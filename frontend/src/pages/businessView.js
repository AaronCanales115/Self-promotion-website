import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BusinessView = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      fetch(`https://self-promotion-website-345213ff6f06.herokuapp.com/api/explore/${id}`)
        .then((response) => response.json())
        .then((resData) => setData(resData));
    };
    fetchData();
    console.log(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="businessView-container">
      <div className="view-business-Info">
        <label>Name:</label>
        <span className="view-businesData">{data.name}</span>

        <label>Description:</label>
        <span className="view-businesData">{data.description}</span>

        <label>History:</label>
        <span className="view-businesData">{data.history}</span>

        <label>Products and Services:</label>
        <span className="view-businesData">{data.productsServices}</span>

        <label>Phone Number:</label>
        <span className="view-businesData">{data.phoneNumber}</span>

        <label>Email:</label>
        <span className="view-businesData">{data.email}</span>

        <label>Address:</label>
        <span className="view-businesData">{data.address}</span>

        <label>Photos:</label>
        <span className="view-businesData">{data.photos}</span>
      </div>

        <img src={data.photos} alt="business"></img>
    </div>
        
  );
};

export default BusinessView;
