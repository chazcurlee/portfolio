import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing = ({ open, setOpen }) => {
  const [arrow, setArrow] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen("entrance");
    setArrow("hidden");
    setTimeout(transition, 1200);
  };

  const transition = () => {
    navigate("/portfolio");
  };

  return (
    <div className={`landing display-grid just-cont-center align-cont-center `}>
      <div className={`middle-box  ${open}`}>
        <BsArrowLeft className={`left-arrow ${arrow}`} />{" "}
        <BsArrowRight className={`right-arrow ${arrow}`} />
        <div className={`open-box ${open}`} onClick={handleClick}>
          <h3 id="intro">You're Next Software Engineer</h3>
        </div>
      </div>
    </div>
  );
};

export default Landing;
