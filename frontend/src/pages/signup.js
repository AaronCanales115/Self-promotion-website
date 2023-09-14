import {useState} from 'react'
import {useSignup} from '../hooks/useSignup'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const {signup, isLoading, error} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password, name, lastName)
    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign up</h3>
            
            <label>Email:</label>
            <input 
                type="email" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <label>password:</label>
            <input 
                type="password" 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <label>Name:</label>
            <input 
                type="text" 
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <label>Last Name:</label>
            <input 
                type="text" 
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
            />
            <button disabled={isLoading}>Sign up</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Signup