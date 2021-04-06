import React, { useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Theme from "../../views/examples/vesti/Theme";
import Vest from "../../Vest";
import Adminpanelindex from "../../views/examples/adminpanel/Adminpanelindex";
import Adminpanellogin from "../../views/examples/adminpanel/Adminpanellogin";
import LandingPage from "../../views/examples/LandingPage";
import JustNavbar from "./JustNavbar";
import PrivateRoutes from '../../routes/PrivateRoutes';
import PublicRoutes from '../../routes/PublicRoutes';


function ExamplesNavbar({filteredData, data}) {

  const [isAuth, setIsAuth] = useState(false)
  console.log(isAuth, "Milos test")
  return (<>
    <JustNavbar />  
    <Switch>          
      <Route exact path="/kultura-i-drustvo" render={() => <Theme {...filteredData} />} />
      <Route exact path="/politika" render={() => <Theme {...filteredData} />} />
      <Route exact path="/ekonomija" render={() => <Theme {...filteredData} />} />
      <Route exact path="/kolumne-i-intervjui" render={() => <Theme {...filteredData} />} />
      <Route exact path="/vijesti-iz-dijaspore" render={() => <Theme {...filteredData} />} />
      <Route path="/vest" render={() => <Vest data={data} />} />
      <PrivateRoutes exact path="/Adminpanelindex" component={Adminpanelindex} isAuth={isAuth} />
      <Route path="/Adminpanellogin" render={() => <Adminpanellogin setIsAuth={setIsAuth} />} />
      <Route path="/" render={() => <LandingPage filteredData={filteredData}/>} />
      <Redirect to="/" />
    </Switch>
  </>);
}

export default ExamplesNavbar;
