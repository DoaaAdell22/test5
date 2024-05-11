import './App.css';
import "./component/Header/Header.css"
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Root from './routes/Root/Root';
import "./component/Header/Header.css"
import "./component/Sidebar/Sidebar.css"
import "./routes/Root/Root.css"
import Dashboard from './routes/Dashboard/Dashboard';
import Setting from './routes/Setting/Setting';
import Profile from './routes/Profile/Profile';
import Project from './routes/Project/Project';
import Courses from './routes/Courses/Courses';
import Friends from './routes/Friends/Friends';
import Files from './routes/Files/Files';
import Plans from './routes/Plans/Plans';
import Users from './routes/Users/Users';
import Usersdata from './routes/UsersData/Usersdata';
import Add from './routes/add/Add';
import Edituser from './routes/edit/Edituser';
import Providers from './routes/Providers/Providers';
import ShowContractors from './routes/ShowContractors/ShowContractors';
import ProjectTypes from './routes/Project Types/ProjectTypes';
import Showprojects from './routes/Showprojects/Showprojects';
import Addproject from './routes/Addproject/Addproject';
import Login from './routes/Login/Login'
import {Toaster  } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './Redu/Store'
import { createStore } from 'redux';



const routes = createBrowserRouter([
  {
    path : "/",
    element : <Root />,
    children : [
      {index :true , element: <Dashboard />},
      {
        path :"setting",
        element : <Setting />
      },
      {
        path :"profile",
        element : <Profile />
      },
      {
        path :"projects",
        element : <Project />
      },
      {
        path :"courses",
        element : <Courses />
      },
      {
        path :"friends",
        element : <Friends />
      },
      {
        path :"files",
        element : <Files />
      },
      {
        path :"plans",
        element : <Plans />
      },
      {
        path : "users",
        children:[
          {
            path : "" ,
            element : <Users />,
      },
        {
              path : "show/:id" ,
              element : <Usersdata />
        },
        {
        
          path : "edit/:id",
          element : <Edituser />
        },
        {
              path : "add",
              element : <Add />
        },
        ]
      },
      {
        path : "Contractors" ,
        children : [
          {
            path : "" ,
            element : <Providers />
          },
          {
            path : ":show/:id",
            element : <ShowContractors />
          },
        ]
      },
      {
        path : "ProjectTypes",
        children : [
          {
            path : "" ,
            element : <ProjectTypes />,
          },
          {
            path : ":show/:id",
            element : <Showprojects />
          },
          {
            path : "add",
            element : <Addproject />
          }
        ]
      }
    ]
  },
  {
      path : 'login' ,
      element : <Login />
  }
])

console.log(window.location.href)

function App() {
  return (
    <Provider store={store}> 
      <div className="app">
        <Toaster/>
        <RouterProvider router={routes} />
      </div>
    </Provider>  
  );
}

export default App;
