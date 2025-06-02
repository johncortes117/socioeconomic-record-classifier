"use client"

import { useState, useEffect, useRef } from "react"
import {
  Brain,
  BookOpen,
  GraduationCap,
  Code,
  MapPin,
  Target,
  BarChart3,
  Workflow,
  ChevronRight,
  ChevronDown,
  ChevronLeft,
} from "lucide-react"

// Define team members with avatar initials and background gradients
const teamMembers = [
  {
    avatar: "AB",
    name: "John Cortés",
    role: "AI Engineer",
    gradient: "from-green-400 to-blue-500",
  },
  {
    avatar: "DG",
    name: "Joel Cabrera",
    role: "Fullstack Developer",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    avatar: "YV",
    name: "Diego Chávez",
    role: "Software Developer",
    gradient: "from-orange-400 to-yellow-500",
  },
]

// Define navigation items for the documentation sidebar
const navigationItems = [
  {
    id: "introduction",
    title: "Introducción",
    subtitle: "Contexto del Proyecto",
    icon: Home,
    content: (
      <div>
        <h2 id="introduction-title">Introducción</h2>
        <p>
          Este proyecto tiene como objetivo automatizar el análisis y clasificación de fichas socioeconómicas de
          estudiantes de la UPEC mediante un LLM.
        </p>
      </div>
    ),
    headings: [{ id: "introduction-title", title: "Introducción", level: 2 }],
  },
  {
    id: "requirements",
    title: "Requisitos",
    subtitle: "Especificaciones del Software",
    icon: BookOpen,
    subItems: [
      {
        id: "functional",
        title: "Funcionales",
        icon: Target,
        content: (
          <div>
            <h2 id="functional-requirements-title">Requisitos Funcionales</h2>
            <p>El sistema debe permitir la carga de fichas socioeconómicas y clasificarlas automáticamente.</p>
          </div>
        ),
        headings: [{ id: "functional-requirements-title", title: "Requisitos Funcionales", level: 2 }],
      },
      {
        id: "non-functional",
        title: "No Funcionales",
        icon: BarChart3,
        content: (
          <div>
            <h2 id="non-functional-requirements-title">Requisitos No Funcionales</h2>
            <p>El sistema debe ser rápido, seguro y fácil de usar.</p>
          </div>
        ),
        headings: [{ id: "non-functional-requirements-title", title: "Requisitos No Funcionales", level: 2 }],
      },
    ],
  },
  {
    id: "design",
    title: "Diseño",
    subtitle: "Arquitectura del Software",
    icon: Code,
    subItems: [
      {
        id: "architecture",
        title: "Arquitectura",
        icon: Workflow,
        content: (
          <div>
            <h2 id="architecture-design-title">Diseño de la Arquitectura</h2>
            <p>El sistema se basa en una arquitectura de microservicios.</p>
          </div>
        ),
        headings: [{ id: "architecture-design-title", title: "Diseño de la Arquitectura", level: 2 }],
      },
    ],
  },
]

