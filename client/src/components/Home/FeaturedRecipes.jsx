import React from "react";
import { Clock, UtensilsCrossed, Flame } from "lucide-react";

const recipes = [
  {
    title: "Creamy Beef Tehari",
    time: "60 Minutes",
    difficulty: "Medium",
    calories: "520 Calories",
    image: "https://i.pinimg.com/736x/88/19/06/881906a166234a517fd98beb81fd26ec.jpg",
  },
  {
    title: "Spicy Shorshe Ilish",
    time: "40 Minutes",
    difficulty: "Medium",
    calories: "410 Calories",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOZMeUdcPkzx6ilTnttWJYa2sy9-JN0Y_lig&s",
  },
  {
    title: "Polao & Chicken Roast",
    time: "50 Minutes",
    difficulty: "High",
    calories: "590 Calories",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdl5QXK7AorlNZvYUXuvbp0-qIu6ZNY3Q8fg&s",
  },
  {
    title: "Bhuna Khichuri Delight",
    time: "45 Minutes",
    difficulty: "low",
    calories: "480 Calories",
    image: "https://i.pinimg.com/736x/15/90/17/159017faa3c551445fd9ee01a4026bfa.jpg",
  },
  {
    title: "Begun Bharta Classic",
    time: "20 Minutes",
    difficulty: "Medium",
    calories: "280 Calories",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjhdrbIjniOFZHz4YaSjv8W5Op7Jik993U7w&s",
  },
  {
    title: "Chingri Malai Curry",
    time: "40 Minutes",
    difficulty: "Medium",
    calories: "460 Calories",
    image: "https://i.pinimg.com/736x/5d/53/ea/5d53ea751ce097326cfe7ff565694f99.jpg",
  },
];

const RecipeGrid = () => {
  return (
    <div className="bg-orange-50 py-16 px-4 md:px-44">
          <p className="text-center text-gray-600 text-lg  mt-2">
          Recent Recipes
</p>
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Featured Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          
        {recipes.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-[#fffaf5] rounded-2xl p-6 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Image */}
            <div className="absolute  -right-4 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="z-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 pr-20">
                {item.title}
              </h3>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Clock className="w-4 h-4 text-red-500 mr-2" />
                {item.time}
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <UtensilsCrossed className="w-4 h-4 text-red-500 mr-2" />
                {item. difficulty}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Flame className="w-4 h-4 text-red-500 mr-2" />
                {item.calories}
              </div>
            </div>

           
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeGrid;