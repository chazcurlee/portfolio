import { ReactComponent as MyPic } from "../assets/img/pfp-group.svg";
import resume from "../assets/img/resume.png";
import { useState, useEffect } from "react";
import ProjectList from "../components/ProjectList";

const AboutMe = () => {
  return (
    <div className="comp width-100-prct display-flex just-cont-center align-cont-center">
      <h1 className="about-title">About Me</h1>
      <div className="divider" />
      <div
        className=" paddingless just-self-center align-self-center just-cont-center display-flex"
        id="about-me"
      >
        <div className="about-body">
          <p>
            As a child, I fell in love with programming while playing the
            greatest game of all time, Minecraft. A mod within the game (called
            ComputerCraft) allowed for the player to program different
            interactions within the game. My favorite being my super secret base
            entrance that only opened if I used a password to unlock a door. I,
            then, started developing as hobby on and off which further fed my
            passion.
            <br />
            <br /> In 2018, I decided I wanted to move into the Software
            Engineering career space and self-taught HTML/CSS, Javascript,
            React, SQL, NoSQL, Postgres, and MongoDB. I realized I needed
            experience and set up a grassroot freelance developer role with my
            family and friends. I built project after project, I was commisioned
            by referal for a number of my clients.
            <br />
            <br /> At the beginning of 2022, I took the leap and received my
            Full Stack Immersive Certification from General Assembly to cap off
            my experience. I continue to work in the freelance space but am
            currently looking for a full time permanent position with a
            growth-minded company!
          </p>
        </div>
        <div
          className="display-flex align-cont-center width-100-prct"
          id="highlights"
        >
          <h2 className="underline">Highlights</h2>
          <ul className="highlight-list">
            <li>
              Commissioned by numerous clients to build full-stack applications
              with rave reviews
            </li>
            <li>Expert knowledge in React framework</li>
            <li>
              Firm understanding of both SQL and NoSQL database creation and
              maintainence
            </li>
            <li>Passion for Sass/LESS and responsive design</li>
            <li>Self-driven with a passion for learning all things software</li>
          </ul>
        </div>
      </div>
      <div id="skills-box display-flex just-cont-center align-cont-center">
        <div className="skill-title width-100-prct box-shadow">
          <h2>Frontend</h2>
        </div>

        <div className="skill-item just-cont-center align-cont-center">
          <i className="fa-brands fa-sass fa-2xl skill-icon"></i>{" "}
          <h3 className="underline">Sass</h3>
          <p className="skill-prof just-self-center align-self-center">
            Proficiency: Advanced
          </p>
          <p className="skill-description just-self-center align-self-center">
            I have over 2 years of experience with Sass. It is my preferred CSS
            preprocessor.
          </p>
        </div>
        <div className="skill-item just-cont-center align-cont-center">
          <i className="fa-brands fa-react fa-2xl skill-icon"></i>
          <h3 className="underline"> React </h3>
          <p className="skill-prof just-self-center align-self-center">
            Proficiency: Advanced
          </p>
          <p className="skill-description just-self-center align-self-center">
            I have 4 years of experience with the React framework in web
            development.
          </p>
        </div>
        <div className="skill-title width-100-prct box-shadow">
          <h2>Languages</h2>
        </div>
        <div className="skill-item order2  just-cont-center align-cont-center">
          <i className="fa-brands fa-square-js fa-2xl skill-icon"></i>{" "}
          <h3 className="underline">Vanilla Javascript</h3>
          <p className="skill-prof just-self-center align-self-center">
            Proficiency: Advanced
          </p>
          <p className="skill-description just-self-center align-self-center">
            I have over 4 years of experience with Javascript in web and
            application development.
          </p>
        </div>
        <div className="skill-item just-cont-center align-cont-center">
          <i className="fa-brands fa-python fa-2xl skill-icon"></i>{" "}
          <h3 className="underline">Python</h3>
          <p className="skill-prof just-self-center align-self-center">
            Proficiency: Intermediate
          </p>
          <p className="skill-description just-self-center align-self-center">
            I have 2 years of experience with Python developing commissioned
            applications for clients.
          </p>
        </div>
        <div className="skill-item just-cont-center align-cont-center">
          <div className="double-icon">
            <i className="fa-brands fa-html5 fa-2xl skill-icon"></i>
            <i className="fa-brands fa-css3-alt fa-2xl skill-icon"></i>
          </div>{" "}
          <h3 className="underline">HTML/CSS</h3>
          <p className="skill-prof just-self-center align-self-center">
            Proficiency: Expert
          </p>
          <p className="skill-description just-self-center align-self-center">
            I have over 5 years exdperience with HTML/CSS developing web pages.
          </p>
        </div>
        <div className="skill-title width-100-prct box-shadow">
          <h2>Backend</h2>
        </div>

        <div className="skill-item just-cont-center align-cont-center">
          <i className="fa-solid fa-database fa-2xl skill-icon"></i>{" "}
          <h3 className="underline">MongoDB</h3>
          <p className="skill-prof just-self-center align-self-center">
            {" "}
            Proficiency: Advanced
          </p>
          <p className="skill-description just-self-center align-self-center">
            I have over 3 years of experience with database design and
            implemenation using MongoDB. The majority of my projects use a MERN
            stack.
          </p>
        </div>
        <div className="skill-item just-cont-center align-cont-center">
          <i className="fa-solid fa-database fa-2xl skill-icon"></i>{" "}
          <h3 className="underline">PostgreSQL</h3>
          <p className="skill-prof just-self-center align-self-center">
            Proficiency: Advanced
          </p>
          <p className="skill-description just-self-center align-self-center">
            I have over 3 years of experience with database design and
            implementation using PostgreSQL. It is my preferred technology for
            database creation.
          </p>
        </div>
        <div className="skill-item just-cont-center align-cont-center">
          <i className="fa-brands fa-node fa-2xl skill-icon"></i>{" "}
          <h3 className="underline">Node.js</h3>
          <p className="skill-prof just-self-center align-self-center">
            Proficiency: Intermediate
          </p>
          <p className="skill-description just-self-center align-self-center">
            I have 3 years of experience with Node.js in development of
            full-stack applications.
          </p>
        </div>
      </div>
    </div>
  );
};

