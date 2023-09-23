import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Profile from './profile'
import Business from './business';

const Account = () =>{
    return(
        <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="profile" title="Profile">
          <Profile/>
        </Tab>

        <Tab eventKey="business" title="Business">
          <Business/>
        </Tab>
      </Tabs> 
    )
}


export default Account