import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Component/main';
import Categories from './Component/categories';
import Random from './Component/random';
import Quiz from './Component/Quiz';
import Footer from './Component/footer';
import AboutUs from './Component/aboutus';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#00e1ff]">
        <Routes>
          <Route path="/ExamEase/my-project/build/" element={<Main />} />
          <Route path="/ExamEase/my-project/build/categories" element={<Categories />} />
          <Route path="/ExamEase/my-project/build/random" element={<Random />} />
          <Route path="/ExamEase/my-project/build/About" element={<AboutUs />} />
          <Route path="/ExamEase/my-project/build/quiz/:category" element={<Quiz />} />
          {/* Add other routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;