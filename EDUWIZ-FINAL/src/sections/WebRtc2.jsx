import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AgoraRTM from 'agora-rtm-sdk';
import cameraIcon from '../assets/images/camera.png';
import micIcon from '../assets/images/mic.png';
import phoneIcon from '../assets/images/phone.png';

const PeerChat = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [peerConnection, setPeerConnection] = useState(null);
  const [client, setClient] = useState(null);
  const [channel, setChannel] = useState(null);

  const APP_ID = "917949391acd47198356d3af708f1dc5";
  const uid = String(Math.floor(Math.random() * 10000));
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      try {
        // Initialize Agora RTM client
        const clientInstance = AgoraRTM.createInstance(APP_ID);
        await clientInstance.login({ uid });

        setClient(clientInstance);

        const queryParams = new URLSearchParams(location.search);
        const roomId = queryParams.get('room');

        if (!roomId) {
          navigate('/WebRTC');
          return;
        }

        // Create and join channel
        const newChannel = clientInstance.createChannel(roomId);
        await newChannel.join();

        setChannel(newChannel);

        newChannel.on('MemberJoined', handleUserJoined);
        newChannel.on('MemberLeft', handleUserLeft);

        clientInstance.on('MessageFromPeer', handleMessageFromPeer);

        const constraints = {
          video: {
            width: { min: 640, ideal: 1920, max: 1920 },
            height: { min: 480, ideal: 1080, max: 1080 }
          },
          audio: true
        };

        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        setLocalStream(stream);
        document.getElementById('user-1').srcObject = stream;
      } catch (error) {
        console.error('Error initializing Peer Chat:', error);
      }
    };

    init();

    return () => {
      if (channel) {
        channel.leave();
      }
      if (client) {
        client.logout();
      }
    };
  }, [location, navigate]);

  const handleUserJoined = (MemberId) => {
    console.log('A new user joined the channel:', MemberId);
    createOffer(MemberId);
  };

  const handleUserLeft = (MemberId) => {
    document.getElementById('user-2').style.display = 'none';
    document.getElementById('user-1').classList.remove('smallFrame');
  };

  const handleMessageFromPeer = async (message, MemberId) => {
    const parsedMessage = JSON.parse(message.text);

    if (parsedMessage.type === 'offer') {
      createAnswer(MemberId, parsedMessage.offer);
    }

    if (parsedMessage.type === 'answer') {
      addAnswer(parsedMessage.answer);
    }

    if (parsedMessage.type === 'candidate') {
      if (peerConnection) {
        peerConnection.addIceCandidate(parsedMessage.candidate);
      }
    }
  };

  const createPeerConnection = async (MemberId) => {
    const newPeerConnection = new RTCPeerConnection({
      iceServers: [
        { urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'] }
      ]
    });

    setPeerConnection(newPeerConnection);

    const newRemoteStream = new MediaStream();
    setRemoteStream(newRemoteStream);

    document.getElementById('user-2').srcObject = newRemoteStream;
    document.getElementById('user-2').style.display = 'block';
    document.getElementById('user-1').classList.add('smallFrame');

    if (localStream) {
      localStream.getTracks().forEach((track) => {
        newPeerConnection.addTrack(track, localStream);
      });
    }

    newPeerConnection.ontrack = (event) => {
      event.streams[0].getTracks().forEach((track) => {
        newRemoteStream.addTrack(track);
      });
    };

    newPeerConnection.onicecandidate = async (event) => {
      if (event.candidate) {
        client.sendMessageToPeer({ text: JSON.stringify({ 'type': 'candidate', 'candidate': event.candidate }) }, MemberId);
      }
    };
  };

  const createOffer = async (MemberId) => {
    await createPeerConnection(MemberId);

    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);

    client.sendMessageToPeer({ text: JSON.stringify({ 'type': 'offer', 'offer': offer }) }, MemberId);
  };

  const createAnswer = async (MemberId, offer) => {
    await createPeerConnection(MemberId);

    await peerConnection.setRemoteDescription(offer);

    const answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);

    client.sendMessageToPeer({ text: JSON.stringify({ 'type': 'answer', 'answer': answer }) }, MemberId);
  };

  const addAnswer = async (answer) => {
    if (!peerConnection.currentRemoteDescription) {
      await peerConnection.setRemoteDescription(answer);
    }
  };

  const toggleCamera = async () => {
    const videoTrack = localStream.getTracks().find(track => track.kind === 'video');

    if (videoTrack) {
      videoTrack.enabled = !videoTrack.enabled;
      document.getElementById('camera-btn').style.backgroundColor = videoTrack.enabled ? 'rgb(179, 102, 249, .9)' : 'rgb(255,80,80)';
    }
  };

  const toggleMic = async () => {
    const audioTrack = localStream.getTracks().find(track => track.kind === 'audio');

    if (audioTrack) {
      audioTrack.enabled = !audioTrack.enabled;
      document.getElementById('mic-btn').style.backgroundColor = audioTrack.enabled ? 'rgb(179, 102, 249, .9)' : 'rgb(255, 80, 80)';
    }
  };

  return (
    <div className="h-screen overflow-hidden relative">
      <div className="grid grid-cols-1 h-full gap-4">
        <video className="video-player bg-black w-full h-full object-cover" id="user-1" autoPlay playsInline></video>
        <video className="video-player bg-black w-full h-full object-cover hidden" id="user-2" autoPlay playsInline></video>
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-4">
        <div className="control-container bg-purple-600 p-5 rounded-full flex justify-center items-center cursor-pointer" id="camera-btn" onClick={toggleCamera}>
          <img src={cameraIcon} alt="Camera Toggle" className="h-8 w-8" />
        </div>

        <div className="control-container bg-purple-600 p-5 rounded-full flex justify-center items-center cursor-pointer" id="mic-btn" onClick={toggleMic}>
          <img src={micIcon} alt="Mic Toggle" className="h-8 w-8" />
        </div>

        <a href="/WebRTC">
          <div className="control-container bg-red-600 p-5 rounded-full flex justify-center items-center">
            <img src={phoneIcon} alt="Phone Toggle" className="h-8 w-8" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default PeerChat;
