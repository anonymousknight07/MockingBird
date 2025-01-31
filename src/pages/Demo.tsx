import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const quizCards = [
    {
      title: "Trauma Assessment",
      description: "Take a moment to reflect on your experiences and gain insight into how trauma may be affecting your life. Understanding is the first step toward healing.",
      image: "/assets/trauma.jpg",
      link: "/quiz/trauma"
    },
    {
      title: "OCD Screening",
      description: "Explore your thoughts and behaviors, and see if OCD may be impacting your life. You're not alone, and help is available to bring you peace and relief.",
      image: "/assets/OCD.jpg",
      link: "/quiz/ocd"
    },
    {
      title: "Stress Evaluation",
      description: "Measure your stress levels and learn coping strategies that can help bring you peace of mind in difficult times.",
      image: "/assets/stress.jpg",
      link: "/quiz/stress"
    },
    {
        title: "Depression Screening",
        description: "Screen for depression symptoms and understand your emotional health",
        image: "/assets/Depression.jpg",
        link: "/quiz/depression"
      },
  ];
  

export default function Demo() {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-20"
      >
        <h1 className="text-5xl font-manrope font-bold text-center mb-12">
          Take a <span className="text-customOrange">Test</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {quizCards.map((card, index) => (
            <motion.div
              key={index}
              className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              onClick={() => navigate(card.link)}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-70">
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-white opacity-100">
                  <h3 className="text-2xl font-manrope text-customOrange font-bold mb-3">{card.title}</h3>
                  <p className="text-center font-poppins opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}