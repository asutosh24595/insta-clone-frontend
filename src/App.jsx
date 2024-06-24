import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import SignUpScreen from "./pages/SignUpScreen";
import Home from "./pages/Home";
import Feed from "./components/Feed";
import Main from "./components/Profile/Main";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LoginScreen /> },
    { path: "/sign-up", element: <SignUpScreen /> },
    {
      path: "/",
      element: <Home />,
      children: [
        {path:"/home", element: <Feed/>},
        {path:"/profile", element: <Main/>}
      ]
    },
    
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
