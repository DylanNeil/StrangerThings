import React from 'react';
import './App.css';
import Navigation from './navbar.js';
import Logo from './logo.js';
import Episodes from './episodes.js'
import Gallery from './gallery.js'
import Languages from './language.js'
import english from './en_US.json';
import pigLatin from './la_PG.json';


function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Navigation />
         <Logo />
         <Episodes />
         <Gallery />
         </header>
        </div>
      );
    }

export default App;
