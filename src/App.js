import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from '../src/Layout/Main';
import Home from '../src/Pages/Home/Home';
import Login from '../src/Pages/Login/Login';

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
      }
    ]
   }
  ])
  return (
    <div className="max-w-[1440px] mx-auto">
    <RouterProvider router={router}></RouterProvider>  
    </div>
  );
}

export default App;
