import '../App.css';
import LoginPage from './LoginPage'
import SignUp from './SignUp';
import UserCreated from './UserCreated';
import UserPage from  './UserPage';
import ContactPage from './ContactPage'
import ContactView from './ContactView'
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="main">
      <Switch>
         <Route exact path="/" component={LoginPage} />
         <Route path="/signup" component={SignUp} />
         <Route path="/usercreated" component={UserCreated} />
         <Route path="/userpage" component={UserPage} />
         <Route path="/contactpage" component={ContactPage} />
         <Route path="/contactview" component={ContactView} />
       </Switch>
    </div>
  );
}

export default App;
