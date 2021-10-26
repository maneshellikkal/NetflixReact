import React from 'react'

import './App.css'
import Banner from './component/Banner/Banner';
import NavBar from './component/NavBar/NavBar';
import RowPost from './component/RowPost/RowPost';
import{action,originals,romance,comedy} from './urls'



function App() {
  return (
    <div className="App">
      <Banner/>
      <NavBar/>
      <RowPost url={originals} title="Netflix Orginals"/>
      <RowPost url={action} title="Action" isSmall/>
      <RowPost url={romance} title="Romance" isSmall/>
      <RowPost url={comedy} title="Comedy" isSmall/>
        
        
    </div>
  );
}

export default App;










