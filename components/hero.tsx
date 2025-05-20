"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowDown } from "lucide-react";
import "./hero.css";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="container mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1 heroLeft"
        >
          {/* To be checked after, h2 used here might affect accessibility */}
          <h2 className="text-emerald-400 font-medium mb-2">Hello, I'm</h2>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            Daniel Adegoke
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Frontend Developer
          </h2>
          <p className="text-gray-400 max-w-lg mb-8">
            I craft responsive websites where technology meets creativity.
            Transforming ideas into digital experiences is my passion.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-md hover:from-emerald-500 hover:to-emerald-400 transition-all"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 border border-emerald-500 text-emerald-400 rounded-md hover:bg-emerald-500/10 transition-all"
            >
              Contact Me
            </Link>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/mofopeadegoke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mofopefoluwa-daniel-adegoke-abc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-500/30"
            id="heroImgContainer"
          >
            <Image
              src="/mofopeAvatarOpen.png"
              alt="Mofope Adegoke"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Link
          href="#skills"
          className="flex flex-col items-center text-gray-400 hover:text-emerald-400 transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="animate-bounce" size={20} />
        </Link>
      </motion.div>
    </section>
  );
}
