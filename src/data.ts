export const profile = {
  name: 'Dinesh Kumar N',
  role: 'DevOps / MLOps Engineer',
  summary:
    'Around 2+ years of experience operating microservice-based and ML-driven applications. I orchestrate scalable workloads on Kubernetes and automate the model lifecycle with IaC and CI/CD, with a track record in deployment strategy, cloud migration and cost optimization.',
  email: 'n.dinesh4320@gmail.com',
  github: 'https://github.com/Dinesh-4320',
  linkedin: 'https://www.linkedin.com/in/dinesh-kumar-n-346583241/',
}

export const openTo = ['Full-time', 'Contract', 'Freelance']

export const stats = [
  { icon: 'Briefcase', value: '2+', label: 'Years experience' },
  { icon: 'Workflow', value: '~90%', label: 'Manual deployments removed' },
  { icon: 'Gauge', value: '~80%', label: 'GPU infra cost reduced' },
  { icon: 'Rocket', value: '75%', label: 'Faster pod startup' },
]

export const experience = {
  title: 'DevOps Engineer',
  company: 'Digital Back Office',
  period: 'Apr 2024 – Present',
  products: [
    {
      name: 'Musecool',
      url: 'https://themuse.musecool.com',
      points: [
        'Migrated a monolithic 3-tier application to 4 containerized microservices, improving scalability and fault isolation.',
        'Enforced auto-scaling for GPU workloads with KServe and Knative using a scale-to-zero strategy, reducing infrastructure costs by ~80% while keeping on-demand performance.',
        'Integrated MLflow for experiment tracking and model versioning, enabling reproducible ML workflows and streamlined promotion of models to production.',
        'Used Redis and RabbitMQ to buffer and streamline delivery of music recordings to the inference services, preventing overload.',
        'Introduced Optuna to optimize model hyperparameters for continuously changing input data.',
        'Structured CI/CD pipelines across staging and production, eliminating 90% of manual deployments.',
        'Planned the cloud migration from GCP to AWS with nearly zero downtime using a Blue/Green deployment strategy.',
      ],
    },
    {
      name: 'Dataflow',
      url: 'https://app.dataflow.zone',
      points: [
        'Architected a production-grade microservices platform across multiple Kubernetes clusters (dev, staging, prod), supporting 9+ deployments with high availability and operational consistency.',
        'Built and standardized CI/CD pipelines for containerized workloads, cutting manual deployment effort by ~90% and enabling fast, repeatable releases across AWS and GCP.',
        'Reduced Kubernetes pod startup latency by 75% with container image snapshotting and warm-up instances, improving scale-out during traffic spikes.',
        'Replaced NFS-based Python environment mounts with a SquashFS-based distribution system using Kubernetes mount propagation, cutting pod initialization time by 60% and removing I/O contention under load.',
        'Automated infrastructure provisioning with Terraform and Helm, enforcing Infrastructure as Code across environments and reliably supporting 100+ concurrent users.',
        'Engineered a scheduled billing pipeline aggregating data from 6 platform features, delivering accurate periodic billing without manual intervention.',
      ],
    },
  ],
  tech: ['Kubernetes', 'Helm', 'KServe', 'Istio', 'MLflow', 'AWS', 'GCP', 'Terraform', 'Git', 'Bash', 'Python', 'Linux'],
}

export const skills = [
  { group: 'AI & Agentic Tooling', items: ['LangChain', 'LangGraph', 'Google ADK', 'Gemini', 'Claude Code', 'Antigravity'] },
  { group: 'Cloud Platforms', items: ['AWS', 'GCP', 'European Sovereign Cloud providers'] },
  { group: 'Containers & Orchestration', items: ['Kubernetes', 'Docker', 'RabbitMQ', 'Redis'] },
  { group: 'MLOps', items: ['MLflow', 'KServe', 'Optuna'] },
  { group: 'Infrastructure as Code', items: ['Terraform', 'Ansible', 'Helm'] },
  { group: 'CI/CD & Automation', items: ['GitHub Actions', 'ArgoCD', 'Bash'] },
  { group: 'Monitoring & Observability', items: ['Prometheus', 'Grafana', 'Loki'] },
  { group: 'Languages', items: ['Python', 'Golang'] },
  { group: 'OS & Networking', items: ['Linux', 'Istio', 'Nginx'] },
  { group: 'Databases', items: ['Relational databases', 'ORM concepts'] },
  { group: 'Core', items: ['Deployment strategy', 'Cost estimation & optimization', 'Cloud migration'] },
]

export const projects = [
  {
    file: 'crack-detection.yaml',
    title: 'Crack Detection in Tunnels',
    subtitle: 'MLOps pipeline for infrared image analysis',
    points: [
      'Containerized the trained model and deployed it on Kubernetes with KServe for scalable, production-ready inference endpoints.',
      'Scaled inference with Knative, letting the service scale to zero when idle to cut cost while staying on-demand.',
      'Tracked experiments, model versions and artifacts with MLflow for reproducible training and model comparison.',
      'Built a CI/CD pipeline that triggers model build, validation and deployment for updated datasets and model versions.',
      'Automated reporting that delivers crack detection results to field engineers for faster inspection planning.',
    ],
    tags: ['KServe', 'Knative', 'MLflow', 'Kubernetes', 'CI/CD'],
  },
  {
    file: 'zero-trust.yaml',
    title: 'Zero Trust Architecture',
    subtitle: 'For microservice-based environments',
    points: [
      'Designed a Zero Trust model for Kubernetes microservices with JWT identity validation and RBAC-controlled service accounts across 10+ microservices.',
      'Secured east-west traffic with mutual TLS and Policy Enforcement Points, protecting ~99% of inter-service communication across namespaces.',
      'Set up real-time threat detection and automated alerting, catching policy violations and breaches in 10+ simulated attack scenarios.',
    ],
    tags: ['Kubernetes', 'mTLS', 'JWT', 'RBAC', 'Istio'],
  },
]

export const certifications: { icon: string; name: string; issuer: string; period: string; url: string; note?: string }[] = [
  { icon: 'Kubernetes', name: 'Certified Kubernetes Administrator', issuer: 'CNCF & Linux Foundation', period: 'Mar 2026 – Mar 2028',
    url: 'https://www.linkedin.com/in/dinesh-kumar-n-346583241/overlay/Certifications/550127110/treasury?profileId=ACoAADwQKiYBJz1ERA485HU9aVpV_mMdm4gYKPs' },
  { icon: 'AWS', name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', period: 'Aug 2023 – Feb 2029', note: 'Recertified',
    url: 'https://www.linkedin.com/in/dinesh-kumar-n-346583241/overlay/Certifications/52955358/treasury?profileId=ACoAADwQKiYBJz1ERA485HU9aVpV_mMdm4gYKPs' },
]

export const achievements = [
  { title: '3rd place among 20 teams', detail: "Cryptoshield Hackathon, Tantrotsav'24 · Amrita Vishwa Vidyapeetham" },
  { title: '5th place among 50 teams', detail: "NOVA CTF'22 · Kumaraguru College of Technology" },
]

export const publication = {
  title: 'Zero Trust Security for Web Applications in Microservice-Based Environment',
  venue: 'IEEE Xplore',
  icon: 'IEEE',
  url: 'https://ieeexplore.ieee.org/document/10960955',
}

export const education = {
  degree: 'B.Tech CSE (Cybersecurity)',
  school: 'Amrita Vishwa Vidyapeetham (Deemed University)',
  period: 'Oct 2021 – Apr 2025',
}
