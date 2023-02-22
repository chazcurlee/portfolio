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
    <div className="comp width-100-prct display-flex just-cont-center align-cont-center">
      <h1 className="project-head">Projects</h1>
      <div className="divider"></div>
      <div className="project-item display-grid">
        <div
          id="right-arrow"
          className="clickable"
          onClick={() => handleTick(1)}
        >
          <lord-icon
            src="https://cdn.lordicon.com/zpcieyfp.json"
            trigger="click"
            colors="primary:#ffffff,secondary:#08a88a"
            style={{ width: "5em", height: "5em" }}
          ></lord-icon>
        </div>
        <div
          id="left-arrow"
          className="clickable"
          onClick={() => handleTick(-1)}
        >
          <lord-icon
            src="https://cdn.lordicon.com/onyplpvn.json"
            trigger="click"
            colors="primary:#ffffff,secondary:#08a88a"
            style={{ width: "5em", height: "5em" }}
          ></lord-icon>
        </div>
        <img
          className="project-image width-100-prct"
          src={img[carouselTick]}
        ></img>
        <div className="project-info-box height-100-prct display-grid">
          <h1 className="project-title">{title[carouselTick]}</h1>
          <p className="project-body align-self-center justify-self-center">
            {summ[carouselTick]}
          </p>
          <a
            className="project-dep-link align-self-center just-self-center"
            href={hostLink[carouselTick]}
            target="_blank"
          >
            <i className="fa-solid fa-globe fa-2xl"></i>
          </a>
          <a
            className="project-git-link align-self-center just-self-center"
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
