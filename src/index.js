import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import { RolesProvider } from './Context/RolesProvider';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    }
  ]
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <RolesProvider>

      <App />
    </RolesProvider>
  </React.StrictMode>
);