export default function Home() {
  const [currentView, setCurrentView] = useState("home")
  const [activeSection, setActiveSection] = useState(
    navigationItems[0].subItems ? navigationItems[0].subItems[0].id : navigationItems[0].id,
  )
  const [currentContent, setCurrentContent] = useState(
    navigationItems[0].subItems ? navigationItems[0].subItems[0] : navigationItems[0],
  )
  const [leftSidebarVisible, setLeftSidebarVisible] = useState(true)
  const [rightSidebarVisible, setRightSidebarVisible] = useState(false)
  const [expandedUnits, setExpandedUnits] = useState([])
  const contentRef = useRef(null)

  useEffect(() => {
    // Set initial content on mount
    const initialContent = navigationItems[0].subItems ? navigationItems[0].subItems[0] : navigationItems[0]
    setCurrentContent(initialContent)
    setActiveSection(initialContent.id)
  }, [])

  const handleNavClick = (sectionId) => {
    const section = navigationItems.reduce((acc, item) => {
      if (item.id === sectionId) return item
      if (item.subItems) {
        const subItem = item.subItems.find((sub) => sub.id === sectionId)
        if (subItem) return subItem
      }
      return acc
    }, null)

    if (section) {
      setCurrentContent(section)
      setActiveSection(sectionId)
      setRightSidebarVisible(false)
    }
  }

  const scrollToHeading = (headingId) => {
    const element = document.getElementById(headingId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const toggleUnit = (unitId) => {
    if (expandedUnits.includes(unitId)) {
      setExpandedUnits(expandedUnits.filter((id) => id !== unitId))
    } else {
      setExpandedUnits([...expandedUnits, unitId])
    }
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {currentView === "home" ? (
        <>
          {/* Header */}
          <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 sm:py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                    <Brain className="w-4 h-4 sm:w-6 sm:h-6 text-black" />
                  </div>
                  <div>
                    <h1 className="text-sm sm:text-xl font-bold text-white">UPEC AI Project</h1>
                    <p className="text-xs sm:text-sm text-gray-400">
                      {currentView === "home" ? "Normativas de Software" : "Documentación Técnica"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setCurrentView(currentView === "home" ? "documentation" : "home")}
                  className="inline-flex items-center space-x-1 sm:space-x-2 bg-green-400 hover:bg-green-500 text-black font-semibold px-3 py-2 sm:px-6 sm:py-3 rounded-lg transition-all duration-300 hover:scale-105 text-xs sm:text-base"
                >
                  {currentView === "home" ? (
                    <>
                      <BookOpen className="w-3 h-3 sm:w-5 sm:h-5" />
                      <span className="hidden sm:inline">Ver Documentación</span>
                      <span className="sm:hidden">Docs</span>
                    </>
                  ) : (
                    <>
                      <Home className="w-3 h-3 sm:w-5 sm:h-5" />
                      <span className="hidden sm:inline">Volver al Inicio</span>
                      <span className="sm:hidden">Inicio</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </header>

          {/* Hero Section */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-transparent to-green-400/5"></div>
            <div className="absolute inset-0">
              <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400/3 rounded-full blur-3xl"></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
              <div className="text-center space-y-4 sm:space-y-8">
                <div className="space-y-2 sm:space-y-4">
                  <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
                    Automatización del Análisis y Clasificación
                  </h1>
                  <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-green-400">
                    de Fichas Socioeconómicas para una Segmentación Eficiente
                  </h2>
                  <h3 className="text-lg sm:text-xl lg:text-3xl font-medium text-gray-300">
                    de Estudiantes en la UPEC mediante un LLM
                  </h3>
                </div>

                <div className="w-16 sm:w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto"></div>

                <div className="max-w-4xl mx-auto">
                  <p className="text-sm sm:text-lg lg:text-xl text-gray-300 leading-relaxed px-4">
                    Proyecto innovador que revoluciona el procesamiento de fichas socioeconómicas estudiantiles mediante
                    inteligencia artificial, transformando un proceso manual en un sistema automatizado, eficiente y
                    preciso.
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-sm sm:text-lg px-4">
                  <div className="flex items-center space-x-1 sm:space-x-2 bg-gray-900/50 rounded-lg px-2 sm:px-4 py-1 sm:py-2 border border-gray-800 backdrop-blur-sm">
                    <GraduationCap className="w-3 h-3 sm:w-5 sm:h-5 text-green-400" />
                    <span className="text-gray-300 text-xs sm:text-base">7mo Semestre</span>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2 bg-gray-900/50 rounded-lg px-2 sm:px-4 py-1 sm:py-2 border border-gray-800 backdrop-blur-sm">
                    <Code className="w-3 h-3 sm:w-5 sm:h-5 text-green-400" />
                    <span className="text-gray-300 text-xs sm:text-base">Computación</span>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2 bg-gray-900/50 rounded-lg px-2 sm:px-4 py-1 sm:py-2 border border-gray-800 backdrop-blur-sm">
                    <MapPin className="w-3 h-3 sm:w-5 sm:h-5 text-green-400" />
                    <span className="text-gray-300 text-xs sm:text-base">UPEC - Carchi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="py-12 sm:py-20 bg-gray-950/50 relative">
            <div className="absolute inset-0">
              <div className="absolute top-10 right-20 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-20 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl"></div>
            </div>
            <div className="relative max-w-6xl mx-auto px-4 sm:px-8">
              <div className="text-center mb-8 sm:mb-16">
                <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">Equipo de Desarrollo</h2>
                <p className="text-base sm:text-xl text-gray-400">
                  Estudiantes de 7mo Semestre de la Carrera de Computación
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="relative group"
                    style={{
                      animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl p-4 sm:p-8 border border-gray-800 hover:border-green-400/50 transition-all duration-500 text-center backdrop-blur-sm hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-400/10">
                      <div
                        className={`w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center text-black font-bold text-lg sm:text-2xl mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {member.avatar}
                      </div>
                      <h3 className="text-lg sm:text-2xl font-semibold text-white mb-1 sm:mb-2">{member.name}</h3>
                      <p className="text-green-400 font-medium mb-2 sm:mb-4 text-sm sm:text-base">{member.role}</p>
                      <div className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
                        <p className="flex items-center justify-center space-x-1 sm:space-x-2">
                          <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>7mo Semestre</span>
                        </p>
                        <p className="flex items-center justify-center space-x-1 sm:space-x-2">
                          <Code className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>Computación</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-12 sm:py-20 relative">
            <div className="absolute inset-0">
              <div className="absolute top-20 left-1/4 w-96 h-96 bg-green-400/3 rounded-full blur-3xl"></div>
            </div>
            <div className="relative max-w-6xl mx-auto px-4 sm:px-8">
              <div className="text-center mb-8 sm:mb-16">
                <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">Características del Proyecto</h2>
                <p className="text-base sm:text-xl text-gray-400">
                  Tecnología de vanguardia aplicada a la gestión universitaria
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
                <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/20 rounded-xl p-4 sm:p-8 border border-gray-800 hover:border-green-400/50 transition-all duration-300 backdrop-blur-sm hover:transform hover:scale-105 hover:shadow-xl hover:shadow-green-400/10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-2 sm:mb-4">
                    Automatización Inteligente
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    Procesamiento automático de fichas socioeconómicas mediante LLM, reduciendo el tiempo de análisis de
                    30 minutos a 30 segundos por estudiante.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/20 rounded-xl p-4 sm:p-8 border border-gray-800 hover:border-green-400/50 transition-all duration-300 backdrop-blur-sm hover:transform hover:scale-105 hover:shadow-xl hover:shadow-green-400/10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                    <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-2 sm:mb-4">Métricas de Calidad</h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    Implementación de estándares ISO 9001 y métricas de McCall para garantizar la calidad del software y
                    la satisfacción del usuario.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/20 rounded-xl p-4 sm:p-8 border border-gray-800 hover:border-green-400/50 transition-all duration-300 backdrop-blur-sm hover:transform hover:scale-105 hover:shadow-xl hover:shadow-green-400/10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                    <Workflow className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white mb-2 sm:mb-4">Metodología Ágil</h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    Desarrollo basado en Scrum y Kanban, con entregas incrementales y adaptabilidad a cambios en los
                    requisitos del proyecto.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-12 sm:py-20 bg-gradient-to-r from-green-400/10 via-green-400/5 to-transparent relative">
            <div className="absolute inset-0">
              <div className="absolute top-10 right-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl"></div>
            </div>
            <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center">
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
                Explora la Documentación Completa
              </h2>
              <p className="text-sm sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Descubre todos los detalles técnicos, metodologías aplicadas, métricas de calidad y el proceso completo
                de desarrollo de nuestro proyecto innovador.
              </p>
              <button
                onClick={() => setCurrentView("documentation")}
                className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-black font-semibold px-4 py-3 sm:px-8 sm:py-4 rounded-lg text-sm sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/25"
              >
                <BookOpen className="w-4 h-4 sm:w-6 sm:h-6" />
                <span>Ver Documentación</span>
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Header - Same as home but with different CTA */}
          <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 sm:py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                    <Brain className="w-4 h-4 sm:w-6 sm:h-6 text-black" />
                  </div>
                  <div>
                    <h1 className="text-sm sm:text-xl font-bold text-white">UPEC AI Project</h1>
                    <p className="text-xs sm:text-sm text-gray-400">Documentación Técnica</p>
                  </div>
                </div>
                <button
                  onClick={() => setCurrentView("home")}
                  className="inline-flex items-center space-x-1 sm:space-x-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold px-3 py-2 sm:px-6 sm:py-3 rounded-lg transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-gray-600 text-xs sm:text-base"
                >
                  <Home className="w-3 h-3 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Volver al Inicio</span>
                  <span className="sm:hidden">Inicio</span>
                </button>
              </div>
            </div>
          </header>

          <div className="flex h-[calc(100vh-57px)] sm:h-[calc(100vh-73px)]">
            {/* Left Sidebar - Navigation */}
            {leftSidebarVisible && (
              <div className="w-64 sm:w-80 bg-gray-950 border-r border-gray-800 overflow-y-auto">
                <div className="p-4 sm:p-6 border-b border-gray-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-lg sm:text-xl font-bold text-green-400">Documentación</h1>
                      <p className="text-xs sm:text-sm text-gray-400 mt-1">Normativas de Software</p>
                    </div>
                    <button
                      onClick={() => setLeftSidebarVisible(false)}
                      className="p-1 sm:p-2 hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <nav className="p-2 sm:p-4">
                  <div className="space-y-1 sm:space-y-2">
                    {navigationItems.map((item) => (
                      <div key={item.id}>
                        <button
                          onClick={() => toggleUnit(item.id)}
                          className="w-full flex items-center justify-between p-2 sm:p-4 rounded-lg hover:bg-gray-800 transition-colors text-left"
                        >
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                            <div className="text-left">
                              <div className="text-xs sm:text-sm font-bold text-white">{item.title}</div>
                              <div className="text-xs text-gray-400 mt-1 hidden sm:block">{item.subtitle}</div>
                            </div>
                          </div>
                          {expandedUnits.includes(item.id) ? (
                            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                          ) : (
                            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                          )}
                        </button>

                        {expandedUnits.includes(item.id) && item.subItems && (
                          <div className="ml-4 sm:ml-8 mt-1 sm:mt-2 space-y-1">
                            {item.subItems.map((subItem) => (
                              <button
                                key={subItem.id}
                                onClick={() => handleNavClick(subItem.id)}
                                className={`w-full flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg text-left transition-colors ${
                                  activeSection === subItem.id
                                    ? "bg-green-400/20 text-green-400 border border-green-400/30"
                                    : "hover:bg-gray-800 text-gray-300"
                                }`}
                              >
                                <subItem.icon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                <span className="text-xs sm:text-sm">{subItem.title}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </nav>
              </div>
            )}

            {/* Main Content Area */}
            <div className="flex-1 flex">
              <div className="flex-1 overflow-y-auto">
                {/* Top Bar */}
                <div className="sticky top-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 p-2 sm:p-4 z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 sm:space-x-4">
                      {!leftSidebarVisible && (
                        <button
                          onClick={() => setLeftSidebarVisible(true)}
                          className="p-1 sm:p-2 hover:bg-gray-800 rounded-lg transition-colors"
                        >
                          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        </button>
                      )}
                      <h1 className="text-sm sm:text-xl font-semibold text-white truncate">{currentContent?.title}</h1>
                    </div>
                    <div className="flex items-center space-x-2">
                      {!rightSidebarVisible && currentContent?.headings && currentContent.headings.length > 0 && (
                        <button
                          onClick={() => setRightSidebarVisible(true)}
                          className="p-1 sm:p-2 hover:bg-gray-800 rounded-lg transition-colors"
                        >
                          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="max-w-4xl mx-auto p-4 sm:p-8">{currentContent?.content}</div>
              </div>

              {/* Right Sidebar - Table of Contents */}
              {rightSidebarVisible && currentContent?.headings && currentContent.headings.length > 0 && (
                <div className="w-48 sm:w-64 bg-gray-950 border-l border-gray-800 overflow-y-auto hidden lg:block">
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <h3 className="text-sm sm:text-lg font-semibold text-green-400">En esta página</h3>
                      <button
                        onClick={() => setRightSidebarVisible(false)}
                        className="p-1 hover:bg-gray-800 rounded transition-colors"
                      >
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                      </button>
                    </div>
                    <nav className="space-y-1 sm:space-y-2">
                      {currentContent.headings.map((heading) => (
                        <button
                          key={heading.id}
                          onClick={() => scrollToHeading(heading.id)}
                          className={`block w-full text-left p-1 sm:p-2 rounded text-xs sm:text-sm hover:bg-gray-800 transition-colors ${
                            heading.level === 2 ? "text-white font-medium" : "text-gray-400 ml-2 sm:ml-4"
                          }`}
                        >
                          {heading.title}
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
