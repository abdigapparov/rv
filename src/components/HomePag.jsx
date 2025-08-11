import React from "react";

const HomePag = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* Our popular products */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-medium mb-8">Our popular products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Product 1 */}
          <div>
            <img
              src="https://assets.wfcdn.com/im/11397411/resize-h500-w750%5Ecompr-r85/7096/70967006/default_name.jpg"
              alt="Sofa"
              className="w-full h-[300px] object-cover rounded"
            />
            <p className="mt-4 text-sm">The Poplar suede sofa</p>
            <p className="text-sm font-semibold">£980</p>
          </div>

          {/* Product 2 */}
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcTMLoM_yUVd02OHBc6jnmMUM_puR2DwKETA&s"
              alt="Chair"
              className="w-full h-[300px] object-cover rounded"
            />
            <p className="mt-4 text-sm">The Dandy chair</p>
            <p className="text-sm font-semibold">£250</p>
          </div>

          {/* Product 3 */}
          <div>
            <img
              src="https://www.tattahome.com/67732-thickbox_default/atmosphera-dandy-20-chair.jpg"
              alt="Chair"
              className="w-full h-[300px] object-cover rounded"
            />
            <p className="mt-4 text-sm">The Dandy chair</p>
            <p className="text-sm font-semibold">£250</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-100">
            View collection
          </button>
        </div>
      </section>

      {/* Join the club */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Join the club and get the benefits
        </h2>
        <p className="text-sm mb-6 text-gray-600">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="border border-gray-300 px-4 py-2 rounded w-full"
          />
          <button className="bg-gray-900 text-white px-6 py-2  rounded hover:bg-black">
            Sign up
          </button>
        </div>
      </section>

      {/* About section */}
      <section className="flex flex-col lg:flex-row items-center justify-between py-16 px-6 gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-xl font-medium mb-4">
            From a studio in London to a global brand with over 400 outlets
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            When we started Avalan, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
            <br />
            <br />
            Handmade, and lovingly crafted furniture and homeware is what we
            love, and design is our DNA. Our boutique became the hottest for the
            London interior design community.
          </p>
          <button className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-100">
            Get in touch
          </button>
        </div>
        <div className="lg:w-1/2">
          <img
            src="https://fwhomestores.co.uk/cdn/shop/files/FURN-ARMCH-688096_1.jpg"
            alt="About image"
            className="w-full h-[400px] object-cover rounded"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePag;
