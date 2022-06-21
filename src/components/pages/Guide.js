import React from 'react';
import './Guide.css';
import './Data/sidebarinfo.json';
import Sidebar from './Guidepages/Sidebar'
//import Sidebar from './GuidePages/Sidebar';
import Devices from './Pages/Devices';
import Ansible from './Pages/Ansible'
import {Route, Routes} from 'react-router-dom';
import Onboarding from './Pages/Onboarding';

export default function Guide() {
  return (
        <div className='main'>
          <Sidebar />
          {" "}
          <Routes>
          <Route exact path="/devices" element={<Devices />} />
          <Route exact path="/developer_forum/onboarding" element={<Onboarding />} />
          <Route exact path="/ansible" element={<Ansible />} />
          </Routes>
        </div>
  );
}