const Resume = () => {
  return (
    <div className="comp width-100-prct display-flex just-cont-center align-cont-center">
      <h1 className="resume-title">Resume</h1>
      <div className="divider"></div>
      <div
        className="just-self-center align-self-center width-100-prct display-grid"
        id="resume"
      >
        <div id="resume-container">
          <a
            href="https://docs.google.com/document/d/1hHx4L47Nv9XGzBNxZbou0JdxCDeuJ8AEyK_Cqk5SZIE/edit?usp=sharing"
            target="_blank"
          >
            {" "}
            <img className="resume-img height-100-prct" src={resume} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div
      id="contact"
      className="comp width-100-prct display-flex just-cont-center align-cont-center just-self-center align-self-center"
    >
      <h1 className="contact-title">Contact Me</h1>
      <div className="divider"></div>
      <div className="contact-list width-100-prct height-100-prct display-flex">
        <div className="email-item width-100-prct display-flex just-cont-center align-cont-center">
          <h2 className="marginless" id="email-text">
            chaz.curlee@gmail.com
          </h2>

          <a
            className="web-link just-self-center align-self-center"
            href="mailto:chaz.curlee@gmail.com"
          >
            <i className="fa-solid fa-arrow-up-right-from-square fa-lg"></i>
          </a>
        </div>
        <div className="display-flex just-cont-center" id="icon-list">
          <div
            id="linkedin"
            className="contact-item just-cont-center align-cont-center"
          >
            <a href="https://www.linkedin.com/in/chaz-curlee/" target="_blank">
              <i className="fab fa-linkedin fa-2xl"></i>
            </a>
          </div>
          <div
            id="twitter"
            className="contact-item just-cont-center align-cont-center"
          >
            <a href="https://twitter.com/blank_brow" target="_blank">
              <i className="fab fa-twitter fa-2xl"></i>
            </a>
          </div>
          <div
            id="github"
            className="contact-item just-cont-center align-cont-center"
          >
            <a href="https://github.com/chazcurlee" target="_blank">
              <i className="fab fa-github fa-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Main = (props) => {
  let currentPage = localStorage.getItem("page") || "about";
  const [curPage, setCurPage] = useState(currentPage);
  let [compRender, setCompRender] = useState(<AboutMe />);

  const handleNav = (e) => {
    let id = e.target.id;

    if (id === "about-link") {
      setCompRender(<AboutMe />);
      localStorage.setItem("page", "about");
    }
    if (id === "resume-link") {
      setCompRender(<Resume />);
      localStorage.setItem("page", "resume");
    }
    if (id === "projects-link") {
      setCompRender(<ProjectList />);
      localStorage.setItem("page", "projects");
    }
    if (id === "contact-link") {
      setCompRender(<Contact />);
      localStorage.setItem("page", "contact");
    }
  };

  useEffect(() => {
    if (curPage === "about") {
      setCompRender(<AboutMe />);
    }
    if (curPage === "resume") {
      setCompRender(<Resume />);
    }
    if (curPage === "projects") {
      setCompRender(<ProjectList />);
    }
    if (curPage === "contact") {
      setCompRender(<Contact />);
    }

    window.addEventListener("popstate", () => props.setOpen(""));
  }, []);

  return (
    <div className=" fade-in width-100-vw display-grid just-cont-center align-cont-center main">
      <div className=" just-cont-center align-cont-center just-self-center align-self-center display-grid paddingless hero">
        <div className="name display-flex just-cont-center color-white">
          <div className="namebox">Chaz Curlee</div>
        </div>
        <div className="title color-white">Software Engineer</div>

        <div className=" height-100-prct width-100-prct display-flex just-cont-center align-cont-center just-self-center nav-container">
          <nav className="nav display-grid just-cont-center box-shadow">
            <div id="about-box" onClick={handleNav}>
              <h3 id="about-link" className="link">
                About Me
              </h3>
            </div>

            <div id="resume-box" onClick={handleNav}>
              <h3 id="resume-link" className="link">
                Resume
              </h3>
            </div>

            <div id="projects-box" onClick={handleNav}>
              <h3 id="projects-link" className="link">
                Projects
              </h3>
            </div>

            <div id="contact-box" onClick={handleNav}>
              <h3 id="contact-link" className="link">
                Contact Me
              </h3>
            </div>
          </nav>
        </div>

        <div className="pic width-100-prct align-self-center">
          <MyPic className="pfp" />
        </div>
      </div>

      {compRender}
    </div>
  );
};

export default Main;
