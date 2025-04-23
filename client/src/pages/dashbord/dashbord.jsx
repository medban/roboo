import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 
import "./dashbord.css"

const Dashboard = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    };

    startCamera();
  }, []);

  const handleControl = (direction) => {
    console.log(`Move: ${direction}`);
    // api
  };

  const handleLogout = () => {
    console.log('Logging out...');

    localStorage.clear();
  
  
    navigate('/login', { replace: true });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          width="800"
          height="450"
          className="rounded-2xl shadow-lg"
        />

       
        <button
          onClick={handleLogout}
          className="logoutbtn"
        >
          Logout
        </button>

        <div className="arrowControls">
          <button
            onClick={() => handleControl('up')}
          >
            ↑
          </button>

          <div className="arrow">
            <button
              onClick={() => handleControl('left')}
            >
              ←
            </button>

            <button
              onClick={() => handleControl('right')}
            >
              →
            </button>
          </div>

          <button
            onClick={() => handleControl('down')}
          >
            ↓
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
