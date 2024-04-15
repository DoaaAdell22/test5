
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
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
