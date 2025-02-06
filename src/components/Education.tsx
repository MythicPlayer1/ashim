import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      level: 'High School',
      school: 'NIST College',
      location: 'Kathmandu, Lainchaur',
      year: '2018-2020'
    },
    {
      level: 'Bachelor in Computer Engineering',
      school: 'Pulchowk Campus',
      location: 'Pulchowk, Lalitpur',
      year: '2020-2024'
    }
  ];

  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 dark:bg-gray-700" />
      
      {educationData.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={`relative flex ${
            index % 2 === 0 ? 'justify-start' : 'justify-end'
          } mb-8`}
        >
          <div className="w-5/12 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">{edu.level}</h3>
            <p className="text-lg">{edu.school}</p>
            <p className="text-gray-600 dark:text-gray-400">{edu.location}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full mt-6" />
        </motion.div>
      ))}
    </div>
  );
};

export default Education;