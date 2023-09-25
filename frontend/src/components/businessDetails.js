import { useState } from 'react'
import { useBusinessContext } from '../hooks/useBusinessContext'
import { useAuthContext } from '../hooks/useAuthContext'

const BusinessDetails = ({key, business}) => {
    const { dispatch } = useBusinessContext()
    const [rowBeingEdited, setRowBeingEdited] = useState('')
    const [editedRecord, setEditedRecord] = useState({ name: '' })
    const {user} = useAuthContext()
    console.log(user)

    const handleClickDelete = async () => {
        const response = await fetch('https://self-promotion-website-345213ff6f06.herokuapp.com/api/business/' + business._id, {
            headers:{'Authorization': `Bearer ${user.token}`},
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_BUSINESS', payload: json })
        }
    }

    const onEditPress = (e) => {
        e.preventDefault()
        setRowBeingEdited(String(business._id))
    }

    const onEditConfirmClick = async (e) => {
        e.preventDefault()
        console.log("editedRecord",editedRecord)
        const response = await fetch('https://self-promotion-website-345213ff6f06.herokuapp.com/api/business/' + business._id, {
            method: 'PATCH',
            body: JSON.stringify(editedRecord),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'UPDATE_BUSINESS', payload: {editedRecord, recordId: business._id} })
            console.log(json)
        }
        setRowBeingEdited('')
    }

    const onCancelClick = (e) => {
        e.preventDefault()
        setRowBeingEdited('')
    }

    return (
        <div className="business-details">
            {!(String(rowBeingEdited) === String(business._id)) ? 
                <>
                <div className="business-Info">
                    <label>Name:</label>
                    <span className='businesData'>{business.name}</span>

                    <label>Description:</label>
                    <span className='businesData'>{business.description}</span>
                    
                    <label>History:</label>
                    <span className='businesData'>{business.history}</span>
                    
                    <label>Products and Services:</label>
                    <span className='businesData'>{business.productsServices}</span>
                    
                    <label>Phone Number:</label>
                    <span className='businesData'>{business.phoneNumber}</span>
                    
                    <label>Email:</label>
                    <span className='businesData'>{business.email}</span>
                    
                    <label>Address:</label>
                    <span className='businesData'>{business.address}</span>

                    <label>Photos:</label>
                    <span className='businesData'>{business.photos}</span>
                    

                    <div className="details-buttons">
                        <span className="material-symbols-outlined editF" onClick={onEditPress}>Edit</span>
                        <span className="material-symbols-outlined deleteF" onClick={handleClickDelete}>Delete</span>
                    </div>
                </div>
                </>
                :
                <>
                    <div className="edit-business">
                        <div className="edit-inputs">
                            <label>Name:</label><input type="text"
                            placeholder={business.name}
                            onChange={(e) => {
                                setEditedRecord({ ...editedRecord, name: String(e.target.value) })
                            }
                            }
                            ></input>
                        </div>
                        <div className="edit-inputs">
                            <label>Description:</label><input type="text"
                            placeholder={business.description}
                            onChange={(e) => {
                                setEditedRecord({ ...editedRecord, description: String(e.target.value) })
                            }
                            }
                            ></input>
                        </div>
                        <div className="edit-inputs">
                            <label>History:</label><input type="text"
                            placeholder={business.history}
                            onChange={(e) => {
                                setEditedRecord({ ...editedRecord, history: String(e.target.value) })
                            }
                            }
                            ></input>
                        </div>
                        <div className="edit-inputs">
                            <label>Products and Services:</label><input type="text"
                            placeholder={business.productsServices}
                            onChange={(e) => {
                                setEditedRecord({ ...editedRecord, productsServices: String(e.target.value) })
                            }
                            }
                            ></input>
                        </div>
                        <div className="edit-inputs">
                            <label>Phone Number:</label><input type="text"
                            placeholder={business.phoneNumber}
                            onChange={(e) => {
                                setEditedRecord({ ...editedRecord, phoneNumber: String(e.target.value) })
                            }
                            }
                            ></input>
                        </div>
                        <div className="edit-inputs">
                            <label>email:</label><input type="text"
                            placeholder={business.email}
                            onChange={(e) => {
                                setEditedRecord({ ...editedRecord, email: String(e.target.value) })
                            }
                            }
                            ></input>
                        </div>
                        <div className="edit-inputs">
                            <label>Address:</label><input type="text"
                            placeholder={business.address}
                            onChange={(e) => {
                                setEditedRecord({ ...editedRecord, address: String(e.target.value) })
                            }
                            }
                            ></input>
                        </div>
                        <div className="edit-inputs">
                            <label>Photos:</label><input type="text"
                            placeholder={business.photos}
                            onChange={(e) => {
                                setEditedRecord({ ...editedRecord, photos: String(e.target.value) })
                            }
                            }
                            ></input>
                        </div>
                        <div className='edit-buttons'>
                            <span className="material-symbols-outlined confirmF" onClick={onEditConfirmClick}>done</span>
                            <span className="material-symbols-outlined cancelF" onClick={onCancelClick}>cancel</span>
                        </div>
                    </div>
                    
                </>
            }
        </div>
    )

}

export default BusinessDetails