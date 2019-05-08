import React from 'react';

import {Route,Switch} from 'react-router-dom';
import AddTours from '../AddTours/AddTours.react';
import TourManager from '../TourManager/TourManager.react';

const MyRoutes = () => {
    return (
        <div >

        <Switch>
        <Route path='/tours' component={AddTours}></Route>
        <Route path='/packages' component={TourManager}></Route>
        
        </Switch>
        </div>
    );

}

export default MyRoutes;