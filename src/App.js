import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AllTweet } from './component/AllTweet';
import { HomePage } from './pages/Home';
import { LoginPage } from './pages/LoginPage';


function App() {

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
