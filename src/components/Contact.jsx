import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane,
  FaHeadset,
} from "react-icons/fa";
import ContactImage from "../assets/contact.png";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Pesan berhasil dikirim!");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error); // Tambahkan ini
          alert("Gagal mengirim pesan!");
        }
      );
  };

  return (
    <section id="contact" className="bg-[#111] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Image */}
          <div className="hidden md:block w-full md:w-1/2">
            <img
              src={ContactImage}
              alt="Contact Illustration"
              className="w-full h-auto max-w-[350px] mx-auto"
            />
          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <h2 className="text-3xl font-bold flex items-center gap-3 mb-8">
              <FaHeadset className="text-2xl text-white" />
              <span>
                Get In <span className="text-pink-500">Touch</span>
              </span>
            </h2>

            <form ref={form} onSubmit={sendEmail}>
              <div className="flex items-center bg-[#1a1a1a] border border-gray-700 rounded px-4 py-2 mb-4">
                <FaUser className="mr-3 text-white" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="bg-transparent w-full outline-none text-white"
                  required
                />
              </div>

              <div className="flex items-center bg-[#1a1a1a] border border-gray-700 rounded px-4 py-2 mb-4">
                <FaEnvelope className="mr-3 text-white" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-transparent w-full outline-none text-white"
                  required
                />
              </div>

              <div className="flex items-start bg-[#1a1a1a] border border-gray-700 rounded px-4 py-2 mb-4">
                <FaCommentDots className="mt-1 mr-3 text-white" />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  className="bg-transparent w-full outline-none text-white resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded flex items-center gap-2"
              >
                Submit <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
