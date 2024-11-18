import Profile_Photo from '../assets/Images/profile.png'

const About = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-400 to-blue-500 text-white" id="about">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={Profile_Photo}
            alt="Profile"
            className="w-48 h-48 rounded-full mb-6 md:mb-0 md:mr-10 border-4 border-white shadow-xl hover:border-black"
          />
          <div>
            <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
            <p className="mt-4 text-lg">
              I am a passionate frontend developer with experience in building responsive and visually appealing websites using React and Tailwind CSS. My projects include an e-commerce website and a college website.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
