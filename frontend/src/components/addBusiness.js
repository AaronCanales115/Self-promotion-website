import { useState } from "react";
import { useBusinessContext } from "../hooks/useBusinessContext";
import { useAuthContext } from "../hooks/useAuthContext";
import jwt_decode from "jwt-decode";

const AddBusiness = () => {
  const userToken = JSON.parse(localStorage.getItem("user"));
  const token = userToken.token;
  const decoded = jwt_decode(token);
  const userId = decoded._id;

  const { dispatch } = useBusinessContext();
  const { user } = useAuthContext();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [history, setHistory] = useState("");
  const [productsServices, setProductsServices] = useState("");
  const [photos, setPhotos] = useState("");
  const [videos, setVideos] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [facebook, setFacebook] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [instagram, setInstagram] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async () => {

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const business = {
      userId,
      name,
      description,
      history,
      productsServices,
      photos,
      videos,
      phoneNumber,
      email,
      address,
      facebook,
      whatsapp,
      instagram,
    };

    const response = await fetch("https://self-promotion-website-345213ff6f06.herokuapp.com/api/business", {
      method: "POST",
      body: JSON.stringify(business),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setName("");
      setDescription("");
      setHistory("");
      setProductsServices("");
      setPhotos("");
      setVideos("");
      setPhoneNumber("");
      setEmail("");
      setAddress("");
      setFacebook("");
      setWhatsapp("");
      setInstagram("");
      dispatch({ type: "CREATE_BUSINESS", payload: json });
    }
  };

  return (
    <form className="create-business" onSubmit={handleSubmit}>

      <div className="create-business-form">
        <label>Name:</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label>Description:</label>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <label>History:</label>
        <input
          type="text"
          onChange={(e) => setHistory(e.target.value)}
          value={history}
        />
        <label>Products and Services:</label>
        <textarea
          type="text"
          onChange={(e) => setProductsServices(e.target.value)}
          value={productsServices}
        />
        <label>Photos:</label>
        <input
          type="text"
          onChange={(e) => setPhotos(e.target.value)}
          value={photos}
        />
        <label>Videos:</label>
        <input
          type="text"
          onChange={(e) => setVideos(e.target.value)}
          value={videos}
        />
        <label>Phone:</label>
        <input
          type="text"
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
        />
        <label>Email:</label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Address:</label>
        <input
          type="text"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
        <label>Facebook:</label>
        <input
          type="text"
          onChange={(e) => setFacebook(e.target.value)}
          value={facebook}
        />
        <label>WhatsApp:</label>
        <input
          type="text"
          onChange={(e) => setWhatsapp(e.target.value)}
          value={whatsapp}
        />
        <label>Instagram:</label>
        <input
          type="text"
          onChange={(e) => setInstagram(e.target.value)}
          value={instagram}
        />
      </div>
      <button>Add Business</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default AddBusiness;
