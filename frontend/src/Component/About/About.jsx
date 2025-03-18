import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-8">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-4xl w-full">
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          About Bookmate
        </h1>
        
        <h2 className="text-2xl font-semibold text-blue-500 mb-6 text-center">
          NAYE BHARAT KA NAYA BOOKMATE
        </h2>
        
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Bookmate is your ultimate companion for organizing and exploring the world of books. 
          Designed for book enthusiasts, it serves as a platform to catalog, discover, 
          and manage your personal library with ease.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
          <li>Effortlessly organize your book collection with a user-friendly interface.</li>
          <li>Discover new books and authors through personalized recommendations.</li>
          <li>Track your reading progress and set goals to stay motivated.</li>
          <li>Share your favorite books and reviews with a community of like-minded readers.</li>
          <li>Seamless search functionality to find books by title, author, or genre.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          At Bookmate, we believe that reading has the power to transform lives. 
          Our mission is to create a space where readers can explore their passion for books, 
          connect with fellow readers, and unlock a world of knowledge and imagination.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Have questions or feedback? We would love to hear from you! 
          Reach out to us through our contact page or connect with us on social media.
        </p>

      </div>
    </div>
  );
};

export default About;
