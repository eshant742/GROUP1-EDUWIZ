import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const WebRTC = () => {
  const [inviteLink, setInviteLink] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(`/WebRTC/peerchat?room=${inviteLink}`);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-xl">
        <div className="text-center">
          <p className="text-lg font-medium">👋 Create OR Join a Room</p>
        </div>
        <form className="space-y-6" onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="invite_link"
            value={inviteLink}
            onChange={(e) => setInviteLink(e.target.value)}
            required
            className="w-full px-4 py-2 text-black rounded-lg"
          />
          <input
            type="submit"
            value="Join Room"
            className="w-full py-2 font-semibold text-white bg-purple-600 rounded-lg cursor-pointer hover:bg-purple-700"
          />
        </form>
      </div>
    </main>
  );
};

export default WebRTC;
