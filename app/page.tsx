"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Globe,
  ExternalLink,
  Download,
  Moon,
  Sun,
  ChevronDown,
  MapPin,
  Calendar,
  Code,
  Briefcase,
  GraduationCap,
  Star,
  Send,
  ArrowUp,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = [
    { name: "JavaScript", level: 75, category: "Backend" },
    { name: "Node.js", level: 75, category: "Backend" },
    { name: "Python", level: 68, category: "Backend" },
    { name: "Java", level: 60, category: "Backend" },
    { name: "Next.js", level: 65, category: "Backend" },
    { name: "FireBase", level: 50, category: "Database" },
    { name: "MongoDB", level: 60, category: "Database" },
     { name: "SupaBase", level: 70, category: "Database" },
    { name: "TypeScript", level: 72, category: "Frontend" },
     { name: "Tailwind", level: 79, category: "Frontend" },
    { name: "React", level: 80, category: "Frontend" },
    { name: "CSS", level: 75, category: "Frontend" },
     { name: "HTML5", level: 80, category: "Frontend" },
    { name: "ChatGPT", level: 100, category: "IAs" },
    { name: "Gemini", level: 90, category: "IAs" },
    { name: "N8N", level: 60, category: "IAs" },
    { name: "v0", level: 90, category: "IAs" },
    { name: "Canva AI", level: 75, category: "IAs" },
  ]

  const projects = [
      {
      title: "ChatBot IA",
      description: "Chat Bot com IA.",
      tech: ["Next.js", "TypeScript", "OpenRouter"],
      image: "/icone5.png",
      github: "https://github.com/RafaelGLacerda/chatbot",
      demo: "https://assistentechatbotv0.onrender.com/",
      featured: true,
    },
    {
      title: "Gestão de Negócios",
      description: "Website para Gestão de Negócios na parte Financeira",
      tech: ["Next.js", "TypeScript", "FireBase"],
      image: "/manage.png",
      demo: "https://bmanagement.vercel.app/",
      featured: true,
    },
    {
      title: "L5M",
      description: "Website para Armazenamento de Videos até 5 minutos.",
      tech: ["Next.js", "TypeScript"],
      image: "/L5M.png",
      github: "https://github.com/RafaelGLacerda/L5M", 
      demo: "https://l5m.onrender.com/",
      featured: false,
    }, 
    {
      title: "StoreManager",
      description: "Website para Gerenciamento de Lojas.",
      tech: ["Next.js", "TypeScript"],
      image: "/gestao.png",
      github: "https://github.com/RafaelGLacerda/StoreManager", 
      demo: "https://storemanager-ztwx.onrender.com/",
      featured: false,
    },
    {
      title: "Costs",
      description: "Website para Gerenciamento de Projetos.",
      tech: ["TypeScript, TailWind, Next.js"],
      image: "/costsnew.png",
      github: "https://github.com/RafaelGLacerda/Costs",
      demo: "https://costsservice.onrender.com/",
      featured: false,
    },
    {
      title: "VooEmbarcar",
      description: "Landing page que Permite ao Usuário Receber a Cotação de Voos.",
      tech: ["HTML5, CSS, JS"],
      image: "/voo.png",
      github: "https://github.com/RafaelGLacerda/vooembarcar",
      demo: "https://vooembarcar.netlify.app/",
      featured: false,
    },
    {
      title: "EasyBusiness",
      description: "Comércio Virtual que Conecta Pessoas e Empresas.",
      tech: ["HTML5", "CSS", "JS"],
      image: "/easy.png",
      github: "https://github.com/RafaelGLacerda/EasyBuniness",
      demo: "https://easybuniness.onrender.com/",
      featured: false,
    },
     {
      title: "ReciclaSSA",
      description: "Website para o Agendamento de Coletas de Recicláveis.",
      tech: ["HTML5, CSS, Node.js"],
      image: "/recicla.png",
      github: "https://github.com/RafaelGLacerda/A3",
      demo: "https://reciclassa.onrender.com/",
      featured: false,
    },
    {
      title: "Conversor de Imagem",
      description: "Converter Imagens em Diferentes Formatos.",
      tech: ["HTML5, CSS, JS"],
      image: "/conversor.png",
      github: "https://github.com/RafaelGLacerda/ImagemConversor",
      demo: "https://imagemconversor.netlify.app/",
      featured: false,
    },
    {
      title: "QRcode Pro",
      description: "Criar e Ler QRcodes e Criar Chaves Pix.",
      tech: ["HTML5, CSS, JS"],
      image: "/qrcode.png",
      github: "https://github.com/RafaelGLacerda/QRcoder",
      demo: "https://qrcodesgerador.netlify.app/",
      featured: false,
    },
    {
      title: "CryptoModern",
      description: "Criptografar e descriptografar Arquivos.",
      tech: ["HTML5, CSS, JS"],
      image: "/modern.png",
      github: "https://github.com/RafaelGLacerda/CryptoModern",
      demo: "https://cryptomodern.netlify.app/",
      featured: false,
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setActiveSection(sectionId)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-900" : "bg-gray-50"}`}>
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${darkMode ? "bg-gray-900/80 border-gray-700" : "bg-white/80 border-gray-200"} border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl">
              <span className={`${darkMode ? "text-white" : "text-gray-900"}`}>RafaelLacerda</span>
              <span className="text-blue-600">.netlify.app</span>
            </div>

            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 ${activeSection === item
                    ? "text-blue-600"
                    : darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                  {item === "home"
                    ? "Início"
                    : item === "about"
                      ? "Sobre"
                      : item === "skills"
                        ? "Habilidades"
                        : item === "experience"
                          ? "Experiência"
                          : item === "projects"
                            ? "Projetos"
                            : ""}
                </button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className={`text-5xl md:text-7xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                  Rafael
                  <span className="block text-blue-600">Lacerda</span>
                </h1>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className={`text-xl ${darkMode ? "text-gray-300" : "text-gray-600"}`}>Desenvolvedor Full-Stack</p>
                </div>
                <p className={`text-lg leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                 style={{ textAlign: "justify" }}>
                  Com mais de 4 anos de dedicação e estudo em desenvolvimento, sou especializado em criar soluções modernas, escaláveis e centradas no usuário,
                  unindo tecnologia e design para entregar resultados de alto nível, conheça meu trabalho.
                </p>
              </div>

              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className={darkMode ? "text-gray-400" : "text-gray-600"}>Salvador, Bahia, Brasil</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Mail className="w-4 h-4 mr-2" />
                  Contatos Abaixo
                </Button>
              </div>

              <div className="flex space-x-6">
                {[
                  { icon: <Github className="w-5 h-5" />, href: "https://github.com/RafaelGLacerda" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/rafael-lacerda" },
                  { icon: <Mail className="w-5 h-5" />, href: "mailto:Rafaellacerda2004@gmail.com" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <Button variant="ghost" size="icon">
                      {social.icon}
                    </Button>
                  </a>
                ))}
              </div>

            </div>

            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse opacity-20"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <Image
                  src="/Rafael.jpg"
                  alt="Rafael Lacerda"
                  width={300}
                  height={300}
                  className="absolute inset-8 w-64 h-64 rounded-full object-cover border-4 border-white shadow-2xl"
                />

              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <ChevronDown className="w-6 h-6 mx-auto animate-bounce text-blue-600" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Sobre Mim</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p
                className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                style={{ textAlign: "justify" }}
              >
                Sou Rafael Pereira Grigorio de Lacerda, desenvolvedor em formação, com graduação em Análise e Desenvolvimento de Sistemas (conclusão em 2025.1) e 
                atualmente cursando Ciência da Computação pela UNIFACS.
              </p>
              <p
                className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                style={{ textAlign: "justify" }}
              >
                Procuro estar sempre em evolução, participando de cursos complementares e exercitando minhas habilidades em desenvolvimento. Tenho grande interesse em programação, 
                atuando em aplicações web, mobile e desktop. Além disso, mantenho diversos projetos ativos no GitHub, que refletem meu aprendizado e experiência na área.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">25+</div>
                  <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Projetos Concluídos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">4+</div>
                  <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Tecnologias</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
                Especialidades
              </h3>
              {[
                {
                  icon: <Code className="w-5 h-5" />,
                  title: "Desenvolvimento Frontend",
                  desc: "React, Node.js, JavaScript, TypeScript, CSS, TailWind, HTML5",
                },
                {
                  icon: <Briefcase className="w-5 h-5" />,
                  title: "Desenvolvimento Backend",
                  desc: "Node.js, Python, APIs, Postman, Java",
                },
                {
                  icon: <GraduationCap className="w-5 h-5" />,
                  title: "Desenvolvimento Full-Stack",
                  desc: "React, TypeScript, CI/CD, Node.js, QA, TailWind",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className={`${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50"} hover:shadow-lg transition-all duration-300`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-blue-600">{item.icon}</div>
                      <div>
                        <h4 className={`font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
                          {item.title}
                        </h4>
                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Habilidades</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Frontend", "Backend", "Database", "IAs"].map((category) => (
              <Card
                key={category}
                className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"} hover:shadow-xl transition-all duration-300`}
              >
                <CardContent className="p-6">
                  <h3 className={`text-xl font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {skills
                      .filter((skill) => skill.category === category)
                      .map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-2">
                            <span className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                              {skill.name}
                            </span>
                            <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                              {skill.level}%
                            </span>
                          </div>
                          <div className={`w-full bg-gray-200 rounded-full h-2 ${darkMode ? "bg-gray-700" : ""}`}>
                            <div
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Projetos</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className={`text-2xl font-semibold mb-8 ${darkMode ? "text-white" : "text-gray-900"}`}>
              Projetos em Destaque
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects
                .filter((p) => p.featured)
                .map((project, index) => (
                  <Card
                    key={index}
                    className={`group ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"} hover:shadow-2xl transition-all duration-500 overflow-hidden`}
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-2">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" variant="ghost" className="p-2">
                              <Github className="w-4 h-4" />
                            </Button>
                          </a>
                          {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <Button size="sm" variant="ghost" className="p-2">
                                <ExternalLink className="w-4 h-4" />
                              </Button>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className={`text-xl font-semibold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}>
                        {project.title}
                      </h3>
                      <p className={`text-sm mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className={`text-2xl font-semibold mb-8 ${darkMode ? "text-white" : "text-gray-900"}`}>
              Outros Projetos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((p) => !p.featured)
                .map((project, index) => (
                  <Card
                    key={index}
                    className={`group ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"} hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className={`text-lg font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
                        {project.title}
                      </h3>
                      <p className={`text-sm mb-3 ${darkMode ? "text-gray-300" : "text-gray-600"} line-clamp-2`}>
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" variant="ghost" className="p-2">
                              <Github className="w-4 h-4" />
                            </Button>
                          </a>
                          {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <Button size="sm" variant="ghost" className="p-2">
                                <ExternalLink className="w-4 h-4" />
                              </Button>
                            </a>
                          )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              © 2025 Rafael Lacerda. Todos os direitos reservados.
            </p>
            <p className={`mt-2 text-sm ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
              Desenvolvido com  usando React, Next.js e Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 bg-blue-600 hover:bg-blue-700 shadow-lg"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  )
}
