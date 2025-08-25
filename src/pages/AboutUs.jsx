import React from "react";

const AboutUs = () => {
  return (
    <div className="w-screen min-h-screen bg-transparent text-white pt-30">
      {/* Hero Section */}
      <div className="w-full h-[60vh] bg-[url('https://www.kamerakunst.com/trade-fair-photography/exhibition-trade-fair-photographer-essen/fair-stand-photographer-essen-video.jpg')] bg-cover bg-center flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold bg-opacity-50 p-4 rounded">
          About Us
        </h1>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src="https://images.ctfassets.net/pdf29us7flmy/1FLfD1FtKSVGDyi0G0BQSE/d3a75ce5609c1f021f276e91c29942ca/GettyImages-928146626__1_.jpg?w=720&q=100&fm=jpg"
              alt="About Us"
              className="rounded-2xl shadow-lg hover:scale-105 duration-300 w-full"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-yellow-400">
              Who We Are
            </h2>
            <p className="text-gray-300 text-justify">
              We are a leading brand promotion and media company, specializing in delivering innovative solutions for businesses across India. Our team is dedicated to creating outstanding ad films, promotional campaigns, and marketing strategies that elevate brands to the next level.
            </p>
            <p className="text-gray-300 text-justify">
              With years of experience in working with top FMCG companies and celebrities, we combine creativity, technology, and strategy to make your brand stand out in a competitive market.
            </p>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-950 p-8 rounded-2xl shadow-lg hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Our Mission</h3>
            <p className="text-gray-300">
              To provide innovative, high-quality media solutions that help our clients achieve their marketing goals and make a lasting impact in their industry.
            </p>
          </div>
          <div className="bg-blue-950 p-8 rounded-2xl shadow-lg hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Our Vision</h3>
            <p className="text-gray-300">
              To be the most trusted and creative media agency in India, known for delivering exceptional campaigns that inspire, engage, and drive results.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-2xl text-center hover:scale-105 duration-300">
              <img
                src="https://media.macphun.com/img/uploads/macphun/blog/2262/_1.jpg"
                alt="Team Member"
                className="mx-auto rounded-full w-32 h-32 object-cover mb-4"
              />
              <h4 className="font-bold text-xl">John Doe</h4>
              <p className="text-gray-400">Creative Director</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl text-center hover:scale-105 duration-300">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDl0l2PFJIGI6pzakmaiZq88Vm_OER8b4mzw&s"
                alt="Team Member"
                className="mx-auto rounded-full w-32 h-32 object-cover mb-4"
              />
              <h4 className="font-bold text-xl">Jane Smith</h4>
              <p className="text-gray-400">Marketing Head</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl text-center hover:scale-105 duration-300">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtMoDyiTtnPJ5bkzJ04i8MjxEUCH5csHm_pw&s"
                alt="Team Member"
                className="mx-auto rounded-full w-32 h-32 object-cover mb-4"
              />
              <h4 className="font-bold text-xl">Mike Johnson</h4>
              <p className="text-gray-400">Project Manager</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-900 p-8 rounded-2xl text-center mt-16 hover:scale-105 duration-300">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Join Our Journey
          </h2>
          <p className="text-gray-300 mb-6">
            Partner with us to create amazing campaigns and build a strong brand presence across India.
          </p>
          <button className="bg-yellow-400 text-blue-950 font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
