import React from "react";

function HomePage2() {
    return (
        <div className="font-sans text-gray-800 bg-white">
            <div
                className="relative bg-cover bg-center bg-no-repeat h-[500px] flex items-center justify-center px-6 md:px-16"
                style={{ backgroundImage: "url('/1.jpg')" }}
            >
                <div className="bg-white bg-opacity-80 p-6 md:p-10 rounded-lg shadow-lg max-w-md text-center">
                    <h1 className="text-2xl md:text-3xl font-medium leading-tight">
                        Luxury homeware for people <br />
                        who love timeless design quality
                    </h1>
                    <p className="mt-4 text-sm text-gray-600">
                        Shop the new Spring 2022 collection today
                    </p>
                    <button className="mt-6 bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition">
                        View collectionn
                    </button>
                </div>
            </div>
            <section className="py-16 px-6 md:px-16 bg-white">
                <h2 className="text-center text-xl font-medium mb-12">
                    What makes our brand different
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-3xl mb-4">🚚</div>
                        <h3 className="font-semibold mb-2">Next day as standard</h3>
                        <p className="text-sm text-gray-500">
                            Order before 3pm and get your order the next day as standard
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl mb-4">✔️</div>
                        <h3 className="font-semibold mb-2">Made by true artisans</h3>
                        <p className="text-sm text-gray-500">
                            Handmade crafted goods made with real passion and craftsmanship
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl mb-4">💰</div>
                        <h3 className="font-semibold mb-2">Unbeatable prices</h3>
                        <p className="text-sm text-gray-500">
                            For our materials and quality you won’t find better prices anywhere
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl mb-4">♻️</div>
                        <h3 className="font-semibold mb-2">Recycled packaging</h3>
                        <p className="text-sm text-gray-500">
                            We use 100% recycled to ensure our footprint is more manageable
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-16 px-6 md:px-16 bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    <div className="text-center">
                        <img src="/2.jpg" alt="The Dandy chair" className="w-full h-120 mb-4" />
                        <h3 className="font-medium">The Dandy chair</h3>
                        <p className="text-sm text-gray-600">£250</p>
                    </div>
                    <div className="text-center">
                        <img src="/3.jpg" alt="Rustic Vase Set" className="w-full h-120 mb-4" />
                        <h3 className="font-medium">Rustic Vase Set</h3>
                        <p className="text-sm text-gray-600">£155</p>
                    </div>
                    <div className="text-center">
                        <img src="/4.jpg" alt="The Silky Vase" className="w-full h-120 mb-4" />
                        <h3 className="font-medium">The Silky Vase</h3>
                        <p className="text-sm text-gray-600">£125</p>
                    </div>
                    <div className="text-center">
                        <img src="/5.jpg" alt="The Lucy Lamp" className="w-full h-120 mb-4" />
                        <h3 className="font-medium">The Lucy Lamp</h3>
                        <p className="text-sm text-gray-600">£399</p>
                    </div>
                </div>
                <div className="text-center">
                    <button className="bg-gray-100 text-gray-700 py-2 px-6 rounded hover:bg-gray-200 transition">
                        View collection
                    </button>
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-[#2D2A55] text-white flex flex-col justify-center items-start p-10">
                    <h2 className="text-xl font-medium mb-4">It started with a small idea</h2>
                    <p className="text-sm mb-6 max-w-md">
                        A global brand with local beginnings, our story began in a small studio
                        in South London in early 2014
                    </p>
                    <button className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition">
                        View collection
                    </button>
                </div>
                <div>
                    <img src="/6.jpg" alt="Story section" className="w-full h-120 object-cover" />
                </div>
            </section>
            <div
                className="flex items-center justify-center h-screen bg-cover bg-center"
                style={{
                    backgroundImage: "url('7.png')",
                }}
            >
                <div className="bg-black bg-opacity-40 p-8 rounded-lg max-w-xl text-center text-white">
                    <h2 className="text-2xl font-semibold mb-2">
                        Join the club and get the benefits
                    </h2>
                    <p className="mb-6 text-gray-200">
                        Sign up for our newsletter and receive exclusive offers on new ranges,
                        sales, pop up stores and more
                    </p>
                    <div className="flex justify-center gap-6 mb-8 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="text-yellow-400">✔</span> Exclusive offers
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-yellow-400">✔</span> Free events
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-yellow-400">✔</span> Large discounts
                        </div>
                    </div>
                    <div className="flex bg-white rounded overflow-hidden max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-grow px-4 py-2 text-black focus:outline-none"
                        />
                        <button className="bg-indigo-900 px-6 py-2 text-white font-semibold hover:bg-indigo-800">
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage2;
