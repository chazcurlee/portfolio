import projects from "../info/projects";
import { useEffect, useState } from "react";

const ProjectList = () => {
  const title = [...projects.title];
  const summ = [...projects.summary];
  const techno = [...projects.tech];
  const gitLink = [...projects.link.github];
  const hostLink = [...projects.link.host];
  const img = [...projects.image];
  let [carouselTick, setCarouselTick] = useState(0);

  const handleTick = (tick) => {
    const numTick = parseInt(tick);

    if (carouselTick === title.length - 1 && numTick > 0) {
      setCarouselTick(0);
      return;
    }
    if (carouselTick === 0 && numTick < 0) {
      setCarouselTick(title.length - 1);
      return;
    }

    setCarouselTick(carouselTick + numTick);
  };

  return (
    <div className="comp">
      <h1 className="project-head">Projects</h1>
      <div className="divider"></div>
      <div className="project-item">
        <div id="right-arrow" onClick={() => handleTick(1)}>
          <lord-icon
            src="https://cdn.lordicon.com/zpcieyfp.json"
            trigger="click"
            colors="primary:#ffffff,secondary:#08a88a"
            style={{ width: "5em", height: "5em" }}
          ></lord-icon>
        </div>
        <div id="left-arrow" onClick={() => handleTick(-1)}>
          <lord-icon
            src="https://cdn.lordicon.com/onyplpvn.json"
            trigger="click"
            colors="primary:#ffffff,secondary:#08a88a"
            style={{ width: "5em", height: "5em" }}
          ></lord-icon>
        </div>
        <img className="project-image" src={img[carouselTick]}></img>
        <div className="project-info-box">
          <h1 className="project-title">{title[carouselTick]}</h1>
          <p className="project-body">{summ[carouselTick]}</p>
          <a
            className="project-dep-link"
            href={hostLink[carouselTick]}
            target="_blank"
          >
            <i className="fa-solid fa-globe fa-2xl"></i>
          </a>
          <a
            className="project-git-link"
            href={gitLink[carouselTick]}
            target="_blank"
          >
            <i className="fa-brands fa-github fa-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
