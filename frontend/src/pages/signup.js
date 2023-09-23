import {useState} from 'react'
import {useSignup} from '../hooks/useSignup'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [professions, setProfessions] = useState('')
    const [skills, setSkills] = useState('')
    const [experiences, setExperiences] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const {signup, isLoading, error} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password, name, lastName, age, gender, professions, skills, experiences, phoneNumber)
    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h2>Sign up</h2>
            <div className="basicInfo">
                <h3>Basic info</h3>
                <div>
                <label>Email:</label>
                <input 
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                </div>
                <div>
                <label>password:</label>
                <input 
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                </div>
                <div>
                <label>Name:</label>
                <input 
                    type="text" 
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                </div>
                <div>
                <label>Last Name:</label>
                <input 
                    type="text" 
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                />
                </div>
            </div>
            <div className="aditionalInfo">
                <h3>User aditional info</h3>
                <label>Age:</label>
                <input 
                    type="text" 
                    onChange={(e) => setAge(e.target.value)}
                    value={age}
                />
                <div>
                <label>Gender:</label>
                <select>
                    <option onChange={(e) => setGender(e.target.value)} value={gender}>Male</option>
                    <option onChange={(e) => setGender(e.target.value)} value={gender}>Female</option>
                </select>
                </div>
                <label>Professions:</label>
                <input 
                    type="text" 
                    onChange={(e) => setProfessions(e.target.value)}
                    value={professions}
                />
                <label>Skills:</label>
                <input 
                    type="text" 
                    onChange={(e) => setSkills(e.target.value)}
                    value={skills}
                />
                <label>Experiences:</label>
                <input 
                    type="text" 
                    onChange={(e) => setExperiences(e.target.value)}
                    value={experiences}
                />
                <label>Phone:</label>
                <input 
                    type="text" 
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                />
            </div>
            <button disabled={isLoading}>Sign up</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Signup