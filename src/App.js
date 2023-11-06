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
import DasboardLayout from './DashboardLayout/DasboardLayout';
import MyAppointment from './Pages/Dashboard/MyAppointment/MyAppointment';
import Allusers from './Pages/Dashboard/Dashboard/Allusers';
import AdminRoute from './Pages/PrivateRoute/AdminRoute';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/MyAppointment/MangeDoctors/ManageDoctors';
import Payment from './Pages/Dashboard/Payment/Payment';
import DisplayError from './Pages/Shared/DisplayError/DisplayError';

function App() {
  const router = createBrowserRouter([
   {
    path : '/',
    element : <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
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
    element: <PrivateRoute><DasboardLayout></DasboardLayout></PrivateRoute>,
    errorElement : <DisplayError></DisplayError>,
    children : [
      {
        path : '/dashboard',
        element: <MyAppointment></MyAppointment>
      },
      {
        path : '/dashboard/allusers',
        element: <AdminRoute><Allusers></Allusers></AdminRoute>
      },
      {
        path : '/dashboard/adddoctor',
        element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
      },
      {
        path : '/dashboard/managedoctor',
        element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
      },
      {
        path : '/dashboard/payment/:id',
        element: <Payment></Payment>,
        loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
      }
    ]
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
