"use client";

import { FC } from "react";
import { Card } from "../ui/card";
import { toast } from "sonner";

const ContactForm: FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you for your message! We will get back to you soon.");
    e.currentTarget.reset();
  };

  return (
    <Card className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-xl">
      <h3 className="text-3xl font-semibold mb-6 text-teal-600 dark:text-teal-400 text-center">
        Send a Message
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="John Doe"
              required
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-300"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-300"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Hi MytechHub team, I have a question about..."
            required
            className="w-full p-4 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.01] transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </Card>
  );
};

export default ContactForm;
