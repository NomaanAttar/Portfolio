const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20 text-center">
      <div className="container mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-shadow-lg">
          Hi, I'm Nomaan Attar
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Frontend Developer | MERN Stack Learner
        </p>
        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-indigo-500 transition-all"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
