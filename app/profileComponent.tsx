'use client'

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, Code, Briefcase, User, MessageSquare, ExternalLink, Twitter, Youtube, BookOpen, Laptop, Instagram, MailCheck } from 'lucide-react';
import dataExperience from './assets/data/Experience';
import dataProjects from './assets/data/Project';
import Image, { StaticImageData } from 'next/image';
import FotoProfil from './assets/img/FotoProfil.jpg'
import dataSkills from './assets/data/Skills';

interface Skill {
    name: string;
    icon: string | StaticImageData
}

interface Tech {
    name: string;
    icon: StaticImageData;
}

interface Project {
    id: number;
    title: string;
    category: string;
    desc: string;
    image: StaticImageData;
    tech: Tech[];
    link: string | null;
}

interface Experience {
    role: string;
    company: string;
    period: string;
    type: string;
    desc: string;
    logo: StaticImageData;
}

export default function ProfileWebsite() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = ['home', 'about', 'experience', 'projects', 'contact'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const projects: Project[] = dataProjects

    const experiences: Experience[] = dataExperience

    const skills: Skill[] = dataSkills


    return (
        <div className="bg-gray-50 text-gray-900 min-h-screen w-full">
            {/* Navigation */}
            <nav className={`fixed w-full z-100 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
                }`}>
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo & Name Section */}
                        <div className="flex items-center gap-3">
                            {/* Foto Profil Bulat */}
                            <Image
                                src={FotoProfil}
                                alt="Binsar Damanik"
                                className="w-10 h-10 rounded-full object-cover border-2 border-indigo-600"
                            />
                            {/* Nama */}
                            <div className="text-xl font-bold text-indigo-600">
                                Binsar Damanik
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className={`capitalize transition-colors font-medium ${activeSection === item
                                        ? 'text-indigo-600'
                                        : 'text-gray-600 hover:text-indigo-600'
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-600"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden mt-4 pb-4 space-y-3">
                            {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className="block w-full text-left capitalize py-2 text-gray-600 hover:text-indigo-600"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </nav>

            {/* Social Media Icons */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
                <a
                    href="https://www.linkedin.com/in/binsardamanik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-indigo-600 text-gray-700 hover:text-white p-3 rounded-lg shadow-md transition-all duration-300 hover:scale-110"
                >
                    <Linkedin size={20} />
                </a>
                <a
                    href="https://github.com/binsarnecessary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-indigo-600 text-gray-700 hover:text-white p-3 rounded-lg shadow-md transition-all duration-300 hover:scale-110"
                >
                    <Github size={20} />
                </a>
                <a
                    href="https://www.instagram.com/binsarnecessary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-indigo-600 text-gray-700 hover:text-white p-3 rounded-lg shadow-md transition-all duration-300 hover:scale-110"
                >
                    <Instagram size={20} />
                </a>
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=binsar16febuary@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-indigo-600 text-gray-700 hover:text-white p-3 rounded-lg shadow-md transition-all duration-300 hover:scale-110"
                >
                    <Mail size={20} />
                </a>
            </div>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 bg-linear-to-br from-indigo-50 via-white to-purple-50">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        {/* Left Side - Text Content */}
                        <div className="flex-1 text-left animate-fade-in">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-700">
                                Hi Everyone!
                            </h2>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-gray-800">
                                My name is <span className="text-indigo-600">Binsar Pandapotan Damanik</span>
                            </h1>
                            <p className="text-xl md:text-2xl font-semibold text-indigo-600 mb-6">
                                Im a Full Stack Web Developer
                            </p>
                            <p className="text-gray-600 mb-8 max-w-xl leading-relaxed">
                                After completing my Informatics studies at the university, I continued developing my skills in software development,
                                focusing on modern web technologies.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-md"
                                >
                                    Get In Touch
                                </button>
                                <button
                                    onClick={() => scrollToSection('projects')}
                                    className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-lg font-semibold transition-colors"
                                >
                                    View Work
                                </button>
                            </div>
                        </div>




                        {/* Right Side - Profile Photo */}
                        <div className="shrink-0 animate-fade-in animation-delay-200">
                            <Image
                                src={FotoProfil}
                                alt="Binsar Damanik"
                                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-white"
                            />
                            {/* <div className="w-64 h-64 md:w-80 md:h-80 bg-linear-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-6xl md:text-7xl font-bold text-white shadow-2xl">
                                BD
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-center mb-8">
                        <User className="text-indigo-600 mr-3" size={28} />
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">About Me</h2>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            I am a Web Developer with a solid foundation in frontend and backend development.
                            I enjoy working in collaborative environments, tackling challenges with enthusiasm,
                            and continuously expanding my knowledge to deliver better results.
                        </p>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-20 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center mb-8">
                        <Briefcase className="text-indigo-600 mr-3" size={28} />
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Experience</h2>
                    </div>
                    <div className="space-y-6">
                        {experiences.map((exp, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4">
                                    <Image src={exp.logo} alt={exp.company} className="w-14 h-14 rounded-lg shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
                                            <div>
                                                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full mb-2">
                                                    {exp.type}
                                                </span>
                                                <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
                                            </div>
                                            <span className="text-gray-500 text-sm whitespace-nowrap">{exp.period}</span>
                                        </div>
                                        <p className="text-indigo-600 font-semibold mb-1">{exp.role}</p>
                                        <p className="text-gray-600">{exp.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            {/* Projects Section */}
            <section id="projects" className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center mb-8">
                        <Laptop className="text-indigo-600 mr-3" size={28} />
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Projects</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="relative h-48 overflow-hidden bg-gray-100">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                                    <span className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-700">
                                        {project.category}
                                    </span>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-indigo-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.slice(0, 3).map((tech, i) => (
                                            <span key={i} className="flex items-center gap-1 text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                                                <Image src={tech.icon} alt={tech.name} className="w-4 h-4 object-contain" />
                                                {tech.name}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                                                +{project.tech.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center mb-8">
                        <Code className="text-indigo-600 mr-3" size={28} />
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Skills</h2>
                    </div>

                    <p className="text-gray-600 mb-12 max-w-2xl">
                        I work with various modern technologies for web development, both frontend and backend.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
                        {dataSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 p-6 flex flex-col items-center justify-center"
                            >
                                {typeof skill.icon === 'string' ? (
                                    <Image
                                        src={skill.icon}
                                        alt={skill.name}
                                        className="w-12 h-12 mb-3 transition-transform duration-300 group-hover:scale-110"
                                    />
                                ) : (
                                    <Image
                                        src={skill.icon}
                                        alt={skill.name}
                                        className="w-12 h-12 mb-3 transition-transform duration-300 group-hover:scale-110"
                                    />
                                )}
                                <p className="text-sm font-semibold text-gray-700">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Project Modal */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
                    <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <h2 className="text-2xl font-bold text-gray-800">{selectedProject.title}</h2>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="text-gray-400 hover:text-gray-600 shrink-0"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <Image
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-64 object-cover rounded-lg mb-4"
                            />

                            {selectedProject.link ? (
                                <div className="mb-4">
                                    <p className="text-sm font-semibold text-gray-700 mb-1">Link Website:</p>
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-indigo-600 hover:text-indigo-700 flex items-center gap-1 break-all"
                                    >
                                        {selectedProject.link} <ExternalLink size={16} className="shrink-0" />
                                    </a>
                                </div>
                            ) : (
                                <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                                    <p className="text-sm font-semibold text-yellow-800">SORRY NO WEBSITE LINK</p>
                                </div>
                            )}

                            <div className="mb-4">
                                <p className="text-sm font-semibold text-gray-700 mb-2">Description:</p>
                                <p className="text-gray-600 leading-relaxed">{selectedProject.desc}</p>
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-gray-700 mb-3">Technology Stack:</p>
                                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                                    {selectedProject.tech.map((tech, i) => (
                                        <div key={i} className="flex flex-col items-center text-center">
                                            <div className="text-4xl mb-2">
                                                <Image src={tech.icon} alt={tech.name} />

                                            </div>
                                            <p className="text-xs text-gray-600">{tech.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Contact Section */}
            <section id="contact" className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex items-center justify-center mb-8">
                        <MessageSquare className="text-indigo-600 mr-3" size={28} />
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Get In Touch</h2>
                    </div>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Im always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                    <div className="flex justify-center flex-wrap gap-4 mb-8">
                        <a href="https://github.com/binsarnecessary" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                            <Github className="text-indigo-600" size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/binsardamanik" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                            <Linkedin className="text-indigo-600" size={24} />
                        </a>
                        <a href="https://www.instagram.com/binsarnecessary" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                            <Instagram className="text-indigo-600" size={24} />
                        </a>
                    </div>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=binsar16febuary@gmail.com"
                        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-md"
                    >
                        Send Message
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-gray-200 bg-white">
                <div className="max-w-6xl mx-auto text-center text-gray-500">
                    <p className='text-xs'>&copy; 2024 Binsar Damanik. Built with Next.js & Tailwind CSS</p>
                </div>
            </footer>

            <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          animation-fill-mode: backwards;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
          animation-fill-mode: backwards;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          animation-fill-mode: backwards;
        }
        
        html {
          scroll-behavior: smooth;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </div>
    );
}