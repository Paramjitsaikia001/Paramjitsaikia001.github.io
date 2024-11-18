
import React from 'react';
import { BrowserRouter as Router, Routes, Route,useNavigate } from 'react-router-dom';
import Main_left from './components/mainleft';
import Main_right from './components/mainright';
import Development from './components/Development';
import Language from './components/Language';
import Explore from './components/explore';
import Contact from './components/Contact';
import Webdev from './components/DevelopmentRoutes/webdevelopment';
function App() {

  return (
    <Router>
      <main className='flex p-0 m-0 bg-gray-800 font-[Raleway]'>
        <Main_left />
        <Routes>
          <Route path='/traintoexcellency/Frontend-build/' element={<Main_right/>}/>
          <Route path="/traintoexcellency/Frontend-build/development" element={<Development />} />
          <Route path="/traintoexcellency/Frontend-build/language" element={<Language />} />
          <Route path="/traintoexcellency/Frontend-build/explore" element={<Explore />} />
          <Route path="/traintoexcellency/Frontend-build/About-us" element={<Contact />} />

          <Route path="/traintoexcellency/Frontend-build/development/webdev" element={<Webdev/>} />
        </Routes>
      </main>
    </Router>

  );
}

export default App;
