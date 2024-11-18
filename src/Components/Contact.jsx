import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setSubmitted(true);
      e.target.reset();
    } else {
      alert("Failed to send the message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-green-400 to-blue-500 text-white" id="contact">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-shadow-md text-black">
          Contact Me
        </h2>
        {submitted ? (
          <p className="text-center text-lg text-yellow-400 transition-opacity duration-500 opacity-100">
            Thank you! Your message has been sent.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <input type="hidden" name="access_key" value="3734870b-b455-447d-82d9-fb34d411e590" />
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm mb-2 text-gray-800">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm mb-2 text-gray-800">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm mb-2 text-gray-800">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg hover:bg-gradient-to-l hover:from-purple-400 hover:to-indigo-500 transition-all duration-300 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? (
                <span className="animate-spin mr-2">🔄</span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
