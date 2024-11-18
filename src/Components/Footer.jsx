const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 text-white py-8">
      <div className="container mx-auto text-center">
        
        <div className="flex justify-center space-x-8 mb-4">
          <a
            href="https://github.com/NomaanAttar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-white text-3xl transition-all"
          >
            <span className="material-icons">github</span>
          </a>
          <a
            href="https://linkedin.com/in/nomaan-attar-410137313"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-white text-3xl transition-all"
          >
            <span className="material-icons">linkedIn</span>
          </a>
        </div>
        
        <p className="text-sm text-black">
          &copy; {new Date().getFullYear()} Nomaan Attar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
