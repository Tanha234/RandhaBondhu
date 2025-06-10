import { CameraIcon, PencilIcon, Share2Icon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HowItWorksSection() {
  return (
    <div className="mt-12 w-full max-w-4xl relative mx-auto bg-secondary">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-8 text-center">
        👨‍🍳 How It Works (3 Steps)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-yellow-900 bg-yellow-100 p-6 rounded-2xl hover:bg-yellow-200 transition">
          <CameraIcon className="w-10 h-10 text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Cook & Capture</h3>
          <p className="text-sm text-center">
            Prepare your favorite dish and snap a delicious photo
          </p>
        </div>
        {/* Step 2 */}
        <div className="flex flex-col items-center text-green-900 bg-green-100 p-6 rounded-2xl hover:bg-green-200 transition">
          <PencilIcon className="w-10 h-10 text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Write & Submit</h3>
          <p className="text-sm text-center">
            Describe your recipe with ingredients and steps
          </p>
        </div>
        {/* Step 3 */}
        <div className="flex flex-col items-center text-blue-900 bg-blue-100 p-6 rounded-2xl hover:bg-blue-200 transition">
          <Share2Icon className="w-10 h-10 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Share with Community</h3>
          <p className="text-sm text-center">
            Post it for others to enjoy, try, and comment
          </p>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1, rotate: 360 }} 
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        className="absolute top-10 right-10 w-12 h-12 bg-yellow-300 rounded-full shadow-lg"
      >
        {/* Floating spice (just visual fun) */}
      </motion.div>
    </div>
  );
}
