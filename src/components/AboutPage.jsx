import React from "react";
import Img1 from "../assets/1chirasm.jpg";
import Img2 from "../assets/2chirasm.jpg";
import Img3 from "../assets/oxrgisi.jpg";

const AboutPage = () => {
  return (
    <>
      {/* Title */}
      <div>
        <p className="m-4 text-center text-2xl">
          A brand built on the love of craftmanship, <br />
          quality and outstanding customer service
        </p>
      </div>

      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen px-6 md:px-16 gap-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-medium mb-4">
            From a studio in London to a global brand with over 400 outlets
          </h2>
          <p className="text-gray-600 mb-4">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>
          <p className="text-gray-600 mb-6">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique became the hotbed
            for the London interior design community.
          </p>
          <button className="bg-gray-100 hover:bg-gray-200 px-6 py-2 rounded mt-8">
            Get in touch
          </button>
        </div>

        <div>
          <img
            src={Img1}
            alt="Sofa"
            className="w-full h-[400px] object-cover rounded"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen px-6 md:px-16 gap-8">
        <div>
          <img
            src={Img2}
            alt="Sofa"
            className="w-full h-[400px] object-cover rounded"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-medium mb-4">
            Our service isn’t just personal, it’s actually
            <br /> hyper personally exquisite
          </h2>
          <p className="text-gray-600 mb-4">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>
          <p className="text-gray-600 mb-6">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique became the hotbed
            for the London interior design community.
          </p>
          <button className="bg-gray-100 hover:bg-gray-200 px-6 py-2 rounded mt-8">
            Get in touch
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="text-center py-10 px-4">
        <h2 className="text-xl font-semibold mb-8">
          What makes our brand different
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div>
            <p className="text-3xl">🚚</p>
            <h3 className="font-semibold mt-2">Next day as standard</h3>
            <p className="text-gray-500 text-sm">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>

          <div>
            <p className="text-3xl">✔</p>
            <h3 className="font-semibold mt-2">Made by true artisans</h3>
            <p className="text-gray-500 text-sm">
              Handmade crafted goods made with real passion and craftsmanship
            </p>
          </div>

          <div>
            <p className="text-3xl">💳</p>
            <h3 className="font-semibold mt-2">Unbeatable prices</h3>
            <p className="text-gray-500 text-sm">
              For our materials and quality you won’t find better prices
              anywhere
            </p>
          </div>

          <div>
            <p className="text-3xl">♻</p>
            <h3 className="font-semibold mt-2">Recycled packaging</h3>
            <p className="text-gray-500 text-sm">
              We use 100% recycled packaging to ensure our footprint is
              manageable
            </p>
          </div>
        </div>
      </div>

      {/* Final Image */}
      <div
  className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white"
  style={{
    backgroundImage: `url(${Img3})`,
  }}
>
  {/* Overlay (yarim qora fon) */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Content */}
  <div className="relative text-center max-w-2xl px-4">
    <h1 className="text-2xl md:text-3xl font-medium mb-4">
      Join the club and get the benefits
    </h1>
    <p className="text-sm md:text-base mb-6">
      Sign up for our newsletter and receive exclusive offers on <br />
      new ranges, sales, pop up stores and more
    </p>

    {/* Benefits */}
    <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
      <div className="flex items-center gap-2">
        <span className="text-lg">✅</span> Exclusive offers
      </div>
      <div className="flex items-center gap-2">
        <span className="text-lg">✅</span> Free events
      </div>
      <div className="flex items-center gap-2">
        <span className="text-lg">✅</span> Large discounts
      </div>
    </div>

    {/* Email input */}
    <div className="flex max-w-md mx-auto rounded overflow-hidden">
      <input
        type="email"
        placeholder="your@email.com"
        className="w-full px-4 py-2 bg-amber-50 text-gray-800 focus:outline-none"
      />
      <button className="bg-[#2A254B] text-white px-6 hover:bg-[#1e1a38]">
        Sign up
      </button>
    </div>
  </div>
</div>

    </>
  );
};

export default AboutPage;
