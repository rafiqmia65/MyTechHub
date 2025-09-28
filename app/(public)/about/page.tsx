import { Globe2, Truck, Headphones, ShieldCheck } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="bg-white py-16 dark:bg-slate-900 transition-colors duration-300 min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-700 dark:text-white mb-6">
          About MytechHub
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          At MytechHub, we don’t just sell gadgets — we connect the world with
          cutting-edge technology, exceptional service, and a commitment to
          innovation. Our mission is to make the latest technology accessible to
          everyone, while providing a seamless and trustworthy shopping
          experience. Every product we offer reflects our dedication to quality,
          reliability, and customer satisfaction.
        </p>
      </div>

      {/* Our Mission & Vision Cards */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 mb-16">
        <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-teal-500 dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Our mission is to empower people around the globe with the latest
            and most innovative technology. We aim to make gadgets and smart
            devices accessible to everyone, ensuring fast and reliable delivery,
            outstanding customer service, and products that inspire creativity
            and efficiency in everyday life.
          </p>
        </div>
        <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-teal-500 dark:text-white mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Our vision is to become the world’s most trusted technology hub,
            connecting tech enthusiasts and innovators globally. We strive to
            create a community where everyone can explore the latest devices,
            discover smarter solutions, and stay ahead in a rapidly evolving
            digital world.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold text-teal-500 dark:text-white text-center mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Card 1 */}
          <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center border border-slate-200 dark:border-slate-700">
            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-teal-100 dark:bg-teal-500/20 rounded-full mb-5">
              <Globe2 size={28} className="text-teal-600" />
            </div>
            <h3 className="font-semibold text-xl text-slate-800 dark:text-white mb-3">
              Global Reach
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Delivering cutting-edge tech products to over 100+ countries
              worldwide, ensuring everyone has access to innovation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center border border-slate-200 dark:border-slate-700">
            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-teal-100 dark:bg-teal-500/20 rounded-full mb-5">
              <Truck size={28} className="text-teal-600" />
            </div>
            <h3 className="font-semibold text-xl text-slate-800 dark:text-white mb-3">
              Fast & Secure Delivery
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Lightning-fast and reliable shipping, with full tracking and
              secure handling, to make sure your products arrive safely.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center border border-slate-200 dark:border-slate-700">
            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-teal-100 dark:bg-teal-500/20 rounded-full mb-5">
              <ShieldCheck size={28} className="text-teal-600" />
            </div>
            <h3 className="font-semibold text-xl text-slate-800 dark:text-white mb-3">
              Trusted & Genuine
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Only authentic products from top global brands. No fakes, no
              compromises — just trust and quality in every purchase.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center border border-slate-200 dark:border-slate-700">
            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-teal-100 dark:bg-teal-500/20 rounded-full mb-5">
              <Headphones size={28} className="text-teal-600" />
            </div>
            <h3 className="font-semibold text-xl text-slate-800 dark:text-white mb-3">
              24/7 Support
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Our expert support team is always ready to assist you, ensuring a
              smooth and satisfying tech experience anytime you need help.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-teal-500 dark:text-white text-center mb-6">
          Our Story
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-center text-lg leading-relaxed">
          Founded with the vision to simplify technology shopping, MytechHub
          started as a small online store and quickly grew into a global
          marketplace. Our journey has been driven by a passion for tech
          innovation, a commitment to quality, and a desire to create a global
          community where technology connects people and enhances their lives.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
