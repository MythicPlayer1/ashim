import { motion } from 'framer-motion';

const SkillCarousel = () => {
  const skills = [
    { name: 'TypeScript', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
    { name: 'Node.js', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
    { name: 'React', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
    { name: 'MongoDB', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
    { name: 'Express', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg' }
  ];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex space-x-8"
        animate={{
          x: [-100, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center min-w-[200px] p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-16 h-16 mb-2"
            />
            <p className="text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillCarousel;