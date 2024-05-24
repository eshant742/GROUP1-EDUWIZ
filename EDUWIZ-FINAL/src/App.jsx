import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './sections/Home';
import About from './sections/About';
import Login from './sections/Login';
import Contact from './sections/Contact';
import Signup from './sections/Signup';
import Courses from './sections/Courses';
import Header from './sections/Header';
import Footer from './sections/Footer';
import WebRTC from './sections/WebRTC';
import PeerChat from './sections/WebRtc2';
import Resource from './sections/Resources';
import Quiz from './sections/Quiz';
import { course } from './Components/data';
import ParticulerCourse from './Components/ParticulerCourse';
import VideoPage from './Components/VideoPage';
import UserProvider from './context/UserContext';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<PrivateRoute element={Home} />} />
          <Route path='/about' element={<PrivateRoute element={About} />} />
          <Route path='/WebRTC' element={<PrivateRoute element={WebRTC} />} />
          <Route path='/WebRTC/peerchat' element={<PeerChat />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resource' element={<PrivateRoute element={Resource} />} />
          <Route path='/quiz' element={<PrivateRoute element={Quiz} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/login/signup' element={<Signup />} />
          <Route path='/courses' element={<PrivateRoute element={Courses} />} />
          {course.map((item) => (
            <Route
              key={item.id}
              path={`/course/${item.id}`}
              element={<PrivateRoute element={() => <ParticulerCourse item={item} />} />}
            />
          ))}
          {course.map((item) => (
            <Route
              key={item.id}
              path={`/video/${item.id}`}
              element={<PrivateRoute element={() => <VideoPage item={item} />} />}
            />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
