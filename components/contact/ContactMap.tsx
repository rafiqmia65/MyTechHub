"use client";

const ContactMap = () => {
  return (
    <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl group mt-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0190932993767!2d-122.41941508468194!3d37.77492927975992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f74f8b4b5%3A0xa4b5c3b6d4f2b0b!2s123%20Tech%20Ave%2C%20San%20Francisco%2C%20CA%2094103!5e0!3m2!1sen!2sus!4v1695567890123!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        className="rounded-3xl transform group-hover:scale-[1.02] transition-transform duration-500"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default ContactMap;
