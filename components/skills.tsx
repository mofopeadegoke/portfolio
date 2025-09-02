"use client";

import { motion } from "framer-motion";
import { Code, Layout, Database, Terminal, Smartphone } from "lucide-react";
import "./skills.css";

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      icon: <Layout className="h-8 w-8 text-emerald-400" />,
      items: [
        { name: "HTML/CSS", level: 95 },
        { name: "React", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "JavaScript", level: 80 },
        { name: "Next.js", level: 80 },
        { name: "Three.js", level: 80 },
        { name: "MUI", level: 80 },
      ],
    },
    {
      category: "Backend",
      icon: <Database className="h-8 w-8 text-emerald-400" />,
      items: [
        { name: "Python", level: 80 },
        { name: "Django", level: 85 },
        { name: "PHP", level: 85 },
        { name: "Node.js", level: 65 },
        { name: "MongoDB", level: 65 },
        { name: "SQL", level: 75 },
      ],
    },
    {
      category: "Tools",
      icon: <Terminal className="h-8 w-8 text-emerald-400" />,
      items: [
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 90 },
      ],
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
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-black to-emerald-950/20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development
            world. Here's an overview of my technical skills and expertise.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              variants={item}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-emerald-500/50 transition-all"
            >
              <div className="flex items-center mb-6">
                {skillGroup.icon}
                <h3 className="text-xl font-semibold ml-3">
                  {skillGroup.category}
                </h3>
              </div>
              <div className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-emerald-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="bg-gradient-to-r from-emerald-600 to-emerald-400 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
            <div className="flex items-center mb-4">
              <Code className="h-6 w-6 text-emerald-400 mr-3" />
              <h3 className="text-xl font-semibold">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "JavaScript",
                "TypeScript",
                "HTML",
                "CSS",
                "SQL",
                "Python",
                "C",
                "C++",
                "Java",
                "OpenSCAD",
              ].map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
            <div className="flex items-center mb-4">
              <Smartphone className="h-6 w-6 text-emerald-400 mr-3" />
              <h3 className="text-xl font-semibold">Other Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Responsive Design",
                "UI/UX",
                "SEO",
                "Performance Optimization",
                "Accessibility",
                "Extension Development",
                "3D Printing",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
