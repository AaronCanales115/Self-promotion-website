import { useEffect } from "react"
import { useBusinessContext } from "../hooks/useBusinessContext"


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
            const response = await fetch('http://localhost:4000/api/business',{
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
        <h1>Business</h1>
        <div className="show-business">
                {business && business.map((business) => (
                    <BusinessDetails key={business._id} business={business}></BusinessDetails>
                ))}
        </div>

        <AddBusiness></AddBusiness>
    </div>
}


export default Business