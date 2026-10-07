import React, { useState, useEffect } from "react";
import homelyfood from "../../assets/homelyfoodspics/homelyfoodshome.png";
import home1 from "../../assets/homelyfoodspics/homelyfoodslogin.png";
import home2 from "../../assets/homelyfoodspics/homelyfoodsmenu.png";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const HomelyFoods = () => {
    const images = [homelyfood, home1, home2];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setIsAutoPlaying(false);
    };

    // Auto-play functionality
    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, images.length]);
    return (
        <>
            <Header />
            <div className="min-h-screen w-full bg-gray-900 text-white flex flex-col items-center py-22 px-4 md:px-8 lg:px-20">
                {/* Header Section */}
                <header className="w-full max-w-6xl mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-center pb-4 border-b-2 border-green-500">
                        Project Details
                    </h1>
                </header>

                {/* Main Content */}
                <main className="w-full max-w-6xl space-y-12">
                    {/* Image Gallery and Description */}
                    <section className="flex flex-col lg:flex-row gap-8">
                        {/* Image Gallery */}
                        <div className="w-full lg:w-1/2 relative group">
                            <h2 className="text-4xl md:text-6xl font-bold text-green-400 mb-6 md:mb-8 relative inline-block">
                                Homely Foods
                                <span className="absolute -bottom-1 md:-bottom-2 left-0 w-0 h-1 md:h-2 bg-green-400 rounded-full animate-[brushStroke_1.5s_ease-out_forwards]"></span>
                            </h2>

                            <style jsx>{`
                                @keyframes brushStroke {
                                    0% {
                                        width: 0;
                                    }
                                    100% {
                                        width: 100%;
                                    }
                                }
                            `}</style>
                            <div className="relative overflow-hidden rounded-xl shadow-2xl aspect-video bg-gray-800">
                                <img
                                    src={images[currentIndex]}
                                    className="w-full h-full object-cover transition-opacity duration-500"
                                    alt={`Project screenshot ${currentIndex + 1}`}
                                    loading="lazy"
                                />

                                {/* Navigation Arrows */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                                    aria-label="Previous image"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 19l-7-7 7-7"
                                        />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                                    aria-label="Next image"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>

                                {/* Image Indicators */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                    {images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                setCurrentIndex(index);
                                                setIsAutoPlaying(false);
                                            }}
                                            className={`h-2 w-2 rounded-full transition-all ${
                                                currentIndex === index ? "bg-green-500 w-4" : "bg-white bg-opacity-50"
                                            }`}
                                            aria-label={`Go to image ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Project Description */}
                        <div className="w-full lg:w-1/2 bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-semibold mb-3 text-gray-200">About The Project</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Homely Foods is an online platform designed to connect users with local food
                                        providers offering authentic homely meals. The platform enables users to explore a
                                        variety of food options, view menus, place orders, and track deliveries, while food
                                        providers can manage their offerings, receive orders, and engage with customers
                                        seamlessly.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3 text-gray-200">Tech Stack</h3>
                                    <div className="flex flex-wrap gap-3">
                                        <span className="px-4 py-2 bg-gray-700 rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors">
                                            HTML
                                        </span>
                                        <span className="px-4 py-2 bg-gray-700 rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors">
                                            CSS
                                        </span>
                                        <span className="px-4 py-2 bg-gray-700 rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors">
                                            JavaScript
                                        </span>
                                        <span className="px-4 py-2 bg-gray-700 rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors">
                                            Python (Django)
                                        </span>
                                        <span className="px-4 py-2 bg-gray-700 rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors">
                                            MySQL
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Action Buttons and Additional Info */}
                    <section className="flex flex-col lg:flex-row gap-8">
                        {/* Action Buttons - Now properly responsive */}
                        <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-4">
                            <a
                                href="http://homelyfoodsproject.pythonanywhere.com/"
                                className="flex-1 px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-lg font-semibold rounded-lg shadow-lg transition-all flex items-center justify-center gap-3 text-center transform hover:scale-[1.02]"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Live Demo
                            </a>
                            <a
                                href="#github"
                                className="flex-1 px-6 py-4 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-lg font-semibold rounded-lg shadow-lg transition-all flex items-center justify-center gap-3 text-center transform hover:scale-[1.02]"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                GitHub Repository
                            </a>
                        </div>

                        {/* Additional Info */}
                        <div className="w-full lg:w-1/2 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-gray-200">User Roles</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <li className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
                                    <div className="flex items-center">
                                        <div className="h-3 w-3 bg-green-500 rounded-full mr-3"></div>
                                        <span className="font-semibold text-green-400">Admin</span>
                                    </div>
                                    <p className="text-gray-300 mt-2 text-sm">
                                        Manages food providers, categories, users, and reviews
                                    </p>
                                </li>

                                <li className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
                                    <div className="flex items-center">
                                        <div className="h-3 w-3 bg-green-500 rounded-full mr-3"></div>
                                        <span className="font-semibold text-green-400">Food Provider</span>
                                    </div>
                                    <p className="text-gray-300 mt-2 text-sm">
                                        Adds food items, manages orders, recipes, and tracks deliveries
                                    </p>
                                </li>

                                <li className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
                                    <div className="flex items-center">
                                        <div className="h-3 w-3 bg-green-500 rounded-full mr-3"></div>
                                        <span className="font-semibold text-green-400">User</span>
                                    </div>
                                    <p className="text-gray-300 mt-2 text-sm">
                                        Browses food, places orders, tracks deliveries, and shares feedback
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Detailed Explanation */}
                    <section className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
                        <h3 className="text-2xl font-semibold mb-6 text-gray-200">Project Overview</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-medium text-green-400 mb-2">Core Features</h4>
                                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                    <li>Users can browse food menus and place homely meal orders</li>
                                    <li>Food providers can showcase menus, manage items, and track orders</li>
                                    <li>
                                        Admin can approve food providers, manage categories, and oversee platform operations
                                    </li>
                                    <li>Real-time order tracking and status updates</li>
                                    <li>Chat functionality between users and food providers</li>
                                    <li>Ratings, reviews, and recipe management by food providers</li>
                                    <li>Search, filter, and sorting of food items by users</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-medium text-green-400 mb-2">Technical Implementation</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    The platform is developed using Django for the backend with MySQL for data storage.
                                    HTML, CSS, and JavaScript are used for the front-end interface. The system provides
                                    separate modules for Admin, Food Providers, and Users with role-based access. Features
                                    like real-time order management, feedback systems, chat integration, and recipe sharing
                                    are implemented to enhance user engagement.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-medium text-green-400 mb-2">Challenges & Solutions</h4>
                                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                    <li>
                                        <span className="font-medium">Challenge:</span> Managing multiple user roles and
                                        permissions
                                        <br />
                                        <span className="font-medium">Solution:</span> Role-based access system implemented
                                        using Django’s authentication and permissions framework
                                    </li>
                                    <li>
                                        <span className="font-medium">Challenge:</span> Real-time order tracking and status
                                        updates
                                        <br />
                                        <span className="font-medium">Solution:</span> Developed dynamic order management
                                        features and integrated tracking updates
                                    </li>
                                    <li>
                                        <span className="font-medium">Challenge:</span> Food search and filtering experience
                                        <br />
                                        <span className="font-medium">Solution:</span> Added efficient search and
                                        category-based filtering for improved usability
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default HomelyFoods;
