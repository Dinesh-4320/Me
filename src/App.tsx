
import './App.css';
import dboLogo from './assets/DBO.png';
import profileImage from './assets/dinesh.png';
import amritaLogo from './assets/amrita.png';


function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="website-container">
      {/* Navigation Header */}
        {/* Navigation */}
        <nav className="navbar">
          <div className="nav-container">
            <ul className="nav-menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#certifications">Certifications</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-background">
          {/* Animated Background Particles */}
          <div className="particles">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="floating-elements">
            <div className="floating-icon floating-icon-1">⚡</div>
            <div className="floating-icon floating-icon-2">🚀</div>
            <div className="floating-icon floating-icon-3">☁️</div>
            <div className="floating-icon floating-icon-4">🔧</div>
            <div className="floating-icon floating-icon-5">⚙️</div>
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Hi, I'm Dinesh Kumar.N</h1>
            <h2 className="hero-subtitle">DevOps Engineer & Cloud Specialist</h2>
            <p className="hero-description">
              I build and maintain scalable cloud infrastructure, automate deployment pipelines, 
              and ensure high-availability systems. Currently pursuing B.Tech in Computer Science 
              Engineering with a focus on Cybersecurity.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollToSection('about')}>Learn More</button>
              <button className="btn-secondary" onClick={() => scrollToSection('contact')}>Get In Touch</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img src={profileImage} alt="Dinesh Kumar" className="hero-photo" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Passionate about building scalable infrastructure and automating complex systems</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a DevOps Engineer with a passion for cloud technologies and automation.
              </p>
              <p>
                My expertise lies in building microservice-based applications, implementing CI/CD pipelines, 
                and ensuring secure deployment practices. I've successfully reduced manual deployment processes 
                by 90% through automation and enabled scalable deployments across multiple cloud environments.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <h3>2+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-item">
                  <h3>90%</h3>
                  <p>Deployment Automation</p>
                </div>
                <div className="stat-item">
                  <h3>15+</h3>
                  <p>Technologies</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="education-card">
                <div className="education-header">
                  <img src={amritaLogo} alt="Amrita University" className="university-logo" />
                  <div className="education-details">
                    <strong>B.Tech Computer Science Engineering</strong>
                    <p>Cybersecurity Specialization</p>
                    <p>Amrita Vishwa Vidyapeetham</p>
                    <div className="education-meta">
                      <span className="duration">2021 - 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Professional Experience</h2>
            <p className="section-subtitle">Building scalable infrastructure and automating deployment pipelines</p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">April 2024 - Present</div>
                <div className="company-header">
                  <img src={dboLogo} alt="Digital Back Office" className="company-logo" />
                  <div className="company-info">
                    <h3>Software Engineer</h3>
                    <p>Digital Back Office</p>
                  </div>
                </div>
                <ul className="achievements-list">
                  <li>Built a microservice-based data engineering application - Dataflow</li>
                  <li>Reduced 90% of manual application deployment using automation scripts</li>
                  <li>Enabled scalable deployments across multiple environments and cloud providers</li>
                  <li>Technologies: Kubernetes, Helm, Terraform, Bash, Python, etc.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle">Tools and technologies I work with</p>
          </div>
          <div className="skills-categories">
            <div className="skill-category">
              <h3 className="skills-category-title">Cloud Platforms</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="skill-icon" />
                  <div className="skill-name">AWS</div>
                </div>
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="GCP" className="skill-icon" />
                  <div className="skill-name">GCP</div>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skills-category-title">Containerization & Orchestration</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" className="skill-icon" />
                  <div className="skill-name">Kubernetes</div>
                </div>
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="skill-icon" />
                  <div className="skill-name">Docker</div>
                </div>
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg" alt="RabbitMQ" className="skill-icon" />
                  <div className="skill-name">RabbitMQ</div>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skills-category-title">MLOps</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <img src="https://www.mlflow.org/docs/latest/_static/MLflow-logo-final-black.png" alt="MLFlow" className="skill-icon" />
                  <div className="skill-name">MLFlow</div>
                </div>
                <div className="skill-item">
                  <img src="https://raw.githubusercontent.com/kserve/website/master/static/images/KServe-logo-black.png" alt="Kserve" className="skill-icon" />
                  <div className="skill-name">Kserve</div>
                </div>
                <div className="skill-item">
                  <img src="https://optuna.org/assets/img/logo/optuna-logo-dark.png" alt="Optuna" className="skill-icon" />
                  <div className="skill-name">Optuna</div>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skills-category-title">Infrastructure as Code</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" alt="Terraform" className="skill-icon" />
                  <div className="skill-name">Terraform</div>
                </div>
                <div className="skill-item">
                  <img src="https://www.vectorlogo.zone/logos/helmsh/helmsh-icon.svg" alt="Helm" className="skill-icon" />
                  <div className="skill-name">Helm</div>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skills-category-title">CI/CD & Automation</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub Actions" className="skill-icon" />
                  <div className="skill-name">GitHub Actions</div>
                </div>
                <div className="skill-item">
                  <img src="https://www.vectorlogo.zone/logos/fluxcdio/fluxcdio-icon.svg" alt="FluxCD" className="skill-icon" />
                  <div className="skill-name">FluxCD</div>
                </div>
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="Jenkins" className="skill-icon" />
                  <div className="skill-name">Jenkins</div>
                </div>
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" alt="Bash" className="skill-icon" />
                  <div className="skill-name">Bash</div>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skills-category-title">Programming Languages</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="skill-icon" />
                  <div className="skill-name">Python</div>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skills-category-title">Operating Systems & Networking</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" className="skill-icon" />
                  <div className="skill-name">Linux</div>
                </div>
                <div className="skill-item">
                  <img src="https://istio.io/latest/img/istio-logo-social.png" alt="Istio" className="skill-icon" />
                  <div className="skill-name">Istio</div>
                </div>
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" alt="Nginx" className="skill-icon" />
                  <div className="skill-name">Nginx</div>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skills-category-title">Databases</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="Relational Databases" className="skill-icon" />
                  <div className="skill-name">Relational Databases</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              Explore my recent projects and technical implementations
            </p>
          </div>
          <div className="projects-grid">
            <div className="project-card" onClick={() => window.open('#', '_blank')}>
              <div className="project-header">
                <h3 className="project-title">Zero Trust Architecture for Microservice Based Environments</h3>
              </div>
              <div className="project-description">
                <ul>
                  <li>Continuous Authentication and Authorization were implemented using JWT and RBAC on service accounts using PEPs</li>
                  <li>mTLS protocol and policy enforcement points enforced to secure the traffic flowing within Kubernetes clusters</li>
                  <li>Real time threat detection has been implemented and automated the alerting mechanism in case of security breach</li>
                </ul>
              </div>
              <div className="project-tags">
                <span className="tag">Kubernetes</span>
                <span className="tag">JWT</span>
                <span className="tag">RBAC</span>
                <span className="tag">mTLS</span>
              </div>
            </div>

            <div className="project-card" onClick={() => window.open('#', '_blank')}>
              <div className="project-header">
                <h3 className="project-title">Secure CI/CD Pipeline for a Web Application</h3>
              </div>
              <div className="project-description">
                <ul>
                  <li>Constructed a Jenkins CI/CD pipeline that performs 3 security testing procedures namely SCA, SAST and DAST</li>
                  <li>Developed a React JS based Web application that works with an API consisting of more than 100 records</li>
                  <li>Automated the infrastructure deployment using Terraform and Ansible playbooks</li>
                </ul>
              </div>
              <div className="project-tags">
                <span className="tag">Jenkins</span>
                <span className="tag">React JS</span>
                <span className="tag">Terraform</span>
                <span className="tag">Ansible</span>
              </div>
            </div>

            <div className="project-card" onClick={() => window.open('#', '_blank')}>
              <div className="project-header">
                <h3 className="project-title">Load Balancing and Autoscaling Infrastructure using IaC (Terraform)</h3>
              </div>
              <div className="project-description">
                <ul>
                  <li>Configured nearly 20 resources from 5 services in AWS Cloud using Terraform</li>
                  <li>Implemented Jenkins to automate infrastructure deployment, resulting in a 90% decrease in application downtime and ensuring seamless delivery</li>
                  <li>Managed to dynamically scale the infrastructure up and down when the traffic load was above 70% and below 30%</li>
                </ul>
              </div>
              <div className="project-tags">
                <span className="tag">AWS</span>
                <span className="tag">Terraform</span>
                <span className="tag">Jenkins</span>
                <span className="tag">Auto Scaling</span>
              </div>
            </div>

            <div className="project-card" onClick={() => window.open('#', '_blank')}>
              <div className="project-header">
                <h3 className="project-title">MovieTime</h3>
              </div>
              <div className="project-description">
                <ul>
                  <li>Designed a ReactJS and Python based Streaming application which can stream more than 15 genres of movies</li>
                  <li>Leveraged the power of IMdB API which holds the metadata of almost 6 million movies</li>
                  <li>Enhanced application performance and user experience</li>
                </ul>
              </div>
              <div className="project-tags">
                <span className="tag">React JS</span>
                <span className="tag">Python</span>
                <span className="tag">IMdB API</span>
                <span className="tag">Streaming</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Publications Section */}
      <section id="certifications" className="section certifications-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Certifications & Publications</h2>
            <p className="section-subtitle">
              Professional certifications and published research work
            </p>
          </div>
          <div className="certifications-content">
            <div className="certifications-category">
              <h3 className="category-title">Certifications</h3>
              <div className="certification-item" onClick={() => window.open('https://www.linkedin.com/posts/dinesh-kumar-346583241_certificate-activity-7097897350035111936-nQFe?utm_source=share&utm_medium=member_desktop', '_blank')}>
                <div className="cert-header">
                  <div className="cert-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L13.09 8.26L19 7.27L14.18 12.18L21 17L13.09 15.74L12 22L10.91 15.74L3 17L8.82 12.18L2 7.27L7.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" fill="var(--accent-primary)"/>
                    </svg>
                  </div>
                  <div className="cert-details">
                    <h4 className="cert-title">AWS Cloud Practitioner</h4>
                    <p className="cert-issuer">Amazon Web Services</p>
                  </div>
                </div>
                <div className="cert-description">
                  <p>Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.</p>
                </div>
                <div className="cert-link">
                  <span>View Certificate →</span>
                </div>
              </div>
            </div>

            <div className="certifications-category">
              <h3 className="category-title">Publications</h3>
              <div className="publication-item" onClick={() => window.open('https://ieeexplore.ieee.org/document/10960955', '_blank')}>
                <div className="pub-header">
                  <div className="pub-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" fill="var(--accent-primary)" fillOpacity="0.1"/>
                      <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2"/>
                      <path d="M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="pub-details">
                    <h4 className="pub-title">Zero Trust Security for Web Applications in Microservice-Based Environments</h4>
                    <p className="pub-venue">IEEE Xplore Digital Library</p>
                  </div>
                </div>
                <div className="pub-description">
                  <p>Research paper focusing on implementing Zero Trust architecture principles for securing web applications in microservice environments.</p>
                </div>
                <div className="pub-link">
                  <span>Read Publication →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-subtitle">
                Ready to discuss your next project? Let's connect and create something amazing together.
              </p>
            </div>
            <div className="contact-content">
              <div className="contact-info">
                <h3>Contact Information</h3>
                <a href="mailto:n.dinesh4320@gmail.com" className="contact-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>n.dinesh4320@gmail.com</span>
                </a>
                <a href="https://linkedin.com/in/dinesh-kumar-346583241" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#0077B5" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <span>linkedin.com/in/dinesh-kumar-346583241</span>
                </a>
                <a href="https://github.com/Dinesh-4320" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <span>github.com/Dinesh-4320</span>
                </a>
              </div>
              <div className="contact-form">
                <h3>Send a Message</h3>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-submit">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-text">
              <p>&copy; 2025 Dinesh Kumar N. All rights reserved.</p>
            </div>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#certifications">Certifications</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
