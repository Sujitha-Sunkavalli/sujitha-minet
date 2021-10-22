import React from 'react';
import './App.css';
import  {ButtonComponent} from './components/Atoms/Buttons';
import { Icons } from './components/Atoms/Icons';
import LogoComponent from './components/Atoms/Logo';
import { SearchBar } from './components/Molecules/SearchBar';
import {Chart} from "../src/components/Organisms/Chart"

function App() {
  return (
    <div className="App">
      <Chart/>
    </div>
  );
}

export default App;
