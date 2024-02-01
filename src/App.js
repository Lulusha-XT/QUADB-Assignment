import './App.css';
import NavBar from './components/NavBar';
import TopRender from './components/TopRender';
import {Routes, Route } from 'react-router-dom';
// import Details from './components/Details';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <TopRender/>
      {/* <DashBoard/> */}
      {/* <Choose /> */}
       {/* <Routes>
          <Route path="/" element={<TopRender/>}></Route>
          <Route to="/details" element={<Details/>}></Route>
      </Routes> */}

    </div>
  );
}

export default App;
