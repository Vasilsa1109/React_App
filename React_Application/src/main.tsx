import { createBrowserRouter } from 'react-router-dom'
import App from './App';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import NotFound from "./components/pages/NotFound/NotFound";
import Posts from "./components/pages/Posts/Posts";
import PostDetail from "./components/pages/PostDetail/PostDetail";
// import Counter from './components/counter/Counter';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import { RouterProvider } from 'react-router-dom';
import SuccessLogin from './components/pages/SuccessLogin/SuccessLogin';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      // { path: '/counter', element: <Counter /> },
      { path: "/about", element: <About />} ,
      {path: "*", element: <NotFound />},
      {path: "/posts", element: <Posts />} ,
      {path: "/posts/:id", element: <PostDetail />},
      {path: "/login", element: <SuccessLogin />} 
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
     <Provider store={store}>
        <RouterProvider router={router} />
     </Provider>
  </React.StrictMode>
);