import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BarterMedia = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const campaigns = [
    {
      title: "Celebrity Endorsements",
      description:
        "We collaborate with top celebrities to create impactful brand campaigns that leave a lasting impression.",
      image: "https://www.3dotsdesign.in/blog/wp-content/uploads/2020/12/Celebrity-Endorsements-in-Advertising2.jpg",
    },
    {
      title: "Digital Marketing",
      description:
        "Targeted online campaigns, social media promotions, and SEO strategies to boost brand visibility.",
      image: "https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2021/05/22121232/Untitled-design-391.png",
    },
    {
      title: "Event Management",
      description:
        "Creative events that engage the audience and amplify brand presence across platforms.",
      image: "https://thumbs.dreamstime.com/b/event-management-concept-meeting-white-office-table-93231489.jpg",
    },
    {
      title: "Ad Film Production",
      description:
        "High-quality ad films for TV and digital platforms, tailored to convey your brand story effectively.",
      image: "https://syonproductionhouse.com/aionpanel/uploads/services/1621492964.jpg",
    },
  ];

  return (
    <div className="w-screen min-h-screen  text-white pt-28">
        <img src="" alt="" />
      {/* Hero Section */}
      <div
        className="w-full h-[60vh] bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('')",
        }}
      >
        <div className="absolute inset-0  bg-opacity-50"></div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 z-10 animate-pulse">
          Barter Media
        </h1>
      </div>

      {/* Animated Introduction */}
      <div className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4" data-aos="fade-up">
          Who We Are
        </h2>
        <p className="text-gray-300 text-lg" data-aos="fade-up" data-aos-delay="200">
          Barter Media is a creative agency delivering top-notch media campaigns, 
          celebrity endorsements, and innovative brand promotions. We make brands shine!
        </p>
      </div>

      {/* Campaign Cards with Animation */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {campaigns.map((campaign, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition duration-500"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <img
              src={campaign.image}
              alt={campaign.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">{campaign.title}</h3>
              <p className="text-gray-300 text-sm">{campaign.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section with Bounce Animation */}
      <div
        className="bg-gradient-to-r from-blue-700 to-purple-700 p-12 rounded-3xl text-center mt-16 mx-4 md:mx-20 transform hover:scale-105 transition duration-500"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl font-bold text-yellow-400 mb-4 animate-bounce">
          Work With The Best
        </h2>
        <p className="text-gray-300 mb-6">
          Partner with Barter Media for creative, impactful campaigns and brand promotions that truly stand out.
        </p>
        <button className="bg-yellow-400 text-blue-950 font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition duration-300">
          Contact Us Today
        </button>
      </div>
    </div>
  );
};

export default BarterMedia;
