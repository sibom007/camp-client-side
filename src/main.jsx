import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/routes.jsx';
import Authprovider from './Provider/Authprovider.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-6xl mx-auto'>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Authprovider>
          <RouterProvider router={router} />
        </Authprovider>
      </QueryClientProvider>
    </React.StrictMode>,
  </div>

)
