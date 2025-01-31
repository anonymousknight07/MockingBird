import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    number: 1,
    title: "Pick an area of concern you relate to",
    description: "Identify the specific areas you want to work on"
  },
  {
    number: 2,
    title: "Take a short, expert-made assessment",
    description: "Complete a professional evaluation of your current state"
  },
  {
    number: 3,
    title: "Get a better understanding of your concerns",
    description: "Receive detailed insights about your mental health"
  },
  {
    number: 4,
    title: "Access a personalised plan with new activities each day",
    description: "Get customized activities tailored to your needs"
  },
  {
    number: 5,
    title: "Monitor your progress as you work on yourself",
    description: "Track your improvement over time"
  }
];

const features = [
  {
    title: "Mood Tracker",
    description: "Log your feelings on a daily basis and track your mood over time",
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=300"
  },
  {
    title: "Goal Tracker",
    description: "Add your mental health goals and keep track of your progress",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=300"
  }
];

export default function MoodTracker() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [stepsRef, stepsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-gray-50">
   
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-20 relative"
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
              Track your Goal and Mood
            </h1>
            <p className="text-xl font-poppins mb-8 max-w-2xl">
              Stay on top of your mental health with the mood and goal tracker.
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
          <h2 className="font-manrope text-3xl font-bold text-center mb-4">
            Track your <span className="text-coral-500">progress</span>
          </h2>
          <p className="font-poppins text-center text-gray-600 mb-12">
            Stay on top of your mental health with the mood and goal tracker.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
             
              const hoverColors = [
                "hover:bg-[#add8e6]", 
                "hover:bg-[#f9dcd3]"  
              ];

              return (
                <motion.div
                  key={index}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden ${hoverColors[index % hoverColors.length]}`}
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
              );
            })}
          </div>
        </div>
      </motion.section>

     
      <motion.section
        ref={stepsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={stepsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="bg-white py-20"
      >
        <div className="container mx-auto px-4 flex items-start">
         
          <div className="w-2/3 pr-10">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-6 relative"
                  initial={{ opacity: 0, x: -50 }}
                  animate={stepsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
             
                  <div className="absolute top-0 left-2 w-6 h-6 bg-[#f9dcd3] rounded-full border-4 border-white"></div>

                  
                  <div className="flex-1 border-2 border-[#f9dcd3] p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-coral-500 mb-4">
                      Step {step.number}:
                    </h4>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          
          <div className="w-1/3">
            <img
              src="/assets/light2.jpg" 
              alt="Tracker Image"
              className="w-full h-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
}
