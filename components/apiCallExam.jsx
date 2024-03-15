import React, { useState } from 'react';

const APICallExam = () => {
  const [secretCode, setSecretCode] = useState(null);

  const handleAPICall = async () => {
    const passcode = "ehen2rfow";
    const url = `https://webdev2-class-demo.vercel.app/api/sampleReqs/?passcode=${passcode}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.secretCode) {
        setSecretCode(data.secretCode);
      } else {
        console.log("Secret code not found in response.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <button className="bg-red-100 p-2 rounded-md border border-red-500" onClick={handleAPICall}>
          Submit
        </button>
      </div>
      {secretCode && (
        <div className="mt-4 text-center">
          Secret Code: {secretCode}
        </div>
      )}
    </div>
  );
};

export default APICallExam;
