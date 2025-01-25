import { IoPerson } from "react-icons/io5";
import { TbLockPassword } from "react-icons/tb";
import Logo from "../../assets/Logo_Transparent.png";
import { useGlobalState } from '../../Context/GlobalState';
import { useState } from 'react';

function Login() {
  const { setIsAuthenticated, setAvatar, avatar, setUser } = useGlobalState();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handle avatar change
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle username input change
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Handle password input change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle form submission (login)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      setUser(username);
      setIsAuthenticated(true);  // Set the authentication status
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#8C52FF] to-[#FF914D]">
      <div className="bg-white p-8 rounded-xl shadow-lg w-1/3">
        <div className="flex flex-col items-center mb-6">
          <img src={Logo} alt="Logo" className="w-1/2" />
        </div>

        {/* Avatar Input Section */}
        <div className="flex justify-center mb-6">
          <label className="relative cursor-pointer">
            <div className="w-24 h-24 rounded-full bg-gray-200 border-2 border-[#FF914D] overflow-hidden hover:opacity-80 transition-opacity">
              <img
                src={avatar}
                alt="Profile Avatar"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-white text-sm">Change Photo</span>
              </div>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
            />
          </label>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Username Input */}
          <div className="flex items-center border border-[#FF914D] rounded-lg px-4 py-2 mb-4">
            <IoPerson className="text-[#8C52FF]" />
            <input
              type="text"
              placeholder="User Name"
              value={username}
              onChange={handleUsernameChange}
              className="w-full bg-transparent outline-none text-[#8C52FF] text-sm pl-2"
            />
          </div>

          {/* Password Input */}
          <div className="flex items-center border border-[#FF914D] rounded-lg px-4 py-2 mb-4">
            <TbLockPassword className="text-[#8C52FF]" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full bg-transparent outline-none text-[#8C52FF] text-sm pl-2"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-center mb-6">
            <div className="text-[#8C52FF] text-xl cursor-pointer hover:text-[#FF914D]">
              Forgot Password? <span className="text-gray-700">Click here!</span>
            </div>
          </div>

          {/* Login Button */}
          <div className="flex justify-center mb-6">
            <button
              className="bg-[#8C52FF] text-white px-24 py-2 rounded-lg text-lg font-semibold cursor-pointer hover:bg-[#7a3ce0]"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>

        {/* Extra Info Section */}
        <div className="text-xs text-center text-gray-600 mb-4">
          <div className="mb-2">
            <span>New Users:</span>
            <p>Please follow the instructions sent to your registered email address or contact the System Administrator.</p>
          </div>

          <div className="mb-2">
            <span>Supported Browsers:</span>
            <p>
              Please visit our{" "}
              <a href="#" title="Supported Platforms" className="text-[#8C52FF] hover:underline" target="_blank">
                website
              </a>{" "}
              for the latest list of supported browsers.
            </p>
          </div>

          <div className="mb-2">
            <span>Language:</span>
            <select className="bg-transparent text-[#8C52FF] py-2 px-4 rounded-lg mt-2">
              <option value="de">German</option>
              <option value="no">Norwegian</option>
              <option value="ru">Russian</option>
              <option value="ko">Korean</option>
              <option value="pt">Portuguese</option>
              <option value="el">Greek</option>
              <option value="en" selected="">
                English
              </option>
              <option value="it">Italian</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
              <option value="zh">Chinese</option>
              <option value="ar">Arabic</option>
              <option value="ja">Japanese</option>
              <option value="he">Hebrew</option>
              <option value="nl">Dutch</option>
              <option value="tr">Turkish</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
