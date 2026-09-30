import { Container, Server, Cloud, Cpu, Lock, Database, Boxes, GitBranch, Network, Gpu } from 'lucide-react'

const floaters = [
  { I: Container, top: '10%', left: '4%', s: 44, d: 22 },
  { I: Server, top: '22%', left: '90%', s: 52, d: 26 },
  { I: Cloud, top: '38%', left: '6%', s: 60, d: 30 },
  { I: Cpu, top: '52%', left: '93%', s: 40, d: 24 },
  { I: Lock, top: '64%', left: '3%', s: 34, d: 20 },
  { I: Database, top: '76%', left: '88%', s: 48, d: 28 },
  { I: Boxes, top: '88%', left: '8%', s: 46, d: 25 },
  { I: GitBranch, top: '30%', left: '48%', s: 30, d: 21 },
  { I: Network, top: '70%', left: '50%', s: 36, d: 27 },
  { I: Gpu, top: '92%', left: '70%', s: 42, d: 23 },
]

const nodes = [[30, 40], [120, 20], [210, 70], [90, 120], [190, 160], [40, 190], [250, 200]]
const edges = [[0, 1], [1, 2], [0, 3], [3, 2], [3, 4], [2, 4], [3, 5], [4, 6], [5, 4]]

export default function BackgroundViz() {
  return (
    <div className="bg-viz" aria-hidden="true">
      {floaters.map(({ I, top, left, s, d }, i) => (
        <span key={i} className="floater" style={{ top, left, animationDuration: `${d}s`, animationDelay: `${-i * 3}s` }}>
          <I width={s} height={s} />
        </span>
      ))}

      <svg className="bg-graph" viewBox="0 0 280 220">
        {edges.map(([a, b], i) => (
          <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />
        ))}
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={5} style={{ animationDelay: `${-i * 0.7}s` }} />
        ))}
      </svg>

      <svg className="bg-rack" viewBox="0 0 120 200">
        {[0, 1, 2, 3].map((i) => (
          <g key={i} transform={`translate(0 ${i * 48})`}>
            <rect x="4" y="4" width="112" height="40" rx="6" />
            <line x1="16" y1="24" x2="70" y2="24" />
            <circle cx="92" cy="16" r="3" style={{ animationDelay: `${-i * 0.9}s` }} />
            <circle cx="104" cy="16" r="3" style={{ animationDelay: `${-i * 0.5 - 0.4}s` }} />
          </g>
        ))}
      </svg>
    </div>
  )
}
