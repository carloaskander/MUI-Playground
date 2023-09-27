import React from 'react'; // Optional with React 17 due to the new JSX Transform
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
