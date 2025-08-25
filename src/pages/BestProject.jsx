import React from "react";

const BestProject = () => {
  const projects = [
    {
      title: "Luxury Apartments Launch",
      category: "Real Estate",
      image: "https://t3.ftcdn.net/jpg/08/42/87/84/240_F_842878435_aNDExCjQxPtTd6v2CFhc8wc9aFf6nWoi.jpg",
      description:
        "A high-end project promotion campaign with digital marketing, ad films, and celebrity endorsements.",
    },
    {
      title: "Branding for FMCG Company",
      category: "Brand Promotion",
      image: "data:image/jpeg;base64,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",
      description:
        "Comprehensive brand promotion strategy with ad films, content creation, and social media campaigns.",
    },
    {
      title: "National Product Launch",
      category: "Events & Ads",
      image: "https://fotograf.org.uk/wp-content/uploads/2024/08/V3-Project-2018-9.jpg",
      description:
        "Creative ad film, event management, and media promotion for a product launch across India.",
    },
    {
      title: "Celebrity Endorsement Campaign",
      category: "Celebrity Marketing",
      image: "https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Best-Travel-Camera.jpg",
      description:
        "Collaborating with top celebrities to boost brand visibility and drive audience engagement.",
    },
    {
      title: "Digital Campaign for Tech Startup",
      category: "Digital Marketing",
      image: "https://hi-ten.co.uk/wp-content/uploads/2023/01/alif-ngoylung-jg-6ARMiaPM-unsplash.jpeg",
      description:
        "Online campaigns with targeted ads, SEO, and social media engagement to create a strong brand presence.",
    },
    {
      title: "Event Marketing & Management",
      category: "Event Management",
      image: "https://cdn.shopify.com/s/files/1/0310/3571/9739/files/Photography_Project_Ideas_Cool_Photo_Idea_Sunny_16_2048x2048.jpg?v=1620947654",
      description:
        "Organizing creative events that leave a lasting impact and connect the audience with the brand.",
    },
  ];

  return (
    <div className="w-screen min-h-screen bg-gray-200 text-white pt-28">
      {/* Hero Section */}
      <div className="w-full h-[50vh] bg-[url('https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fcmsassets%2FCameraSetup-HERO-1.webp&w=1920&q=75')] bg-cover bg-center flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold bg-opacity-50 p-4 rounded">
          Our Best Projects
        </h1>
      </div>

      {/* Projects Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer hover:scale-105 duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover group-hover:scale-110 duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 duration-500 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-2">{project.category}</p>
              <p className="text-gray-200 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 p-12 rounded-2xl text-center mt-16 mx-4 md:mx-20 hover:scale-105 duration-300">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">
          Interested in Our Projects?
        </h2>
        <p className="text-gray-300 mb-6">
          Contact us today to create a customized campaign for your brand and achieve remarkable results.
        </p>
        <button className="bg-yellow-400 text-blue-950 font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition duration-300 cursor-pointer">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default BestProject;
