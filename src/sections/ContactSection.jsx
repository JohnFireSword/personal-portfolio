import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";

import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const containerRef = useRef();
  const titleRef = useRef();
  const formRef = useRef();
  const orbsRef = useRef([]);
  const particlesRef = useRef([]);
  const socialRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating orbs animation
      orbsRef.current.forEach((orb, index) => {
        if (orb) {
          gsap.to(orb, {
            y: -30,
            duration: 3 + index,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.5,
          });

          gsap.to(orb, {
            x: 20,
            duration: 4 + index,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.3,
          });
        }
      });

      // Particles floating animation
      particlesRef.current.forEach((particle, index) => {
        if (particle) {
          gsap.to(particle, {
            y: -100,
            duration: 3 + (index % 3),
            ease: "none",
            repeat: -1,
            delay: index * 0.2,
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Success animation for button
      gsap.fromTo(
        ".submit-btn",
        { scale: 1 },
        {
          scale: 1.1,
          duration: 0.2,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(".submit-btn", { scale: 1 });
          },
        }
      );

      // Success state
      setSubmitted(true);
      setSubmitMessage("Message sent successfully! 🎉");
      setFormData({ name: "", email: "", message: "" });

      // Reset success state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setSubmitMessage("");
      }, 5000);
    } catch (error) {
      console.log("EmailJS error", error);
      setSubmitMessage("Failed to send message. Please try again. ❌");

      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitMessage("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const addOrbRef = (el, index) => {
    if (el) orbsRef.current[index] = el;
  };

  const addParticleRef = (el, index) => {
    if (el) particlesRef.current[index] = el;
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="min-h-screen bg-[#0d1224] relative overflow-hidden flex items-center px-4 flex-col">
      <TitleHeader title="Get In Touch With Me " sub="Contact Info ✉️" />

      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          ref={(el) => addOrbRef(el, 0)}
          className="absolute top-20 left-20 w-64 h-64 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #f626af 0%, transparent 70%)",
          }}
        />
        <div
          ref={(el) => addOrbRef(el, 1)}
          className="absolute top-1/2 right-20 w-80 h-80 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #8228ec 0%, transparent 70%)",
          }}
        />
        <div
          ref={(el) => addOrbRef(el, 2)}
          className="absolute bottom-20 left-1/3 w-48 h-48 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #0025ba 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            ref={(el) => addParticleRef(el, i)}
            className="absolute w-1 h-1 bg-pink-500 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl py-20 mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Title and Info */}
        <div className="text-white space-y-8">
          <div ref={titleRef} className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="block text-white">Let's</span>
              <span
                className="block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent"
                style={{
                  backgroundSize: "200% 200%",
                  animation: "gradientShift 3s ease-in-out infinite",
                }}>
                Make It Real
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-md leading-relaxed">
              Ready to bring your ideas to life? Let's create something amazing
              together.
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="relative">
          <div className="contact-glow absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-600/10 rounded-3xl blur-xl opacity-0" />

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="relative bg-[#1c1c21] backdrop-blur-sm rounded-3xl p-8 border border-gray-800 space-y-6"
            style={{
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
            }}>
            {/* Success/Error Message */}
            {submitMessage && (
              <div
                className={`p-4 rounded-xl text-center font-medium ${
                  submitted
                    ? "bg-green-500/10 border border-green-500/30 text-green-400"
                    : "bg-red-500/10 border border-red-500/30 text-red-400"
                }`}>
                {submitMessage}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-white font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-[#0e0e10] border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-300 disabled:opacity-50"
                placeholder="Enter your name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-white font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-[#0e0e10] border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-300 disabled:opacity-50"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-white font-medium">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-[#0e0e10] border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-300 resize-none disabled:opacity-50"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              disabled={isSubmitting}
              className="bg-gradient-to-r from-pink-500 to-purple-600 w-full cursor-pointer px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group transition-all duration-300">
              <div className="relative overflow-hidden h-6">
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : submitted ? (
                  <span className="block text-center">Message sent! ✅</span>
                ) : (
                  <>
                    <span className="block group-hover:-translate-y-6 transition-transform duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                      Send message
                    </span>
                    <span className="absolute top-6 left-0 right-0 group-hover:top-0 transition-all duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] text-center">
                      Send message
                    </span>
                  </>
                )}
              </div>
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactPage;
