"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import cultureCapsule from "@/public/culCap.png";
import fufuImg from "@/public/fufu.png";
import organickImg from "@/public/organick.png";
import { ExternalLink, Github, Maximize2, X } from "lucide-react";
import "./project.css"; // Import your CSS file for custom styles

type Project = {
  id: number;
  title: string;
  description: string;
  image: any;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  details: string;
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Culture Capsule",
      description:
        "Culture Capsule is a digital platform designed to document and share the rich cultural heritage of Northern Cyprus. Built with Next.js and Tailwind CSS.",
      image: cultureCapsule,
      tags: ["Vite", "React", "Tailwind CSS", "Shadcn UI", "TypeScript"],
      liveUrl: "https://culturecapsule.net/",
      githubUrl: "https://github.com/callmestiles/culture-capsule-frontend-fix",
      details:
        "This project was built to demonstrate my ability to create complex, interactive web applications. It includes features like product filtering, search functionality, user accounts and authentication, and a responsive design that works on all devices. The project was built using Next.js, Tailwind CSS, and Shadcn UI.",
    },
    {
      id: 2,
      title: "Fufu App",
      description:
        "The home page of job board application that allows users to search for jobs, save favorites, and apply directly through the platform. Built with React",
      image: fufuImg,
      tags: ["React", "Vite", "AOS"],
      liveUrl: "https://www.tryfufu.com/",
      githubUrl: "https://github.com/IndigoSoftwares21/fufu_app_waitlist",
      details:
        "This portfolio website showcases my skills and projects in an interactive and visually appealing way. It features smooth page transitions, animated UI elements, and a fully responsive design that works on all devices.",
    },
    {
      id: 3,
      title: "Organick",
      description:
        "Organick is a full-featured web application that connects local farmers directly with consumers, promoting access to fresh, organic produce while supporting sustainable agriculture.",
      image: organickImg,
      tags: ["React", "Node.js", "CSS", "JavaScript"],
      liveUrl: "https://tech-space-project-organik.vercel.app/",
      githubUrl: "https://github.com/mofopeadegoke/TechSpace-Project-Organik",
      details:
        "Organick is a full-featured web application that connects local farmers directly with consumers, promoting access to fresh, organic produce while supporting sustainable agriculture. It empowers farmers to list their products and customers to browse, order, and purchase goods directly from the source. Organick aims to bridge the gap between local producers and health-conscious consumers. By cutting out the middleman, the platform encourages fair pricing for farmers and fresh produce for customers, fostering a more sustainable and community-driven food ecosystem.",
    },
    {
      id: 4,
      title: "Attendance System",
      description:
        "This Attendance System is a secure and efficient web application designed to allow users (such as employees, students, or team members) to sign in only during designated time slots on specific days of the week.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Node.js", "CSS", "JavaScript"],
      liveUrl: "https://prayer-tower-attendance-system.vercel.app/",
      githubUrl:
        "https://github.com/mofopeadegoke/Prayer-Tower-Attendance-System",
      details:
        "This Attendance System is a secure and efficient web application designed to allow users (such as employees, students, or team members) to sign in only during designated time slots on specific days of the week. It ensures accurate attendance tracking while enforcing schedule compliance. This app is ideal for schools, remote teams, or workplaces that require strict attendance timing without manual tracking. It prevents late or early sign-ins and helps automate reporting while maintaining integrity.",
    },
    {
      id: 5,
      title: "Inscribe",
      description:
        "Inscribe is a powerful and lightweight browser extension that allows users to take quick, context-aware notes while browsing the web. Designed for productivity enthusiasts, students, and researchers, Inscribe helps users capture ideas, summarize content, and organize information without leaving the current tab.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["HTML", "JavaScript", "CSS", "Extension APIs"],
      liveUrl:
        "https://microsoftedge.microsoft.com/addons/detail/inscribe/gcobiohplbeljjficipnjpdbpkldkiih",
      githubUrl: "https://github.com/mofopeadegoke",
      details:
        "Inscribe is a powerful and lightweight browser extension that allows users to take quick, context-aware notes while browsing the web. Designed for productivity enthusiasts, students, and researchers, Inscribe helps users capture ideas, summarize content, and organize information without leaving the current tab. Inscribe enhances online productivity by reducing context switching between browser tabs and external note apps. It’s ideal for learners, content curators, and knowledge workers who need to capture and revisit thoughts quickly while browsing",
    },
    {
      id: 6,
      title: "Modi-Fier",
      description:
        "Modi-Fier is a smart and customizable browser extension that allows users to modify, personalize, and enhance webpages in real time. It's designed for developers, designers, and power users who want more control over how they view and interact with websites.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["HTML", "JavaScript", "CSS", "Extension APIs"],
      liveUrl:
        "https://microsoftedge.microsoft.com/addons/detail/modifier/fbepgnjhifelpmpndoohipnmnmooohhl",
      githubUrl: "https://github.com/mofopeadegoke/ModiFier1.1",
      details:
        "Modi-Fier makes the web more personal and flexible, empowering users to take control of how they consume content. Whether for serious design work or playful experimentation, it brings a hands-on approach to web customization.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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
            Here are some of my recent projects. Each project reflects my
            passion for creating intuitive, responsive, and visually appealing
            web applications.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 projectList"
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
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs"
                    >
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
              <h3 className="text-2xl font-bold mb-2">
                {selectedProject.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                {selectedProject.details || selectedProject.description}
              </p>
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
  );
}
