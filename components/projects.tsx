"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github, Maximize2, X } from "lucide-react"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform built with Next.js and Tailwind CSS. Features include product listings, cart functionality, user authentication, and payment processing.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "React", "Tailwind CSS", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      details:
        "This project was built to demonstrate my ability to create complex, interactive web applications. It includes features like product filtering, search functionality, user accounts, and a complete checkout process with Stripe integration.",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A sleek, animated portfolio website built with React and Framer Motion. Features smooth animations, responsive design, and a contact form.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Framer Motion", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      details:
        "This portfolio website showcases my skills and projects in an interactive and visually appealing way. It features smooth page transitions, animated UI elements, and a fully responsive design that works on all devices.",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A drag-and-drop task management application inspired by Trello. Built with React and includes features like task boards, lists, and cards.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Redux", "DnD", "Firebase"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      details:
        "This task management app allows users to create boards, lists, and cards to organize their tasks. It includes features like drag-and-drop functionality, user authentication, and real-time updates using Firebase.",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description:
        "A weather dashboard that displays current weather conditions and forecasts for any location. Built with React and uses the OpenWeather API.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "API", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      details:
        "This weather dashboard provides users with current weather conditions and a 5-day forecast for any location. It includes features like location search, temperature charts, and weather maps.",
    },
    {
      id: 5,
      title: "Recipe Finder",
      description:
        "A recipe finder application that allows users to search for recipes based on ingredients, dietary restrictions, and meal types.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "API", "Styled Components"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      details:
        "This recipe finder app helps users discover new recipes based on their preferences. It includes features like ingredient search, dietary filters, and the ability to save favorite recipes.",
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description:
        "A fitness tracking application that allows users to log workouts, track progress, and set fitness goals.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Chart.js", "Firebase"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      details:
        "This fitness tracker helps users monitor their workout progress and achieve their fitness goals. It includes features like workout logging, progress charts, and goal setting.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project reflects my passion for creating intuitive, responsive,
            and visually appealing web applications.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 hover:border-emerald-500/50 transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-emerald-500/20 rounded-full text-emerald-400 hover:bg-emerald-500/40 transition-colors"
                        >
                          <ExternalLink size={18} />
                          <span className="sr-only">Live Demo</span>
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-emerald-500/20 rounded-full text-emerald-400 hover:bg-emerald-500/40 transition-colors"
                        >
                          <Github size={18} />
                          <span className="sr-only">GitHub Repository</span>
                        </a>
                      </div>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="p-2 bg-emerald-500/20 rounded-full text-emerald-400 hover:bg-emerald-500/40 transition-colors"
                      >
                        <Maximize2 size={18} />
                        <span className="sr-only">View Details</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gray-900 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto"
          >
            <div className="relative h-64 sm:h-80 md:h-96">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 mb-6">{selectedProject.details || selectedProject.description}</p>
              <div className="flex space-x-4">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors flex items-center"
                >
                  <ExternalLink size={18} className="mr-2" />
                  Live Demo
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-emerald-500 text-emerald-400 rounded-md hover:bg-emerald-500/10 transition-colors flex items-center"
                >
                  <Github size={18} className="mr-2" />
                  View Code
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}

