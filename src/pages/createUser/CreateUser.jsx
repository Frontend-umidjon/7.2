import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Импорт useNavigate
import { createUser } from '../../redux/feautures/user.crud';

const CreateUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    profession: '',
    gender: '',
    bio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(formData));
    setFormData({
      firstName: '',
      lastName: '',
      age: '',
      profession: '',
      gender: '',
      bio: '',
    });
    navigate('/users'); 
  };

  return (
    <div className="py-[100px] min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="max-w-lg w-full bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-6">Create New User</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              First Name
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Last Name
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Age
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter your age"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Profession
              <input
                type="text"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                placeholder="Enter your profession"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Gender
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Bio
              <textarea
                name="bio"
                rows="4"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Tell us a little about yourself..."
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              ></textarea>
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-cyan-400 text-gray-900 font-bold rounded-lg hover:bg-cyan-300 transition duration-300"
          >
            Create User
          </button>
        </form>
      </div>
    </div>
  );
};

export default React.memo(CreateUser);
