import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import routes from "./routes";
import store  from './Slices/Store.jsx'
import { Provider } from 'react-redux'
 import 'bootstrap/dist/css/bootstrap.min.css';

import {RouterProvider,createBrowserRouter} from "react-router-dom"
const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

  <RouterProvider router={router} />
  </Provider>,
)
