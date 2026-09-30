import {
  Monitor, ShieldCheck, Globe, Container, Lock, Gpu, Database, Zap, Archive, Activity, Package, Workflow, Waypoints, FolderTree,
} from 'lucide-react'

const Y = 132
const pods = [
  { x: 380, y: 72, cls: '' },
  { x: 476, y: 72, cls: '' },
  { x: 380, y: 136, cls: 'scale scale-a' },
  { x: 476, y: 136, cls: 'scale scale-b' },
]

function Node({ x, y, w = 88, label, sub, children }: { x: number; y: number; w?: number; label: string; sub: string; children: React.ReactNode }) {
  return (
    <g className="node">
      <rect x={x} y={y} width={w} height={84} rx={12} />
      {children}
      <text x={x + w / 2} y={y + 62}>{label}</text>
      <text className="cap" x={x + w / 2} y={y + 75}>{sub}</text>
    </g>
  )
}

function Chip({ x, y, w, label, icon }: { x: number; y: number; w: number; label: string; icon: React.ReactNode }) {
  return (
    <g className="node small">
      <rect x={x} y={y} width={w} height={44} rx={10} />
      <svg x={x + 10} y={y + 12} width={20} height={20} className="ic-slot">{icon}</svg>
      <text className="left" x={x + 38} y={y + 27}>{label}</text>
    </g>
  )
}

function Badge({ x, y }: { x: number; y: number }) {
  return (
    <g className="badge-lock">
      <circle cx={x} cy={y} r={11} />
      <Lock x={x - 6} y={y - 6} width={12} height={12} className="ic ok" />
    </g>
  )
}

export default function ClusterViz() {
  return (
    <figure className="cluster" aria-label="Architecture diagram: clients reach a CDN and gateway, then a Kubernetes cluster with autoscaled services, a job queue, scale-to-zero GPU workers and a shared filesystem; services use a cache and database with backups, GPU workers pull versioned models, and monitoring spans everything">
      <div className="cluster-scroll">
        <svg viewBox="0 0 1000 400" aria-hidden="true">
          <g className="links">
            <path className="flow" d={`M88 ${Y}H118`} />
            <path className="flow" d={`M206 ${Y}H236`} />
            <path className="flow" d={`M324 ${Y}H380`} />
            <path className="flow" d={`M570 ${Y}H620`} />
            <path className="flow" d={`M730 ${Y}H790`} />
          </g>
          <g className="links data">
            <path className="flow soft" d="M414 208V298" />
            <path className="flow soft" d="M540 208V298" />
            <path className="flow soft" d="M600 320H616" />
            <path className="flow soft" d="M560 208V238H630" />
            <path className="flow soft" d="M780 238H900V208" />
            <path className="flow soft" d="M860 208V298" />
          </g>

          <Node x={0} y={90} label="client" sub="web · api">
            <Monitor x={29} y={102} width={30} height={30} className="ic" />
          </Node>
          <Node x={118} y={90} label="cdn" sub="edge cache">
            <Globe x={149} y={102} width={30} height={30} className="ic" />
          </Node>
          <Node x={236} y={90} label="gateway" sub="firewall · lb">
            <Waypoints x={267} y={102} width={30} height={30} className="ic" />
            <ShieldCheck x={302} y={94} width={16} height={16} className="ic ok" />
          </Node>

          <rect className="group trust" x="354" y="14" width="592" height="258" rx="16" />
          <Lock x={366} y={22} width={14} height={14} className="ic ok" />
          <text className="cap trust-cap" x="386" y="34">kubernetes cluster · private network</text>

          <rect className="group" x="370" y="44" width="200" height="164" rx="12" />
          <text className="cap left" x="382" y="62">services · autoscaling 2→4</text>
          {pods.map((p) => (
            <g key={`${p.x}-${p.y}`} className={`pod ${p.cls}`}>
              <rect x={p.x} y={p.y} width={84} height={56} rx={9} />
              <Container x={p.x + 10} y={p.y + 14} width={24} height={24} className="ic" />
              <text className="left" x={p.x + 40} y={p.y + 30}>svc</text>
              <text className="cap left" x={p.x + 40} y={p.y + 43}>pod</text>
            </g>
          ))}

          <g className="pipe">
            <rect x="620" y="100" width="110" height="64" rx="12" className="tube" />
            <Workflow x={661} y={70} width={28} height={28} className="ic" />
            <g className="belt">
              {[0, 1, 2, 3].map((i) => <rect key={i} x={632 + i * 26} y={122} width={16} height={20} rx={4} className="job" />)}
            </g>
            <text x="675" y="186">queue · pipeline</text>
            <text className="cap" x="675" y="200">async jobs</text>
          </g>

          <Chip x={630} y={216} w={150} label="filesystem" icon={<FolderTree className="ic" width={20} height={20} />} />

          <rect className="group" x="790" y="44" width="140" height="164" rx="14" />
          <text className="cap left" x="802" y="62">gpu workers · 0↔N</text>
          <g className="gpu-card">
            <rect x="802" y="74" width="116" height="56" rx="10" />
            <Gpu x={810} y={88} width={26} height={26} className="ic ok" />
            <text className="left" x="844" y="98">gpu-0</text>
            <rect className="util" x="844" y="108" width="62" height="6" rx="3" />
          </g>
          <g className="gpu-card idle">
            <rect x="802" y="140" width="116" height="56" rx="10" />
            <Gpu x={810} y={154} width={26} height={26} className="ic ok" />
            <text className="left" x="844" y="164">gpu-1</text>
            <rect className="util" x="844" y="174" width="62" height="6" rx="3" />
          </g>

          <Chip x={364} y={298} w={100} label="cache" icon={<Zap className="ic" width={20} height={20} />} />
          <Chip x={480} y={298} w={120} label="database" icon={<Database className="ic" width={20} height={20} />} />
          <Chip x={616} y={298} w={100} label="backups" icon={<Archive className="ic ok" width={20} height={20} />} />
          <Chip x={800} y={298} w={120} label="models" icon={<Package className="ic" width={20} height={20} />} />

          <g className="node small">
            <rect x="354" y="358" width="592" height="34" rx="10" />
            <Activity x={366} y={366} width={18} height={18} className="ic" />
            <text className="left" x="394" y="379">monitoring · logs · alerts</text>
            <path className="flow pulse" d="M640 375h50l8-12 10 22 9-16 6 6h60l8-10 10 18 8-8h50" />
          </g>

          <Badge x={221} y={Y} />
          <Badge x={339} y={Y} />

          <circle className="pkt" r="4"><animateMotion dur="5s" repeatCount="indefinite" path={`M0 ${Y}H960`} /></circle>
          <circle className="pkt" r="4"><animateMotion dur="5s" begin="2.5s" repeatCount="indefinite" path={`M0 ${Y}H960`} /></circle>
        </svg>
      </div>
    </figure>
  )
}
