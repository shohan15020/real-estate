import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import UpdateProfile from './Pages/UpdateProfile/UpdateProfile.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import FirebaseProvider from './Firebase/FirebaseProvider.jsx';
import SinglePropertyDetail from './Pages/singlePropertyDetail/SinglePropertyDetail.jsx';
import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:  () => fetch("/AllProperty.json")
        
      },
      {
        path: "/singleProperty/:id",
        element: <PrivateRoutes>
          <SinglePropertyDetail></SinglePropertyDetail>
        </PrivateRoutes>,
        
        loader: () => fetch("/AllProperty.json")
        // loader: ({ params }) => fetch(`/${link}/${params.id}`),
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'updateProfile',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>,
)
