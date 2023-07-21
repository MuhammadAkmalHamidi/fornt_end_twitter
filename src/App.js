import { Await, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AllTweet } from './component/AllTweet';
import { HomePage } from './pages/Home';
import { LoginPage } from './pages/LoginPage';
import  Axios  from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { login } from './redux/userSlice';


function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const keepLogin = async () => {
    try {
      const response = await Axios.post(`https://dark-rose-hermit-crab-belt.cyclic.app/user/keepLogin`,{},{
        headers : {
          authorization :`bearer ${token}`
        }
      })
      console.log(response);
      dispatch(login(response.data))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    keepLogin()
  },[])

  const router = createBrowserRouter([
    { path: "/", element: <HomePage />, children: [
        { path : '/', element: <AllTweet /> }
      ]
    },

    { path: '/login', element: <LoginPage /> }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
