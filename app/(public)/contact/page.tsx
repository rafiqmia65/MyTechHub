import { Twitter, Linkedin, Instagram } from "lucide-react";
import ContactInfoGrid from "@/components/public/contact/ContactInfoGrid";
import ContactForm from "@/components/public/contact/ContactForm";
import ContactMap from "@/components/public/contact/ContactMap";

const ContactSection = () => {
  return (
    <section className="bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 py-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600 mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Whether you're looking for support, partnership, or just want to say
            hello, our team is ready to connect.
          </p>
        </div>

        {/* Contact Info */}
        <ContactInfoGrid />

        {/* Text + Form */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-start">
          {/* Left side content */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-teal-600 dark:text-teal-400">
              Get in Touch
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Have questions, ideas, or feedback? We'd love to hear from you.
              Our team is dedicated to providing quick and helpful responses to
              all inquiries.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              You can reach us via the contact form, email, or phone. Follow us
              on social media to stay updated with our latest news and projects.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Whether you're a startup looking for collaboration, a client
              seeking custom solutions, or a tech enthusiast exploring new ideas
              — we’re here to help. At{" "}
              <span className="font-semibold text-teal-500">MytechHub</span>,
              communication is at the heart of everything we do.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Don’t hesitate to share your project details, partnership
              proposals, or any questions you might have. We aim to respond
              within <strong>24 hours</strong>, ensuring you always get the
              support you deserve.
            </p>

            {/* Social Media */}
            <div className="flex gap-6 mt-4">
              <a
                href="#"
                className="text-cyan-500 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
              >
                <Twitter size={28} />
              </a>
              <a
                href="#"
                className="text-cyan-500 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="#"
                className="text-cyan-500 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
              >
                <Instagram size={28} />
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <ContactForm />
        </div>

        {/* Map */}
        <ContactMap />

        <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
          We’re always here to help. Reach out anytime and we’ll respond as soon
          as possible.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
