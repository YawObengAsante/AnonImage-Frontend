import React,{ useEffect } from "react";
export default function AboutPage() {
  useEffect(() => {
    document.title = "About - Anonymous Image";
  }, []);
  return (
    <div className="min-h-screen bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold gradient-text lg:text-6xl">
            About Us (Or Not Really)
          </h1>
          <p className="mt-3 sm:mt-5 max-w-xl mx-auto text-lg sm:text-xl text-gray-700">
            Because every anonymous app needs a page revealing way too much about itself
          </p>
        </div>

        {/* Who We Are Section */}
        <div className="bg-white shadow-lg sm:shadow-xl rounded-lg p-6 sm:p-8 mb-8 sm:mb-12 border-2 border-blue-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 sm:mb-6">
            Who We Pretend to Be
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              We're a completely faceless, nameless, and identity-less group of internet dwellers who somehow thought the world needed yet another place to share images anonymously. Because clearly, the internet wasn't mysterious enough already.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Our team consists of exactly zero people who will admit to working on this project, which makes company retreats wonderfully inexpensive (and nonexistent).
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              We may or may not exist in several countries simultaneously, or possibly in none at all. The beauty of anonymity is that we can claim whatever we want with absolutely no proof whatsoever.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white shadow-lg sm:shadow-xl rounded-lg p-6 sm:p-8 mb-8 sm:mb-12 border-2 border-blue-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 sm:mb-6">
            Our "Mission" (Air Quotes Included)
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              We're committed to providing a platform where you can share whatever images your heart desires, as long as it's legal (and sometimes even when it's questionably legal, but let's not dwell on that).
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Our cutting-edge technology (read: some servers we rented with a VPN) ensures your anonymity until it doesn't. But hey, that's what disclaimers are for, right?
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              We promise absolutely nothing except that we'll probably keep the lights on until we get bored or arrested—whichever comes first.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white shadow-lg sm:shadow-xl rounded-lg p-6 sm:p-8 mb-8 sm:mb-12 border-2 border-blue-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 sm:mb-6">
            Why Choose Us (We Can't Think of a Reason Either)
          </h2>
          <ul className="space-y-3 sm:space-y-4">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-1">•</span>
              <span className="text-gray-700 text-base sm:text-lg flex-1">
                Zero accountability - Our favorite number is zero, and we apply it to all our responsibilities
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-1">•</span>
              <span className="text-gray-700 text-base sm:text-lg flex-1">
                Premium non-features - Like our "Definitely Not Tracking You" technology
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-1">•</span>
              <span className="text-gray-700 text-base sm:text-lg flex-1">
                24/7 downtime - Our servers take frequent naps to keep things interesting
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 mt-1">•</span>
              <span className="text-gray-700 text-base sm:text-lg flex-1">
                Community of ghosts - Interact with users who may or may not be bots (including this bullet point)
              </span>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="bg-blue-600 text-white shadow-lg sm:shadow-xl rounded-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Legal Stuff We Copied From Someone Else
          </h2>
          <div className="space-y-4">
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
              By using this service, you agree to not hold us responsible for anything, ever, in any universe, parallel dimension, or theoretical construct. This includes but is not limited to: lost data, found data, existential crises caused by anonymous interactions, or sudden realizations that internet points don't matter.
            </p>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
              All rights reserved, unless we forgot to renew something, in which case no rights are reserved. Void where prohibited, and probably also where not prohibited just to be safe.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-blue-400 text-sm sm:text-base md:text-lg">
            Still reading? Wow, you're dedicated. Here's a cookie 🍪 (not really, we don't even know who you are).
          </p>
        </div>
      </div>
    </div>
  )
}
