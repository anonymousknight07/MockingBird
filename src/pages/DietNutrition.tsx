import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    title: "Personalize goals on your dashboard",
    image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=300",
    description: "Set and track your personal nutrition and fitness goals"
  },
  {
    title: "Scan barcodes & build your meal diary",
    image: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?auto=format&fit=crop&q=80&w=300",
    description: "Easily track your food intake with our barcode scanner"
  },
  {
    title: "Track all your macros",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=300",
    description: "Monitor your protein, carbs, and fat intake"
  },
  {
    title: "Try intermittent fasting",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=300",
    description: "Get started with intermittent fasting schedules"
  }
];

const categories = [
  {
    title: "Exercise",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=300",
  },
  {
    title: "Challenges",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=300",
  },
  {
    title: "Sleep",
    image: "https://images.unsplash.com/photo-1541480601022-2308c0f02487?auto=format&fit=crop&q=80&w=300",
  },
  {
    title: "Nutrition",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=300",
  }
];

export default function DietNutrition() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [categoriesRef, categoriesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-gray-50 relative">
      
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-20 overflow-hidden"
      >
       
        <div 
          className="absolute top-0 left-1/2 w-full h-full bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/assets/tracker.png)', 
            backgroundPosition: 'right', 
            transform: 'translateX(-30%)' 
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10 flex items-center">
          
          <div className="border-l-8 border-white h-full py-20 mr-8"></div>

          <div>
            <h1 className="text-5xl font-manrope font-bold mb-6">
              Diet, Nutrition and Physical Wellbeing
            </h1>
            <p className="text-xl font-poppins mb-8 max-w-2xl">
              Free fitness tracking app for health-conscious individuals. Track your food, exercise, and health with ease. Scan barcodes, Save Meals & Recipes. 24/7 Support Available. Highlights: 24/7 Support Available, Experts Available, Quick Tools Available.
            </p>
          </div>
        </div>
      </motion.section>

      
      <motion.section
        ref={featuresRef}
        initial={{ opacity: 0, y: 50 }}
        animate={featuresInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:bg-[#f86c3e] hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      
      <motion.section
        ref={categoriesRef}
        initial={{ opacity: 0, y: 50 }}
        animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="bg-white py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="relative h-64 rounded-xl overflow-hidden transition-all transform hover:scale-105 hover:bg-[#ff943f] hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full  font-manrope object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white font-poppins text-2xl font-bold">{category.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
