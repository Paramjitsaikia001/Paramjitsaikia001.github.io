import React from 'react';
import profile_photo from './Images/profile  photo.jpg'
import Footer from './footer';
import { Link } from 'react-router-dom';
import Education from './Education'
const Profile = () => {
  return (
    <main className='w-[100%]'>
      <div className=" p-12 text-white flex flex-col gap-4 font-serif text-xl">
        <h2>Hello Everyone ,</h2>
        <div className=" flex flex-wrap gap-4 font-serif text-xl">
          <p>My name is <span className='text-[#05E2FF] font-bold'>Paramjit Saikia </span>,a passionate <span className='text-[#05E2FF] font-bold'>Full Stack Developer</span> eager to bring dynamic and interactive web solutions to life.I blend a solid foundation in both front-end and back-end technologies with a fresh perspective and a relentless drive for innovation. My journey through the world of coding has equipped me with skills in HTML, CSS, JavaScript, React, Node.js, and more, enabling me to build seamless, user-friendly applications from scratch.</p>
          <p>Explore my portfolio to see how I transform ideas into reality, and feel free to reach out if you're interested in collaborating or have any questions. Let's create something amazing together!</p>
          <img className='w-80 p-2 border-slate-600 border-4 rounded-3xl' src={profile_photo} alt='profile photo'>
          </img>
        </div>
      </div>
      <Link to="/education"><Education/></Link>
   
      <Footer/>
    </main >
  );
};

export default Profile;

