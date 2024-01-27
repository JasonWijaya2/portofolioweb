'use client'

import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { easeIn, motion } from "framer-motion";
import { useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";

const Navbar = () => {
    const [showMenu,setShowMenu] = useState(false);
    const ref = useRef<string | any>("")
    const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        setShowMenu(false);
        const href = event.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
        const links = document.querySelectorAll(".nav-link");
        links.forEach((link) => {
          link.classList.remove("active");
        });
        event.currentTarget.classList.add("active");
      };

      function handleClick(event: React.MouseEvent<HTMLDivElement>) {
        if (ref.current && ref.current.contains(event.target as Node)) {
          setShowMenu(false);
        }
      }
    
    return(
        <div className="w-full shadow-navbarShadow h-20 lg:h- [12vh] sticky top-0 z-50 bg-bodyColor px-4">
            <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
                <div>
                    <Image src={logo} alt="logo"/>
                </div>
                <div className="hidden mdl:inline-flex items-center gap-7">
                    <ul className="flex text-[13px] gap-7">
                        <Link 
                        href="#home"
                        onClick={handleScroll}
                        className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                        >
                            <motion.li
                              initial={{ y: -10, opacity: 0 }} 
                              animate={{ y: 0, opacity: 1 }} 
                              transition={{ duration: 0.1, delay: 0.1 }}>
                                Home
                            </motion.li>
                        </Link>
                        <Link 
                        href="#about"
                        onClick={handleScroll}
                        className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                        >
                            <motion.li
                              initial={{ y: -10, opacity: 0 }} 
                              animate={{ y: 0, opacity: 1 }} 
                              transition={{ duration: 0.1, delay: 0.2 }}>
                                About
                            </motion.li>
                        </Link>
                        <Link 
                        href="#experience"
                        onClick={handleScroll}
                        className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                        >
                            <motion.li
                             initial={{ y: -10, opacity: 0 }} 
                             animate={{ y: 0, opacity: 1 }} 
                             transition={{ duration: 0.1, delay: 0.3 }}>
                                Experience
                            </motion.li>
                        </Link>
                        <Link 
                        href="#project"
                        onClick={handleScroll}
                        className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                        >
                            <motion.li
                             initial={{ y: -10, opacity: 0 }} 
                             animate={{ y: 0, opacity: 1 }} 
                             transition={{ duration: 0.1, delay: 0.4 }}>
                                Project
                            </motion.li>
                        </Link>
                        <Link 
                        href="#contact"
                        onClick={handleScroll}
                        className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                        >
                            <motion.li
                             initial={{ y: -10, opacity: 0 }} 
                             animate={{ y: 0, opacity: 1 }} 
                             transition={{ duration: 0.1, delay: 0.5 }}>
                                Contact
                            </motion.li>
                        </Link>
                    </ul>
                    <a href="https://bitly.ws/3aXYT" target="_blank">
                        <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
                        >
                            Resume
                        </motion.button>
                    </a>
                </div>
                {/* Small Icon Section */}
                <div 
                  onClick={() => setShowMenu(true)}
                  className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
                </div>
                {
                    showMenu && (
                        <div
                          ref={(node) => (ref.current=node)}
                          onClick={handleClick}
                          className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end">
                            <motion.div
                              initial={{ x: 20, opacity: 0}}
                              animate={{ x: 0, opacity: 1}}
                              transition={{ duration: 0.1}}
                              className="w-[80%] h-full overflow-y-scroll scrollbarhide bg-[#112240] flex flex-col items-center px-4 py-10 relative">
                                <MdOutlineClose 
                                  onClick={() => setShowMenu(false)}
                                  className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4   "/>
                                  <div>
                                    <ul className="flex flex-col text-base gap-7">
                                        <Link 
                                        href="#home"
                                        onClick={handleScroll}
                                        className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                                        >
                                            <motion.li
                                            initial={{ y: 20, opacity: 0 }} 
                                            animate={{ y: 0, opacity: 1 }} 
                                            transition={{ duration: 0.2, delay: 0.1, ease:"easeIn" }}>
                                                Home
                                            </motion.li>
                                        </Link>
                                        <Link 
                                        href="#about"
                                        onClick={handleScroll}
                                        className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                                        >
                                            <motion.li
                                            initial={{ y: 20, opacity: 0 }} 
                                            animate={{ y: 0, opacity: 1 }} 
                                            transition={{ duration: 0.2, delay: 0.2, ease:"easeIn" }}>
                                                About
                                            </motion.li>
                                        </Link>
                                        <Link 
                                        href="#experience"
                                        onClick={handleScroll}
                                        className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                                        >
                                            <motion.li
                                            initial={{ y: 20, opacity: 0 }} 
                                            animate={{ y: 0, opacity: 1 }} 
                                            transition={{ duration: 0.2, delay: 0.3, ease:"easeIn" }}>
                                                Experience
                                            </motion.li>
                                        </Link>
                                        <Link 
                                        href="#project"
                                        onClick={handleScroll}
                                        className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                                        >
                                            <motion.li
                                            initial={{ y: 20, opacity: 0 }} 
                                            animate={{ y: 0, opacity: 1 }} 
                                            transition={{ duration: 0.2, delay: 0.4, ease:"easeIn" }}>
                                                Project
                                            </motion.li>
                                        </Link>
                                        <Link 
                                        href="#contact"
                                        onClick={handleScroll}
                                        className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                                        >
                                            <motion.li
                                            initial={{ y: 20, opacity: 0 }} 
                                            animate={{ y: 0, opacity: 1 }} 
                                            transition={{ duration: 0.2, delay: 0.5, ease:"easeIn" }}>
                                                Contact
                                            </motion.li>
                                        </Link>
                                    </ul>
                                    <a href="https://bitly.ws/3aXYT" target="_blank" className="mdl:ml-4 mt-4">
                                        <motion.button
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.6, ease:"easeIn" }}
                                        className="w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300 mt-10"
                                        >
                                            Resume
                                        </motion.button>
                                    </a>
                                    <div className="flex gap-4 mt-10">
                                        <motion.a
                                          initial={{ y:20, opacity:0}}
                                          animate={{ y:0, opacity: 1}}
                                          transition={{ delay: 1, ease:"easeIn"}}
                                          href="https://github.com/JasonWijaya2" target="_blank">
                                            <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                                <TbBrandGithub />
                                            </span>
                                        </motion.a>
                                        <motion.a
                                          initial={{ y:20, opacity:0}}
                                          animate={{ y:0, opacity: 1}}
                                          transition={{ delay: 1, ease:"easeIn"}}
                                          href="https://www.instagram.com/kingjason4real/" target="_blank">
                                            <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                                <SlSocialInstagram />
                                            </span>
                                        </motion.a>
                                        <motion.a
                                          initial={{ y:20, opacity:0}}
                                          animate={{ y:0, opacity: 1}}
                                          transition={{ delay: 1, ease:"easeIn"}}
                                          href="https://www.linkedin.com/in/jason-wijaya4444" target="_blank">
                                            <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                                <SlSocialLinkedin />
                                            </span>
                                        </motion.a>
                                    </div>
                                    <motion.a 
                                      initial={{ opacity:0}}
                                      animate={{ opacity: 1}}
                                      transition={{ delay: 1.2, ease:"easeIn"}}
                                      className="text-sm w-72 tracking-widest text-textGreen text-center mt-10"
                                      href="mailto:jasonwijaya2@gmail.com">
                                        <p>jasonwijaya2@gmail.com</p>
                                    </motion.a>
                                  </div>
                              </motion.div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;