import Button from 'react-bootstrap/Button';

const Home = () =>{
    return <div className="home-container">
        <div>
            <h1>Let's share your small business with the world!</h1>

            <Button variant="outline-light" size="lg" href='/signup'>Get Started ➡</Button>{' '}
        </div>
    </div>
}


export default Home