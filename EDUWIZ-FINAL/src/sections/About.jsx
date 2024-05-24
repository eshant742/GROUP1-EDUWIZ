import React from 'react';
import swyam from '../assets/images/swyam.jpg';
import safiya from '../assets/images/safiya.jpg';
import medha from '../assets/images/medha.jpg';
import eshant from '../assets/images/eshant.jpg';
import prateek from '../assets/images/prateek.jpg';
import aditya from '../assets/images/aditya.jpg';


const AboutUs = () => (
  <div>
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-800 to-teal-300 p-5">
      <h1 className="font-bold text-6xl text-blue-800 mb-5 p-5 bg-cyan-100 rounded-2xl shadow-lg">EduWiz</h1>
      <p className="text-center text-white px-50 mb-5">
        Greetings from the EduWiz team!   Welcome to our educational website! We are dedicated to providing high-quality resources and courses to help students achieve their academic goals.  Our platform offers a wide range of free resources, including tutorials, study guides, and practice exercises, covering various subjects and topics.</p>

      <p className="text-center text-white px-50 mb-5">
        In addition to our free resources, we also offer premium courses taught by industry experts. These courses provide in-depth knowledge and hands-on experience to help students excel in their studies and careers. Our community of students is at the heart of what we do. We strive to foster a supportive and collaborative environment where students can connect with each other, share knowledge, and learn together.  Whether you're looking to supplement your studies with free resources, expand your skills with premium courses, or connect with like-minded students, we're here to support you on your learning journey.
      </p>
      {/* <button type="button" className="btn btn-primary mt-2">Get In Touch</button> */}
      {/* <img
        src="https://th.bing.com/th/id/R.e8d85e6518231bb06015dda79f85a821?rik=0dYiPNUfiwagiQ&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1684577%2fthumbs%2fo-HELPING-OTHERS-facebook.jpg&ehk=i9bGyJxT6W0jvwPTVG0bO%2fOzuvRM1ZFaBfHIbN%2bocqw%3d&risl=&pid=ImgRaw&r=0"
        alt="helpify"
        className="w-1/2 mt-8 rounded-3xl border-2 border-rose-700"
      /> */}
    </div>
    <div className="flex flex-col items-center justify-center bg-teal-300 p-5">
      {/* <div className="flex gap-5">
        <img src={farmer1} alt="farmer" className="h-1/2 rounded-full" />
        <img src={image2} alt="senior" className="h-1/2 rounded-full" />
      </div> */}
      <div className="mt-5 text-center">
        <ul className="text-white text-lg mb-3">
          <li className="text-5xl text-blue-800 mb-5 p-5 bg-cyan-100 rounded-2xl shadow-lg">About Us</li>
        </ul>
        {/* <h3 className="text-purple-900">We believe in treating our</h3>
        <h3 className="text-gray-700">clients with dignity</h3> */}
        <p>
          EduWiz is a premier education platform offering a wide range of advanced courses and study materials. With a focus on cutting-edge topics and expert-led instruction, EduWiz empowers learners to achieve their academic and professional goals. Whether you're looking to deepen your knowledge in technology, business, or other fields, EduWiz provides the resources and support you need to excel. Join EduWiz today and transform your learning experience.
        </p>
        <div className="flex justify-between mt-10 p-5 bg-gray-200 rounded-lg">
          <div className="w-1/2 pr-5">
            <h3 className="text-left font-bold">Our Mission</h3>
            <p className="text-left">
              Our mission is to democratize education by providing a platform that empowers students globally through curated resources, expert guidance, and a supportive community, fostering a culture of lifelong learning and academic excellence.
            </p>
          </div>
          <div className="w-1/2 pl-5">
            <h3 className="text-left font-bold">Our Values</h3>
            <p className="text-left">
              Dedicated to global education empowerment, our platform curates top-tier resources and fosters a supportive community, making learning accessible. Expert-driven and community-centric, we offer diverse resources for collective learning and academic success.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-blue-800 to-teal-300 p-5">
      <div className="text-center text-4xl font-bold text-blue-800 mb-10 bg-cyan-100 py-5 rounded-lg shadow-lg">Meet The Team</div>
      <div className="flex justify-center flex-wrap gap-10">
        <div className="text-center">
          <img src={swyam} alt="swyam" className="w-72 h-72 rounded-3xl transform transition duration-300 hover:scale-110 shadow-lg" />
          <h4 className="text-white mt-2 font-bold">Swyam Kumar</h4>
        </div>
        <div className="text-center">
          <img src={safiya} alt="safiya" className="w-72 h-72 rounded-3xl transform transition duration-300 hover:scale-110 shadow-lg" />
          <h4 className="text-white mt-2 font-bold">Safiya Nasir</h4>
        </div>
        <div className="text-center">
          <img src={eshant} alt="eshant" className="w-72 h-72 rounded-3xl transform transition duration-300 hover:scale-110 shadow-lg" />
          <h4 className="text-white mt-2 font-bold">Eshant Gupta</h4>
        </div>
        <div className="text-center">
          <img src={medha} alt="medha" className="w-72 h-72 rounded-3xl transform transition duration-300 hover:scale-110 shadow-lg" />
          <h4 className="text-white mt-2 font-bold">Medha Bhardwha</h4>
        </div>
        <div className="text-center">
          <img src={prateek} alt="prateek" className="w-72 h-72 rounded-3xl transform transition duration-300 hover:scale-110 shadow-lg" />
          <h4 className="text-white mt-2 font-bold">Prateek Mishra</h4>
        </div>
        <div className="text-center">
          <img src={aditya} alt="aditya" className="w-72 h-72 rounded-3xl transform transition duration-300 hover:scale-110 shadow-lg" />
          <h4 className="text-white mt-2 font-bold">Aditya Chandel</h4>
        </div>
        {/* <div className="text-center">
          <img src={Rahul} alt="rahul" className="w-72 h-72 rounded-3xl transform transition duration-300 hover:scale-110 shadow-lg" />
          <h4 className="text-white mt-2 font-bold">Rahul Naskar</h4>
        </div>
        <div className="text-center">
          <img src={Bhumika} alt="bhumika" className="w-72 h-72 rounded-3xl transform transition duration-300 hover:scale-110 shadow-lg" />
          <h4 className="text-white mt-2 font-bold">Bhumika Wahane</h4>
        </div> */}
      </div>
    </div>
  </div>
);

export default AboutUs;
