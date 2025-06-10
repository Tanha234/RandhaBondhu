import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dessert from './../../images/ice.png';
import snacks from '../../images/snacks.png';
import juice from '../../images/adff694402db1d09870b6afe05695c79-removebg-preview.png';
import pitha from '../../images/pitha (3).png';
import dish from '../../images/9655f06ce499e3efea6d97eed28bf46b-removebg-preview.png';
import FeaturedRecipes from "./FeaturedRecipes";

import HowItWorksSection from "./HowItWorks";


const HeroBanner = () => {
  const categories = [
    {
      title: "Delicious Bangladeshi Dishes made, authentic Bangladeshi spices",
      subtitle: "Experience the rich flavors of traditional meals.",
      image: dish,
      bgImage: "h",
    },
    {
      title: "Delicious & Tasty Snacks",
      subtitle: "Perfectly crispy, savory, and sweet bites to satisfy your cravings anytime of day.",
      image: snacks,
      bgImage: "v",
    },
    {
      title: "Cool Down with Traditional Bengali Delicious Drinks",
      subtitle: "From sweet sherbets to spiced teas — refresh your soul with every sip.",
      image: juice,
      bgImage: "n",
    },
    {
      title: "Sweet Desserts – Bengali Bliss",
      subtitle: "Indulge in a rich array of traditional Bengali sweets and irresistible treats, crafted to satisfy every craving and celebrate every occasion",
      image: dessert,
      bgImage: "v",
    },
    {
      title: "Authentic Pitha – A Taste of Tradition.",
      subtitle: "Handcrafted rice cakes rooted in Bengali heritage, bringing warmth, nostalgia, and joy to every bite.",
      image: pitha,
      bgImage: "/categories/pitha-bg.jpg",
    },
  ];

  // Defensive check: if no categories, show fallback UI
  if (!categories || !Array.isArray(categories) || categories.length === 0) {
    return <div className="p-8 text-center">No categories to display</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="bg-secondary">
      <Slider {...settings}>
        {categories.map((category, idx) => (
          <div key={idx}>
            <div
              className="relative h-[500px] flex flex-col md:flex-row items-center px-6 md:px-12 -mt-2 "
              style={{
                backgroundImage: `url(${category.bgImage || category.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>

              {/* Content container */}
              <div className="relative flex flex-col md:flex-row w-full max-w-6xl mx-auto items-center md:justify-between gap-6 text-gray-900 z-10">
                {/* Text content */}
                <div className="w-full md:w-1/2 text-center md:text-left ">
                  <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 text-orange-900 ">
                    {category.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg">{category.subtitle}</p>
                </div>

                {/* Image content */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end  md:mt-6">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="max-h-[350px] sm:max-h-[400px] md:max-h-[600px] object-cover mt-5"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {/* Categories */}
      <div className="py-10 px-4 md:px-64">
      <p className="text-center text-gray-600 text-lg  mt-2">
  Choose a Category
</p>
  <h2 className="text-4xl font-bold text-center mt-2 mb-16 text-orange-800">Recipe Categories</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
    {[
      {
        name: "Dishes",
        color: "bg-orange-100",
        image: "https://i.pinimg.com/736x/cb/63/57/cb63575e8f841b824e0b4b4be3f5b3b9.jpg"
      },
      {
        name: "Snacks",
        color: "bg-yellow-100",
        image: "https://i.pinimg.com/736x/1a/3c/a1/1a3ca1453e6d74c716d4321f83759e8a.jpg"
      },
      {
        name: "Pitha",
        color: "bg-pink-100",
        image: "https://i.pinimg.com/736x/3f/bc/3e/3fbc3e164fd35262969699634e5a5651.jpg"
      },
      {
        name: "Desserts",
        color: "bg-purple-100",
        image: "https://i.pinimg.com/736x/5b/7f/1d/5b7f1d8aa4d044e1ed4c92ac3898dc14.jpg"
      },
      {
        name: "Drinks",
        color: "bg-blue-100",
        image: "https://i.pinimg.com/736x/5c/7a/43/5c7a43138d9740941d0326a156551135.jpg"
      }
    ].map((category, idx) => (
      <div key={idx} className="flex flex-col items-center space-y-2">
        <div
          className={`w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-md hover:scale-105 transition ${category.color}`}
        >
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-sm sm:text-base font-medium text-center text-orange-900">
          {category.name}
        </span>
      </div>
    ))}
  </div>
</div>


<FeaturedRecipes/>
<HowItWorksSection/>







    </div>
  );
};

export default HeroBanner;
