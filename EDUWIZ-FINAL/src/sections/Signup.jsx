import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import InputControls from '../Components/InputControls';
import { UserContext } from '../context/UserContext';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/signup', {
        name,
        email,
        password,
      });
      if (response.data) {
        login(response.data);
        navigate('/');
      } else {
        setErrorMessage('Signup failed. Please try again.');
      }
    } catch (error) {
      console.log(ërror);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className='pt-16'>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-md mx-auto flex-1" data-v0-t="card">
        <div className="flex flex-col space-y-1.5 p-6 text-center pb-0">
          <h3 className="whitespace-nowrap tracking-tight text-3xl text-slate-700">Sign Up</h3>
          <p className="text-sm text-muted-foreground">Create your account</p>
        </div>
        <form onSubmit={handleSubmit} className="px-6 py-2 space-y-4 flex flex-col">
          <InputControls label="Name" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
          <InputControls label="Email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <InputControls label="Password" placeholder="Enter your password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {errorMessage && <h2 className='text-red-500 text-xs text-left'>{errorMessage}</h2>}
          <div className="flex flex-col items-center pb-2 justify-center">
            <button type="submit" className="inline-flex items-center w-3/4 justify-center whitespace-nowrap text-xl hover:text-slate-500 text-slate-800 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-lg bg-[#1BB699] font-medium border border-green-700 from-teal-500 to-cyan-600">
              Sign Up
            </button>
          </div>
        </form>
        <div className='flex items-center justify-center'>
          <Link className="inline-flex items-center w-3/4 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 ">
            Login with Google
          </Link>
        </div>
        <div className="p-6 text-center text-sm space-y-2">
          <p>
            Already have an account?{" "}
            <Link className="underline" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
