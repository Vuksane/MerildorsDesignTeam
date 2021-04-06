import React from 'react';
// core components
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import MainCard from './MainCard'

require('css2.css');

function LandingPage({filteredData}) {

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (<>
    <LandingPageHeader />
    <MainCard  filteredData={filteredData}/>
  </>
  );
}

export default LandingPage;
