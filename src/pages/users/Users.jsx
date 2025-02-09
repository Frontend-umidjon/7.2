import React from 'react';
import { useSelector } from 'react-redux';

const Users = () => {
  const users = useSelector((state) => state.crud.value);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center py-8">
      <h1 className="text-4xl font-bold text-cyan-400 mb-8">User List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {
          users?.length > 0 ? (
            users.map((user, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400 transition-shadow duration-300"
              >
                <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
                  {user.firstName} {user.lastName}
                </h2>
                <p className="text-gray-300 text-sm mb-2">Age: {user.age}</p>
                <p className="text-gray-300 text-sm mb-2">Profession: {user.profession}</p>
                <p className="text-gray-300 text-sm">Gender: {user.gender}</p>
                <p className="text-gray-400 text-xs mt-4 italic">"{user.bio}"</p>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-full text-lg">No users found. Add some users to display them here.</p>
          )
        }
      </div>
    </div>
  );
};

export default React.memo(Users);