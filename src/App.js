import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from '../src/Layout/Main';
import Home from '../src/Pages/Home/Home';
import Login from '../src/Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';

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
        path : '/appointment',
        element : <Appointment></Appointment>
      }
    ]
   }
  ])
  return (
    <div className="max-w-[90%] mx-auto">
    <RouterProvider router={router}></RouterProvider>  
    </div>
  );
}
export default App;
