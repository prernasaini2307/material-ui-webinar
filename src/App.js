import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import Inputs from './screens/Inputs';
import CDrawer from './components/navigation/CDrawer';
import Layout from './screens/Layout';
import Inbox from './screens/Inbox';
import Start from './screens/Start';
import BottonNavigation from './screens/BottonNavigation';
import Tabs from './screens/Tabs';
import Sufrace from './screens/Sufrace';
import Style from './screens/Style';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inputs} />
        <Route exact path="/drawer" component={CDrawer} />
        <Route exact path="/inbox" component={Inbox} />
        <Route exact path="/star" component={Start} />
        <Route exact path="/email" component={Layout} />
        <Route exact path="/email" component={Layout} />
        <Route exact path="/navigation" component={BottonNavigation} />
        <Route exact path="/tabs" component={Tabs} />
        <Route exact path="/surface" component={Sufrace} />
        <Route exact path="/style" component={Style} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
