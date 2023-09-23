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
        const response = await fetch('http://localhost:4000/api/business/' + business._id, {
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
        const response = await fetch('http://localhost:4000/api/business/' + business._id, {
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
                    <p><strong>Name: </strong>{business.name}</p>
                    <span className="material-symbols-outlined editF" onClick={onEditPress}>edit</span>
                    <span className="material-symbols-outlined deleteF" onClick={handleClickDelete}>delete</span>
                </>
                :
                <>
                    <p><label>Name:</label><input type="text"
                        onChange={(e) => {
                            setEditedRecord({ ...editedRecord, name: String(e.target.value) })
                        }
                        }
                    ></input></p>
                    <span className="material-symbols-outlined confirmF" onClick={onEditConfirmClick}>done</span>
                    <span className="material-symbols-outlined cancelF" onClick={onCancelClick}>cancel</span>
                </>
            }
        </div>
    )

}

export default BusinessDetails