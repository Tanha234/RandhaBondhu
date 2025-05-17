import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dessert from './../../images/ice.png';
import snacks from '../../images/snacks.png';
import juice from '../../images/adff694402db1d09870b6afe05695c79-removebg-preview.png';
import pitha from '../../images/pitha (3).png';
import dish from '../../images/9655f06ce499e3efea6d97eed28bf46b-removebg-preview.png';

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
    </div>
  );
};

export default HeroBanner;
