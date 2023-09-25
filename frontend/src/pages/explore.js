import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";

const Explore = () => {
  const [businessBydate, setBusinessByDate] = useState([]);
  //const [businessByRating, setBusinessByRating] = useState([]);

  useEffect(() => {
    const fetchBusiness = async () => {
      fetch("http://localhost:4000/api/explore/bydate")
        .then((response) => response.json())
        .then((resData) => setBusinessByDate(resData));
    };
    fetchBusiness();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*useEffect(() => {
    const fetchBusiness = async () => {
      fetch("http://localhost:4000/api/explore/byrating")
        .then((response) => response.json())
        .then((resData) => setBusinessByRating(resData));
    };
    fetchBusiness();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);*/

  return (
    <div className="explore-container">
        <h2>Newest Business!</h2>
      <div className="show-business-byDate">
        {businessBydate &&
          businessBydate.map((business) => (
            <div className="card">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" className="card-photo" src={business.photos} />
                <Card.Body>
                  <Card.Title>{business.name}</Card.Title>
                  <Card.Text>
                    {business.description}
                  </Card.Text>
                  <Link to={"/explore/view/" + business._id}>View</Link>
                </Card.Body>
              </Card>
            </div>
          ))}
      </div>

    </div>
  );
};

export default Explore;
