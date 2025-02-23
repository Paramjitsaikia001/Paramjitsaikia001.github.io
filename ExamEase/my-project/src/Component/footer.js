import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">About ExamEase</h2>
            <p className="text-sm">
              ExamEase is your go-to platform for preparing for various quizzes and exams. Test your knowledge across different categories and improve your skills.
            </p>
          </div>

          {/* Categories Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Categories</h2>
            <ul className="text-sm">
              <li><Link to="/ExamEase/my-project/build/quiz/General Knowledge" className="hover:underline">General Knowledge</Link></li>
              <li><Link to="/ExamEase/my-project/build/quiz/Science & Technology" className="hover:underline">Science & Technology</Link></li>
              <li><Link to="/ExamEase/my-project/build/quiz/Mathematics" className="hover:underline">Mathematics</Link></li>
              <li><Link to="/ExamEase/my-project/build/quiz/History & Geography" className="hover:underline">History & Geography</Link></li>
              <li><Link to="/ExamEase/my-project/build/quiz/English Language & Grammar" className="hover:underline">English Language & Grammar</Link></li>
              <li><Link to="/ExamEase/my-project/build/quiz/Logical Reasoning & Aptitude" className="hover:underline">Logical Reasoning & Aptitude</Link></li>
              <li><Link to="/ExamEase/my-project/build/quiz/Programming (JavaScript, Python, C++, etc.)" className="hover:underline">Programming</Link></li>
              <li><Link to="/ExamEase/my-project/build/quiz/Web Development" className="hover:underline">Web Development</Link></li>
              <li><Link to="/ExamEase/my-project/build/quiz/AI & Machine Learning" className="hover:underline">AI & Machine Learning</Link></li>
              <li><Link to="/ExamEase/my-project/build/quiz/Cybersecurity" className="hover:underline">Cybersecurity</Link></li>
              <li><Link to="/ExamEase/my-project/build/quiz/Movies & TV Shows" className="hover:underline">Movies & TV Shows</Link></li>
              <li><Link to="/ExamEase/my-project/build/quiz/Sports & Games" className="hover:underline">Sports & Games</Link></li>
              <li><Link to="/ExamEase/my-project/build/quiz/World Capitals & Countries" className="hover:underline">World Capitals & Countries</Link></li>
              <li><Link to="/ExamEase/my-project/build/quiz/Health & Fitness" className="hover:underline">Health & Fitness</Link></li>
              <li><Link to="/ExamEase/my-project/build/quiz/Current Affairs & News" className="hover:underline">Current Affairs & News</Link></li>
            </ul>
          </div>

          {/* Random Quiz Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Random Quizzes</h2>
            <ul className="text-sm">
              <li><Link to="/ExamEase/my-project/build/quiz/random01" className="hover:underline">Random Quiz 01</Link></li>
              <li><Link to="/ExamEase/my-project/build/quiz/random02" className="hover:underline">Random Quiz 02</Link></li>
              <li><Link to="/ExamEase/my-project/build/quiz/random03" className="hover:underline">Random Quiz 03</Link></li>
              <li><Link to="/ExamEase/my-project/build/quiz/random04" className="hover:underline">Random Quiz 04</Link></li>
              <li><Link to="/ExamEase/my-project/build/quiz/random05" className="hover:underline">Random Quiz 05</Link></li>
              <li><Link to="/ExamEase/my-project/build/quiz/random06" className="hover:underline">Random Quiz 06</Link></li>
              <li><Link to="/ExamEase/my-project/build/quiz/random07" className="hover:underline">Random Quiz 07</Link></li>
              <li><Link to="/ExamEase/my-project/build/quiz/random08" className="hover:underline">Random Quiz 08</Link></li>
              <li><Link to="/ExamEase/my-project/build/quiz/random09" className="hover:underline">Random Quiz 09</Link></li>
              <li><Link to="/ExamEase/my-project/build/quiz/random10" className="hover:underline">Random Quiz 10</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; 2025 ExamEase. All rights reserved.</p>
          <p className="text-sm">
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link> | <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;