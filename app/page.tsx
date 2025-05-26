"use client"

import type React from "react"

import { useState } from "react"
import {
  ChevronRight,
  FileText,
  Users,
  BarChart3,
  Settings,
  Target,
  Workflow,
  Calendar,
  Shield,
  TrendingUp,
  Bug,
  User,
  BookOpen,
  GraduationCap,
  MapPin,
  Code,
  ChevronLeft,
  ChevronDown,
  Brain,
  Home,
} from "lucide-react"

interface NavItem {
  id: string
  title: string
  subtitle: string
  icon: any
  subItems?: {
    id: string
    title: string
    icon: any
  }[]
}

interface ContentSection {
  id: string
  title: string
  content: React.ReactNode
  headings?: { id: string; title: string; level: number }[]
}

const navigationItems: NavItem[] = [
  {
    id: "unit1",
    title: "UNIDAD 1",
    subtitle: "Conceptualización y Metodología",
    icon: FileText,
    subItems: [
      { id: "software-idea", title: "Tema o Idea del Software", icon: Target },
      { id: "detailed-problem", title: "Problema Detallado", icon: Users },
      { id: "agile-methodology", title: "Metodología Ágil", icon: Workflow },
    ],
  },
  {
    id: "unit2",
    title: "UNIDAD 2",
    subtitle: "Planificación y Normativas",
    icon: Settings,
    subItems: [
      { id: "project-planning", title: "Organización y Planificación del Proyecto", icon: Calendar },
      { id: "iso-standards", title: "Aplicación de Normas ISO 9001", icon: Shield },
    ],
  },
  {
    id: "unit3",
    title: "UNIDAD 3",
    subtitle: "Métricas del Software",
    icon: BarChart3,
    subItems: [
      { id: "quality-metrics", title: "Métricas de Calidad (McCall)", icon: TrendingUp },
      { id: "productivity-metrics", title: "Métricas de Productividad del Desarrollador", icon: User },
      { id: "defects-usability", title: "Métricas de Defectos y Usabilidad", icon: Bug },
    ],
  },
]

