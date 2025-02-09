import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, updateUser } from '../../redux/feautures/user.crud';

const Users = () => {
  const users = useSelector((state) => state.crud.value);
  const dispatch = useDispatch();

  const [editIndex, setEditIndex] = useState(null);
  const [editFormData, setEditFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    profession: '',
    gender: '',
    bio: '',
  });

  const handleDelete = (index) => {
    dispatch(deleteUser(index));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditFormData(users[index]);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ index: editIndex, updatedUser: editFormData }));
    setEditIndex(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center py-8">
      <h1 className="text-4xl font-bold text-cyan-400 mb-8">User List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {users?.length > 0 ? (
          users.map((user, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400 transition-shadow duration-300"
            >
              {editIndex === index ? (
                <form onSubmit={handleEditSubmit}>
                  <input
                    type="text"
                    name="firstName"
                    value={editFormData.firstName}
                    onChange={handleEditChange}
                    placeholder="First Name"
                    className="w-full px-2 py-1 mb-2 bg-gray-700 text-gray-300 rounded-lg"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={editFormData.lastName}
                    onChange={handleEditChange}
                    placeholder="Last Name"
                    className="w-full px-2 py-1 mb-2 bg-gray-700 text-gray-300 rounded-lg"
                  />
                  <input
                    type="number"
                    name="age"
                    value={editFormData.age}
                    onChange={handleEditChange}
                    placeholder="Age"
                    className="w-full px-2 py-1 mb-2 bg-gray-700 text-gray-300 rounded-lg"
                  />
                  <input
                    type="text"
                    name="profession"
                    value={editFormData.profession}
                    onChange={handleEditChange}
                    placeholder="Profession"
                    className="w-full px-2 py-1 mb-2 bg-gray-700 text-gray-300 rounded-lg"
                  />
                  <select
                    name="gender"
                    value={editFormData.gender}
                    onChange={handleEditChange}
                    className="w-full px-2 py-1 mb-2 bg-gray-700 text-gray-300 rounded-lg"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <textarea
                    name="bio"
                    value={editFormData.bio}
                    onChange={handleEditChange}
                    placeholder="Bio"
                    className="w-full px-2 py-1 bg-gray-700 text-gray-300 rounded-lg mb-2"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 bg-cyan-400 text-gray-900 rounded-lg font-bold hover:bg-cyan-300"
                  >
                    Save
                  </button>
                </form>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
                    {user.firstName} {user.lastName}
                  </h2>
                  <p className="text-gray-300 text-sm mb-2">Age: {user.age}</p>
                  <p className="text-gray-300 text-sm mb-2">Profession: {user.profession}</p>
                  <p className="text-gray-300 text-sm">Gender: {user.gender}</p>
                  <p className="text-gray-400 text-xs mt-4 italic">"{user.bio}"</p>
                  <div className="flex justify-end gap-2 mt-4">
                    <button
                      onClick={() => handleEdit(index)}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center col-span-full text-lg">
            No users found. Add some users to display them here.
          </p>
        )}
      </div>
    </div>
  );
};

export default React.memo(Users);
