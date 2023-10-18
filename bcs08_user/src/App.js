// import logo from './logo.svg';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './page/Home/Home';
import Login from './page/Login/Login';
import Layout from './template/Layout';
import MovieDetail from './page/Home/MovieDetail/MovieDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*wrap Home compo with the Layout compo 
        so Home get rendered as the children of Layout.
        When root route is visited, you'll see the Header (from 
        the Layout) followed by the content of the Home compo
        */}
        <Route path="/" 
          element={<Layout><Home/></Layout>}/>
        <Route path="/login" 
          element={<Layout><Login/></Layout>} />
        <Route path="/movie/:id" element={<MovieDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
