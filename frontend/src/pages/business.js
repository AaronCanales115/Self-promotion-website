import { useEffect } from "react"
import { useBusinessContext } from "../hooks/useBusinessContext"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import AddBusiness from "../components/addBusiness"
import BusinessDetails from "../components/businessDetails"

const Business = () =>{
    const userToken = JSON.parse(localStorage.getItem('user'))
    const token = (userToken.token)
    

    const {business, dispatch} = useBusinessContext()
    //const {user} = useAuthContext()
    //console.log(user)
    
    useEffect(() => {
        const fetchBusiness = async () => {
            const response = await fetch('https://self-promotion-website-345213ff6f06.herokuapp.com/api/business',{
                headers:{'Authorization': `Bearer ${token}`}
        })
            const json = await response.json()
            console.log(token)
            if(response.ok){
                dispatch({type: 'SET_BUSINESS', payload: json})
            }
        }

        fetchBusiness()
        
    }, [dispatch, token])


    return <div className="business-container">
        <Tabs
            defaultActiveKey="business"
            id="tabs"
            className="mb-3 tabs"
            fill
        >
            <Tab eventKey="business" title="Business">
            <div className="show-business">
                {business && business.map((business) => (
                    <BusinessDetails key={business._id} business={business}></BusinessDetails>
                ))}
            </div>
            </Tab>

            <Tab eventKey="createBusiness" title="Create Business">
                <AddBusiness></AddBusiness>
            </Tab>

        </Tabs>

    
        
        

        
    </div>
}


export default Business