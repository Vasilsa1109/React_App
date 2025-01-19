import React from "react";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import NotFound from "./components/pages/NotFound/NotFound";
import Posts from "./components/pages/Posts/Posts";
import PostDetail from "./components/pages/PostDetail/PostDetail";
import './App.css'
// import MyComponent from "./components/FirstComponent/MyComponent";
// import Component_sum from "./components/Task_1/Component_sum";
// import Object_1 from "./components/Object/Object_1";
// import MainList from "./components/MainList/MainList";
// import AppForm from "./components/common/Form/Form";
// import PackingList from "./components/DZ/Task_1";
// import PackingList2 from "./components/DZ/Task_2";
// import DrinkList from "./components/DZ/Task_3";

function App(){
  return (
    <Router>
       <Header></Header> 
      <Routes>
        <Route  path="/" index element={<Home />} /> {/*страница по умолчанию */}
        <Route path="/about" element={<About />} />
        <Route component={<NotFound />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes> 
      <Footer></Footer>
      </Router>  
  )
}
export default App;

//Все глобальные константы пишутся капсом
// Build Bootstrap with React
// https://stackblitz.com/github/twbs/examples/tree/main/react-nextjs?file=src%2Fpages%2Findex.tsx

{/* <div className="main"> 
<h3>React App</h3>
<MyComponent  
  title=" Some title" 
  description="some description ............................... "
/>
 <MyComponent  
  title=" Some title" 
  description="some description ............................... "
/>
 <MyComponent  
  title="Some title" 
  description="some description ............................... " 
/>
<Component_sum />

<Object_1 />

<MainList />
<AppForm /> 
{/* dz */}
{/* <PackingList />
<PackingList2 />
<DrinkList />

</div> */} 


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
