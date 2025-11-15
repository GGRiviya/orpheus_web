import React, { useState } from "react";

function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsappNumber: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Updated the URL to point to the new Node.js server
      const response = await fetch("https://smtpserver.up.railway.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus("success");
        setFormData({ name: "", email: "", whatsappNumber: "", message: "" });
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmissionStatus(null);
    onClose();
  };
  
  // The rest of your component's JSX remains the same
  // ...
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900/75 flex items-center justify-center z-50">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-2xl border border-white/20 w-full max-w-md relative animate-slideUp">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white/50 hover:text-white text-3xl font-bold transition-colors duration-200"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact Us</h2>

            {submissionStatus === "success" ? (
              <div className="text-center text-green-400 font-semibold text-lg">
                Thank you! Your message has been sent.
              </div>
            ) : submissionStatus === "error" ? (
              <div className="text-center text-red-400 font-semibold text-lg">
                An error occurred. Please try again later.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-white/80 font-semibold mb-2">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors duration-200 placeholder-white/50"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-white/80 font-semibold mb-2">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors duration-200 placeholder-white/50"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="whatsappNumber" className="block text-white/80 font-semibold mb-2">
                    Whatsapp Number:
                  </label>
                  <input
                    type="tel"
                    id="whatsappNumber"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors duration-200 placeholder-white/50"
                    placeholder="Your Whatsapp Number"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-white/80 font-semibold mb-2">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 resize-none transition-colors duration-200 placeholder-white/50"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200 w-full ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''}`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ContactModal;
