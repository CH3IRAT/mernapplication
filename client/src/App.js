import './App.css';
import {Route,Switch} from 'react-router-dom'
import ContactList from "./components/ContactList";
import Add from "./components/Add"
function App() {
  return (
    <div >    
            <Switch>
        <Route exact path="/" component={ContactList} />
        <Route path={["/add", "/edit/:id"]} component={Add} />
        <Route path="/*" component={Error} />
      </Switch>


    </div>
  );
}

export default App;
