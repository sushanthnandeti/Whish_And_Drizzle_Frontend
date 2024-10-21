import React from 'react';
import { useUserStore } from '../store/useUserStore';

const ProfilePage = () => {
  const { user } = useUserStore();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-emerald-400 mb-8">Profile</h1>

      <div className="bg-grey shadow-md rounded-lg p-6 max-w-3xl mx-auto">
        {/* User Details */}
        <h2 className="text-2xl font-semibold text-emerald-400 mb-8">Your Details</h2>
        <div className="space-y-4 text-lg">
          <p><strong>Name:</strong> {user.name || 'N/A'}</p>
          <p><strong>Email:</strong> {user.email || 'N/A'}</p>
        </div>
    </div>
    </div>
  );
};

export default ProfilePage;
