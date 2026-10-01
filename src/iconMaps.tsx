import type { ReactNode } from 'react'
import { LinkedinIcon } from './icons'
import {
  Cloud, Sparkles, Database, Workflow, ShieldCheck, Network, Layers, Award, Trophy, BookOpen,
  Briefcase, FolderGit2, Mail, Brain, Boxes, TerminalSquare, Gauge, Cpu, Rocket, Activity,
} from 'lucide-react'

export const groupIcons: Record<string, ReactNode> = {
  'AI & Agentic Tooling': <Brain />, 'Cloud Platforms': <Cloud />, 'Containers & Orchestration': <Boxes />,
  MLOps: <Sparkles />, 'Infrastructure as Code': <Layers />, 'CI/CD & Automation': <Workflow />,
  'Monitoring & Observability': <Activity />, Languages: <TerminalSquare />, 'OS & Networking': <Network />, Databases: <Database />, Core: <ShieldCheck />,
}

export const sectionIcons: Record<string, ReactNode> = {
  experience: <Briefcase />, skills: <Cpu />, projects: <FolderGit2 />, credentials: <Award />, contact: <Mail />,
}

export const ui = {
  Award: <Award />, Trophy: <Trophy />, BookOpen: <BookOpen />, Mail: <Mail />, Linkedin: <LinkedinIcon />,
  Briefcase: <Briefcase />, Gauge: <Gauge />, Rocket: <Rocket />, Workflow: <Workflow />,
}