const contentSections: Record<string, ContentSection> = {
  "software-idea": {
    id: "software-idea",
    title: "Tema o Idea del Software",
    content: (
      <div className="space-y-6">
        <h2 id="overview" className="text-3xl font-bold text-white">
          Automatización del Análisis y Clasificación de Fichas Socioeconómicas
        </h2>

        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
          <h3 id="objective" className="text-2xl font-semibold text-green-400 mb-4">
            Objetivo Principal
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Desarrollar un sistema inteligente que utilice un Modelo de Lenguaje Grande (LLM) para automatizar el
            proceso de análisis y clasificación de fichas socioeconómicas de estudiantes en la UPEC, mejorando
            significativamente la eficiencia y precisión del proceso de segmentación estudiantil.
          </p>
        </div>

        <div className="space-y-4">
          <h3 id="key-features" className="text-2xl font-semibold text-white">
            Características Clave
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-800">
              <h4 className="text-lg font-semibold text-green-400 mb-2">Procesamiento Automático</h4>
              <p className="text-gray-400">Análisis automático de datos socioeconómicos mediante IA</p>
            </div>
            <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-800">
              <h4 className="text-lg font-semibold text-green-400 mb-2">Clasificación Inteligente</h4>
              <p className="text-gray-400">Segmentación precisa basada en criterios socioeconómicos</p>
            </div>
            <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-800">
              <h4 className="text-lg font-semibold text-green-400 mb-2">Interfaz Intuitiva</h4>
              <p className="text-gray-400">Dashboard amigable para el personal de Bienestar Estudiantil</p>
            </div>
            <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-800">
              <h4 className="text-lg font-semibold text-green-400 mb-2">Reportes Detallados</h4>
              <p className="text-gray-400">Generación automática de informes y estadísticas</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
          <h3 id="innovation" className="text-2xl font-semibold text-green-400 mb-4">
            Innovación Tecnológica
          </h3>
          <p className="text-gray-300 leading-relaxed">
            La implementación de un LLM para el análisis de fichas socioeconómicas representa una innovación
            significativa en el ámbito universitario, permitiendo un procesamiento más sofisticado del lenguaje natural
            y una comprensión contextual de la información socioeconómica de los estudiantes.
          </p>
        </div>
      </div>
    ),
    headings: [
      { id: "overview", title: "Automatización del Análisis", level: 2 },
      { id: "objective", title: "Objetivo Principal", level: 3 },
      { id: "key-features", title: "Características Clave", level: 3 },
      { id: "innovation", title: "Innovación Tecnológica", level: 3 },
    ],
  },
  "detailed-problem": {
    id: "detailed-problem",
    title: "Problema Detallado",
    content: (
      <div className="space-y-6">
        <h2 id="problem-statement" className="text-3xl font-bold text-white">
          Problemática Actual en Bienestar Estudiantil
        </h2>

        <div className="bg-red-900/20 border border-red-800 rounded-lg p-6">
          <h3 id="current-situation" className="text-2xl font-semibold text-red-400 mb-4">
            Situación Actual
          </h3>
          <p className="text-gray-300 leading-relaxed">
            El departamento de Bienestar Estudiantil de la UPEC enfrenta serios desafíos en el procesamiento manual de
            fichas socioeconómicas, lo que resulta en ineficiencias operativas significativas y decisiones subóptimas en
            la asignación de recursos estudiantiles.
          </p>
        </div>

        <div className="space-y-4">
          <h3 id="main-problems" className="text-2xl font-semibold text-white">
            Problemas Identificados
          </h3>

          <div className="space-y-4">
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
              <h4 className="text-xl font-semibold text-red-400 mb-3">1. Proceso Manual Ineficiente</h4>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Revisión manual de cada ficha socioeconómica consume entre 15-30 minutos por estudiante
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Procesamiento de más de 1,000 fichas por semestre requiere recursos humanos excesivos
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Acumulación de trabajo que genera retrasos en la toma de decisiones
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
              <h4 className="text-xl font-semibold text-red-400 mb-3">2. Alta Propensión a Errores</h4>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Errores de clasificación por fatiga del personal (estimado 15-20% de casos)
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Inconsistencias en criterios de evaluación entre diferentes evaluadores
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Pérdida de información crítica por transcripción manual
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
              <h4 className="text-xl font-semibold text-red-400 mb-3">3. Impactos Negativos</h4>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Retrasos en la asignación de becas y ayudas estudiantiles
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Distribución inequitativa de recursos por clasificaciones incorrectas
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Sobrecarga laboral del personal administrativo
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Insatisfacción estudiantil por demoras en procesos
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
          <h3 id="justification" className="text-2xl font-semibold text-green-400 mb-4">
            Justificación de la Solución
          </h3>
          <p className="text-gray-300 leading-relaxed">
            La implementación de un sistema automatizado basado en LLM no solo resuelve los problemas actuales, sino que
            también posiciona a la UPEC como una institución innovadora en el uso de tecnologías emergentes para mejorar
            los servicios estudiantiles y optimizar los procesos administrativos.
          </p>
        </div>
      </div>
    ),
    headings: [
      { id: "problem-statement", title: "Problemática Actual", level: 2 },
      { id: "current-situation", title: "Situación Actual", level: 3 },
      { id: "main-problems", title: "Problemas Identificados", level: 3 },
      { id: "justification", title: "Justificación de la Solución", level: 3 },
    ],
  },
  "agile-methodology": {
    id: "agile-methodology",
    title: "Metodología Ágil (Scrum & Kanban)",
    content: (
      <div className="space-y-6">
        <h2 id="methodology-overview" className="text-3xl font-bold text-white">
          Implementación de Metodologías Ágiles
        </h2>

        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
          <h3 id="scrum-implementation" className="text-2xl font-semibold text-green-400 mb-4">
            Scrum Framework
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Adoptamos Scrum como marco principal de trabajo para garantizar entregas incrementales y adaptabilidad a los
            cambios en los requisitos del proyecto.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-800">
              <h4 className="text-lg font-semibold text-white mb-2">Sprints de 2 Semanas</h4>
              <p className="text-gray-400">Ciclos cortos para entregas frecuentes y feedback continuo</p>
            </div>
            <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-800">
              <h4 className="text-lg font-semibold text-white mb-2">Roles Definidos</h4>
              <p className="text-gray-400">Product Owner, Scrum Master y Development Team claramente establecidos</p>
            </div>
            <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-800">
              <h4 className="text-lg font-semibold text-white mb-2">Ceremonias Scrum</h4>
              <p className="text-gray-400">Daily standups, sprint planning, review y retrospectivas</p>
            </div>
            <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-800">
              <h4 className="text-lg font-semibold text-white mb-2">Product Backlog</h4>
              <p className="text-gray-400">Priorización continua de funcionalidades y requisitos</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
          <h3 id="kanban-integration" className="text-2xl font-semibold text-green-400 mb-4">
            Integración con Kanban
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Complementamos Scrum con principios Kanban para visualizar el flujo de trabajo y optimizar la eficiencia del
            equipo.
          </p>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-white font-medium">To Do:</span>
              <span className="text-gray-400">Tareas pendientes y nuevos requisitos</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
              <span className="text-white font-medium">In Progress:</span>
              <span className="text-gray-400">Desarrollo activo con límites WIP</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span className="text-white font-medium">Testing:</span>
              <span className="text-gray-400">Pruebas y validación de funcionalidades</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-white font-medium">Done:</span>
              <span className="text-gray-400">Tareas completadas y validadas</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
          <h3 id="trello-management" className="text-2xl font-semibold text-green-400 mb-4">
            Gestión con Trello
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Utilizamos Trello como herramienta principal para la gestión visual del proyecto, implementando tableros
            Kanban personalizados para nuestras necesidades específicas.
          </p>

          <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
            <p className="text-center text-gray-400 italic">
              [Espacio reservado para capturas de pantalla de los tableros de Trello]
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-500">• Tablero Principal: Visión general del proyecto</p>
              <p className="text-sm text-gray-500">• Tablero de Sprints: Gestión de tareas por sprint</p>
              <p className="text-sm text-gray-500">• Tablero de Bugs: Seguimiento de errores y correcciones</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
          <h3 id="benefits" className="text-2xl font-semibold text-green-400 mb-4">
            Beneficios de la Metodología Ágil
          </h3>
          <ul className="text-gray-300 space-y-2">
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              Mayor adaptabilidad a cambios en requisitos
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              Entregas frecuentes de valor al usuario final
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              Mejora continua a través de retrospectivas
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              Mayor transparencia y comunicación del equipo
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              Reducción de riesgos mediante feedback temprano
            </li>
          </ul>
        </div>
      </div>
    ),
    headings: [
      { id: "methodology-overview", title: "Implementación de Metodologías Ágiles", level: 2 },
      { id: "scrum-implementation", title: "Scrum Framework", level: 3 },
      { id: "kanban-integration", title: "Integración con Kanban", level: 3 },
      { id: "trello-management", title: "Gestión con Trello", level: 3 },
      { id: "benefits", title: "Beneficios de la Metodología Ágil", level: 3 },
    ],
  },
  "project-planning": {
    id: "project-planning",
    title: "Organización y Planificación del Proyecto",
    content: (
      <div className="space-y-6">
        <h2 id="planning-overview" className="text-3xl font-bold text-white">
          Planificación Estratégica del Proyecto
        </h2>

        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
          <h3 id="projectlibre-usage" className="text-2xl font-semibold text-green-400 mb-4">
            Gestión con ProjectLibre
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Utilizamos ProjectLibre como herramienta principal para la planificación, seguimiento y control del
            proyecto, permitiendo una gestión profesional de recursos, tiempos y dependencias.
          </p>

          <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
            <p className="text-center text-gray-400 italic mb-4">
              [Espacio reservado para capturas de pantalla de ProjectLibre]
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">• Diagrama de Gantt del proyecto completo</p>
                <p className="text-sm text-gray-500">• Asignación de recursos por tarea</p>
                <p className="text-sm text-gray-500">• Cronograma detallado por fases</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">• Ruta crítica del proyecto</p>
                <p className="text-sm text-gray-500">• Hitos y entregables principales</p>
                <p className="text-sm text-gray-500">• Seguimiento de progreso</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 id="project-phases" className="text-2xl font-semibold text-white">
            Fases del Proyecto
          </h3>

          <div className="space-y-4">
            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
              <h4 className="text-xl font-semibold text-green-400 mb-3">Fase 1: Análisis y Diseño (4 semanas)</h4>
              <ul className="text-gray-300 space-y-1">
                <li>• Análisis de requisitos funcionales y no funcionales</li>
                <li>• Diseño de arquitectura del sistema</li>
                <li>• Selección y configuración del LLM</li>
                <li>• Diseño de base de datos</li>
                <li>• Prototipado de interfaces</li>
              </ul>
            </div>

            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
              <h4 className="text-xl font-semibold text-green-400 mb-3">Fase 2: Desarrollo del Core (6 semanas)</h4>
              <ul className="text-gray-300 space-y-1">
                <li>• Implementación del motor de procesamiento LLM</li>
                <li>• Desarrollo de algoritmos de clasificación</li>
                <li>• Creación de APIs y servicios backend</li>
                <li>• Integración con sistemas existentes de la UPEC</li>
                <li>• Desarrollo de módulos de seguridad</li>
              </ul>
            </div>

            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
              <h4 className="text-xl font-semibold text-green-400 mb-3">Fase 3: Interfaz de Usuario (3 semanas)</h4>
              <ul className="text-gray-300 space-y-1">
                <li>• Desarrollo del dashboard administrativo</li>
                <li>• Implementación de formularios de carga</li>
                <li>• Creación de reportes y visualizaciones</li>
                <li>• Desarrollo de módulo de configuración</li>
                <li>• Optimización de experiencia de usuario</li>
              </ul>
            </div>

            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
              <h4 className="text-xl font-semibold text-green-400 mb-3">Fase 4: Pruebas y Despliegue (3 semanas)</h4>
              <ul className="text-gray-300 space-y-1">
                <li>• Pruebas unitarias y de integración</li>
                <li>• Pruebas de carga y rendimiento</li>
                <li>• Validación con datos reales de la UPEC</li>
                <li>• Capacitación al personal</li>
                <li>• Despliegue en producción</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
          <h3 id="resource-allocation" className="text-2xl font-semibold text-green-400 mb-4">
            Asignación de Recursos
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">3</div>
              <div className="text-gray-400">Desarrolladores</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">16</div>
              <div className="text-gray-400">Semanas Totales</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">240</div>
              <div className="text-gray-400">Horas Estimadas</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
          <h3 id="risk-management" className="text-2xl font-semibold text-green-400 mb-4">
            Gestión de Riesgos
          </h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
              <div>
                <span className="text-white font-medium">Alto:</span>
                <span className="text-gray-400 ml-2">Disponibilidad y rendimiento del LLM seleccionado</span>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2"></div>
              <div>
                <span className="text-white font-medium">Medio:</span>
                <span className="text-gray-400 ml-2">Integración con sistemas legacy de la UPEC</span>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
              <div>
                <span className="text-white font-medium">Bajo:</span>
                <span className="text-gray-400 ml-2">Cambios en requisitos durante el desarrollo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    headings: [
      { id: "planning-overview", title: "Planificación Estratégica del Proyecto", level: 2 },
      { id: "projectlibre-usage", title: "Gestión con ProjectLibre", level: 3 },
      { id: "project-phases", title: "Fases del Proyecto", level: 3 },
      { id: "resource-allocation", title: "Asignación de Recursos", level: 3 },
      { id: "risk-management", title: "Gestión de Riesgos", level: 3 },
    ],
  },
  "iso-standards": {
    id: "iso-standards",
    title: "Aplicación de Normas ISO 9001",
    content: (
      <div className="space-y-6">
        <h2 id="iso-overview" className="text-3xl font-bold text-white">
          Implementación de ISO 9001:2015
        </h2>

        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
          <h3 id="iso-introduction" className="text-2xl font-semibold text-green-400 mb-4">
            Enfoque de Gestión de Calidad
          </h3>
          <p className="text-gray-300 leading-relaxed">
            La aplicación de la norma ISO 9001:2015 en nuestro proyecto garantiza un sistema de gestión de calidad
            robusto, enfocado en la satisfacción del cliente (UPEC y estudiantes) y la mejora continua de nuestros
            procesos de desarrollo.
          </p>
        </div>

        <div className="space-y-4">
          <h3 id="iso-principles" className="text-2xl font-semibold text-white">
            Principios Aplicados
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
              <h4 className="text-lg font-semibold text-green-400 mb-3">1. Enfoque al Cliente</h4>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Identificación clara de stakeholders (UPEC, estudiantes, personal)</li>
                <li>• Requisitos definidos mediante entrevistas y análisis</li>
                <li>• Medición continua de satisfacción del usuario</li>
                <li>• Feedback loops para mejora continua</li>
              </ul>
            </div>

            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
              <h4 className="text-lg font-semibold text-green-400 mb-3">2. Liderazgo</h4>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Definición clara de roles y responsabilidades</li>
                <li>• Establecimiento de objetivos de calidad</li>
                <li>• Comunicación efectiva de la visión del proyecto</li>
                <li>• Compromiso con la calidad en todos los niveles</li>
              </ul>
            </div>

            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
              <h4 className="text-lg font-semibold text-green-400 mb-3">3. Participación del Personal</h4>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Capacitación continua del equipo de desarrollo</li>
                <li>• Empoderamiento para toma de decisiones</li>
                <li>• Reconocimiento de contribuciones</li>
                <li>• Ambiente colaborativo y de aprendizaje</li>
              </ul>
            </div>

            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
              <h4 className="text-lg font-semibold text-green-400 mb-3">4. Enfoque Basado en Procesos</h4>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Mapeo detallado de procesos de desarrollo</li>
                <li>• Definición de entradas y salidas claras</li>
                <li>• Establecimiento de métricas de proceso</li>
                <li>• Optimización continua de flujos de trabajo</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
          <h3 id="documentation-system" className="text-2xl font-semibold text-green-400 mb-4">
            Sistema de Documentación
          </h3>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Documentos de Nivel 1</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Manual de Calidad del Proyecto</li>
                  <li>• Política de Calidad</li>
                  <li>• Objetivos de Calidad</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Documentos de Nivel 2</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Procedimientos de desarrollo</li>
                  <li>• Procedimientos de pruebas</li>
                  <li>• Procedimientos de gestión de cambios</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
          <h3 id="quality-objectives" className="text-2xl font-semibold text-green-400 mb-4">
            Objetivos de Calidad Específicos
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-gray-900/30 rounded p-3">
              <span className="text-white">Precisión de clasificación del LLM</span>
              <span className="text-green-400 font-semibold">≥ 95%</span>
            </div>
            <div className="flex items-center justify-between bg-gray-900/30 rounded p-3">
              <span className="text-white">Tiempo de procesamiento por ficha</span>
              <span className="text-green-400 font-semibold">≤ 30 segundos</span>
            </div>
            <div className="flex items-center justify-between bg-gray-900/30 rounded p-3">
              <span className="text-white">Disponibilidad del sistema</span>
              <span className="text-green-400 font-semibold">≥ 99.5%</span>
            </div>
            <div className="flex items-center justify-between bg-gray-900/30 rounded p-3">
              <span className="text-white">Satisfacción del usuario final</span>
              <span className="text-green-400 font-semibold">≥ 4.5/5</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
          <h3 id="continuous-improvement" className="text-2xl font-semibold text-green-400 mb-4">
            Mejora Continua
          </h3>
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Implementamos un ciclo PDCA (Plan-Do-Check-Act) para asegurar la mejora continua:
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center bg-gray-900/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400 mb-2">PLAN</div>
                <p className="text-gray-400 text-sm">Planificación de mejoras</p>
              </div>
              <div className="text-center bg-gray-900/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-400 mb-2">DO</div>
                <p className="text-gray-400 text-sm">Implementación</p>
              </div>
              <div className="text-center bg-gray-900/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-400 mb-2">CHECK</div>
                <p className="text-gray-400 text-sm">Verificación</p>
              </div>
              <div className="text-center bg-gray-900/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-red-400 mb-2">ACT</div>
                <p className="text-gray-400 text-sm">Estandarización</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    headings: [
      { id: "iso-overview", title: "Implementación de ISO 9001:2015", level: 2 },
      { id: "iso-introduction", title: "Enfoque de Gestión de Calidad", level: 3 },
      { id: "iso-principles", title: "Principios Aplicados", level: 3 },
      { id: "documentation-system", title: "Sistema de Documentación", level: 3 },
      { id: "quality-objectives", title: "Objetivos de Calidad Específicos", level: 3 },
      { id: "continuous-improvement", title: "Mejora Continua", level: 3 },
    ],
  },
  "quality-metrics": {
    id: "quality-metrics",
    title: "Métricas de Calidad (McCall)",
    content: (
      <div className="space-y-6">
        <h2 id="mccall-overview" className="text-3xl font-bold text-white">
          Modelo de Calidad de McCall
        </h2>

        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
          <h3 id="mccall-introduction" className="text-2xl font-semibold text-green-400 mb-4">
            Aplicación del Modelo McCall
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Implementamos el modelo de calidad de McCall para evaluar sistemáticamente la calidad de nuestro software,
            enfocándonos en tres perspectivas principales: operación del producto, revisión del producto y transición
            del producto.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
            <h3 id="product-operation" className="text-2xl font-semibold text-green-400 mb-4">
              1. Operación del Producto
            </h3>

            <div className="space-y-4">
              <div className="bg-black/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-3">Correctitud</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-300 text-sm mb-2">Métrica: Precisión de clasificación</p>
                    <div className="bg-gray-900 rounded p-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Objetivo:</span>
                        <span className="text-green-400">≥ 95%</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-2">Medición: Casos de prueba exitosos</p>
                    <div className="bg-gray-900 rounded p-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Meta:</span>
                        <span className="text-green-400">100% casos críticos</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-3">Confiabilidad</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-300 text-sm mb-2">MTBF (Mean Time Between Failures)</p>
                    <div className="bg-gray-900 rounded p-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Objetivo:</span>
                        <span className="text-green-400">≥ 720 horas</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-2">Disponibilidad del sistema</p>
                    <div className="bg-gray-900 rounded p-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Meta:</span>
                        <span className="text-green-400">99.5% uptime</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-3">Eficiencia</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-300 text-sm mb-2">Tiempo de respuesta</p>
                    <div className="bg-gray-900 rounded p-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Objetivo:</span>
                        <span className="text-green-400">≤ 30 segundos</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-2">Uso de recursos</p>
                    <div className="bg-gray-900 rounded p-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Meta:</span>
                        <span className="text-green-400">≤ 80% CPU/RAM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-3">Integridad</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-300 text-sm mb-2">Seguridad de datos</p>
                    <div className="bg-gray-900 rounded p-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Estándar:</span>
                        <span className="text-green-400">Encriptación AES-256</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-2">Control de acceso</p>
                    <div className="bg-gray-900 rounded p-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Implementación:</span>
                        <span className="text-green-400">RBAC + 2FA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-3">Usabilidad</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-300 text-sm mb-2">Facilidad de uso</p>
                    <div className="bg-gray-900 rounded p-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">SUS Score:</span>
                        <span className="text-green-400">≥ 80/100</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-2">Tiempo de aprendizaje</p>
                    <div className="bg-gray-900 rounded p-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Meta:</span>
                        <span className="text-green-400">≤ 2 horas</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
            <h3 id="product-revision" className="text-2xl font-semibold text-green-400 mb-4">
              2. Revisión del Producto
            </h3>

            <div className="space-y-4">
              <div className="bg-black/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-3">Mantenibilidad</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Complejidad ciclomática ≤ 10 por función</li>
                  <li>• Cobertura de código ≥ 85%</li>
                  <li>• Documentación completa de APIs</li>
                  <li>• Estándares de codificación aplicados</li>
                </ul>
              </div>

              <div className="bg-black/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-3">Flexibilidad</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Arquitectura modular y desacoplada</li>
                  <li>• Configuración externa de parámetros</li>
                  <li>• Interfaces bien definidas</li>
                  <li>• Patrones de diseño implementados</li>
                </ul>
              </div>

              <div className="bg-black/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-3">Facilidad de Prueba</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Pruebas unitarias automatizadas</li>
                  <li>• Pruebas de integración continua</li>
                  <li>• Mocks y stubs implementados</li>
                  <li>• Entornos de prueba aislados</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
            <h3 id="product-transition" className="text-2xl font-semibold text-green-400 mb-4">
              3. Transición del Producto
            </h3>

            <div className="space-y-4">
              <div className="bg-black/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-3">Portabilidad</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Compatibilidad multiplataforma (Windows, Linux)</li>
                  <li>• Contenedores Docker para despliegue</li>
                  <li>• Base de datos agnóstica</li>
                  <li>• APIs REST estándar</li>
                </ul>
              </div>

              <div className="bg-black/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-3">Reusabilidad</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Componentes modulares reutilizables</li>
                  <li>• Librerías internas documentadas</li>
                  <li>• Patrones de diseño estándar</li>
                  <li>• Código limpio y bien estructurado</li>
                </ul>
              </div>

              <div className="bg-black/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-3">Interoperabilidad</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• APIs RESTful bien documentadas</li>
                  <li>• Formatos de datos estándar (JSON, XML)</li>
                  <li>• Protocolos de comunicación estándar</li>
                  <li>• Integración con sistemas existentes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    headings: [
      { id: "mccall-overview", title: "Modelo de Calidad de McCall", level: 2 },
      { id: "mccall-introduction", title: "Aplicación del Modelo McCall", level: 3 },
      { id: "product-operation", title: "Operación del Producto", level: 3 },
      { id: "product-revision", title: "Revisión del Producto", level: 3 },
      { id: "product-transition", title: "Transición del Producto", level: 3 },
    ],
  },
  "productivity-metrics": {
    id: "productivity-metrics",
    title: "Métricas de Productividad del Desarrollador",
    content: (
      <div className="space-y-6">
        <h2 id="productivity-overview" className="text-3xl font-bold text-white">
          Métricas de Productividad del Equipo de Desarrollo
        </h2>

        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
          <h3 id="productivity-introduction" className="text-2xl font-semibold text-green-400 mb-4">
            Enfoque de Medición
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Implementamos un sistema integral de métricas para evaluar y mejorar la productividad del equipo,
            enfocándonos en la calidad del código, velocidad de desarrollo y eficiencia del proceso.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
            <h3 id="velocity-metrics" className="text-2xl font-semibold text-green-400 mb-4">
              Métricas de Velocidad
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-black/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Velocity por Sprint</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Sprint 1:</span>
                      <span className="text-green-400">32 Story Points</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Sprint 2:</span>
                      <span className="text-green-400">38 Story Points</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Sprint 3:</span>
                      <span className="text-green-400">35 Story Points</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span className="text-white">Promedio:</span>
                      <span className="text-green-400">35 Story Points</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Throughput</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Features completadas/sprint:</span>
                      <span className="text-green-400">8-12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Bugs resueltos/sprint:</span>
                      <span className="text-green-400">15-20</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Tareas técnicas/sprint:</span>
                      <span className="text-green-400">5-8</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-black/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Lead Time</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Features pequeñas:</span>
                      <span className="text-green-400">2-3 días</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Features medianas:</span>
                      <span className="text-green-400">5-7 días</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Features grandes:</span>
                      <span className="text-green-400">10-14 días</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Cycle Time</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Desarrollo activo:</span>
                      <span className="text-green-400">1.5 días promedio</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Code Review:</span>
                      <span className="text-green-400">0.5 días promedio</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Testing:</span>
                      <span className="text-green-400">1 día promedio</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
            <h3 id="code-quality-metrics" className="text-2xl font-semibold text-green-400 mb-4">
              Métricas de Calidad de Código
            </h3>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-black/50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">87%</div>
                <div className="text-gray-400 text-sm">Cobertura de Código</div>
                <div className="text-xs text-gray-500 mt-1">Meta: ≥85%</div>
              </div>
              <div className="bg-black/50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">7.2</div>
                <div className="text-gray-400 text-sm">Complejidad Ciclomática</div>
                <div className="text-xs text-gray-500 mt-1">Meta: ≤10</div>
              </div>
              <div className="bg-black/50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">2.1</div>
                <div className="text-gray-400 text-sm">Deuda Técnica (días)</div>
                <div className="text-xs text-gray-500 mt-1">Meta: ≤3 días</div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="bg-black/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-3">Métricas de Code Review</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Tiempo promedio de review:</span>
                      <span className="text-green-400">4.2 horas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Comentarios por PR:</span>
                      <span className="text-green-400">3.8 promedio</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">PRs aprobados primer intento:</span>
                      <span className="text-green-400">78%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Defectos encontrados en review:</span>
                      <span className="text-green-400">12 por sprint</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
            <h3 id="team-efficiency" className="text-2xl font-semibold text-green-400 mb-4">
              Eficiencia del Equipo
            </h3>

            <div className="space-y-4">
              <div className="bg-black/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-3">Distribución del Tiempo</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-32 text-gray-400 text-sm">Desarrollo:</div>
                    <div className="flex-1 bg-gray-800 rounded-full h-4 mr-2">
                      <div className="bg-green-400 h-4 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                    <div className="text-green-400 text-sm">65%</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-32 text-gray-400 text-sm">Testing:</div>
                    <div className="flex-1 bg-gray-800 rounded-full h-4 mr-2">
                      <div className="bg-blue-400 h-4 rounded-full" style={{ width: "20%" }}></div>
                    </div>
                    <div className="text-blue-400 text-sm">20%</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-32 text-gray-400 text-sm">Reuniones:</div>
                    <div className="flex-1 bg-gray-800 rounded-full h-4 mr-2">
                      <div className="bg-yellow-400 h-4 rounded-full" style={{ width: "10%" }}></div>
                    </div>
                    <div className="text-yellow-400 text-sm">10%</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-32 text-gray-400 text-sm">Documentación:</div>
                    <div className="flex-1 bg-gray-800 rounded-full h-4 mr-2">
                      <div className="bg-purple-400 h-4 rounded-full" style={{ width: "5%" }}></div>
                    </div>
                    <div className="text-purple-400 text-sm">5%</div>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-3">Métricas de Colaboración</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Commits por desarrollador/día:</span>
                      <span className="text-green-400">4.2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Pair programming sessions:</span>
                      <span className="text-green-400">3 por semana</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Knowledge sharing sessions:</span>
                      <span className="text-green-400">1 por sprint</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Cross-team collaboration:</span>
                      <span className="text-green-400">85% score</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
            <h3 id="improvement-actions" className="text-2xl font-semibold text-green-400 mb-4">
              Acciones de Mejora
            </h3>

            <div className="space-y-3">
              <div className="bg-black/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-2">Automatización</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Implementación de CI/CD pipeline completo</li>
                  <li>• Automatización de pruebas de regresión</li>
                  <li>• Deployment automático a entornos de staging</li>
                </ul>
              </div>

              <div className="bg-black/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-2">Capacitación</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Workshops de mejores prácticas de desarrollo</li>
                  <li>• Certificaciones en tecnologías del proyecto</li>
                  <li>• Sesiones de code review colaborativo</li>
                </ul>
              </div>

              <div className="bg-black/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-2">Herramientas</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Integración de herramientas de análisis estático</li>
                  <li>• Dashboard de métricas en tiempo real</li>
                  <li>• Alertas automáticas de degradación de performance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    headings: [
      { id: "productivity-overview", title: "Métricas de Productividad del Equipo", level: 2 },
      { id: "productivity-introduction", title: "Enfoque de Medición", level: 3 },
      { id: "velocity-metrics", title: "Métricas de Velocidad", level: 3 },
      { id: "code-quality-metrics", title: "Métricas de Calidad de Código", level: 3 },
      { id: "team-efficiency", title: "Eficiencia del Equipo", level: 3 },
      { id: "improvement-actions", title: "Acciones de Mejora", level: 3 },
    ],
  },
  "defects-usability": {
    id: "defects-usability",
    title: "Métricas de Defectos y Usabilidad",
    content: (
      <div className="space-y-6">
        <h2 id="defects-usability-overview" className="text-3xl font-bold text-white">
          Métricas de Defectos y Usabilidad
        </h2>

        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
          <h3 id="defects-introduction" className="text-2xl font-semibold text-green-400 mb-4">
            Enfoque Integral de Calidad
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Implementamos un sistema robusto de seguimiento de defectos y evaluación de usabilidad para garantizar la
            entrega de un producto de alta calidad que satisfaga las necesidades de los usuarios finales en la UPEC.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
            <h3 id="defect-metrics" className="text-2xl font-semibold text-green-400 mb-4">
              Métricas de Defectos
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-black/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Densidad de Defectos</h4>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">0.8</div>
                      <div className="text-gray-400 text-sm">Defectos por KLOC</div>
                      <div className="text-xs text-gray-500">Meta: ≤1.0</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Críticos:</span>
                        <span className="text-red-400">2</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Altos:</span>
                        <span className="text-orange-400">5</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Medios:</span>
                        <span className="text-yellow-400">12</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Bajos:</span>
                        <span className="text-green-400">8</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Tasa de Detección</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Pre-producción:</span>
                      <span className="text-green-400">92%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Testing:</span>
                      <span className="text-green-400">78%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Code Review:</span>
                      <span className="text-green-400">14%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-black/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Tiempo de Resolución</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Críticos:</span>
                      <span className="text-red-400">≤ 4 horas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Altos:</span>
                      <span className="text-orange-400">≤ 24 horas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Medios:</span>
                      <span className="text-yellow-400">≤ 3 días</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Bajos:</span>
                      <span className="text-green-400">≤ 1 semana</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Escape Rate</h4>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">3.2%</div>
                    <div className="text-gray-400 text-sm">Defectos en producción</div>
                    <div className="text-xs text-gray-500">Meta: ≤5%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-black/50 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-white mb-3">Categorización de Defectos</h4>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">35%</div>
                  <div className="text-gray-400 text-sm">Funcionalidad</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">25%</div>
                  <div className="text-gray-400 text-sm">UI/UX</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">20%</div>
                  <div className="text-gray-400 text-sm">Performance</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400">20%</div>
                  <div className="text-gray-400 text-sm">Integración</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
            <h3 id="usability-metrics" className="text-2xl font-semibold text-green-400 mb-4">
              Métricas de Usabilidad
            </h3>

            <div className="space-y-6">
              <div className="bg-black/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-3">System Usability Scale (SUS)</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">82.5</div>
                    <div className="text-gray-400">Puntuación SUS</div>
                    <div className="text-xs text-gray-500 mt-1">Meta: ≥80</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Facilidad de uso:</span>
                      <span className="text-green-400">4.2/5</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Eficiencia:</span>
                      <span className="text-green-400">4.0/5</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Satisfacción:</span>
                      <span className="text-green-400">4.3/5</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Aprendizaje:</span>
                      <span className="text-green-400">4.1/5</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-black/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Tiempo de Tareas</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Cargar ficha:</span>
                      <span className="text-green-400">45 seg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Clasificar estudiante:</span>
                      <span className="text-green-400">30 seg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Generar reporte:</span>
                      <span className="text-green-400">2 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Buscar información:</span>
                      <span className="text-green-400">15 seg</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Tasa de Éxito</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Primer intento:</span>
                      <span className="text-green-400">89%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Sin ayuda:</span>
                      <span className="text-green-400">92%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Tareas completadas:</span>
                      <span className="text-green-400">96%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Errores críticos:</span>
                      <span className="text-red-400">2%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-3">Accesibilidad</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">AA</div>
                    <div className="text-gray-400 text-sm">WCAG 2.1</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">4.8</div>
                    <div className="text-gray-400 text-sm">Contraste Ratio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">100%</div>
                    <div className="text-gray-400 text-sm">Navegación Teclado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
            <h3 id="user-feedback" className="text-2xl font-semibold text-green-400 mb-4">
              Feedback de Usuarios
            </h3>

            <div className="space-y-4">
              <div className="bg-black/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-3">Satisfacción General</h4>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">4.6/5</div>
                    <div className="text-gray-400 text-sm">Personal Administrativo</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">4.3/5</div>
                    <div className="text-gray-400 text-sm">Estudiantes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">4.8/5</div>
                    <div className="text-gray-400 text-sm">Directivos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">4.5/5</div>
                    <div className="text-gray-400 text-sm">IT Support</div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-black/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Aspectos Positivos</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Reducción significativa en tiempo de procesamiento</li>
                    <li>• Interfaz intuitiva y fácil de usar</li>
                    <li>• Precisión en la clasificación automática</li>
                    <li>• Reportes detallados y útiles</li>
                    <li>• Integración fluida con sistemas existentes</li>
                  </ul>
                </div>

                <div className="bg-black/50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Áreas de Mejora</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Velocidad de carga en conexiones lentas</li>
                    <li>• Más opciones de personalización de reportes</li>
                    <li>• Notificaciones push para actualizaciones</li>
                    <li>• Modo offline para funcionalidades básicas</li>
                    <li>• Tutorial interactivo más detallado</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
            <h3 id="improvement-plan" className="text-2xl font-semibold text-green-400 mb-4">
              Plan de Mejora Continua
            </h3>

            <div className="space-y-4">
              <div className="bg-black/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-3">Próximas Iteraciones</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="text-green-400 font-medium mb-2">Sprint Próximo</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Optimización de performance</li>
                      <li>• Corrección de bugs críticos</li>
                      <li>• Mejoras de accesibilidad</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-green-400 font-medium mb-2">Mediano Plazo</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Funcionalidades offline</li>
                      <li>• Dashboard avanzado</li>
                      <li>• Integración con más sistemas</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-green-400 font-medium mb-2">Largo Plazo</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• IA predictiva avanzada</li>
                      <li>• Análisis de tendencias</li>
                      <li>• Módulo de recomendaciones</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    headings: [
      { id: "defects-usability-overview", title: "Métricas de Defectos y Usabilidad", level: 2 },
      { id: "defects-introduction", title: "Enfoque Integral de Calidad", level: 3 },
      { id: "defect-metrics", title: "Métricas de Defectos", level: 3 },
      { id: "usability-metrics", title: "Métricas de Usabilidad", level: 3 },
      { id: "user-feedback", title: "Feedback de Usuarios", level: 3 },
      { id: "improvement-plan", title: "Plan de Mejora Continua", level: 3 },
    ],
  },
}

const teamMembers = [
  {
    name: "John Cortés",
    role: "AI Developer",
    avatar: "JC",
    gradient: "from-green-400 to-emerald-600",
  },
  {
    name: "Joel Cabrera",
    role: "Backend Developer",
    avatar: "JCa",
    gradient: "from-blue-400 to-cyan-600",
  },
  {
    name: "Diego Chavez",
    role: "Frontend Developer",
    avatar: "DC",
    gradient: "from-purple-400 to-pink-600",
  },
]

export default function Component() {
  const [currentView, setCurrentView] = useState<"home" | "documentation">("home")
  const [activeSection, setActiveSection] = useState("software-idea")
  const [expandedUnits, setExpandedUnits] = useState<string[]>(["unit1"])
  const [leftSidebarVisible, setLeftSidebarVisible] = useState(true)
  const [rightSidebarVisible, setRightSidebarVisible] = useState(true)

  const toggleUnit = (unitId: string) => {
    setExpandedUnits((prev) => (prev.includes(unitId) ? prev.filter((id) => id !== unitId) : [...prev, unitId]))
  }

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId)
  }

  const scrollToHeading = (headingId: string) => {
    const element = document.getElementById(headingId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const currentContent = contentSections[activeSection]

  if (currentView === "home") {
    return (
      <div className="min-h-screen bg-black text-white font-['Inter',_system-ui,_sans-serif]">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">UPEC AI Project</h1>
                  <p className="text-sm text-gray-400">Normativas de Software</p>
                </div>
              </div>
              <button
                onClick={() => setCurrentView("documentation")}
                className="inline-flex items-center space-x-2 bg-green-400 hover:bg-green-500 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <BookOpen className="w-5 h-5" />
                <span>Ver Documentación</span>
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
          <div className="relative max-w-7xl mx-auto px-8 py-20">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl font-bold text-white leading-tight">
                  Automatización del Análisis y Clasificación
                </h1>
                <h2 className="text-4xl font-semibold text-green-400">
                  de Fichas Socioeconómicas para una Segmentación Eficiente
                </h2>
                <h3 className="text-3xl font-medium text-gray-300">de Estudiantes en la UPEC mediante un LLM</h3>
              </div>

              <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto"></div>

              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-300 leading-relaxed">
                  Proyecto innovador que revoluciona el procesamiento de fichas socioeconómicas estudiantiles mediante
                  inteligencia artificial, transformando un proceso manual en un sistema automatizado, eficiente y
                  preciso.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 text-lg">
                <div className="flex items-center space-x-2 bg-gray-900/50 rounded-lg px-4 py-2 border border-gray-800 backdrop-blur-sm">
                  <GraduationCap className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">7mo Semestre</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-900/50 rounded-lg px-4 py-2 border border-gray-800 backdrop-blur-sm">
                  <Code className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Carrera de Computación</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-900/50 rounded-lg px-4 py-2 border border-gray-800 backdrop-blur-sm">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">UPEC - Carchi, Ecuador</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-20 bg-gray-950/50 relative">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-20 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-20 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-6xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Equipo de Desarrollo</h2>
              <p className="text-xl text-gray-400">Estudiantes de 7mo Semestre de la Carrera de Computación</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="relative group"
                  style={{
                    animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl p-8 border border-gray-800 hover:border-green-400/50 transition-all duration-500 text-center backdrop-blur-sm hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-400/10">
                    <div
                      className={`w-24 h-24 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {member.avatar}
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
                    <p className="text-green-400 font-medium mb-4">{member.role}</p>
                    <div className="space-y-2 text-gray-400">
                      <p className="flex items-center justify-center space-x-2">
                        <GraduationCap className="w-4 h-4" />
                        <span>7mo Semestre</span>
                      </p>
                      <p className="flex items-center justify-center space-x-2">
                        <Code className="w-4 h-4" />
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
        <div className="py-20 relative">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-green-400/3 rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-6xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Características del Proyecto</h2>
              <p className="text-xl text-gray-400">Tecnología de vanguardia aplicada a la gestión universitaria</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/20 rounded-xl p-8 border border-gray-800 hover:border-green-400/50 transition-all duration-300 backdrop-blur-sm hover:transform hover:scale-105 hover:shadow-xl hover:shadow-green-400/10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Automatización Inteligente</h3>
                <p className="text-gray-400 leading-relaxed">
                  Procesamiento automático de fichas socioeconómicas mediante LLM, reduciendo el tiempo de análisis de
                  30 minutos a 30 segundos por estudiante.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/20 rounded-xl p-8 border border-gray-800 hover:border-green-400/50 transition-all duration-300 backdrop-blur-sm hover:transform hover:scale-105 hover:shadow-xl hover:shadow-green-400/10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Métricas de Calidad</h3>
                <p className="text-gray-400 leading-relaxed">
                  Implementación de estándares ISO 9001 y métricas de McCall para garantizar la calidad del software y
                  la satisfacción del usuario.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/20 rounded-xl p-8 border border-gray-800 hover:border-green-400/50 transition-all duration-300 backdrop-blur-sm hover:transform hover:scale-105 hover:shadow-xl hover:shadow-green-400/10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <Workflow className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Metodología Ágil</h3>
                <p className="text-gray-400 leading-relaxed">
                  Desarrollo basado en Scrum y Kanban, con entregas incrementales y adaptabilidad a cambios en los
                  requisitos del proyecto.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-green-400/10 via-green-400/5 to-transparent relative">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Explora la Documentación Completa</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Descubre todos los detalles técnicos, metodologías aplicadas, métricas de calidad y el proceso completo de
              desarrollo de nuestro proyecto innovador.
            </p>
            <button
              onClick={() => setCurrentView("documentation")}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-black font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/25"
            >
              <BookOpen className="w-6 h-6" />
              <span>Ver Documentación</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-950 border-t border-gray-800 py-8">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center space-y-4">
              <p className="text-gray-400">
                Proyecto de Normativas de Software - Universidad Politécnica Estatal del Carchi (UPEC)
              </p>
              <p className="text-gray-500">Carchi, Ecuador - {new Date().getFullYear()}</p>
            </div>
          </div>
        </footer>

        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white font-['Inter',_system-ui,_sans-serif]">
      {/* Header - Same as home but with different CTA */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-black" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">UPEC AI Project</h1>
                <p className="text-sm text-gray-400">Documentación Técnica</p>
              </div>
            </div>
            <button
              onClick={() => setCurrentView("home")}
              className="inline-flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-gray-600"
            >
              <Home className="w-5 h-5" />
              <span>Volver al Inicio</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Left Sidebar - Navigation */}
        {leftSidebarVisible && (
          <div className="w-80 bg-gray-950 border-r border-gray-800 overflow-y-auto">
            <div className="p-6 border-b border-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl font-bold text-green-400">Documentación</h1>
                  <p className="text-sm text-gray-400 mt-1">Normativas de Software</p>
                </div>
                <button
                  onClick={() => setLeftSidebarVisible(false)}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>

            <nav className="p-4">
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.id}>
                    <button
                      onClick={() => toggleUnit(item.id)}
                      className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-gray-800 transition-colors text-left"
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <div className="text-left">
                          <div className="text-sm font-bold text-white">{item.title}</div>
                          <div className="text-xs text-gray-400 mt-1">{item.subtitle}</div>
                        </div>
                      </div>
                      {expandedUnits.includes(item.id) ? (
                        <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      )}
                    </button>

                    {expandedUnits.includes(item.id) && item.subItems && (
                      <div className="ml-8 mt-2 space-y-1">
                        {item.subItems.map((subItem) => (
                          <button
                            key={subItem.id}
                            onClick={() => handleNavClick(subItem.id)}
                            className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
                              activeSection === subItem.id
                                ? "bg-green-400/20 text-green-400 border border-green-400/30"
                                : "hover:bg-gray-800 text-gray-300"
                            }`}
                          >
                            <subItem.icon className="w-4 h-4 flex-shrink-0" />
                            <span className="text-sm">{subItem.title}</span>
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
            <div className="sticky top-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 p-4 z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {!leftSidebarVisible && (
                    <button
                      onClick={() => setLeftSidebarVisible(true)}
                      className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                  )}
                  <h1 className="text-xl font-semibold text-white">{currentContent?.title}</h1>
                </div>
                <div className="flex items-center space-x-2">
                  {!rightSidebarVisible && currentContent?.headings && currentContent.headings.length > 0 && (
                    <button
                      onClick={() => setRightSidebarVisible(true)}
                      className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-400" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto p-8">{currentContent?.content}</div>
          </div>

          {/* Right Sidebar - Table of Contents */}
          {rightSidebarVisible && currentContent?.headings && currentContent.headings.length > 0 && (
            <div className="w-64 bg-gray-950 border-l border-gray-800 overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-green-400">En esta página</h3>
                  <button
                    onClick={() => setRightSidebarVisible(false)}
                    className="p-1 hover:bg-gray-800 rounded transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
                <nav className="space-y-2">
                  {currentContent.headings.map((heading) => (
                    <button
                      key={heading.id}
                      onClick={() => scrollToHeading(heading.id)}
                      className={`block w-full text-left p-2 rounded text-sm hover:bg-gray-800 transition-colors ${
                        heading.level === 2 ? "text-white font-medium" : "text-gray-400 ml-4"
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
    </div>
  )
}
