import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from '../src/Layout/Main';
import Home from '../src/Pages/Home/Home';
import Login from '../src/Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/SignUp/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  const router = createBrowserRouter([
   {
    path : '/',
    element : <Main></Main>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/signup',
        element : <SignUp></SignUp>
      },
      {
        path : '/appointment',
        element : <Appointment></Appointment>
      }
    ]
   },
   {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
  }
  ])
  return (
    <div className="max-w-[90%] mx-auto">
    <RouterProvider router={router}></RouterProvider>  
    <Toaster></Toaster>
    </div>
  );
}
export default App;
