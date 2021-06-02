import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainAdminPage from "../components/admin/MainAdminPage/MainAdminPage";
import MainHomePage from '../components/home/mainHomePage/MainHomePage';

const MainComponent = () => {
    return (
        <div>
            <Router>
                <switch>
                    <Route exact path=''>
                      <MainHomePage></MainHomePage>
                    </Route>
                    <Route  path='/admin'>
                      <MainAdminPage></MainAdminPage>
                    </Route>
                </switch>
            </Router>
    
        </div>
    );
}

export default MainComponent;