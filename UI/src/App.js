import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import ManageTreePage from './components/familyMember/ManageTreePage';
import FamilyPage from './components/family/FamilyPage';
import './App.css';

function App() {
    return (
        <div className="App1">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <span className="navbar-brand">
                    Family Info
        </span>
                <div className="navbar-nav mr-auto">
                <li className="nav-item">
                        <Link to={"/family"} className="nav-link">
                            Family
            </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/family/add"} className="nav-link">
                            Family Add
            </Link>
                    </li>
                    
                </div>
            </nav>
            <div className="container mt-3">
                <Switch>
                    <Route exact  path={'/family/add'} component={ManageTreePage} />
                    <Route exact  path={'/family'} component={FamilyPage} />
                    <Redirect path='/' to="/family" />
                    <Redirect path='*' to="/family" />
                </Switch>
            </div>
        </div>

    );
}

export default App;
