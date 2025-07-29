import React from "react";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 mt-15">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Contact <span className="text-red-500">Us</span>
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Have questions or need help? Reach out to us and we’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Company Info */}
        <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600">
            We’d love to hear from you. Whether it’s a question about our products,
            orders, or anything else, our team is ready to answer all your questions.
          </p>
          <div>
            <h3 className="font-semibold text-gray-700">Address:</h3>
            <p className="text-gray-600">123, ShopNow Street, Ahmedabad, Gujarat, India</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Phone:</h3>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Email:</h3>
            <p className="text-gray-600">support@shopnow.com</p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      {/* <div className="mt-16">
        <iframe
          title="location"
          src="https://www.google.co.in/maps/place/Sundram+nagar+maidan+ni+baju+me+royal+apartment/@23.0167354,72.6324708,17z/data=!3m1!4b1!4m6!3m5!1s0x395e8700611699d7:0xbb93b2f5f7e8c703!8m2!3d23.0167354!4d72.6350457!16s%2Fg%2F11y67wl3d4?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg shadow-md"
        ></iframe>
      </div> */}
    </div>
  );
};

export default Contact;
