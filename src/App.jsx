import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/shared/Navbar';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/Home';
import Jobs from './components/Jobs';
import Browse from './components/Browse';
import Profile from './components/Profile';
import JobDescription from './components/JobDescription';


//setting up react-router-dom
const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>    
  },
  {
    path:'/Login',
    element:<Login/>
  },
  {
    path:'/Signup',
    element:<Signup/>
  },
  {
    path:'/Jobs',
    element:<Jobs/>
  },
  {
    path:'/Browse',
    element:<Browse/>
  },
  {
    path:'/description/:id',
    element:<JobDescription/>
  },
  {
    path:'/Profile',
    element:<Profile/>
  }
])



const App=()=> {
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
};

export default App;
