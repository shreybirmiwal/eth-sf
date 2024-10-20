import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Home from './pages/Home';
import UploadModel from './pages/UploadModel';
import ModelPage from './pages/ModelPage';
import { ConnectButton } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import ProjectAdmin from './pages/ProjectAdmin';

import { client } from './thirdwebInfra';

function App() {


  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-800">
        <nav className="p-6 border-b border-gray-300 flex justify-between items-center">

          <div className="flex items-center">
            <img src="./logo.png" alt="Logo" className="h-12 mr-2" />
          </div>

          <div className="flex items-center space-x-8">
            <Link to="/" className="text-lg hover:text-indigo-500">Home</Link>
            <Link to="/upload" className="text-lg hover:text-indigo-500">Upload Model</Link>
          </div>


          <div className="flex items-center justify-end">
            <ConnectButton className="ml-auto" client={client} />
          </div>

        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadModel />} />
          <Route
            path="/project/:projectId/:projectTitle"
            element={<ModelPage />}
          />


          <Route path="/admin/:projectId/:projectTitle" element={<ProjectAdmin />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;




