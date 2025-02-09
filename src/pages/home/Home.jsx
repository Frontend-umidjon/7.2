import React from 'react';
import { FaBook, FaCogs, FaRocket } from 'react-icons/fa';

const Home = () => {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-4">Welcome to Redux & Redux Toolkit</h1>
          <p className="text-gray-300 text-lg md:text-xl">
            A predictable state container for JavaScript apps, empowering developers to write scalable, performant, and maintainable applications.
          </p>
        </section>
        <section className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400 transition duration-300">
            <FaBook className="text-4xl text-cyan-400 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Opinionated</h3>
            <p className="text-gray-400 text-sm">
              Provides good defaults for store setup out of the box, and includes the most commonly used Redux addons built-in.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400 transition duration-300">
            <FaCogs className="text-4xl text-cyan-400 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Powerful</h3>
            <p className="text-gray-400 text-sm">
              Takes inspiration from libraries like Immer and Autodux to let you write "mutative" immutable update logic, and even create entire "slices" of state automatically.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400 transition duration-300">
            <FaRocket className="text-4xl text-cyan-400 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Effective</h3>
            <p className="text-gray-400 text-sm">
              Lets you focus on the core logic your app needs, so you can do more work with less code
            </p>
          </div>
        </section>
        <section className="mt-16 text-center">
          <a
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-400 text-gray-900 font-bold py-3 px-8 rounded-2xl shadow-lg hover:bg-cyan-300 transition duration-300"
          >
            Learn More
          </a>
        </section>
      </div>
    </main>
  );
};

export default React.memo(Home);
