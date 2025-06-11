import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navLinks } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const PortfolioFooter = () => {
  const footerRef = useRef();
  const waveRef = useRef();
  const logoRef = useRef();
  const linksRef = useRef();
  const socialRef = useRef();
  const bottomRef = useRef();
  const particlesRef = useRef([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    if (window.innerWidth < 768) return;
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    const ctx = gsap.context(() => {
      // Wave animation
      gsap.to(waveRef.current, {
        backgroundPositionX: "100%",
        duration: 20,
        ease: "none",
        repeat: -1,
      });

      // Floating particles
      particlesRef.current.forEach((particle, index) => {
        if (particle) {
          gsap.to(particle, {
            y: -50,
            duration: 3 + (index % 4),
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.3,
          });

          gsap.to(particle, {
            x: 20,
            duration: 4 + (index % 3),
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.2,
          });
        }
      });

      // Scroll-triggered entrance animations
      ScrollTrigger.create({
        trigger: footerRef.current,
        start: "top 90%",
        onEnter: () => {
          // Logo animation
          gsap.from(logoRef.current, {
            scale: 0,
            rotation: 180,
            duration: 1,
            ease: "back.out(1.7)",
          });

          // Social icons animation
          gsap.from(socialRef.current, {
            scale: 0,
            rotation: 360,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
            delay: 0.6,
          });

          // Bottom section animation
          gsap.from(bottomRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.9,
          });
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const addParticleRef = (el, index) => {
    if (el) particlesRef.current[index] = el;
  };

  const scrollToTop = () => {
    gsap.to(window, {
      scrollTo: { y: 0 },
      duration: 1.5,
      ease: "power2.inOut",
    });
  };

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#0d1224]  text-white overflow-hidden">
      {/* Animated Wave Background */}
      <div
        ref={waveRef}
        className="absolute top-0 left-0 w-full h-20 opacity-20"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Logo & Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div
              ref={logoRef}
              className="flex items-center space-x-4 cursor-pointer"
              onClick={scrollToTop}>
              <div className="w-32 h-32 rounded-full flex items-center justify-center text-2xl font-bold transform hover:scale-110 transition-transform duration-300">
                <img src="/images/logo.png" alt="footer logo" />
              </div>
              <div>
                <h2 className="text-2xl logo ">Giannis Giotis</h2>
                <p className="text-gray-400">Front End & App Developer</p>
              </div>
            </div>

            <p className="text-gray-300 max-w-md leading-relaxed">
              Crafting digital experiences with passion and precision. Let's
              build something extraordinary together.
            </p>

            {/* Live Status */}
            <div className="flex items-center space-x-3 bg-[#1c1c21] rounded-full px-4 py-2 w-fit">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Available for work</span>
            </div>

            {/* Current Time */}
            <div className="text-sm text-gray-400">
              🌍 Greece • {currentTime.toLocaleTimeString()}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white ">
              Quick Links
            </h3>
            <nav className="space-y-3 cursor-pointer">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  className="block text-gray-400 hover:text-pink-500 transition-colors duration-300 hover:translate-x-2 transform"
                  onMouseEnter={(e) => {
                    gsap.to(e.target, {
                      x: 8,
                      color: "#f626af",
                      duration: 0.1,
                      ease: "power2.out",
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.target, {
                      x: 0,
                      color: "#9ca3af",
                      duration: 0.1,
                      ease: "power2.out",
                    });
                  }}>
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Let's Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-4" ref={socialRef}>
                <a href="https://www.instagram.com/g.giwths/" target="_blank">
                  <div className="social-button">
                    <button className="relative w-12 h-12 rounded-full group">
                      <div className="floater w-full h-full absolute top-0 left-0 bg-[#d62976] rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                      <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-[#d62976] rounded-full">
                        <svg
                          fill="none"
                          viewBox="0 0 22 22"
                          height="22"
                          width="22"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M21.94 6.46809C21.8884 5.2991 21.6994 4.49551 21.4285 3.79911C21.1492 3.05994 20.7194 2.39818 20.1564 1.84802C19.6062 1.28932 18.9401 0.855163 18.2094 0.580194C17.5091 0.309437 16.7096 0.120336 15.5407 0.0688497C14.363 0.0128932 13.9891 0 11.0022 0C8.01527 0 7.64141 0.0128932 6.46808 0.064466C5.29914 0.116039 4.49551 0.305225 3.79932 0.57581C3.05994 0.855163 2.39818 1.28494 1.84802 1.84802C1.28932 2.39813 0.855377 3.06428 0.580193 3.7949C0.309437 4.49551 0.120379 5.2948 0.0688496 6.4637C0.0129362 7.64141 0 8.01527 0 11.0022C0 13.9891 0.0129362 14.363 0.0644659 15.5363C0.116039 16.7053 0.305225 17.5089 0.576025 18.2053C0.855377 18.9444 1.28932 19.6062 1.84802 20.1564C2.39818 20.7151 3.06432 21.1492 3.79494 21.4242C4.49547 21.6949 5.29476 21.884 6.46391 21.9355C7.63702 21.9873 8.0111 22 10.998 22C13.9849 22 14.3588 21.9873 15.5321 21.9355C16.7011 21.884 17.5047 21.695 18.2009 21.4242C18.9321 21.1415 19.5961 20.7091 20.1505 20.1548C20.7048 19.6005 21.1373 18.9365 21.42 18.2053C21.6906 17.5047 21.8798 16.7052 21.9314 15.5363C21.9829 14.363 21.9958 13.9891 21.9958 11.0022C21.9958 8.01527 21.9914 7.64137 21.94 6.46809ZM19.9588 15.4503C19.9114 16.5248 19.731 17.105 19.5805 17.4918C19.2109 18.4502 18.4502 19.2109 17.4918 19.5805C17.105 19.731 16.5206 19.9114 15.4503 19.9586C14.29 20.0103 13.942 20.023 11.0066 20.023C8.07118 20.023 7.71881 20.0103 6.56259 19.9586C5.48816 19.9114 4.90796 19.731 4.52117 19.5805C4.04425 19.4043 3.61014 19.1249 3.25772 18.7596C2.89242 18.4029 2.61306 17.9731 2.43677 17.4961C2.28635 17.1094 2.10589 16.5248 2.05874 15.4547C2.007 14.2943 1.99428 13.9461 1.99428 11.0107C1.99428 8.07535 2.007 7.72298 2.05874 6.56698C2.10589 5.49254 2.28635 4.91235 2.43677 4.52555C2.61306 4.04842 2.89241 3.61439 3.26211 3.26189C3.61865 2.89658 4.04842 2.61723 4.52555 2.44115C4.91235 2.29073 5.49692 2.11023 6.56697 2.06291C7.72736 2.01134 8.07556 1.99844 11.0107 1.99844C13.9505 1.99844 14.2985 2.01134 15.4547 2.06291C16.5292 2.11027 17.1093 2.29069 17.4961 2.44111C17.9731 2.61723 18.4072 2.89658 18.7596 3.26189C19.1249 3.61865 19.4042 4.04842 19.5805 4.52555C19.731 4.91235 19.9114 5.49671 19.9587 6.56698C20.0103 7.72736 20.0232 8.07535 20.0232 11.0107C20.0232 13.9461 20.0104 14.29 19.9588 15.4503Z"
                            className="group-hover:fill-white fill-white duration-300"></path>
                          <path
                            d="M11.0026 5.35054C7.88252 5.35054 5.35107 7.88182 5.35107 11.0021C5.35107 14.1223 7.88252 16.6536 11.0026 16.6536C14.1227 16.6536 16.6541 14.1223 16.6541 11.0021C16.6541 7.88182 14.1227 5.35054 11.0026 5.35054ZM11.0026 14.668C8.97844 14.668 7.33654 13.0264 7.33654 11.0021C7.33654 8.97774 8.97844 7.33609 11.0025 7.33609C13.0269 7.33609 14.6685 8.97774 14.6685 11.0021C14.6685 13.0264 13.0268 14.668 11.0026 14.668ZM18.1971 5.12706C18.1971 5.85569 17.6063 6.44646 16.8775 6.44646C16.1489 6.44646 15.5581 5.85569 15.5581 5.12706C15.5581 4.39833 16.1489 3.80774 16.8775 3.80774C17.6063 3.80774 18.1971 4.39829 18.1971 5.12706Z"
                            className="group-hover:fill-white fill-white duration-300"></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/giannisgiotis"
                  target="_blank">
                  <div className="social-button">
                    <button className="relative w-12 h-12 rounded-full group">
                      <div className="floater w-full h-full absolute top-0 left-0 bg-[#0072b1] rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                      <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-[#0072b1] rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="22"
                          width="22"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="group-hover:fill-white fill-white duration-300">
                          <path d="M4.98 3.5C4.98 4.6 4.09 5.5 3 5.5S1 4.6 1 3.5 1.91 1.5 3 1.5 4.98 2.4 4.98 3.5zM.5 22h5V7h-5v15zM8.5 22h5v-8.3c0-2 2.5-2.2 2.5 0V22h5v-9c0-5.8-6.2-5.6-7.5-2.7V7h-5v15z" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </a>
                <a href="https://discord.com/users/xarxadeli" target="_blank">
                
                  <div className="social-button">
                    <button className="relative w-12 h-12 rounded-full group">
                      <div className="floater w-full h-full absolute top-0 left-0 bg-[#8c9eff] rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                      <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-[#8c9eff] rounded-full">
                        <svg
                          viewBox="0 0 24 24"
                          height="22"
                          width="22"
                          fill="white"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.12.099.246.1981.372.2924a.077.077 0 01-.006.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1062c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.0822.0822 0 00.0307-.0554c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.4189 0 1.3333-.9555 2.419-2.1569 2.419zm7.9748 0c-1.1824 0-2.1568-1.0857-2.1568-2.419 0-1.3332.9554-2.4189 2.1568-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.4189 0 1.3333-.946 2.419-2.1568 2.419z" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </a>
                <a href="https://github.com/JohnFireSword" target="_blank">
                  <div className="social-button">
                    <button className="relative w-12 h-12 rounded-full group">
                      <div className="floater w-full h-full absolute top-0 left-0 bg-black-200 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                      <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-black-200  rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="22"
                          width="22"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="group-hover:fill-white fill-white duration-300">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.01-1.05-.016-2.06-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.932 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.403c1.02.005 2.045.138 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.654 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.922.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8 space-y-3">
              <h4 className="text-sm font-semibold text-gray-300">
                Stay Updated
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-[#1c1c21] border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none text-sm"
                />
                <button
                  className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-r-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
                  onMouseEnter={(e) => {
                    gsap.to(e.target, {
                      scale: 1.05,
                      duration: 0.2,
                      ease: "power2.out",
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.target, {
                      scale: 1,
                      duration: 0.2,
                      ease: "power2.out",
                    });
                  }}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

        {/* Bottom Section */}
        <div
          ref={bottomRef}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2025 Giannis Giotis. All rights reserved. Made with ❤️ and lots of
            ☕
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <a href="#">
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-gray-400 hover:text-pink-500 transition-colors duration-300 group">
                <span>Back to Top</span>
                <div className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-pink-500 transition-colors duration-300">
                  ↑
                </div>
              </button>
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-600 hover:text-pink-500 transition-colors duration-300 cursor-default">
            🚀 Built with React, GSAP, and endless cups of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
