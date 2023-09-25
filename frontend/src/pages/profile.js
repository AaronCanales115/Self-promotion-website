import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode"

const Profile = () =>{
    const user = JSON.parse(localStorage.getItem('user'))
    const token = (user.token)
    const decoded = jwt_decode(token)
    const id = decoded._id
    const [data, setData] = useState([]);
   
    useEffect(() =>{
        const fetchData = async () => {
        fetch(`https://self-promotion-website-345213ff6f06.herokuapp.com/api/user/${id}`)
        .then(response => response.json()) 
        .then(resData => setData(resData))
        
        }
        fetchData()
        console.log(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return <div className="profile-container">
        <h1>Profile</h1>
        <div className='userInfo'>
            <div>
                <label>Name:</label>
                <span> {data.name}</span>
            </div> 
            <div>
                <label>Last name:</label>
                <span> {data.lastName}</span>
            </div> 
            <div>
                <label>Age:</label>
                <span> {data.age}</span>
            </div> 
            <div>
                <label>Gender:</label>
                <span> {data.gender}</span>
            </div> 
            <div>
                <label>Email:</label>
                <span> {data.email}</span>
            </div> 
            <div>
                <label>Phone:</label>
                <span> {data.phoneNumber}</span>
            </div> 
            <div>
                <label>Profession:</label>
                <span> {data.professions}</span>
            </div> 
            <div>
                <label>Experience:</label>
                <span> {data.experiences}</span>
            </div> 
            <div>
                <label>Skills: </label>
                <span> {data.skills}</span>
            </div> 
        </div>
        
    </div>
}


export default Profile