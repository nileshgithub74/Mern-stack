import { useState, type ChangeEvent } from "react";
import { FaCamera, FaCheckCircle } from "react-icons/fa";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState<string>(
    "https://placehold.co/600x150"
  );
  const [profileUrl, setProfileUrl] = useState<string>(
    "https://placehold.co/150x150"
  );

  const handleBannerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative w-[94%] ml-[5rem] overflow-x-hidden">
      {/* Banner */}
      <div className="relative">
        <img
          src={bannerUrl}
          alt="background"
          className="w-full h-40 object-cover ml-20"
        />
        <label
          htmlFor="banner-upload"
          className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 cursor-pointer"
        >
          <FaCamera size={24} />
        </label>
        <input
          id="banner-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleBannerChange}
        />
      </div>

      {/* Profile image and details side-by-side */}
      <div className="flex items-center ml-24 mt-6 space-x-8">
        {/* Profile Image container with group */}
        <div className="relative w-40 h-40 group cursor-pointer">
          <img
            src={profileUrl}
            alt="Profile"
            className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
          />
          <label
            htmlFor="profile-upload"
            className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            title="Change Profile Picture"
          >
            <FaCamera size={16} />
          </label>
          <input
            id="profile-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleProfileChange}
          />
        </div>

        {/* Profile Details */}
        <div className="max-w-xl">
          <div className="flex items-center space-x-2">
            <h1 className="text-3xl font-semibold">Nilesh Kumar </h1>
            <FaCheckCircle className="text-blue-500" title="Verified" />
          </div>

          <p className="text-gray-600 mt-1">1.2M subscribers</p>

          <p className="mt-4 text-gray-700 leading-relaxed max-w-md">
            Welcome to my channel! Here you’ll find tutorials, tech reviews, and
            all things programming. Don’t forget to subscribe and hit the bell
            icon to stay updated!
          </p>

        
        </div>
      </div>
    </div>
  );
};

export default Profile;
