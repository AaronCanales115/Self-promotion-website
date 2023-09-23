import {createContext, useReducer} from 'react'

export const BusinessContext = createContext()

export const businessReducer = (state, action) => {
    
    switch(action.type) {
        case 'SET_BUSINESS':
            return {
                business: action.payload
            }
        case 'CREATE_BUSINESS':
            return {
                business: [...state.business, action.payload ]
            }
        case 'DELETE_BUSINESS':
            return {
                business: state.business.filter((f) => f._id !== action.payload._id) //filter the array and keep all the foods where the id is defferent to the f._id 
            }
        case 'UPDATE_BUSINESS':
            return {
                business: state.business.map((f) => {
                    console.log(f._id)
                    console.log(action.payload.recordId)
                    console.log("f",f)
                    console.log("action.payload",action.payload)
                    if (f._id === action.payload.recordId) {
                        f.name = action.payload.editedRecord.name
                    }
                    return f
                })
            }
        default:
            return state
    }
}

export const BusinessContextProvider = ({children}) => {
    //reducer
    const [state, dispatch] = useReducer(businessReducer, {
        business: null
    })

    return (
        <BusinessContext.Provider value={{...state, dispatch}}>
            {children}
        </BusinessContext.Provider>
    )
}