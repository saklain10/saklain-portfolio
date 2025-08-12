
import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="w-full flex justify-center pt-7 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-[91.666667%]">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Get in Touch
          </h2>
          <p className="text-base-content text-center text-lg sm:text-xl max-w-2xl">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-base-200 shadow-xl p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">Send me a message</h3>
            <form className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email Address</span>
                </label>
                <input type="email" placeholder="email@example.com" className="input input-bordered w-full" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Message</span>
                </label>
                <textarea className="textarea textarea-bordered h-40 w-full" placeholder="Write your message here" required></textarea>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-secondary text-primary-content font-bold">
                  Send Mail
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information - Redesigned */}
          <div className="bg-base-200 shadow-xl p-6 rounded-lg flex flex-col justify-center items-center md:items-start space-y-6">
            <div className="card w-full bg-base-200 shadow-xl p-6 rounded-lg transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-3xl text-accent" />
                <div>
                  <h4 className="font-semibold text-secondary">Email</h4>
                  <a href="mailto:saklainmostak926@gmail.com" className="text-base-content hover:text-primary transition-colors duration-300">
                    saklainmostak926@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="card w-full bg-base-200 shadow-xl p-6 rounded-lg transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-3xl text-accent" />
                <div>
                  <h4 className="font-semibold text-secondary">Phone</h4>
                  <a href="tel:+8801796000926" className="text-base-content hover:text-primary transition-colors duration-300">
                    +8801796000926
                  </a>
                </div>
              </div>
            </div>
            <div className="card w-full bg-base-200 shadow-xl p-6 rounded-lg transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="flex items-center gap-4">
                <FaWhatsapp className="text-3xl text-accent" />
                <div>
                  <h4 className="font-semibold text-secondary">WhatsApp</h4>
                  <a href="https://wa.me/+8801796000926" target="_blank" rel="noopener noreferrer" className="text-base-content hover:text-primary transition-colors duration-300">
                    +8801796000926
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
