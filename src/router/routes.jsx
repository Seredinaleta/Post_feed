import Error from "../pages/Error";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";

export const privateRoutes = [
  { path: "/", element: <About /> },
  { path: "/posts", element: <Posts /> },
  { path: "/posts/:id", element: <PostIdPage />},
  { path: "/login", element: <About /> },
  { path: "/error", element: <Error /> },

];
export const publicRoutes = [
  { path: "/login", element: <Login /> },
  { path: "/error", element: <Error /> },

];
