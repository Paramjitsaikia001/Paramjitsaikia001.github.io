import React from "react";
import { Link } from "react-router-dom";
import images from "./images";
import Uppermain from './Uppermain.js'

const categories = [
  { name: "General Knowledge", desc: "Test your general knowledge with a variety of questions.", img: images.GK },
  { name: "Science & Technology", desc: "Explore the wonders of science and technology.", img: images.ST },
  { name: "Mathematics", desc: "Challenge your math skills with various problems.", img: images.Math },
  { name: "History & Geography", desc: "Dive into history and geography with engaging quizzes.", img: images.History },
  { name: "English Language & Grammar", desc: "Improve your English language and grammar skills.", img: images.English },
  { name: "Logical Reasoning & Aptitude", desc: "Sharpen your logical reasoning and aptitude.", img: images.Logic },
  { name: "Programming (JavaScript, Python, C++, etc.)", desc: "Test your programming knowledge in various languages.", img: images.Programming },
  { name: "Web Development", desc: "Learn and test your web development skills.", img: images.WebDevelopment },
  { name: "AI & Machine Learning", desc: "Explore the world of AI and machine learning.", img: images.AIML },
  { name: "Cybersecurity", desc: "Learn about cybersecurity and test your knowledge.", img: images.Cybersecurity },
  { name: "Movies & TV Shows", desc: "Test your knowledge of movies and TV shows.", img: images.Movies },
  { name: "Sports & Games", desc: "Challenge your knowledge of sports and games.", img: images.Sports },
  { name: "World Capitals & Countries", desc: "Learn about world capitals and countries.", img: images.World },
  { name: "Health & Fitness", desc: "Learn about health and fitness.", img: images.Fitness },
  { name: "Current Affairs & News", desc: "Stay updated with current affairs and news.", img: images.News },
];

const Categories = () => {
  return (
    <div className="categories bg-[#00e1ff] w-full overflow-hidden">
      {/* Header */}
      <Uppermain />
      <div className="categories-header pb-3 flex items-center justify-center rounded-sm">
        <h2 className="text-[2rem] md:text-[3rem] font-bold text-black">Categories</h2>
      </div>

      {/* Categories List - Horizontal Scroll */}
      <div className="categories-container flex gap-4 flex-wrap px-4 justify-center items-center">
        {categories.map((category, index) => (
          <div key={index} className="category bg-gray-200 p-1 rounded-xl shadow-md w-full sm:w-[45%] md:w-[30%] h-[20rem] md:h-[23rem] flex-shrink-0 snap-center flex flex-col justify-between items-center">
            <img src={category.img} alt={category.name} className="w-full h-[10rem] md:h-[12rem] object-cover rounded" />
            <h3 className="font-bold text-lg mt-2 text-center">{category.name}</h3>
            <p className="text-sm text-center">{category.desc}</p>
            
            {/* Button to Start Quiz */}
            <Link
              to={`/ExamEase/my-project/build/quiz/${category.name}`}
              className="block bg-blue-500 text-white p-2 w-[80%] mt-2 text-center hover:bg-blue-600 transition rounded-full"
            >
              Start {category.name} Quiz
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;