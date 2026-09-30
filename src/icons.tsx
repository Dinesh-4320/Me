import type { ReactNode } from 'react'
import {
  siKubernetes, siDocker, siRabbitmq, siRedis, siMlflow, siOptuna, siTerraform, siAnsible,
  siHelm, siGithubactions, siArgo, siGnubash, siPython, siGo, siLinux, siIstio, siNginx,
  siPostgresql, siLangchain, siLanggraph, siGooglegemini, siClaude, siGooglecloud, siKnative,
  siGit, siGithub, siGmail, siIeee,
} from 'simple-icons'
import { Cloud, Sparkles, Bot, Rocket, Database, Send as Ship, Workflow, Boxes, Gauge, Cpu } from 'lucide-react'

type Brand = { path: string; hex: string }

const brand = (i: Brand) => ({ path: i.path, hex: i.hex })

const brands: Record<string, Brand> = {
  Kubernetes: brand(siKubernetes), Docker: brand(siDocker), RabbitMQ: brand(siRabbitmq),
  Redis: brand(siRedis), MLflow: brand(siMlflow), Optuna: brand(siOptuna),
  Terraform: brand(siTerraform), Ansible: brand(siAnsible), Helm: brand(siHelm),
  'GitHub Actions': brand(siGithubactions), ArgoCD: brand(siArgo), Bash: brand(siGnubash),
  Python: brand(siPython), Golang: brand(siGo), Linux: brand(siLinux), Istio: brand(siIstio),
  Nginx: brand(siNginx), GCP: brand(siGooglecloud), Knative: brand(siKnative), Git: brand(siGit),
  LangChain: brand(siLangchain), LangGraph: brand(siLanggraph), Gemini: brand(siGooglegemini),
  'Claude Code': brand(siClaude), 'Relational databases': brand(siPostgresql),
  GitHub: brand(siGithub), Gmail: brand(siGmail), IEEE: brand(siIeee),
}

const fallbacks: Record<string, ReactNode> = {
  AWS: <Cloud />, KServe: <Boxes />, 'Google ADK': <Bot />, Antigravity: <Rocket />,
  'European Sovereign Cloud providers': <Cloud />, 'ORM concepts': <Database />,
  'Deployment strategy': <Ship />, 'Cost estimation & optimization': <Gauge />,
  'Cloud migration': <Workflow />, Optuna: <Sparkles />,
}

const luminance = (hex: string) => {
  const n = parseInt(hex, 16)
  return (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255
}

export function TechIcon({ name }: { name: string }) {
  const b = brands[name]
  if (b) {
    const dark = luminance(b.hex) < 0.35
    return (
      <svg className="ti" viewBox="0 0 24 24" aria-hidden="true" fill={dark ? 'currentColor' : `#${b.hex}`}>
        <path d={b.path} />
      </svg>
    )
  }
  return <span className="ti" aria-hidden="true">{fallbacks[name] ?? <Cpu />}</span>
}


export const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
  </svg>
)
