import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const containerRef = useRef();
  const titleRef = useRef();
  const formRef = useRef();
  const orbsRef = useRef([]);
  const particlesRef = useRef([]);
  const socialRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
            delay: index * 0.5
          });
          
          gsap.to(orb, {
            x: 20,
            duration: 4 + index,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.3
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
            delay: index * 0.2
          });
        }
      });

     


    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Success animation
    gsap.to(".submit-btn", {
      scale: 1.1,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    });
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const addOrbRef = (el, index) => {
    if (el) orbsRef.current[index] = el;
  };

  const addParticleRef = (el, index) => {
    if (el) particlesRef.current[index] = el;
  };

  return (
    <section 
      ref={containerRef} id='contact'
      className="min-h-screen bg-[#0d1224] relative overflow-hidden flex items-center justify-center py-20 px-4"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          ref={(el) => addOrbRef(el, 0)}
          className="absolute top-20 left-20 w-64 h-64 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #f626af 0%, transparent 70%)'
          }}
        />
        <div 
          ref={(el) => addOrbRef(el, 1)}
          className="absolute top-1/2 right-20 w-80 h-80 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #8228ec 0%, transparent 70%)'
          }}
        />
        <div 
          ref={(el) => addOrbRef(el, 2)}
          className="absolute bottom-20 left-1/3 w-48 h-48 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #0025ba 0%, transparent 70%)'
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

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Title and Info */}
        <div className="text-white space-y-8">
          <div ref={titleRef} className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="block text-white">Let's</span>
              <span 
                className="block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent"
                style={{
                  backgroundSize: '200% 200%',
                  animation: 'gradientShift 3s ease-in-out infinite'
                }}
              >
                Connect
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-md leading-relaxed">
              Ready to bring your ideas to life? Let's create something amazing together.
            </p>
          </div>

          {/* Social Links */}
          <div ref={socialRef} className="flex space-x-6">
            {[
              { name: 'Email', icon: '✉️', href: 'mailto:hello@example.com' },
              { name: 'LinkedIn', icon: '💼', href: '#' },
              { name: 'GitHub', icon: '🚀', href: '#' },
              { name: 'Twitter', icon: '🐦', href: '#' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-300 glow-effect"
                style={{
                  boxShadow: '0 0 20px rgba(246, 38, 175, 0.3)'
                }}
                onMouseEnter={(e) => {
                  gsap.to(e.target, {
                    scale: 1.2,
                    rotation: 360,
                    duration: 0.3,
                    ease: "power2.out"
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.target, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.3,
                    ease: "power2.out"
                  });
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="relative">
          <div className="contact-glow absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-600/10 rounded-3xl blur-xl opacity-0" />
          
          <div 
            ref={formRef}
            className="relative bg-[#1c1c21] backdrop-blur-sm rounded-3xl p-8 border border-gray-800 space-y-6"
            style={{
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
            }}
          >
            <div className="space-y-2">
              <label className="text-white font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-[#0e0e10] border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-300"
                placeholder="Enter your name"
                onFocus={(e) => {
                  gsap.to(e.target, {
                    scale: 1.02,
                    duration: 0.2,
                    ease: "power2.out"
                  });
                }}
                onBlur={(e) => {
                  gsap.to(e.target, {
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.out"
                  });
                }}
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
                className="w-full px-4 py-3 bg-[#0e0e10] border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-300"
                placeholder="your.email@example.com"
                onFocus={(e) => {
                  gsap.to(e.target, {
                    scale: 1.02,
                    duration: 0.2,
                    ease: "power2.out"
                  });
                }}
                onBlur={(e) => {
                  gsap.to(e.target, {
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.out"
                  });
                }}
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
                className="w-full px-4 py-3 bg-[#0e0e10] border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-300 resize-none"
                placeholder="Tell me about your project..."
                onFocus={(e) => {
                  gsap.to(e.target, {
                    scale: 1.02,
                    duration: 0.2,
                    ease: "power2.out"
                  });
                }}
                onBlur={(e) => {
                  gsap.to(e.target, {
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.out"
                  });
                }}
              />
            </div>

            <button
              type="button"
              disabled={isSubmitting}
              onClick={handleSubmit}
              className="submit-btn w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50"
              style={{
                boxShadow: '0 10px 30px rgba(246, 38, 175, 0.3)'
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  gsap.to(e.target, {
                    y: -2,
                    duration: 0.2,
                    ease: "power2.out"
                  });
                }
              }}
              onMouseLeave={(e) => {
                gsap.to(e.target, {
                  y: 0,
                  duration: 0.2,
                  ease: "power2.out"
                });
              }}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Sending...</span>
                </div>
              ) : (
                'Send Message 🚀'
              )}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default ContactPage;