import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaDatabase } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare size={40} className="text-yellow-500" /> },
    { name: "React", icon: <FaReact size={40} className="text-blue-400" /> },
    { name: "Git", icon: <FaGitAlt size={40} className="text-red-500" /> },
    { name: "MongoDB", icon: <FaDatabase size={40} className="text-green-500" /> }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-green-400 to-blue-500 text-white" id="skills">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-black">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-8 bg-white shadow-xl rounded-xl hover:shadow-2xl transition-transform transform hover:scale-110 hover:bg-gradient-to-r hover:from-gray-300 hover:to-pink-500 hover:cursor-pointer"
            >

              <div className="flex justify-center items-center mb-4 p-4 rounded-full">
                {skill.icon}
              </div>
              <p className="text-xl font-semibold text-black">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
