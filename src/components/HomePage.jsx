import React from "react";
import { Truck, ShieldCheck, Tag, Leaf } from "lucide-react";

const HomePage = () => {
  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Next day as standard",
      text: "Order before 3pm and get your order the next day as standard",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Made by true artisans",
      text: "Handmade crafted goods made with real passion and craftsmanship",
    },
    {
      icon: <Tag className="w-6 h-6" />,
      title: "Unbeatable prices",
      text: "For our materials and quality you won't find better prices anywhere",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Recycled packaging",
      text: "We use 100% recycled packaging to ensure our footprint is manageable",
    },
  ];

  const products = [
    {
      name: "The Dendy chair",
      price: "£250",
      image: "https://fwhomestores.co.uk/cdn/shop/files/FURN-ARMCH-688096_1.jpg",
    },
    {
      name: "Rustic Vase Set",
      price: "£155",
      image: "https://u-mercari-images.mercdn.net/photos/m58009193912_1.jpg",
    },
    {
      name: "The Silky Vase",
      price: "£125",
      image: "https://silvergrain.studio/cdn/shop/files/A1FC1A42-D4C0-4825-A894-AAB7F163D6AC.jpg?v=1721363272&width=1445",
    },
    {
      name: "The Lucy Lamp",
      price: "£399",
      image: "https://cdn.lightshopping.com/en/fabas-luce/night/lucy-tl-table-lamp-black-3568-30-101-m.jpg",
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#e6f0f2]">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2">
          {/* Text */}
          <div className="bg-[#292340] text-white flex flex-col justify-center p-10 min-h-[500px]">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              The furniture brand for the future, with timeless designs
            </h1>
            <button className="bg-white text-[#292340] px-6 py-2 rounded mb-6 w-max">
              View collection
            </button>
            <p className="text-sm leading-relaxed">
              A new era in eco friendly furniture with Avalon, the French luxury
              retail brand with nice fonts, tasteful colors and a beautiful way
              to display things digitally using modern web technologies.
            </p>
          </div>

          {/* Image */}
          <div className="h-[500px] w-full">
            <img
              src="https://fwhomestores.co.uk/cdn/shop/files/FURN-ARMCH-688096_1.jpg"
              alt="Chair"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-10">
          What makes our brand different
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="flex justify-center mb-2 text-[#292340]">
                {feature.icon}
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="py-12 bg-gray-50 px-6">
        <h2 className="text-2xl font-semibold text-center mb-10">
          New ceramics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-4 shadow rounded">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-gray-700">{product.price}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="bg-[#292340] text-white px-6 py-2 rounded">
            View collection
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
