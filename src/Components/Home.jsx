import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from "react-bootstrap";
import { FiArrowRight, FiMail, FiGithub, FiSend } from "react-icons/fi";
import Image1 from "../assets/1.jpg";
import Image2 from "../assets/2.jpg";
import Image3 from "../assets/3.png";
import Image4 from "../assets/4.jpg";

export default function Home() {
  // Реф для скролла к проектам
  const projectsRef = useRef(null);
  
  // Функция плавного скролла
  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Анимация элементов при скролле
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(el => {
        const elementPosition = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight - 100) {
          el.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  // Данные проектов
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "React · Node.js",
      image: Image1
    },
    {
      title: "Portfolio CMS",
      category: "Next.js · GraphQL",
      image: Image2
    },
    {
      title: "Analytics Dashboard",
      category: "TypeScript · D3.js",
      image: Image3
    },
    {
      title: "Mobile App",
      category: "React Native · Firebase",
      image: Image4
    }
  ];

  return (
    <div className="bg-dark text-light" style={{ overflowX: 'hidden' }}>
      {/* ======= Навигация ======= */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top py-3">
        <Container fluid="xxl">
          <Link className="navbar-brand fs-4 fw-light letter-spacing-2" to="/">
            STARIKOV
          </Link>
          <div className="d-flex">
            <ul className="navbar-nav">
              <li className="nav-item mx-3">
                <Link className="nav-link position-relative hover-underline" to="/">
                  <span className="position-relative">HOME</span>
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link position-relative hover-underline" to="/">
                  <span className="position-relative">WORK</span>
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link position-relative hover-underline" to="/">
                  <span className="position-relative">CONTACT</span>
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </nav>

      {/* ======= Герой секция ======= */}
      <section className="min-vh-100 d-flex align-items-center position-relative overflow-hidden">
        <div className="position-absolute w-100 h-100 bg-noise" style={{ opacity: 0.03 }}></div>
        <Container fluid="xxl" className="py-5 mt-5">
          <Row className="align-items-center">
            <Col lg={6} className="fade-in">
              <h1 className="display-3 fw-light mb-4">
                MAXIM <span className="fw-bold">STARIKOV</span>
              </h1>
              <div className="border-start border-light ps-3 mb-5">
                <p className="text-uppercase letter-spacing-3 mb-1">Frontend Developer</p>
                <p className="text-muted mb-0">Creating digital experiences</p>
              </div>
              <Button 
                variant="outline-light" 
                size="lg" 
                className="rounded-0 px-4 py-3 d-flex align-items-center gap-2 hover-scale"
                onClick={scrollToProjects}
              >
                View Projects <FiArrowRight />
              </Button>
            </Col>
            <Col lg={6} className="fade-in">
              <div className="position-relative">
                <div className="ratio ratio-1x1 bg-light opacity-10">
                  <img 
                    src="https://i.vuzopedia.ru/storage/app/uploads/public/671/3d6/209/6713d6209bed2213594066.jpeg"
                    className="object-fit-cover w-100 h-100"
                    alt="Maxim Starikov"
                  />
                </div>
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                  <div className="text-center">
                    <div className="mb-3" style={{ fontSize: '2rem' }}>👨‍💻</div>
                    <p className="mb-0 fw-bolder text-uppercase letter-spacing-3">Available for work</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ======= Секция проектов ======= */}
      <section className="py-5 position-relative" ref={projectsRef}>
        <Container fluid="xxl" className="py-5">
          <Row className="mb-5 fade-in">
            <Col>
              <h2 className="display-5 fw-light text-center mb-0">
                SELECTED <span className="fw-bold">WORKS</span>
              </h2>
            </Col>
          </Row>
          
          <Row className="g-4">
            {projects.map((project, index) => (
              <Col md={6} key={index} className="fade-in">
                <div 
                  className="project-card position-relative overflow-hidden bg-black"
                  style={{ height: '500px' }}
                >
                  <div 
                    className="w-100 h-100 bg-position-center bg-size-cover transition-all"
                    style={{ 
                      backgroundImage: `url(${project.image})`,
                      opacity: 0.7
                    }}
                  ></div>
                  <div className="position-absolute bottom-0 start-0 p-4 w-100 project-info">
                    <h3 className="text-white mb-1">{project.title}</h3>
                    <p className="text-muted mb-0">{project.category}</p>
                    <div className="mt-3">
                      <Button variant="outline-light" size="sm" className="rounded-0">
                        View Case
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ======= Секция "Обо мне" ======= */}
      <section className="py-5 position-relative">
        <Container fluid="xxl" className="py-5">
          <Row className="align-items-center">
            <Col lg={6} className="fade-in">
              <div className="ratio ratio-1x1">
                <img 
                  src="https://colodu.club/uploads/posts/2022-11/1667337100_16-colodu-club-p-ofis-bank-pinterest-16.jpg" 
                  alt="About Maxim"
                  className="object-fit-cover w-100 h-100"
                />
              </div>
            </Col>
            <Col lg={6} className="fade-in ps-lg-5 mt-5 mt-lg-0">
              <h2 className="display-5 fw-light mb-4">
                ABOUT <span className="fw-bold">ME</span>
              </h2>
              <p className="lead mb-4">
                Specializing in building exceptional digital experiences. Currently focused on creating accessible, human-centered products.
              </p>
              <div className="d-flex gap-3">
                <Button variant="outline-light" className="rounded-0 d-flex align-items-center gap-2 hover-scale">
                  <FiMail /> Email
                </Button>
                <Button variant="outline-light" className="rounded-0 d-flex align-items-center gap-2 hover-scale">
                  <FiGithub /> GitHub
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ======= Секция контактов ======= */}
      <section className="py-5 position-relative bg-black">
        <Container fluid="xxl" className="py-5">
          <Row className="fade-in">
            <Col>
              <h2 className="display-5 fw-light text-center mb-5">
                LET'S <span className="fw-bold">CONNECT</span>
              </h2>
              <div className="text-center">
                <Button 
                  variant="light" 
                  size="lg" 
                  className="rounded-0 px-5 py-3 d-inline-flex align-items-center gap-2 hover-scale"
                >
                  Get in Touch <FiSend />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ======= Футер ======= */}
      <footer className="py-4 border-top border-secondary">
        <Container fluid="xxl">
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
              <p className="mb-0 small text-muted">© {new Date().getFullYear()} MAXIM STARIKOV</p>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <div className="d-flex justify-content-center justify-content-md-end gap-3">
                <a href="#" className="text-muted hover-white">
                  <FiGithub size={20} />
                </a>
                <a href="#" className="text-muted hover-white">
                  <FiMail size={20} />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Глобальные стили */}
      <style>{`
        .letter-spacing-2 { letter-spacing: 2px; }
        .letter-spacing-3 { letter-spacing: 3px; }
        .bg-noise { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)' opacity='0.3'/%3E%3C/svg%3E"); }
        .hover-underline::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 0; height: 1px; background: white; transition: width 0.3s ease; }
        .hover-underline:hover::after { width: 100%; }
        .hover-scale { transition: transform 0.3s ease; }
        .hover-scale:hover { transform: translateY(-3px); }
        .hover-white { transition: color 0.3s ease; }
        .hover-white:hover { color: white !important; }
        .fade-in { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .fade-in.animated { opacity: 1; transform: translateY(0); }
        .project-card:hover .project-info { transform: translateY(0); }
        .project-info { transform: translateY(20px); transition: transform 0.4s ease; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%); }
      `}</style>
    </div>
  );
}