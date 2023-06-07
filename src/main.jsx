import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/routes.jsx';
import Authprovider from './Provider/Authprovider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-6xl mx-auto'>
    <React.StrictMode>
      <Authprovider>
        <RouterProvider router={router} />
      </Authprovider>
    </React.StrictMode>,
  </div>

)
