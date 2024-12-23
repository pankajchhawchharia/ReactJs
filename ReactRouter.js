import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home () {
  return <h2>Home page</h2>
}

function About () {
  return <h3>About Page</h3>
}

const Contact = () => <h4>Contact Link</h4>;

function ReactRouter() {
  return (
    <>
      <div> hello</div>
      <Router>
        <Routes>
          <Route path ='/' element={<Home/>} />
          <Route path = '/about' element = {<About />} />
          <Route path = '/cotact' element = {<Contact />} />
          </Routes>
          </Router>
          <div>
            <nav>
              <ul>
                <li><Link to ='/'>Home</Link></li>
                  <li><Link to ='/about'>About</Link></li>
                  <li><Link to ='/Contact'>Contact</Link></li>
                </ul>
              </nav>
            </div>
    </>
  );
}

export default ReactRouter;
