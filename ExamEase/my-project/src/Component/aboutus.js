import React, { useState } from 'react';
import Uppermain from './Uppermain';

const AboutUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="about-us bg-[#00e1ff] w-full overflow-hidden">
      {/* Header */}
      <Uppermain />
      <div className="about-us-content p-4">
        <section className="about-us-text text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">About ExamEase</h1>
          <p className="text-lg">
            Welcome to ExamEase, your ultimate destination for engaging and educational quizzes. Our mission is to provide a fun and interactive way to expand your knowledge across various subjects. Whether you're a student looking to test your skills or a lifelong learner seeking new challenges, ExamEase has something for everyone.
          </p>
        </section>

        <section className="contact-form-container mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Send Message</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;