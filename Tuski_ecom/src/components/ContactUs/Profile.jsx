// src/Profile.js
import React from 'react';

const Profile = () => {
  const userProfile = {
    name: 'John Doe',
    image: 'https://via.placeholder.com/150', // Placeholder image, replace with actual
    sortingInfo: {
      gamesWon: 15,
      totalWins: '$1500',
    },
  };

  return (
    
      <div className="max-w-md m-20 bg-white shadow-lg rounded-lg ">
        <div className="w-52 p-9 flex flex-col items-center">
          {/* Profile Image */}
          <img
            src={userProfile.image}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full shadow-md"
          />
          
          {/* Name */}
          <h2 className="mt-4 text-xl font-bold text-gray-800">{userProfile.name}</h2>

          {/* Sorting Information */}
          <div className="mt-4 flex justify-between w-full text-gray-600">
            <div className="text-center">
              <p className="text-lg font-semibold">{userProfile.sortingInfo.gamesWon}</p>
              <p className="text-sm">Games Won</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold">{userProfile.sortingInfo.totalWins}</p>
              <p className="text-sm">Total Wins</p>
            </div>
          </div>

          {/* Edit Button */}
          <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded shadow">
            Edit Profile
          </button>
        </div>
      </div>
  );
};

export default Profile;
