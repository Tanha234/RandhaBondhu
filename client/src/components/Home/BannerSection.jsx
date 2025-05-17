import React from "react";

const BannerSection = () => {
  return (
    <div className="relative bg-[#E8D6BA] h-80 flex items-center justify-center text-center px-6">
      {/* Food images in corners */}
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3da1e324762644.56339a47413ea.png"
        alt="Top Left"
        className="absolute top-0 left-0 w-40 md:w-52"
      />
      <img
        src="/images/top-right.png"
        alt="Top Right"
        className="absolute top-0 right-0 w-40 md:w-52"
      />
      <img
        src="/images/bottom-left.png"
        alt="Bottom Left"
        className="absolute bottom-0 left-0 w-40 md:w-52"
      />
      <img
        src="/images/bottom-right.png"
        alt="Bottom Right"
        className="absolute bottom-0 right-0 w-40 md:w-52"
      />

      {/* Main Banner Text */}
      <div className="z-05">
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
          Bangladeshi Recipe Sharing
        </h1>
        <p className="text-lg md:text-2xl text-gray-800">
          Discover, Cook & Share Traditional Bengali Dishes
        </p>
      </div>
    </div>
  );
};

export default BannerSection;
